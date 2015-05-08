/*globals describe, beforeEach, it*/
var ImmutableMapProxy = require('../').ImmutableMapProxy;

require('should');

describe('ImmutableMapProxy', function () {
    describe('#extend(....map)', function () {
        var m;

        beforeEach(function () {
            m = new ImmutableMapProxy();
        });

        it('the value should not equal the previous value', function () {
            var v = m.valueOf();

            m.extend({ foo: 'bar' });

            (m.valueOf() === v).should.be.false;
        });
    });

    describe('#set(key, value)', function () {
        var m;

        beforeEach(function () {
            m = new ImmutableMapProxy();
        });

        it('the value should not equal the previous value', function () {
            var v = m.valueOf();

            m.set('foo', 'bar');

            (m.valueOf() === v).should.be.false;
        });
    });
});
