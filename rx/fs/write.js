var R       = require('ramda');
var writeRx = require('./wrapper')('writeFile');
/**
 * @member module:Protean.Rx.write
 * @param {String} filepath
 * @param {Buffer|String} data
 * @param {Object|String} [opts]
 * @returns {Observable<String>}
 */
module.exports = function write (filepath, data, opts) {
    return writeRx(filepath, data, opts).
        map(R.always(filepath));
};
