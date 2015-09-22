var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @member module:Protean.falcor.path
 */
exports = module.exports = require('falcor-path-utils');

reduce([
    require('./path/relative'),
    require('./path/resolve')
], merge, exports);
