/*globals describe, it */

require('should');

describe('Falcor.Path.relative()', function () {

    var rel = require('protean/falcor/path/relative');

    it('should return only the relative paths', function () {
        var paths = rel(['foo', 'bar'], [
            ['foo', 'bar', 'baz', ['id', 'value']],
            ['boo', 'far', 'baz', ['id', 'value']]
        ]);

        paths.
            should.
            eql([['baz', ['id', 'value']]]);
    });

    it('should return an empty array if nothing is relative', function () {
        var paths = rel(['foo', 'bar'], [
            [['a', 'b', 'c'], ['d', 'e', 'f']]
        ]);

        paths.should.eql([]);
        paths.length.should.equal(0);
    });
});
