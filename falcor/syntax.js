var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @external FalcorPathSyntax
 * @see {@link https://github.com/Netflix/falcor-path-syntax}
 */
/**
 * @member module:Falcor.Syntax
 * @augments external:FalcorPathSyntax
 */
module.exports = reduce([
    { rootKey: require('./syntax/root-key') }
], merge, require('falcor-path-syntax'));
