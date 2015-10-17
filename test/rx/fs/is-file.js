/*globals describe, it */

require('should');

describe('Protean.Rx.isFile(paths)', function () {
    var isFile = require('protean/rx/fs/is-file');

    it('should onNext true for a file', function (done) {
        isFile('storage.js').
            subscribe(function (flag) {
                flag.should.be.true;
            }, null, done);
    });

    it('should onNext false for a directory', function (done) {
        isFile('storage').
            subscribe(function (flag) {
                flag.should.be.false;
            }, null, done);
    });
});

