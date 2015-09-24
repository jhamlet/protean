var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @external FalcorPathUtils
 * @see {@link https://github.com/Netflix/falcor-path-utils}
 */
/**
 * @member module:Falcor.Path
 * @augments external:FalcorPathUtils
 */
exports = module.exports = require('falcor-path-utils');

reduce([
    require('./path/relative'),
    require('./path/resolve')
], merge, exports);

/**
 * @typedef Key
 * @type {String|null}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Key}
 */

/**
 * @typedef KeySet
 * @type {Key|Range|Array<Key|Range>}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#KeySet}
 */

/**
 * @typedef Path
 * @type {Key[]}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Path}
 */

/**
 * @typedef PathSet
 * @type {Array<KeySet>}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#PathSet}
 */

/**
 * @typedef PathValue
 * @type {Object}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#PathValue}
 * @property {PathSet} path
 * @property {Mixed} value
 */

/**
 * @typedef Range
 * @type {Object}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Range}
 * @property {Integer} [from]
 * @property {Integer} to
 * @property {Integer} [length]
 */
