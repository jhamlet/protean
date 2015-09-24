var classify      = require('protean/function/classify');
var Rx            = require('rx');
var Observable    = Rx.Observable;
var ProxiedSource = require('./proxied');
var syntax        = require('protean/falcor/syntax');
var gutil         = require('protean/falcor/graph');
var toArray       = require('lodash/lang/toArray');
var spread        = require('lodash/function/spread');
var get           = require('lodash/object/get');
// lodash likes to turn integer keys into arrays, so we use one that doesn't do
// that
var set           = gutil.set;

/**
 * **File:** [falcor/data-source/composite.js](falcor/data-source/composite.js)
 *
 * @class CompositeSource
 * @implements DataSource
 * @param {...Array<Path,DataSource>} args
 */
function CompositeSource () {
    this.routes = [];
    this.sources = {};
    toArray(arguments).forEach(spread(this.add.bind(this)));
}

module.exports = classify(CompositeSource,/** @lends CompositeSource# */{
    /**
     * @property {Object<Path,CompositeSoure~SourceWrapper>}
     */
    sources: null,
    /**
     * @param {PathSets[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    get: function (paths) {
        var routes = this.routes;
        var sources = this.sources;

        return Observable.
            fromArray(routes).
            map(function (route) { return get(sources, route); }).
            where(function (src) { return src && src.willGet(paths); }).
            flatMap(function (src) { return src.get(paths); }).
            reduce(gutil.mergeEnvelope, {});
    },
    /**
     * @param {JSONGraphEnvelope} envelope
     * @returns {Observable<JSONGraphEnvelope>}
     */
    set: function (envelope) {
        var routes = this.routes;
        var sources = this.sources;

        return Observable.
            fromArray(routes).
            map(function (route) { return get(sources, route); }).
            where(function (src) { return src && src.willSet(envelope); }).
            flatMap(function (src) { return src.set(envelope); }).
            reduce(gutil.mergeEnvelope, {});
    },
    /**
     * @param {Path} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    call: function (path, args, refSuffixes, thisPaths) {
        var routes = this.routes;
        var sources = this.sources;

        return Observable.
            fromArray(routes).
            map(function (route) { return get(sources, route); }).
            where(function (src) { return src && src.willCall(path); }).
            flatMap(function (src) {
                return src.call(path, args, refSuffixes, thisPaths);
            }).
            reduce(gutil.mergeEnvelope, {});
    },
    /**
     * @param {Path} path
     * @param {DataSource} source
     * @returns {CompositeSource} the CompositeSource instance
     */
    add: function (path, source) {
        var routes  = this.routes;
        var sources = this.sources;
        var route   = syntax.fromPath(path);
        var wrapper = get(sources, route);

        if (wrapper) {
            throw new Error(
                'CompositeSource: path \'' +
                JSON.stringify(path) + 
                '\' already exists!'
            );
        }

        set(sources, route, new ProxiedSource({
            root: route,
            source: source
        }));

        routes.push(route);

        return this;
    }
});
