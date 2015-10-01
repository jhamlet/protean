/**
 * @external Rx
 * @see {@link https://github.com/Reactive-Extensions/RxJS/tree/master/doc}
 */

/**
 * @external Observable
 * @see {@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md}
 */

/**
 * @external Observer
 * @see {@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observer.md}
 */

/**
 * @external Disposable
 * @see {@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/disposables/disposable.md}
 */

/**
 * @typedef onNextFunction
 * @type {Function}
 * @param {Mixed} value
 */

/**
 * @typedef onErrorFunction
 * @type {Function}
 * @param {Error} error
 */

/**
 * @typedef onCompletedFunction
 * @type {Function}
 */

/**
 * @typedef Observable
 * @implements external:Observable
 */

/**
 * @member Observable#subscribe
 * @function
 * @param {onNextFunction|Observer} onNextOrObserver
 * @param {onErrorFunction} [onError]
 * @param {onCompletedFunction} [onCompleted]
 * @returns {Disposable}
 */

/**
 * @typedef Observer
 * @implements external:Observer
 */

/**
 * @member Observer#onNext
 * @type {onNextFunction}
 */

/**
 * @member Observer#onError
 * @type {onErrorFunction}
 */

/**
 * @member Observer#onCompleted
 * @type {onCompletedFunction}
 */

/**
 * @typedef Disposable
 * @implements external:Disposable
 */

/**
 * @member Disposable#dispose
 * @function
 */

/**
 * @typedef Subject
 * @see {@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md}
 * @extends Observable
 * @mixes Observer
 * @mixes Disposable
 */

