var $ref = require('falcor-json-graph').ref;
var defaults = require('lodash/object/defaults');
/**
 * **File:** [falcor/graph/root-ref.js](falcor/graph/root-ref.js)
 *
 * @member module:Falcor.Graph.rootRef
 * @function
 * @param {Path} path
 * @param {Path} value
 * @param {Object} props
 * @returns {Reference}
 */
module.exports = function rootRef (path, value, props) {
    return $ref(path, defaults({ $root: true }, props || {}));
};
