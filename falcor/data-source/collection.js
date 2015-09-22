var Router     = require('protean/falcor/router');
var classify   = require('protean/function/classify');
var Collection = require('protean/utility/collection');
var Rx         = require('rx');
var Observable = Rx.Observable;
var gutil      = require('protean/falcor/graph');
var putil      = require('protean/falcor/util');
var $ref       = gutil.ref;
var $atom      = gutil.atom;
var $pv        = gutil.pathValue;
var keys       = require('lodash/object/keys');
var get        = require('lodash/object/get');
var set        = require('lodash/object/set');
var isArray    = Array.isArray;

/**
 * **file:** protean/falcor/data-source/collection.js
 *
 * @class module:Protean.falcor.CollectionSource
 * @implements external:falcor.DataSource
 * @param {module:Protean.Collection} collection
 * @param {Array} [path]
 */
function CollectionSource (collection, path) {
    if (arguments.length === 1 && !(collection instanceof Collection)) {
        path = collection;
        collection = new Collection();
    }

    path = path || [];

    this.collection  = collection;
    this.path        = path;
    this.indexedPath = path.concat(['byIndex']);
    this.keyedPath   = path.concat(['byId']);
}

module.exports = classify(CollectionSource,/** @lends module:Protean.falcor.CollectionSource# */{
    /**
     * @property {external:falcor.Router}
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
        var indexed = this.indexedPath.join('.');
        var keyed   = this.keyedPath.join('.');

        var routes = [
            {
                route: keyed + '[{keys:ids}][{keys:props}]',
                get: this.getRecordProps.bind(this),
                set: this.setRecordProps.bind(this)
            },
            {
                route: indexed + '.length',
                get: this.getLength.bind(this)
            },
            {
                route: indexed + '[{integers:indices}]',
                get: this.getRecordByIndex.bind(this)
            },
            {
                route: indexed + '.add',
                call: this.addRecord.bind(this)
            }
        ];

        Object.defineProperty(this, 'routes', { value: routes });

        return routes;
    },
    /**
     * @param {external:falcor.PathSets[]} paths
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    get: function (paths) { return this.router.get(paths); },
    /**
     * @param {external:falcor.JSONGraphEnvelope} envelope
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    set: function (envelope) { return this.router.set(envelope); },
    /**
     * @param {external:falcor.PathSet} path
     * @param {Array<Mixed>} args
     * @param {external:falcor.PathSet[]} refSuffixes
     * @param {external:falcor.PathSet[]} thisPaths
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    call: function (paths, args, refSuffixes, thisPaths) {
        return this.router.call(paths, args, refSuffixes, thisPaths);
    },
    /**
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    getLength: function () {
        var len = this.collection.length;
        var path = this.indexedPath.concat(['length']);
        return Observable.return($pv(path, $atom(len)));
    },
    /**
     * @param {external:falcor.PathSets[]} paths
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    getRecordByIndex: function (pathset) {
        var collection = this.collection;
        var indexed    = this.indexedPath;
        var keyed      = this.keyedPath;

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
     * @param {external:falcor.PathSets[]} paths
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    getRecordProps: function (pathset) {
        var collection = this.collection;
        var keyed      = this.keyedPath;
        var ids        = pathset.ids;
        var props      = pathset.props;

        return Observable.
            fromArray(ids).
            flatMap(function (id) {
                var record = collection.get(id);

                return record ?
                    Rx.Observable.
                    fromArray(props).
                        where(record.has.bind(record)).
                        select(function (prop) {
                            var path   = keyed.concat([id, prop]);
                            var value  = record.get(prop);
                            var node   = Array.isArray(value) ?
                                    $ref(value) :
                                    $atom(value);
                                    
                            return $pv(path, node);
                        })
                    :
                    Rx.Observable.empty()
            });
    },

    setRecordProps: function (tree) {
        var collection = this.collection;
        var path = this.keyedPath;
        var ctx = get(tree, path);

        return Rx.Observable.
            fromArray(keys(ctx)).
            flatMap(function (id) {
                var obj = ctx[id];
                var props = keys(obj);
                var record = collection.get(id);

                return Rx.Observable.
                    fromArray(props).
                    select(function (prop) {
                        var value = obj[prop];
                        record.set(prop, value);

                        return [
                            path.concat([id, prop]),
                            isArray(value) ? $ref(value) : $atom(value)
                        ];
                    });
            }).
            reduce(function (envelope, pv) {
                var path = pv[0];
                var value = pv[1];
                var paths = envelope.paths;
                var graph = envelope.jsonGraph;

                paths.push(path);
                set(graph, path, value);

                return envelope;
            }, { paths: [], jsonGraph: [] }).
            map(function (jsonEnvelope) {
                jsonEnvelope.paths = putil.collapse(jsonEnvelope.paths);
                return jsonEnvelope;
            });
    },

    addRecord: function () {
    },
});