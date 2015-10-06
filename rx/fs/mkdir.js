var R          = require('ramda');
var Rx         = require('rx');
var Observable = Rx.Observable;
var from       = require('protean/rx/from');
var mkdirp     = Observable.fromNodeCallback(require('mkdirp'));
/**
 * Create the given paths in the file system.
 *
 * **File:** [rx/mkdir.js](rx/mkdir.js)
 *
 * @member module:Protean.Rx.mkdir
 * @function
 * @param {String|String[]|Observable<String>} paths
 * @param {Object} [opts]
 * @param {String} [opts.mode='0777']
 * @returns {Observable<String>}
 */
module.exports = function mkdir (paths, opts) {
    return from(paths).
        flatMap(function (path) {
            return mkdirp(path, opts).
                map(R.always(path));
        });
};
