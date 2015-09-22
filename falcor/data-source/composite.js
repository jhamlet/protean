var classify   = require('protean/function/classify');
// var Rx         = require('rx');
// var Observable = Rx.Observable;
// var gutil      = require('protean/falcor/graph');
// var $ref       = gutil.ref;
// var $atom      = gutil.atom;
// var $pv        = gutil.pathValue;
var syntax     = require('protean/falcor/syntax');
var putil      = require('protean/falcor/util');
// var assign     = require('lodash/object/assign');
var get        = require('lodash/object/get');
var set        = require('lodash/object/set');

/**
 * **file:** protean/falcor/data-source/composite.js
 *
 * @class module:Protean.falcor.CompositeSource
 * @implements external:falcor.DataSource
 * @param {...external:falcor.DataSource} datasources
 */
function CompositeSource () {
    this.routes = [];
    this.sources = {};
}

module.exports = classify(CompositeSource,/** @lends module:Protean.falcor.CompositeSource# */{
    /**
     * @param {external:falcor.PathSets[]} paths
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    get: function (paths) {
        var pathTree = putil.toTree(paths);
        return this.router.get(paths);
    },
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
     * @param {external:falcor.Path} path
     * @param {external:falcor.DataSource} source
     * @returns {CompositeSource} the CompositeSource instance
     */
    add: function (path, source) {
        var { sources, routes } = this;
        var route = syntax.fromPath(path);

        if (get(sources, route)) {
            throw new Error(
                'CompositeSource: DataSource for path \'' +
                JSON.stringify(path) + 
                '\' already exists!'
            );
        }

        set(sources, route, { path: route, source: source });
        routes.push(route);

        return this;
    },
    /**
     * @param {external:falcor.Path} path
     * @returns {external:falcor.DataSource}
     */
    getDataSourceWrapper: function (path) {
        return get(this.sources, syntax.fromPath(path));
    },
    /**
     * @param {external:falcor.PathSets} paths
     * @returns {external:Rx.Observable<Object>}
     */
    getDataSources: function (paths) {
        var { sources, routes } = this;
        var pathsLen = paths.length;
        var pathTree = putil.toTree(paths);

        routes.
            // get our available routes than can possibly match
            filter(function (r) { return r.length < paths.length; }).
            // sort those from longest to shortest route
            sort(function (a, b) { return b.length - a.length; }).
            // filter out routes that would not return part of the tree
            filter(function (r) { return get(pathTree, r); }).
            map(function (r) {
                var len = r.length;
                var diff = pathsLen - len;
                var remainder = putil.toPaths(set({}, diff, get(pathTree, r)));

                return [r, get(sources, r).source, remainder];
            }).
            map(function (arg) {
                var route = arg[0];
                var src = arg[1];
                var remainder = arg[2];

                return src.
                    get(remainder).
                    map(function (resp) { return [route, resp]; })
            }).
            reduce(function (envelope, args) {
                var route = args[0];
                var resp = args[1];
                var paths = resp.paths;
                var graph = resp.jsonGraph;
                var invalid = resp.invalidate;
                var routeTree = putil.toTree(
                    set({}, route, putil.toTree(paths))
                );
                var routePaths = putil.toPaths(
                    set(
                        {},
                        route.length + paths.length,
                        routeTree
                    )
                );

                if (!envelope.paths) {
                    envelope.paths = [];
                }
                envelope.paths.push.apply(envelope.paths, routePaths);

                if (!envelope.jsonGraph) {
                    envelope.jsonGraph = {};
                }
                set(envelope.jsonGraph, route, graph);

                if (invalid) {
                    routeTree = putil.toTree(
                        set({}, route, putil.toTree(paths))
                    );
                    routePaths = putil.toPaths(
                        set({}, route.length + invalid.length, putil.toTree(invalid))
                    );
                    envelope.invalidate.push.apply(envelope.invalidate, invalid);
                }

                return envelope;
            }, {});
    },
    /**
     * @param {external:falcor.JSONGraphEnvelope} envelope
     */
    getPathsToDataSources: function (paths) {
    }
});
