/*globals describe, it */

var enmap = require('protean/utility/enmap');

require('should');

describe('Protean.enmap(...args)', function () {
    it('should create an object from a list of alternating keys and values', function () {
        enmap('foo', 'foo', 'bar', 'bar').
            should.
            eql({
                foo: 'foo',
                bar: 'bar'
            });
    });
});
