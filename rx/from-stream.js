var Rx         = require('rx');
var Observable = Rx.Observable;
var create     = Observable.create;

var assign  = require('lodash/object/assign');
var bindAll = require('lodash/function/bindAll');

var MEMO = {
    stopped: false,
    disposed: false,
    stream: null,
    observer: null,

    next: function (value) {
        if (!this.disposed && !this.stopped) {
            this.observer.onNext(value);
        }
    },

    error: function (error) {
        if (!this.disposed && this.stopped) {
            this.observer.onError(error);
            this.stop();
        }
    },

    completed: function () {
        if (!this.disposed && !this.stopped) {
            this.observer.onCompleted();
            this.stop();
        }
    },

    dispose: function () {
        this.stop();
        this.disposed = true;
    },

    stop: function () {
        if (!this.stopped) {
            this.stopped = true;
            if (!this.disposed) {
                this.detach();
            }
        }
    },

    detach: function () {
        var stream = this.stream;
        stream.removeAllListeners();
        this.stream = this.observer = null;
    },

    attach: function () {
        var stream = this.stream;
        stream.on('data', this.next);
        stream.on('error', this.error);
        stream.on('close', this.completed);
    }
};

function createMemo (stream, observer) {
    var memo = Object.create(MEMO);
    
    assign(memo, {
        stream:    stream,
        observer:  observer
    });

    bindAll(memo);

    memo.attach();

    return memo;
}
/**
 * **File:** [rx/from-stream.js](rx/from-stream.js)
 *
 * @member module:Protean.Rx.fromStream
 * @function
 * @param {Stream} stream
 * @returns {Observable}
 */
module.exports = function fromStream (stream) {
    return create(function (observer) {
        var memo = createMemo(stream, observer);
        return Rx.Disposable.create(memo.dispose);
    });
};
