/**
 * **File:** [falcor/graph.js](falcor/graph.js)
 *
 * @member module:Falcor.Graph
 * @see {@link https://github.com/Netflix/falcor-json-graph}
 */
require('lodash/collection/reduce')([
    require('./graph/atoms'),
    require('./graph/from-object'),
    require('./graph/is-atom'),
    require('./graph/is-error'),
    require('./graph/is-ref'),
    require('./graph/is-root-ref'),
    require('./graph/is-sentinel'),
    require('./graph/refs'),
    require('./graph/relative'),
    require('./graph/resolve'),
    require('./graph/root-ref'),
    require('./graph/sentinels'),
    require('./graph/set'),
    require('./graph/to-object')
], require('protean/utility/merge-exports'), exports);

/**
 * @typedef Sentinel
 * @type {Object}
 * @property {String} $type
 * @property {Mixed} value
 */

/**
 * @typedef Reference
 * @type {Sentinel}
 * @property {String} $type='ref'
 * @property {Path} value
 */

/**
 * @typedef RootReference
 * @type {Reference}
 * @property {Boolean} $root=true
 */

/**
 * @typedef Atom
 * @type {Sentinel}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Atom}
 * @property {String} $type='atom'
 * @property {Integer} $expires
 */

/**
 * @typedef JSONEnvelope
 * @type {Object}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#JSONGraph}
 * @property {Object} json
 */

/**
 * @typedef JSONGraph
 * @type {Object}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#JSONGraph}
 */

/**
 * @typedef JSONGraphEnvelope
 * @type {Object}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#JSONGraphEnvelope}
 * @property {JSONGraph} jsonGraph
 * @property {PathSet[]} [paths]
 * @property {PathSet[]} [invalidated]
 */
