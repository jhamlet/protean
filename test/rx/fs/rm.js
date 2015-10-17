/*globals describe, it, beforeEach, afterEach */

require('should');

describe('Protean.Rx.rm(paths, [recursive=true])', function () {
    // var Rx         = require('rx');
    // var Observable = Rx.Observable;
    var rm         = require('protean/rx/fs/rm');
    var mkdir      = require('mkdirp');
    var rimraf     = require('rimraf');
    var fs         = require('fs');

    beforeEach(function () {
        // create the directories and files for testing
        mkdir.sync('tmp-test/foo/bar');
        mkdir.sync('tmp-test/bar');
        mkdir.sync('tmp-test/baz');
        fs.writeFileSync('tmp-test/foo/bar/fudge.js', '', 'utf8');
        fs.writeFileSync('tmp-test/foo/fudge.js', '', 'utf8');
        fs.writeFileSync('tmp-test/bar/fudge.js', '', 'utf8');
        fs.writeFileSync('tmp-test/baz/fudge.js', '', 'utf8');
    });

    afterEach(function () {
        // remove our test stuff
        rimraf.sync('tmp-test');
    });

    it('should remove the file', function (done) {
        var expected = 'tmp-test/foo/fudge.js';

        rm(expected).
            subscribe(
                function (p) {
                    p.should.equal(expected);
                },
                null,
                function () {
                    (function () {
                        fs.access(expected);
                    }).should.throw;
                    done();
                }
            );
    });

    it('should remove the directory and its contents', function (done) {
        var expected = 'tmp-test/foo';

        rm(expected).
            subscribe(
                function (p) {
                    p.should.equal(expected);
                },
                null,
                function () {
                    (function () {
                        fs.access(expected);
                    }).should.throw;
                    done();
                }
            );
    });

    it('should throw an error when trying to empty a non-empty directory (recursive=false)', function (done) {
        var expected = 'tmp-test/foo';

        rm(expected, false).
            subscribe(
                function (p) {
                    p.should.equal(expected);
                },
                function (error) {
                    error.should.an.error;
                    done();
                }
            );
    });

    it('should recursively remove all files and directories', function (done) {
        rm('tmp-test/foo').
            subscribe(
                function (path) {
                    path.should.be.a.string;
                },
                null,
                function () {
                    (function () {
                        fs.access('tmp-test/foo');
                    }).should.throw;
                    done();
                }
            );
    });
});

