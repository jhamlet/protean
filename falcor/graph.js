var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @member module:Protean.falcor.graph
 */

module.exports = reduce([
    require('./graph/relative'),
    require('./graph/resolve')
], merge, require('falcor-json-graph'));
