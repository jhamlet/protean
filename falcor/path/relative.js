var putil = require('../path');
var set      = require('lodash/object/set');
var get      = require('lodash/object/get');
/**
 * @member module:Protean.falcor.path.relative
 * @function
 * @param {external:falcor.Path} root
 * @param {external:falcor.PathSets} paths
 * @returns {external:falcor.PathSets}
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
