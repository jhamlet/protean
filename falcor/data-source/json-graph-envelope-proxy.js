var classify   = require('protean/function/classify');
var toArray    = require('lodash/lang/toArray');
var get        = require('lodash/object/get');
var negate     = require('lodash/function/negate');
var pluck      = require('protean/object/pluck');
var set        = require('protean/falcor/graph/set');
var traverse   = require('protean/object/traverse');
var atoms      = require('protean/falcor/graph/atoms');
var putil      = require('protean/falcor/path');
var LinkedList = require('protean/utility/linked-list');
var pluckFulfilled = pluck('fulfilled');
var pluckPath      = pluck('path');
/**
 * @class JSONGraphEnvelopeProxy
 * @extends {Object}
 */
function JSONGraphEnvelopeProxy () {
    this.paths       = [];
    this.jsonGraph   = {};
    this.invalidated = [];
    this.expecting   = {};
    this.queue       = new LinkedList();

    toArray(arguments).
        forEach(this.merge.bind(this));
}

module.exports = classify(JSONGraphEnvelopeProxy,/** @lends JSONGraphEnvelopeProxy */{
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
     * @property {LinkedList}
     */
    queue: null,
    /**
     * @param {Path|JSONGraph} pathOrGraph
     * @param {Atom} atom
     */
    set: function (pathOrGraph, atom) {
        var path      = Array.isArray(pathOrGraph) && pathOrGraph;
        var graph     = !path && pathOrGraph;
        var fulfill   = this.fulfill.bind(this);

        if (path) {
            fulfill(path, atom);
        }
        else if (graph) {
            atoms(graph, function (path, atom) {
                if (path.length) {
                    fulfill(path, atom);
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
        var queue = this.queue;
        var node = get(this.expecting, path);

        if (node) {
            node.data.fulfilled = true;
            queue.remove(node);
            queue.insert(node, queue.tail);
        }

        this.paths.push(path);
        set(this.jsonGraph, path, value);
    },
    /**
     * Prepare this envelope to expect to fulfill a certain set of paths.
     * @param {PathSet[]} paths
     */
    expect: function (paths) {
        var queue = this.queue;
        var expecting = this.expecting;

        traverse(putil.toTree(paths), function (path, value) {
            if (path.length && value === null) {
                queue.push({
                    path: path,
                    fulfilled: false
                });
                set(expecting, path, queue.tail);
            }
        });
    },
    /**
     * Get a list of paths this envelope is still expecting to fulfill
     * @property {Path[]}
     * @readonly
     */
    get pending () {
        return this.
            queue.
            filter(negate(pluckFulfilled)).
            toArray().
            map(pluckPath);
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
     * @returns {JSONGraphEnvelope}
     */
    valueOf: function () {
        var envelope = {
            paths: putil.collapse(this.paths),
            jsonGraph: this.jsonGraph
        };

        if (this.invalidated.length) {
            envelope.invalidated = putil.collapse(this.invalidated);
        }

        return envelope;
    },
    /**
     * @returns {JSONGraphEnvelope}
     */
    finalize: function () { return this.valueOf(); }
});

