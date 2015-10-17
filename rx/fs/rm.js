var R          = require('ramda');
var Rx         = require('rx');
var Observable = Rx.Observable;
var rimraf     = Observable.fromNodeCallback(require('rimraf'));
var rmdir      = require('./wrapper')('rmdir');
var glob       = require('./glob');
var stat       = require('./stat');
/**
 * **File:** [rx/rm.js](rx/rm.js)
 *
 * @member module:Protean.Rx.rm
 * @function
 * @param {String|String[]|Observable<String>|Promise<String>} patterns
 * @param {Boolean} [recursive=true]
 * @returns {Observable<String>}
 */
module.exports = function rm (patterns, recursive) {
    return glob(patterns).
        flatMap(stat).
        flatMap(function (stats) {
            var path = stats.filepath;
            var result;

            if (stats.isDirectory()) {
                result = recursive !== false ? rimraf(path) : rmdir(path);
            }
            else if (stats.isFile()) {
                result = rimraf(path);
            }

            result = result ? result.map(R.always(path)) : result;

            return result;
        });
};
