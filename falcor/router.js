var assign = require('lodash/object/assign');
/**
 * @external FalcorRouter
 * @see {@link https://github.com/Netflix/falcor-router}
 */

/**
 * @member module:Falcor.Router
 * @augments external:FalcorRouter
 */
module.exports = assign(require('falcor-router'), {
});

/**
 * @typedef FalcorRouter
 * @implements external:DataSource
 */
