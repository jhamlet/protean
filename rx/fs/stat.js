var R          = require('ramda');
var assign     = require('lodash/object/assign');
var denominate = require('protean/object/denominate');
var from       = require('../from');
var glob       = require('./glob');
var fswrap     = require('./wrapper');
var statRx     = fswrap('stat');
var fstatRx    = fswrap('fstat');
var lstatRx    = fswrap('lstat');

var pokePath = R.assoc('filepath');
var pokeFd   = R.assoc('fd');

var statMap  = function (p) { return statRx(p).map(pokePath(p)); };
var lstatMap = function (p) { return lstatRx(p).map(pokePath(p)); };
var fstatMap = function (p) { return fstatRx(p).map(pokeFd(p)); };

var statFlatMap  = R.invoker(1, 'flatMap')(statMap);
var lstatFlatMap = R.invoker(1, 'flatMap')(lstatMap);
var fstatFlatMap = R.invoker(1, 'flatMap')(fstatMap);

var stat  = R.pipe(glob, statFlatMap);
var lstat = R.pipe(glob, lstatFlatMap);
var fstat = R.pipe(from, fstatFlatMap);

/**
 * **File:** [rx/stat.js](rx/stat.js)
 *
 * @member module:Protean.Rx.stat
 * @function
 * @param {String|String[]|Observable<String>|Promise<String>} patterns
 * @returns {Observable<external:fs.Stats>} An Observable emiting the paths found
 */
module.exports = assign(denominate(stat, 'stat'), {
    /**
     * @member module:Protean.Rx.stat.link
     * @function
     * @param {String|String[]|Observable<String>|Promise<String>} patterns
     * @returns {Observable<external:fs.Stats>}
     */
    link: denominate(lstat, 'lstat'),
    /**
     * @member module:Protean.Rx.stat.fd
     * @function
     * @param {Integer|Integer[]|Observable<Integer>|Promise<Integer>} fds
     * @returns {Observable<external:fs.Stats>}
     */
    fd: denominate(fstat, 'fstat')
});
