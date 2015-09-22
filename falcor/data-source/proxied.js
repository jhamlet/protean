var classify = require('protean/function/classify');
var falcor   = require('protean/falcor');
var putil    = require('protean/falcor/util');
var defaults = require('lodash/object/defaults');
var pick     = require('lodash/object/pick');
var set      = require('lodash/object/set');
var get      = require('lodash/object/get');
var traverse = require('protean/object/traverse');
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

        paths = this.stripPaths(paths);

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

        path = this.stripPaths([path])[0];

        var observable = preCall ?
                source.call.apply(source, preCall(path, args, refSuffixes, thisPaths))
                :
                source.call(path, args, refSuffixes, thisPaths);

        return observable.
            map(this.adjustEnvelope.bind(this)).
            map(function (envelope) { return postCall ? postCall(envelope) : envelope; });
    },
    /**
     * Strip our leading path from the path(s) given.
     * @param {external:falcor.PathSets} paths
     * @returns {external:falcor.PathSets}
     */
    stripPaths: function (paths) {
        var root = this.root;
        var pathTree = putil.toTree(paths);

        return putil.toPaths(
            paths.
            reduce(function (acc, cur) {
                return set(acc, cur.length - root.length, get(pathTree, root));
            }, {})
        );
    },
    /**
     * @param {external:falcor.JSONGraph} graph
     * @returns {external:falcor.JSONGraph}
     */
    stripGraph: function (graph) {
        var output = {};

        traverse(graph, function (path, value) {
            var local = this.stripPaths(path);
            set(output, local, value);
        }.bind(this));

        return output;
    },
    /**
     * Strip our leading path from the envelope's path(s) and jsonGraph object.
     * @param {external:falcor.JSONGraphEnvelope} envelope
     * @returns {external:falcor.JSONGraphEnvelope}
     */
    stripEnvelope: function (envelope) {
        var paths = envelope.paths;
        var graph = envelope.jsonGraph;

        envelope.paths = this.stripPaths(paths);
        envelope.jsonGraph = this.stripGraph(graph);

        return envelope;
    },
    /**
     * Adjust the given paths with our leading path information.
     * @param {external:falcor.PathSets} paths
     * @returns {external:falcor.PathSets}
     */
    adjustPaths: function (paths) {
        var root = this.root;
        var rootKey = this.rootKey;
        var pathTree = putil.toTree(paths);
        var output = [];

        traverse(pathTree, function (path, value) {
            if (value !== null) {
                return traverse.CONTINUE;
            }

            var idx = path.indexOf(rootKey);

            if (~idx) {
                path.splice(0, idx + 1)
            }
            else {
                path.splice.apply(path, [0, 0].concat(root));
            }

            output.push(path);
        });

        return putil.collapse(output);
    },
    /**
     * Update the graph to reflect our root path and update any reference values
     * @param {external:falcor.JSONGraph} graph
     * @returns {external:falcor.JSONGraph}
     */
    adjustGraph: function (graph) {
        var output = {};

        traverse(graph, function (path, value) {
            if (path.length) {
                var local = this.adjustPaths([path])[0];
                set(output, local, value);

                if (value.$type && value.$type === 'ref') {
                    value.value = this.adjustPaths([value.value])[0];
                }
            }
        }.bind(this));

        return output;
    },
    /**
     * Adjust the JSONGraphEnvelope to reflect our leading path information.
     * @param {external:falcor.JSONGraphEnvelope} envelope
     * @returns {external:falcor.JSONGraphEnvelope}
     */
    adjustEnvelope: function (envelope) {
        var paths = envelope.paths;
        var graph = envelope.jsonGraph;
        var invalid = envelope.invalidated;

        paths && (envelope.paths = this.adjustPaths(paths));
        envelope.jsonGraph = this.adjustGraph(graph);
        invalid && (envelope.invalidated = this.adjustPaths(invalid));

        return envelope;
    }
});
