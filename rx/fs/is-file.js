var stat   = require('./stat');
var invoke = require('protean/object/invoke');
/**
 * **File:** [rx/is-file.js](rx/is-file.js)
 *
 * @member module:Protean.Rx.isFile
 * @function
 * @param {String|String[]|Observable<String>} paths
 * @returns {Observable<Boolean>}
 */
module.exports = function isFile (paths) {
    return stat(paths).
        map(invoke('isFile'));
};
