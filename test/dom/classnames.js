/*globals describe, it */

require('should');

describe('Protean.classnames', function () {
    it('should exist on the exported Protean object', function () {
        var protean = require('protean');
        protean.classnames.should.exist;
        protean.classnames.should.be.a.function;
    });
});

describe('Protean.classnames(...args)', function () {
    var classnames = require('protean/dom/classnames');

    it('should return uniq classes', function () {
        classnames('foo', 'bar', 'bar', 'baz').
            should.
            equal('foo bar baz');
    });

    it('should contain true objects', function () {
        classnames({ foo: true }, { bar: false }, { baz: true }).
            should.
            eql('foo baz');
    });

    it('should omit extra keys', function () {
        classnames('foo', { foo: true }).
            should.
            eql('foo');
    });

    it('should handle multiple keyed objects', function () {
        classnames({ foo: true, bar: true, baz: false }).
            should.
            eql('foo bar');
    });
});
