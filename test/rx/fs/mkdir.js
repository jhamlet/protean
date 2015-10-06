/*globals describe, it */

require('should');

describe('Protean.Rx.mdkir(paths, [opts])', function () {
    var Rx         = require('rx');
    var Observable = Rx.Observable;
    var mkdir      = require('protean/rx/fs/mkdir');
    var rimraf     = require('rimraf');
    var fs         = require('fs');
    var path       = require('path');
    var statRx     = Observable.fromNodeCallback(fs.stat);
    var temp       = './tmp';

    it('should create directory', function (done) {
        var paths = path.join(temp, 'foo/bar');

        mkdir(paths).
            flatMap(function (created) {
                return statRx(created).
                    map(function (stats) {
                        var isDir = stats.isDirectory();

                        if (isDir) {
                            rimraf.sync('./tmp');
                        }

                        return isDir && created === paths;
                    });
            }).
            subscribe(function (flag) {
                flag.should.be.true;
            }, null, done);
    });
});

