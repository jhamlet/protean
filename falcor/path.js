var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @external falcor.Paths
 * @see {@link https://github.com/Netflix/falcor-path-utils}
 */
/**
 * @name Paths
 * @augments external:falcor.Paths
 */
exports = module.exports = require('falcor-path-utils');

reduce([
    require('./path/relative'),
    require('./path/resolve')
], merge, exports);

/**
 * @typedef Key
 * @implements external:falcor.Paths.Key
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Key}
 */

/**
 * @typedef KeySet
 * @implements external:falcor.Paths.KeySet
 * @see {@link http://netflix.github.io/falcor/doc/global.html#KeySet}
 */

/**
 * @typedef Path
 * @implements external:falcor.Paths.Path
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Path}
 */

/**
 * @typedef PathSet
 * @implements external:falcor.Paths.PathSet
 * @see {@link http://netflix.github.io/falcor/doc/global.html#PathSet}
 */

/**
 * @typedef PathValue
 * @implements external:falcor.Paths.PathValue
 * @see {@link http://netflix.github.io/falcor/doc/global.html#PathValue}
 * @property {PathSet} path
 * @property {Mixed} value
 */

/**
 * @typedef Range
 * @implements external:falcor.Paths.Range
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Range}
 * @property {Integer} [from]
 * @property {Integer} to
 * @property {Integer} [length]
 */
