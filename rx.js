/**
 * @external Rx
 * @see {@link }
 */

/**
 * @external Observable
 * @see {@link }
 */

/**
 * @external Observer
 * @see {@link }
 */

/**
 * @external Disposable
 * @see {@link }
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
 * @extends Observable
 * @mixes Observer
 * @mixes Disposable
 */

