var classify      = require('protean/function/classify');
var falcor        = require('falcor');
var relativePath  = require('protean/falcor/path/relative');
var gutil         = require('protean/falcor/graph');
var EnvelopeProxy = require('protean/falcor/data-source/json-graph-envelope-proxy');
/**
 * A Falcor DataSource that proxies to another source, re-writing the returned
 * paths, and the paths to the values within the JSONGraph.
 *
 * **File:** [falcor/data-source/proxied.js](falcor/data-source/proxied.js)
 *
 * @class ProxiedSource
 * @extends ProteanClass
 * @implements DataSource
 * @param {Object} [opts]
 * @param {DataSource} [opts.source]
 * @param {Path} [opts.root]
 */
function ProxiedSource (opts) {
    opts = opts || {};

    this.source = opts.source || new falcor.Model().asDataSource();
    this.root = opts.root || [];
}

module.exports = classify(ProxiedSource,/** @lends ProxiedSource# */{
    /**
     * @property {DataSource}
     */
    source: null,
    /**
     * @property {Path}
     */
    root: null,
    /**
     * @param {PathSets[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    get: function (paths) {
        return this.
            source.
            get(relativePath(this.root, paths)).
            map(this.getResolvedEnvelope.bind(this));
    },
    /**
     * @param {JSONGraphEnvelope} envelope
     * @returns {Observable<JSONGraphEnvelope>}
     */
    set: function (envelope) {
        return this.
            source.
            set(this.getRelativeEnvelope(envelope)).
            map(this.getResolvedEnvelope.bind(this));
    },
    /**
     * @param {PathSet} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    call: function (path, args, refSuffixes, thisPaths) {
        return this.
            source.
            call(relativePath(this.root, [path])[0], args, refSuffixes, thisPaths).
            map(this.getResolvedEnvelope.bind(this));
    },
    /**
     * Will the given paths be consumed by a get request against this
     * datasource?
     * @param {PathSet[]} paths
     * @returns {Boolean}
     */
    willGet: function (paths) {
        var rel = relativePath(this.root, paths);
        return !!rel.length;
    },
    /**
     * Will the given JSONGraphEnvelope be consumed by a set request against
     * this datasource?
     * @param {JSONGraphEnvelope} envelope
     * @returns {Boolean}
     */
    willSet: function (envelope) {
        var paths = envelope.paths;

        if (!paths && envelope.jsonGraph) {
            paths = [];
            gutil.sentinels(envelope.jsonGraph, function (path) {
                paths.push(path);
            });
        }

        return this.willGet(paths);
    },
    /**
     * Will the given path be consumed by a call request against this
     * datasource?
     * @param {Path} path
     * @returns {Boolean}
     */
    willCall: function (path) {
        return this.willGet([path]);
    },
    /**
     * Strip our leading path from the envelope's path(s) and jsonGraph object.
     * @param {JSONGraphEnvelope} envelope
     * @returns {JSONGraphEnvelope}
     */
    getRelativeEnvelope: function (envelope) {
        return new EnvelopeProxy(envelope).
            relativeFrom(this.root).
            finalize();
    },
    /**
     * Adjust the JSONGraphEnvelope to reflect our leading path information.
     * @param {JSONGraphEnvelope} envelope
     * @returns {JSONGraphEnvelope}
     */
    getResolvedEnvelope: function (envelope) {
        return new EnvelopeProxy(envelope).
            resolvedFrom(this.root).
            finalize();
    }
});
