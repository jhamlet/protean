/*globals describe, it */

require('should');

describe('Protean.Rx.stat(paths)', function () {
    var stat = require('protean/rx/fs/stat');

    it('should get stats for file', function (done) {
        stat('storage.js').
            subscribe(function (stats) {
                stats.should.be.an.object;
                stats.filepath.should.be.a.string;
            }, null, done);
    });

    it('should get stats for globs of things', function (done) {
        stat('rx/*.js').
            subscribe(function (stats) {
                stats.should.be.an.object;
                stats.filepath.should.be.a.string;
            }, null, done);
    });

});

