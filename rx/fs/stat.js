var assign     = require('lodash/object/assign');
var rearg      = require('lodash/function/rearg');
var curry      = require('lodash/function/curry');
var set        = require('lodash/object/set');
var from       = require('protean/rx/from');
var glob       = require('./glob');
var fswrap     = require('./wrapper');
var statRx     = fswrap('stat');
var fstatRx    = fswrap('fstat');
var lstatRx    = fswrap('lstat');
var poke       = rearg(set, 2, 0, 1);
var pokePath   = curry(poke, 3)('filepath');
var pokeFd     = curry(poke, 3)('fd');

var statAndMap = curry(function (stat, poke, path) {
    return stat(path).map(poke(path));
});
var nstatAndMap = statAndMap(statRx, pokePath);
var lstatAndMap = statAndMap(lstatRx, pokePath);
var fstatAndMap = statAndMap(fstatRx, pokeFd);

var fromAndStat = curry(function (method, mapper, arg) {
    return method(arg).flatMap(mapper);
});

/**
 * **File:** [rx/stat.js](rx/stat.js)
 *
 * @member module:Protean.Rx.stat
 * @function
 * @param {String|String[]|Observable<String>|Promise<String>} patterns
 * @returns {Observable<external:fs.Stats>} An Observable emiting the paths found
 */
module.exports = assign(
    function stat (patterns) {
        return fromAndStat(glob, nstatAndMap, patterns);
    },
    /** @lends module:Protean.Rx.stat */{
        /**
         * @param {String|String[]|Observable<String>|Promise<String>} patterns
         * @returns {Observable<external:fs.Stats>}
         */
        link: function lstat (patterns) {
            return fromAndStat(glob, lstatAndMap, patterns);
        },
        /**
         * @param {Integer|Integer[]|Observable<Integer>|Promise<Integer>} fds
         * @returns {Observable<external:fs.Stats>}
         */
        fd: function fstat (fds) {
            return fromAndStat(from, fstatAndMap, fds);
        }
    }
);
