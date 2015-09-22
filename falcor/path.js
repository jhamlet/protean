var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @external falcor.Path
 * @see {@link https://github.com/Netflix/falcor-path-utils}
 */
/**
 * @member module:Falcor.Path
 * @augments external:falcor.Path
 */
exports = module.exports = require('falcor-path-utils');

reduce([
    require('./path/relative'),
    require('./path/resolve')
], merge, exports);

/**
 * @typedef Key
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Key}
 */

/**
 * @typedef KeySet
 * @see {@link http://netflix.github.io/falcor/doc/global.html#KeySet}
 */

/**
 * @typedef Path
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Path}
 */

/**
 * @typedef PathSet
 * @see {@link http://netflix.github.io/falcor/doc/global.html#PathSet}
 */

/**
 * @typedef PathValue
 * @see {@link http://netflix.github.io/falcor/doc/global.html#PathValue}
 * @property {PathSet} path
 * @property {Mixed} value
 */

/**
 * @typedef Range
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Range}
 * @property {Integer} [from]
 * @property {Integer} to
 * @property {Integer} [length]
 */
