/*globals describe, it */

var protean = require('../../'),
    _ = protean.underscore;

require('should');

describe('Protean.underscore', function () {
    
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
