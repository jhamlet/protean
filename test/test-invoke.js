/*globals describe, it */

var should = require('should'),
    protean = require('../');

describe('Protean', function () {
    
    describe('.invoke(name, obj)', function () {
        it('should invoke the method on the object', function () {
            var obj = {
                    get: function () {
                        return this.foo;
                    },
                    foo: 'foo'
                },
                fn = protean.invoke('get');

            fn(obj).should.equal('foo');
        });
    });

});
