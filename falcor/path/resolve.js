/**
 * **File:** [falcor/path/resolve.js](falcor/path/resolve.js)
 *
 * @member module:Falcor.Path.resolve
 * @function
 * @param {Path} root
 * @param {PathSet[]} paths
 * @returns {PathSet[]}
 */
module.exports = function resolve (root, paths) {
    return paths.
        reduce(function (acc, cur) {
            acc.push(root.concat(cur));
            return acc;
        }, []);
};
