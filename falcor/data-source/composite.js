var classify      = require('protean/function/classify');
var Rx            = require('rx');
var Observable    = Rx.Observable;
var ProxiedSource = require('./proxied');
var syntax        = require('falcor-path-syntax');
var toArray       = require('lodash/lang/toArray');
var spread        = require('lodash/function/spread');
var get           = require('lodash/object/get');
var set           = require('protean/falcor/graph/set');
var EnvelopeProxy = require('./json-graph-envelope-proxy');

/**
 * A [DataSource] that allows for composing several different [DataSource]s
 * together through different [Path]s.
 *
 * This allows individual [DataSource]s to be constructed, used, and tested in
 * their own domain. Then later you can compose them into a larger [Graph].
 *
 * The CompositeSource manages the re-writing of [Path]s and the resulting
 * [Graph] so it appears that everything comes from a larger [Graph].
 *
 * Basically, all returned [Path]s/[Graph]s are updated to have any references
 * relative to their [Path]s in the CompositeSource.
 *
 * As a result, there was a need to create a new [Falcor] data type to express
 * when a sub [DataSource] wanted to reference another part of the larger
 * [Graph]. [RootReference](#RootReference) represents a [Reference] in the
 * [Graph] that should not be kept local to the underlying [DataSource], but
 * should be interpreted from the root of the CompositeSource.
 *
 * **File:** [falcor/data-source/composite.js](falcor/data-source/composite.js)
 *
 * [Falcor]:      http://netflix.github.io/falcor/doc/DataSource.html                     "Falcor"
 * [DataSource]:  http://netflix.github.io/falcor/doc/DataSource.html                     "DataSource"
 * [Path]:        http://netflix.github.io/falcor/doc/global.html#Path                    "Path"
 * [Graph]:       http://netflix.github.io/falcor/documentation/jsongraph.html            "Graph"
 * [Reference]:   http://netflix.github.io/falcor/documentation/jsongraph.html#reference  "Reference"
 *
 * @class CompositeSource
 * @extends ProteanClass
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
     * @property {Object<Path,ProxiedSource>}
     */
    sources: null,
    /**
     * @param {PathSets[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    get: function (paths) {
        var routes = this.routes;
        var sources = this.sources;
        var proxyEnvelope = new EnvelopeProxy();

        return Observable.
            fromArray(routes).
            // find our proxied data sources
            map(function (route) { return get(sources, route); }).
            // see if they will act on any of the paths we are about to give
            // them
            where(function (src) { return src && src.willGet(paths); }).
            // If they do, hand them all paths, they will return their section
            // of the underlying JSONGraph
            flatMap(function (src) { return src.get(paths); }).
            // Where we merge it all together
            map(proxyEnvelope.merge).
            takeLast(1).
            map(proxyEnvelope.finalize);
    },
    /**
     * @param {JSONGraphEnvelope} envelope
     * @returns {Observable<JSONGraphEnvelope>}
     */
    set: function (envelope) {
        var routes = this.routes;
        var sources = this.sources;
        var proxyEnvelope = new EnvelopeProxy();

        return Observable.
            fromArray(routes).
            map(function (route) { return get(sources, route); }).
            where(function (src) { return src && src.willSet(envelope); }).
            flatMap(function (src) { return src.set(envelope); }).
            map(proxyEnvelope.merge).
            takeLast(1).
            map(proxyEnvelope.finalize);
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
        var proxyEnvelope = new EnvelopeProxy();

        return Observable.
            fromArray(routes).
            map(function (route) { return get(sources, route); }).
            where(function (src) { return src && src.willCall(path); }).
            flatMap(function (src) {
                return src.call(path, args, refSuffixes, thisPaths);
            }).
            map(proxyEnvelope.merge).
            takeLast(1).
            map(proxyEnvelope.finalize);
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
