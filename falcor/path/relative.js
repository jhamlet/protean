var putil = require('../path');
var set   = require('protean/falcor/graph/set');
var get   = require('lodash/object/get');
/**
 * **File:** [falcor/path/relative.js](falcor/path/relative.js)
 *
 * @member module:Falcor.Path.relative
 * @function
 * @param {Path} root
 * @param {PathSet[]} paths
 * @returns {PathSet[]}
 */
module.exports = function relative (root, paths) {
    if (!root || !root.length) {
        return paths;
    }

    var pathTree = putil.toTree(paths);

    return putil.toPaths(
        paths.
        reduce(function (acc, cur) {
            return set(
                acc,
                cur.length - root.length,
                get(pathTree, root)
            );
        }, {})
    );
};
