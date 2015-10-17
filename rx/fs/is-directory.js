var stat   = require('./stat');
var invoke = require('protean/object/invoke');
/**
 * **File:** [rx/is-directory.js](rx/is-directory.js)
 *
 * @member module:Protean.Rx.isDirectory
 * @function
 * @param {String|String[]|Observable<String>} paths
 * @returns {Observable<Boolean>} An Observable emiting the paths found
 */
module.exports = function isDirectory (paths) {
    return stat(paths).
        map(invoke('isDirectory'));
};
