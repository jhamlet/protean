var R          = require('ramda');
var Rx         = require('rx');
var Observable = Rx.Observable;
var fs         = require('fs');
/**
 * @member module:Protean.Rx.fsWrapper
 * @param {String} method
 * @returns {Function}
 */
module.exports = R.memoize(function fsWrapper (method) {
    return Observable.fromNodeCallback(fs[method]);
});
