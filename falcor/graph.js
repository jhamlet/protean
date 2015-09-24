var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @external FalcorJSONGraph
 * @see {@link https://github.com/Netflix/falcor-json-graph}
 */

/**
 * **File:** [falcor/graph.js](falcor/graph.js)
 *
 * @member module:Falcor.Graph
 * @augments external:FalcorJSONGraph
 */
exports = module.exports = require('falcor-json-graph');

reduce([
    require('./graph/set'),
    require('./graph/atoms'),
    require('./graph/merge-envelope'),
    require('./graph/relative'),
    require('./graph/resolve')
], merge, exports);

/**
 * @typedef Atom
 * @type {Object}
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Atom}
 * @property {String} $type
 * @property {Mixed} value
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
