var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @external falcor.Graph
 * @see {@link https://github.com/Netflix/falcor-json-graph}
 */

/**
 * @name Graph
 * @augments external:falcor.Graph
 */
exports = module.exports = require('falcor-json-graph');

reduce([
    require('./graph/atoms'),
    require('./graph/relative'),
    require('./graph/resolve')
], merge, exports);

/**
 * @typedef Atom
 * @implements external:falcor.Graph.Atom
 * @see {@link http://netflix.github.io/falcor/doc/global.html#Atom}
 * @property {String} $type
 * @property {Mixed} value
 * @property {Integer} $expires
 */

/**
 * @typedef JSONEnvelope
 * @implements external:falcor.Graph.JSONEnvelope
 * @see {@link http://netflix.github.io/falcor/doc/global.html#JSONGraph}
 * @property {Object} json
 */

/**
 * @typedef JSONGraph
 * @implements external:falcor.Graph.JSONGraph
 * @see {@link http://netflix.github.io/falcor/doc/global.html#JSONGraph}
 */

/**
 * @typedef JSONGraphEnvelope
 * @implements external:falcor.Graph.JSONGraphEnvelope
 * @see {@link http://netflix.github.io/falcor/doc/global.html#JSONGraphEnvelope}
 * @property {JSONGraph} jsonGraph
 * @property {PathSet[]} [paths]
 * @property {PathSet[]} [invalidated]
 */
