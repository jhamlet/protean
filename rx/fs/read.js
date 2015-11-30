var npath      = require('path');
var fswrap     = require('./wrapper');
var realpath   = fswrap('realpath');
var readfile   = fswrap('readFile');
var glob       = require('./glob');
var from       = require('protean/rx/from');
var stat       = require('./stat');
/**
 * **File:** [rx/read.js](rx/read.js)
 *
 * @member module:Protean.Rx.read
 * @function
 * @param {String|String[]|Observable<String>|Promise<String>} patterns
 * @param {String} [enc]
 * @returns {Observable<String|Buffer>}
 */
module.exports = function read (patterns, enc) {
    return glob(patterns).
        flatMap(stat).
        flatMap(function (stats) {
            var path = stats.filepath;
            var result;

            if (stats.isDirectory()) {
                result = glob(npath.join(path, '*')).
                    flatMap(from);
            }
            else if (stats.isSymbolicLink()) {
                result = realpath(path).
                    flatMap(read);
            }
            else if (stats.isFile()) {
                result = readfile(path, enc);
            }

            return result;
        });
};
