var classify  = require('protean/function/classify');
var bindAll   = require('lodash/function/bindAll');
var keys      = require('lodash/object/keys');
var set       = require('protean/falcor/graph/set');
var traverse  = require('protean/object/traverse');
var sentinels = require('protean/falcor/graph/sentinels');
var putil     = require('falcor-path-utils');
var syntax    = require('falcor-path-syntax');
var relativePaths = require('protean/falcor/path/relative');
var resolvePaths = require('protean/falcor/path/resolve');
var relativeGraph = require('protean/falcor/graph/relative');
var resolveGraph = require('protean/falcor/graph/resolve');
/**
 * @class JSONGraphEnvelopeProxy
 * @extends ProteanClass
 * @implements JSONGraphEnevelope
 * @param {Object} [opts]
 * @param {PathSet[]} [opts.expect] Paths to expect
 * @param {PathSet[]} [opts.paths] A starting set of paths
 * @param {JSONGraph} [opts.jsonGraph] A starting JSONGraph
 * @param {PathSet[]} [opts.invalidated] A starting set of paths to invalidate
 */
function JSONGraphEnvelopeProxy (opts) {
    opts = opts || {};

    if (opts instanceof JSONGraphEnvelopeProxy) {
        return opts;
    }

    this.paths       = opts.paths || [];
    this.jsonGraph   = opts.jsonGraph || {};
    this.invalidated = opts.invalidated || [];
    this.expecting   = {};

    bindAll(this);

    if (opts.expect) {
        this.expect(opts.expect);
    }
}

module.exports = classify(JSONGraphEnvelopeProxy,/** @lends JSONGraphEnvelopeProxy# */{
    /**
     * @property {PathSet[]}
     */
    paths: null,
    /**
     * @property {JSONGraph}
     */
    jsonGraph: null,
    /**
     * @property {PathSet[]}
     */
    invalidated: null,
    /**
     * @property {Object}
     */
    expecting: null,
    /**
     * @param {Path|JSONGraph} pathOrGraph
     * @param {Atom} [atom]
     */
    set: function (pathOrGraph, atom) {
        var path      = Array.isArray(pathOrGraph) && pathOrGraph;
        var graph     = !path && pathOrGraph;
        var fulfill   = this.fulfill;

        if (path) {
            fulfill(path, atom);
        }
        else if (graph) {
            sentinels(graph, function (path, sentinel) {
                if (path.length) {
                    fulfill(path, sentinel);
                }
            });
        }
    },
    /**
     * @param {...Path} path
     */
    invalidate: function () {
        this.invalidated.push.apply(this.invalidated, arguments);
    },
    /**
     * Mark a path as fulfilled and set the given value on our jsonGraph
     * @param {Path} path
     */
    fulfill: function (path, value) {
        var key = path.join('.');
        var node = this.expecting[key];

        if (node) {
            delete this.expecting[key];
        }

        this.paths.push(path);
        set(this.jsonGraph, path, value);
    },
    /**
     * Prepare this envelope to expect to fulfill a certain set of paths.
     * @param {PathSet[]} paths
     */
    expect: function (paths) {
        var expecting = this.expecting;

        traverse(putil.toTree(paths), function (path, value) {
            if (path.length && value === null) {
                expecting[path.join('.')] = path;
            }
        });
    },
    /**
     * @param {Path} from
     * @returns {JSONGraphEnvelopeProxy} A copy
     */
    relativeFrom: function (from) {
        var copy = this.clone();

        copy.paths = relativePaths(from, copy.paths);
        copy.jsonGraph = relativeGraph(from, copy.jsonGraph);

        if (copy.invalidated) {
            copy.invalidated = relativePaths(from, copy.invalidated);
        }

        return copy;
    },
    /**
     * @param {Path} from
     * @returns {JSONGraphEnvelopeProxy} A copy
     */
    resolvedFrom: function (from) {
        var copy = this.clone();

        copy.paths = resolvePaths(from, copy.paths);
        copy.jsonGraph = resolveGraph(from, copy.jsonGraph);

        if (copy.invalidated) {
            copy.invalidated = resolvePaths(from, copy.invalidated);
        }

        return copy;
    },
    /**
     * Get a list of paths this envelope is still expecting to fulfill
     * @property {Path[]}
     * @readonly
     */
    get pending () {
        return keys(this.expecting).
            map(syntax.fromPath);
    },
    /**
     * Merge another JSONGraphEnvelope into this one
     * @param {JSONGraphEnvelopeProxy|JSONGraphEnvelope} other
     */
    merge: function (other) {
        if (other.jsonGraph) {
            this.set(other.jsonGraph);
        }

        if (other.paths) {
            this.paths.push.apply(this.paths, other.paths);
        }

        if (other.invalidated) {
            this.invalidated.push.apply(this.invalidated, other.paths);
        }
    },
    /**
     * Clear out our data so we do not have any dangling memory.
     */
    destroy: function () {
        this.paths =
            this.jsonGraph =
            this.invalidated =
            this.expecting = null;
    },
    /**
     * Get a copy of this proxy
     * @returns {JSONGraphEnvelopeProxy}
     */
    clone: function () {
        var copy = new JSONGraphEnvelopeProxy(this.valueOf());
        var expecting = this.expecting;

        keys(expecting).
            reduce(function (acc, cur) {
                acc[cur] = expecting[cur].slice();
                return acc;
            }, copy.expecting);

        return copy;
    },
    /**
     * @returns {JSONGraphEnvelope}
     */
    valueOf: function () {
        var envelope = { jsonGraph: this.jsonGraph };

        if (this.paths.length) {
            envelope.paths = putil.collapse(this.paths);
        }

        if (this.invalidated.length) {
            envelope.invalidated = putil.collapse(this.invalidated);
        }

        return envelope;
    },
    /**
     * @returns {JSONGraphEnvelope}
     */
    finalize: function () {
        var envelope = this.valueOf();
        this.destroy();
        return envelope;
    }
});

