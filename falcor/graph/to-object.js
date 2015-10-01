var defaults  = require('lodash/object/defaults');
var sentinels = require('protean/falcor/graph/sentinels');
var set       = require('protean/falcor/graph/set');

var DEFAULT_OPTIONS = {};

function visitor (opts, accumulator, path, sentinel) {
    set(accumulator, path, sentinel.value);
}
/**
 * Takes a JSONGraph and returns a Javascript Object.
 *
 * **File:** [falcor/graph/to-object.js](falcor/graph/to-object.js)
 *
 * @member module:Falcor.Graph.toObject
 * @function
 * @param {JSONGraph} graph
 * @param {Object} [opts]
 * @returns {JSONGraph}
 */
module.exports = function toObject (graph, opts) {
    var obj = {};

    opts = defaults(opts || {}, DEFAULT_OPTIONS);

    sentinels(graph, visitor.bind(null, opts, obj));

    return obj;
};
