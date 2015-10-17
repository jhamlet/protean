var Rx         = require('rx');
var Observable = Rx.Observable;
var globRx     = Observable.fromNodeCallback(require('glob'));
/**
 * **File:** [rx/glob.js](rx/glob.js)
 *
 * @member module:Protean.Rx.glob
 * @function
 * @param {String} pattern The glob pattern
 * @param {Object} [opts] {@link https://github.com/isaacs/node-glob#options}
 * @returns {Observable<String>} An Observable emiting the paths found
 */
module.exports = function glob (patterns, opts) {
    return globRx(patterns, opts).
        flatMap(Observable.from);
};
