var R          = require('ramda');
var Rx         = require('rx');
var defaults   = require('lodash/object/defaults');
var Observable = Rx.Observable;
var mvRx       = Observable.fromNodeCallback(require('mv'));
var DEFAULT_OPTIONS = { clobber: false, mkdirp: false };

/**
 * **File:** [rx/fs/mv.js](rx/fs/mv.js)
 *
 * @member module:Protean.Rx.mv
 * @param {String} from
 * @param {String} to
 * @param {Object} opts
 * @param {Boolean} [opts.mkdirp=false]
 * @param {Boolean} [opts.clobber=false]
 * @returns {Observable<String>}
 */
module.exports = function mv (from, to, opts) {
    opts = defaults(opts || {}, DEFAULT_OPTIONS);
    return mvRx(from, to, opts).
        map(R.always(to));
};
