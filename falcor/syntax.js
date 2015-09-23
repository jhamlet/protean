var reduce = require('lodash/collection/reduce');
var merge = require('protean/utility/merge-exports');
/**
 * @external falcor.Syntax
 * @see {@link https://github.com/Netflix/falcor-path-syntax}
 */
/**
 * @name Syntax
 * @augments external:falcor.Syntax
 */
module.exports = reduce([
    { rootKey: require('./syntax/root-key') }
], merge, require('falcor-path-syntax'));
