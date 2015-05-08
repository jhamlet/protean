/*globals describe, it */

var protean = require('../../'),
    _ = protean.lodash;

require('should');

describe('Protean.lodash', function () {
    
    describe('.enmap(...args)', function () {
        it('should create an object from a list of alternating keys and values', function () {
            _.enmap('foo', 'foo', 'bar', 'bar').
                should.
                eql({
                    foo: 'foo',
                    bar: 'bar'
                });
        });
    });

});
