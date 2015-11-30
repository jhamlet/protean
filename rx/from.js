var Rx         = require('rx');
var Stream     = require('stream');
var fromStream = require('./from-stream');
var Observable = Rx.Observable;
/**
 * **File:** [rx/from.js](rx/from.js)
 *
 * @member module:Protean.Rx.from
 * @function
 * @param {Observable|Stream|Promise|Array|Object} arg
 * @returns {Observable}
 */
module.exports = function from (arg) {
    if (typeof arg.subscribe === 'function') {
        return arg;
    }
    else if (typeof arg.then === 'function') {
        return Observable.fromPromise(arg);
    }
    else if (Array.isArray(arg)) {
        return Observable.from(arg);
    }
    else if (arg instanceof Stream) {
        return fromStream(arg);
    }
    else {
        return Observable.just(arg);
    }
};
