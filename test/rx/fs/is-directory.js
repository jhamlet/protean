/*globals describe, it */

require('should');

describe('Protean.Rx.isDirectory(paths)', function () {
    var isDirectory = require('protean/rx/fs/is-directory');

    it('should onNext false for a file', function (done) {
        isDirectory('storage.js').
            subscribe(function (isDir) {
                isDir.should.be.false;
            }, null, done);
    });

    it('should onNext true for a directory', function (done) {
        isDirectory('storage').
            subscribe(function (isDir) {
                isDir.should.be.true;
            }, null, done);
    });
});

