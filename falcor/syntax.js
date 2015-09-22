var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @member module:Protean.falcor.syntax
 */
module.exports = reduce([
    { rootKey: require('./syntax/root-key') }
], merge, require('falcor-path-syntax'));
