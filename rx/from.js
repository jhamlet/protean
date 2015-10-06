var Rx = require('rx');
var Observable = Rx.Observable;
/**
 * **File:** [rx/from.js](rx/from.js)
 *
 * @member module:Protean.Rx.from
 * @function
 * @param {Observable|Promise|Array|Object} arg
 * @returns {Observable}
 */
module.exports = function from (arg) {
    return typeof arg.subscribe === 'function' ?
        arg :
        typeof arg.then === 'function' ?
            Observable.fromPromise(arg) :
            Array.isArray(arg) ?
                Observable.from(arg) :
                Observable.just(arg);
};
