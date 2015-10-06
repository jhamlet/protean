var inherit    = require('protean/function/inherit');
var defaults   = require('lodash/object/defaults');
var Rx         = require('rx');
var Observable = Rx.Observable;
/**
 * A convenience class for munging together a Subject and an Observable from
 * separate sources.
 *
 * **File:** [rx/subject.js](rx/subject.js)
 *
 * @class ProteanSubject
 * @extends ProteanClass
 * @implements Subject
 * @param {Object} opts
 * @param {String|Subject} [opts.subject='subject']
 * @param {String|Observable} [opts.observable='subject']
 */
function ProteanSubject (opts) {
    opts = this.options = defaults({}, opts || {}, ProteanSubject.prototype.options);
    Observable.call(this, this._subscribe.bind(this));
}

module.exports = inherit(Observable, ProteanSubject,/** @lends ProteanSubject# */{
    /**
     * Default options
     * @property {Object}
     */
    options: {
        /**
         * @property {String}
         * @default 'subject'
         */
        subject: 'subject',
        /**
         * @property {String}
         * @default 'subject'
         */
        observable: 'subject',
    },
    /**
     * @property {Subject}
     * @readonly
     * @private
     */
    get _subject () {
        var opts = this.options;
        var subject = opts.subject;

        subject = typeof subject === 'string' ? this[subject] : subject;

        Object.defineProperty(this, '_subject', { value: subject });

        return subject;
    },
    /**
     * @property {Observable}
     * @readonly
     * @private
     */
    get _observable () {
        var opts = this.options;
        var observable = opts.observable;

        observable = typeof observable === 'string' ? this[observable] : observable;

        Object.defineProperty(this, '_observable', { value: observable });

        return observable;
    },
    /**
     * @property {Boolean}
     * @readonly
     */
    get isStopped () { return this._subject.isStopped; },
    /**
     * @property {Boolean}
     * @readonly
     */
    get isDisposed () { return this._subject.isDisposed; },
    /**
     * @property {Observer[]}
     * @readonly
     */
    get observers () { return this._subject.subject; },
    /**
     * @returns {Boolean}
     */
    hasObservers: function () { return this._subject.hasObservers(); },
    /**
     * @param {String} input
     */
    onNext: function (input) { this._subject.onNext(input); },
    /**
     * @param {Error} error
     */
    onError: function (error) { this._subject.onError(error); },
    /**
     */
    onCompleted: function () { this._subject.onCompleted(); },
    /**
     */
    dispose: function () { this._subject.dispose(); },
    /**
     * @member ProteanSubject#subscribe
     * @param {Observer|Function} onNextOrObserver
     * @param {Function} [onError]
     * @param {Function} [onCompleted]
     * @returns {Disposable}
     */
    /**
     * @private
     * @param {Observer}
     * @returns {Disposable}
     */
    _subscribe: function (observer) {
        return this._observable.subscribe(observer);
    }
});
