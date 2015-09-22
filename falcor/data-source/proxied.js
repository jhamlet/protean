var classify = require('protean/function/classify');
var falcor   = require('protean/falcor');
var putil    = require('protean/falcor/path');
var gutil    = require('protean/falcor/graph');
var defaults = require('lodash/object/defaults');
var pick     = require('lodash/object/pick');
var ROOT_KEY = require('protean/falcor/syntax/root-key');
var CONFIGURABLE = [
    'preGet',   'preSet',   'preCall',
    'postGet',  'postSet',  'postCall'
];
/**
 * A Falcor DataSource that proxies to another source, re-writing returned paths
 * and values.
 *
 * **file:** protean/falcor/data-source/proxied.js
 *
 * @class module:Protean.falcor.ProxiedSource
 * @implements external:falcor.DataSource
 * @param {Object} [opts]
 * @param {external:falcor.DataSource} [opts.source]
 * @param {external:falcor.Path} [opts.root]
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
    this.rootKey = opts.rootKey || ROOT_KEY;

    defaults(this, pick(opts, CONFIGURABLE));
}

module.exports = classify(ProxiedSource,/** @lends module:Protean.falcor.ProxiedSource# */{
    /**
     * @param {external:falcor.PathSets[]} paths
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    get: function (paths) {
        var source = this.source;
        var preGet = this.preGet;
        var postGet = this.postGet;

        paths = putil.relative(this.root, paths);

        return source.
            get(preGet ? preGet(paths) : paths).
            map(this.adjustEnvelope.bind(this)).
            map(function (envelope) { return postGet ? postGet(envelope) : envelope; });
    },
    /**
     * @param {external:falcor.JSONGraphEnvelope} envelope
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    set: function (envelope) {
        var source = this.source;
        var preSet = this.preSet;
        var postSet = this.postSet;

        envelope = this.stripEnvelope(envelope);

        return source.
            set(preSet ? preSet(envelope) : envelope).
            map(this.adjustEnvelope.bind(this)).
            map(function (envelope) { return postSet ? postSet(envelope) : envelope; });
    },
    /**
     * @param {external:falcor.PathSet} path
     * @param {Array<Mixed>} args
     * @param {external:falcor.PathSet[]} refSuffixes
     * @param {external:falcor.PathSet[]} thisPaths
     * @returns {externa:Rx.Observable<external:falcor.JSONGraphEnvelope>}
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
            map(this.adjustEnvelope.bind(this)).
            map(function (envelope) { return postCall ? postCall(envelope) : envelope; });
    },
    /**
     * Strip our leading path from the envelope's path(s) and jsonGraph object.
     * @param {external:falcor.JSONGraphEnvelope} envelope
     * @returns {external:falcor.JSONGraphEnvelope}
     */
    stripEnvelope: function (envelope) {
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
     * @param {external:falcor.JSONGraphEnvelope} envelope
     * @returns {external:falcor.JSONGraphEnvelope}
     */
    adjustEnvelope: function (envelope) {
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
