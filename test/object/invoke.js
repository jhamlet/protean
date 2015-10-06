/*globals describe, it */

require('should');

describe('Protean.invoke(method, subject)', function () {
    var invoke = require('protean/object/invoke');

    it('should execute the method from object', function () {
        var fn = invoke('foo');
        var obj = { foo: function () { return 'foo'; } };

        fn(obj).should.equal('foo');
        invoke('foo', obj).should.equal('foo');
    });
});

