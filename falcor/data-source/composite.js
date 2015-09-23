var classify   = require('protean/function/classify');
// var Rx         = require('rx');
// var Observable = Rx.Observable;
// var gutil      = require('protean/falcor/graph');
// var $ref       = gutil.ref;
// var $atom      = gutil.atom;
// var $pv        = gutil.pathValue;
var syntax     = require('protean/falcor/syntax');
var putil      = require('protean/falcor/path');
// var assign     = require('lodash/object/assign');
var get        = require('lodash/object/get');
var set        = require('lodash/object/set');

/**
 * **file:** protean/falcor/data-source/composite.js
 *
 * @class CompositeSource
 * @implements external:DataSource
 * @param {...external:DataSource} datasources
 */
function CompositeSource () {
    this.routes = [];
    this.sources = {};
}

module.exports = classify(CompositeSource,/** @lends CompositeSource# */{
    /**
     * @param {PathSets[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    get: function (paths) {
        var pathTree = putil.toTree(paths);
        return this.router.get(paths);
    },
    /**
     * @param {JSONGraphEnvelope} envelope
     * @returns {Observable<JSONGraphEnvelope>}
     */
    set: function (envelope) { return this.router.set(envelope); },
    /**
     * @param {PathSet} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    call: function (paths, args, refSuffixes, thisPaths) {
        return this.router.call(paths, args, refSuffixes, thisPaths);
    },
    /**
     * @param {Path} path
     * @param {external:DataSource} source
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
     * @param {Path} path
     * @returns {external:DataSource}
     */
    getDataSourceWrapper: function (path) {
        return get(this.sources, syntax.fromPath(path));
    },
    /**
     * @param {PathSets} paths
     * @returns {Observable<Object>}
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
     * @param {JSONGraphEnvelope} envelope
     */
    getPathsToDataSources: function (paths) {
    }
});
