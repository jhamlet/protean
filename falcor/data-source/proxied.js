var classify = require('protean/function/classify');
var falcor   = require('falcor');
var putil    = require('protean/falcor/path');
var gutil    = require('protean/falcor/graph');
var defaults = require('lodash/object/defaults');
var pick     = require('lodash/object/pick');
var ROOT_KEY = require('protean/falcor/syntax/root-key');
var CONFIGURABLES = [
    'preGet',   'preSet',   'preCall',
    'postGet',  'postSet',  'postCall'
];
/**
 * A Falcor DataSource that proxies to another source, re-writing the returned
 * paths, and the paths to the atom values within the JSONGraph.
 *
 * **File:** [falcor/data-source/proxied.js](falcor/data-source/proxied.js)
 *
 * @class ProxiedSource
 * @implements DataSource
 * @param {Object} [opts]
 * @param {DataSource} [opts.source]
 * @param {Path} [opts.root]
 * @param {String} [opts.rootKey] The 'fake' path key that denotes a path that
 * should start at the conceptual root. i.e: do not strip or adjust, just drop
 * the root key.
 * @param {Function} [opts.preGet]
 * @param {Function} [opts.preSet]
 * @param {Function} [opts.preCall]
 * @param {Function} [opts.postGet]
 * @param {Function} [opts.postSet]
 * @param {Function} [opts.postCall]
 */
function ProxiedSource (opts) {
    opts = opts || {};

    this.source = opts.source || new falcor.Model().asDataSource();
    this.root = opts.root || [];
    this.rootKey = opts.rootKey;

    defaults(this, pick(opts, CONFIGURABLES));
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
     * @property {String}
     * @default '{/}'
     */
    rootKey: ROOT_KEY,
    /**
     * @property {Function}
     */
    preGet: null,
    /**
     * @property {Function}
     */
    postGet: null,
    /**
     * @property {Function}
     */
    preSet: null,
    /**
     * @property {Function}
     */
    postSet: null,
    /**
     * @property {Function}
     */
    preCall: null,
    /**
     * @property {Function}
     */
    postCall: null,
    /**
     * @param {PathSets[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    get: function (paths) {
        var source = this.source;
        var preGet = this.preGet;
        var postGet = this.postGet;

        paths = putil.relative(this.root, paths);

        return source.
            get(preGet ? preGet(paths) : paths).
            map(this.getResolvedEnvelope.bind(this)).
            map(function (envelope) { return postGet ? postGet(envelope) : envelope; });
    },
    /**
     * @param {JSONGraphEnvelope} envelope
     * @returns {Observable<JSONGraphEnvelope>}
     */
    set: function (envelope) {
        var source = this.source;
        var preSet = this.preSet;
        var postSet = this.postSet;

        envelope = this.getRelativeEnvelope(envelope);

        return source.
            set(preSet ? preSet(envelope) : envelope).
            map(this.getResolvedEnvelope.bind(this)).
            map(function (envelope) { return postSet ? postSet(envelope) : envelope; });
    },
    /**
     * @param {PathSet} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    call: function (path, args, refSuffixes, thisPaths) {
        var source = this.source;
        var preCall = this.preCall;
        var postCall = this.postCall;

        path = putil.relative(this.root, [path])[0];

        var observable = preCall ?
                source.call.apply(source, preCall(path, args, refSuffixes, thisPaths))
                :
                source.call(path, args, refSuffixes, thisPaths);

        return observable.
            map(this.getResolvedEnvelope.bind(this)).
            map(function (envelope) { return postCall ? postCall(envelope) : envelope; });
    },
    /**
     * Will the given paths be consumed by a get request against this
     * datasource?
     * @param {PathSet[]} paths
     * @returns {Boolean}
     */
    willGet: function (paths) {
        var rel = putil.relative(this.root, paths);
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
            gutil.atoms(envelope.jsonGraph, function (path) {
                path.length && paths.push(path);
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
        if (envelope.paths) {
            envelope.paths = putil.relative(this.root, envelope.paths);
        }

        if (envelope.jsonGraph) {
            envelope.jsonGraph = gutil.relative(this.root, envelope.jsongGraph);
        }

        return envelope;
    },
    /**
     * Adjust the JSONGraphEnvelope to reflect our leading path information.
     * @param {JSONGraphEnvelope} envelope
     * @returns {JSONGraphEnvelope}
     */
    getResolvedEnvelope: function (envelope) {
        var root = this.root;
        var gopts = { rootKey: this.rootKey };

        if (envelope.paths) {
            envelope.paths = putil.resolve(root, envelope.paths, gopts);
        }

        if (envelope.jsonGraph) {
            envelope.jsonGraph =
                gutil.resolve(root, envelope.jsonGraph, gopts);
        }

        if (envelope.invalidated) {
            envelope.invalidated =
                putil.resolve(root, envelope.invalidated, gopts);
        }

        return envelope;
    }
});
