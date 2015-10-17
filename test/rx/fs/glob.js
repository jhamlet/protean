/*globals describe, it */

require('should');

describe('Protean.Rx.glob(pattern, [opts])', function () {
    var Rx         = require('rx');
    var Observable = Rx.Observable;
    var fs         = require('fs');
    var glob       = require('protean/rx/fs/glob');
    var statRx     = Observable.fromNodeCallback(fs.stat);

    it('should be directories', function (done) {
        glob('{array,collection,dom,falcor,function,node_modules}/').
            flatMap(function (path) {
                return statRx(path).
                    map(function (stats) {
                        return stats.isDirectory();
                    });
            }).
            subscribe(function (flag) {
                flag.should.be.true;
            }, null, done);
    });

    it('should be files', function (done) {
        glob('{array,collection,dom,falcor,function}/*.js').
            flatMap(function (path) {
                return statRx(path).
                    map(function (stats) {
                        return !stats.isDirectory();
                    });
            }).
            subscribe(function (flag) {
                flag.should.be.true;
            }, null, done);
    });
});

