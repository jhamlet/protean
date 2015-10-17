/*globals describe, it, beforeEach, afterEach */

require('should');

describe('Protean.Rx.read(paths, [enc])', function () {
    var read = require('protean/rx/fs/read');
    var glob = require('glob');
    var fs = require('fs');
    var readfile = fs.readFileSync;

    beforeEach(function () {
        fs.symlinkSync('test', 'tmp-test');
        fs.symlinkSync('storage.js', 'tmp-storage.js');
    });


    afterEach(function () {
        fs.unlinkSync('tmp-test');
        fs.unlinkSync('tmp-storage.js');
    });

    it('should read directories', function (done) {
        var expected = glob.sync('test/*');

        read('test').
            toArray().
            subscribe(function (filenames) {
                filenames.
                    should.
                    eql(expected);
            }, null, done);
    });

    it('should read files', function (done) {
        var expected = readfile('storage.js', 'utf8');

        read('storage.js', 'utf8').
            subscribe(function (contents) {
                contents.should.equal(expected);
            }, null, done);
    });

    it('should read symbolic directories', function (done) {
        var expected = glob.sync('test/*').
                map(function (path) { return 'tmp-' + path; });

        read('tmp-test').
            toArray().
            subscribe(function (filenames) {
                filenames.
                    should.
                    eql(expected);
            }, null, done);
    });

    it('should read symbolic files', function (done) {
        var expected = readfile('storage.js', 'utf8');

        read('tmp-storage.js', 'utf8').
            subscribe(function (contents) {
                contents.should.equal(expected);
            }, null, done);
    });
});

