var cp         = require('child_process');
var Rx         = require('rx');
var defaults   = require('lodash/object/defaults');
var pick       = require('lodash/object/pick');
var fromStream = require('./from-stream');
var spawn      = cp.spawn;
var Observable = Rx.Observable;

var shell     = 'sh';
var shellArgs = ['-c'];
var shellOpts = ['shell', 'shellArgs'];

/**
 * @typedef ProcessObservable
 * @type {Observable}
 * @property {Observable} stdin
 * @property {Observable} stdout
 * @property {Observable} stderr
 * @property {Observable} streams
 */
/**
 * @member module:Protean.Rx.sh
 * @param {String} command
 * @param {Object} [opts]
 * @returns {ProcessObservable}
 */
function sh (command, opts) {
    var obs = Observable.create(function (observer) {
        var disposed = false;
        var subs = new Rx.CompositeDisposable();

        opts = defaults(opts || {}, {
            cwd: process.cwd(),
            env: process.env,
            encoding: 'utf8'
        });

        var params =
            defaults(
                pick(opts, shellOpts),
                pick(sh, shellOpts)
            );

        var proc =
            obs._process =
                spawn(params.shell, params.shellArgs.concat(command), opts);

        function done () {
            proc.removeAllListeners();
        }

        function completed (error) {
            if (!disposed) {
                observer[error ? 'onError' : 'onCompleted'](error);
                done();
            }
        }

        function dispose () {
            if (!disposed) {
                disposed = true;
                subs.dispose();
                done();
                proc.kill();
            }
        }

        proc.on('error', completed);
        proc.on('close', completed);

        if (!opts.stdio) {
            var onNext = observer.onNext.bind(observer);

            ['stdin', 'stdout', 'stderr'].
                forEach(function (fd) {
                    if (proc[fd]) {
                        proc[fd].setEncoding(opts.encoding);
                        subs.add(fromStream(proc[fd]).subscribe(onNext));
                    }
                });
        }

        return Rx.Disposable.create(dispose);
    });

    return obs;
}

sh.shell     = shell;
sh.shellArgs = shellArgs;

module.exports = sh;
