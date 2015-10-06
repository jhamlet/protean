/*globals describe, it */

require('should');

describe('Protean.pluck(key, [obj])', function () {
    var pluck = require('protean/object/pluck');

    it('should return a function if given only one argument', function () {
        var fn = pluck('foo');
        fn.should.be.a.function;
        fn({ foo: 'foo' }).should.equal('foo');
    });

    it('should return the value for the key if given two arguments', function () {
        var value = pluck('foo', { foo: 'foo' });
        value.should.equal('foo');
    });

    it('should return undefined if the key does not exist', function () {
        var obj = {};
        var value = pluck('foo', obj);
        (value === undefined).should.be.true;

        value = pluck('foo')(obj);
        (value === undefined).should.be.true;
    });
});
