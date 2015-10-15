/*globals describe, it */

var enmap = require('protean/object/enmap');

require('should');

describe('Protean.enmap(...args)', () => {
    it('should create an object from a list of alternating keys and values', () => {
        enmap('foo', 'foo', 'bar', 'bar').
            should.
            eql({
                foo: 'foo',
                bar: 'bar'
            });
    });
});
