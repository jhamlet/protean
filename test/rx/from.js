/*globals describe, it */

require('should');

describe('Protean.Rx.from(patterns)', function () {
    var Rx = require('rx');
    var Observable = Rx.Observable;
    var rsvp = require('rsvp');
    var from = require('protean/rx/from');

    it('should return an observable if given a single value', function (done) {
        var count = 0;

        from('foo').
            subscribe(
                function (value) {
                    value.should.equal('foo');
                    count++;
                },
                null,
                function () {
                    count.should.equal(1);
                    done();
                }
            );
    });

    it('should return an observable if given an array of values', function (done) {
        var expected = ['foo', 'bar', 'baz'];

        from(expected).
            toArray().
            subscribe(function (list) {
                list.should.eql(expected);
            }, null, done);
    });

    it('should return an observable if given an observable', function (done) {
        var original = Observable.just('foo');
        var result = from(original);

        result.should.equal(original);

        result.
            subscribe(function (value) {
                value.should.equal('foo');
            }, null, done);

    });

    it('should return an observable if given a promise', function (done) {
        var promise =
                new rsvp.Promise(function (resolve) {
                    resolve('foo');
                });

        from(promise).
            subscribe(function (value) {
                value.should.equal('foo');
            }, null, done);
    });
});

