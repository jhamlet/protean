var Router     = require('falcor-router');
var classify   = require('protean/function/classify');
var Collection = require('protean/utility/collection');
var Rx         = require('rx');
var Observable = Rx.Observable;
var gutil      = require('falcor-json-graph');
var $ref       = gutil.ref;
var $atom      = gutil.atom;
var $pv        = gutil.pathValue;
var isSentinel = require('protean/falcor/graph/is-sentinel');
var traverse   = require('protean/object/traverse');
var defaults   = require('lodash/object/defaults');
var get        = require('lodash/object/get');
var spread     = require('lodash/function/spread');
var isArray    = Array.isArray;

/**
 * **file:** [falcor/data-source/collection.js](falcor/data-source/collection.js)
 *
 * @class CollectionSource
 * @extends ProteanClass
 * @implements DataSource
 * @param {Collection} [collection]
 * @param {Object} [opts]
 * @param {Path} [opts.indexedPath=['byIndex']]
 * @param {Path} [opts.keyedPath=['byId']]
 */
function CollectionSource (collection, opts) {
    if (!(collection instanceof Collection)) {
        opts = collection;
        collection = new Collection();
    }

    opts = this.options = defaults({}, opts || {}, this.options);
    this.collection = collection;
}

module.exports = classify(CollectionSource,/** @lends CollectionSource# */{
    /**
     * Default options
     * @property {Object}
     */
    options: {
        /**
         * @property {Path}
         */
        indexedPath: ['byIndex'],
        /**
         * @property {Path}
         */
        keyedPath: ['byId'],
        /**
         * @property {Path}
         */
        lengthPath: ['length'],
        /**
         * @property {Path}
         */
        addPath: ['add'],
        /**
         * @property {Path}
         */
        removePath: ['remove']
    },
    /**
     * @property {external:FalcorRouter}
     * @see {@link http://netflix.github.io/falcor/documentation/router.html}
     */
    get router () {
        var router = new (Router.createClass(this.routes));
        Object.defineProperty(this, 'router', { value: router });
        return router;
    },
    /**
     * @property {Array<Object>}
     */
    get routes () {
        var opts        = this.options;
        var indexedPath = opts.indexedPath;
        var keyedPath   = opts.keyedPath;
        var indexed     = indexedPath.join('.');
        var keyed       = keyedPath.join('.');

        var routes = [
            {
                route: keyed + '[{keys:ids}][{keys:props}]',
                get: this.getRecordProps.bind(this),
                set: this.setRecordProps.bind(this)
            },
            {
                route: opts.lengthPath.join('.'),
                get: this.getLength.bind(this)
            },
            {
                route: indexed + '[{integers:indices}]',
                get: this.getRecordByIndex.bind(this)
            },
            {
                route: opts.addPath.join('.'),
                call: this.addRecord.bind(this)
            },
            {
                route: opts.removePath.join('.'),
                call: this.removeRecord.bind(this)
            }
        ];

        Object.defineProperty(this, 'routes', { value: routes });

        return routes;
    },
    /**
     * @param {PathSet[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    get: function (paths) {
        return this.router.get(paths);
    },
    /**
     * @param {JSONGraphEnvelope} envelope
     * @returns {Observable<JSONGraphEnvelope>}
     */
    set: function (envelope) { return this.router.set(envelope); },
    /**
     * @param {PathSet} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    call: function (paths, args, refSuffixes, thisPaths) {
        return this.router.call(paths, args, refSuffixes, thisPaths);
    },
    /**
     * @returns {Observable<JSONGraphEnvelope>}
     */
    getLength: function () {
        var len = this.collection.length;
        var path = this.options.lengthPath;
        return Observable.return($pv(path, $atom(len)));
    },
    /**
     * @param {PathSets[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    getRecordByIndex: function (pathset) {
        var collection = this.collection;
        var opts       = this.options;
        var indexed    = opts.indexedPath;
        var keyed      = opts.keyedPath;

        return Observable.
            fromArray(pathset.indices).
            select(function (idx) {
                var record = collection.at(idx);
                var path = indexed.concat([idx]);
                var ref = $ref(keyed.concat([record.get(collection.idKey)]));

                return $pv(path, ref);
            });
    },
    /**
     * @param {PathSets[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    getRecordProps: function (pathset) {
        var collection = this.collection;
        var keyed      = this.options.keyedPath;
        var ids        = pathset.ids;
        var props      = pathset.props;

        return Observable.
            fromArray(ids).
            flatMap(function (id) {
                var record = collection.get(id);

                return record ?
                    Observable.
                    fromArray(props).
                        where(record.has.bind(record)).
                        select(function (prop) {
                            var path   = keyed.concat([id, prop]);
                            var value  = record.get(prop);
                            var node   = Array.isArray(value) ?
                                    $ref(value) :
                                    !isSentinel(value) ?
                                        $atom(value) :
                                        value;

                            return $pv(path, node);
                        })
                    :
                    Observable.empty()
            });
    },
    /**
     * @param {JSONGraph} graph
     * @returns {Observable<JSONGraphEnvelope>}
     */
    setRecordProps: function (graph) {
        var collection = this.collection;
        var keyedPath  = this.options.keyedPath;
        var context    = get(graph, keyedPath);

        return Observable.
            create(function (observer) {
                var disposed = false;

                traverse(context, function (path, value) {
                    if (disposed) {
                        return traverse.BREAK;
                    }
                    if (path.length && typeof value !== 'object') {
                        observer.onNext([path, value]);
                        return traverse.SKIP;
                    }
                });

                if (!disposed) {
                    observer.onCompleted();
                }

                return Rx.Disposable.create(function () { disposed = true; });
            }).
            map(function (args) {
                var path    = args[0];
                var value   = args[1];
                var id      = path[0];
                var prop    = path[1];
                var record  = collection.get(id);
                var result;

                if (!isArray(record.get(prop))) {
                    record.set(prop, value);
                    result = $pv(keyedPath.concat(path), $atom(value));
                }

                return result;
            });
    },
    /**
     * @param {PathSet} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    addRecord: function (path, args/*, refSuffixes, thisPaths*/) {
        var data      = args[0];
        var record    = this.collection.add(data);
        var keyedPath = this.options.keyedPath;

        return Observable.
            fromArray(
                record.
                keys.
                map(function (key) {
                    var value = record.get(key);
                    var path = keyedPath.concat([key]);
                    var atom = Array.isArray(value) ? $ref(value) : $atom(value);

                    return [path, atom];
                })
            ).
            map(spread($pv)).
            concat(this.getLength());
    },
    /**
     * @param {PathSet} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    removeRecord: function (path, args/*, refSuffixes, thisPaths*/) {
        var opts        = this.options;
        var collection  = this.collection;
        var idOrIndex   = args[0];
        var method      = collection.has(idOrIndex) ? 'remove' : 'removeAt';
        var record      = collection[method](idOrIndex);
        var indexedPath = opts.indexedPath;
        var keyedPath   = opts.keyedPath;
        var lengthPath  = indexedPath.concat(['length']);
        var response    = Observable.empty();
        var id;

        if (record) {
            id = record.get(collection.idKey);
            response =
                Observable.
                from(record.keys).
                map(function (key) {
                    return gutil.pathInvalidation(keyedPath.concat([id, key]));
                }).
                concat(Observable.return($pv(lengthPath, $atom(collection.length))));

        }

        return response;
    }
});
