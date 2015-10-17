var Rx = require('rx');
var globCp = Rx.Observable.fromNodeCallback(require('glob-cp'));
var defaults = require('lodash/object/defaults');
var DEFAULT_OPTIONS = { recursive: true };
/**
 * **File:** [rx/fs/cp.js](rx/fs/cp.js)
 *
 * @member module:Protean.Rx.cp
 * @function
 * @param {String|String[]|Observable<String>|Promise<String>} from
 * @param {String} to
 * @param {Object} [opts]
 * @param {Boolean} [opts.recursive=true]
 * @param {Boolean} [opts.force=false]
 * @returns {Observable<fs.Stats>}
 */
module.exports = function cp (from, to, opts) {
    opts = defaults(opts || {}, DEFAULT_OPTIONS);
    return globCp(from, to, opts);
};
