var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @member module:Protean.falcor.graph
 */
exports = module.exports = require('falcor-json-graph');

reduce([
    require('./graph/relative'),
    require('./graph/resolve')
], merge, exports);
