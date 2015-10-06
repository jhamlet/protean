var R = require('ramda');
var appendRx    = require('./wrapper')('appendFile');
/**
 * @member module:Protean.Rx.append
 * @param {String} filepath
 * @param {Buffer|String} data
 * @param {Object|String} [opts]
 * @returns {Observable<String>}
 */
module.exports = function append (filepath, data, opts) {
    return appendRx(filepath, data, opts).
        map(R.always(filepath));
};
