var putil = require('../path');
var set   = require('lodash/object/set');
var get   = require('lodash/object/get');
/**
 * @member Path.relative
 * @function
 * @param {Path} root
 * @param {PathSet[]} paths
 * @returns {PathSet[]}
 */
module.exports = function relative (root, paths) {
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
