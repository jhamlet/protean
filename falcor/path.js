/**
 * @member module:Falcor.Path
 * @see {@link https://github.com/Netflix/falcor-path-utils}
 */
require('lodash/collection/reduce')([
    require('./path/relative'),
    require('./path/resolve')
], require('protean/utility/merge-exports'), exports);

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
 * @property {Path} path
 * @property {*} value
 */

/**
 * @typedef Range
 * @type {Object}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Range}
 * @property {Integer} [from]
 * @property {Integer} to
 * @property {Integer} [length]
 */
