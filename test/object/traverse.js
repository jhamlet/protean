/*globals describe, it */

require('should');

describe('Protean.traverse(obj, fn)', function () {
    var traverse = require('protean/object/traverse');

    it('should not traverse core values', function () {
        var results = [];
        var visitor = function (path) { results.push(path); };
        var tests = [
            { foo: 'string' },
            { foo: null },
            'string',
            5,
            null,
            true,
            false
        ];

        var expected = [
            [ [], ['foo'] ],
            [ [], ['foo'] ],
            [ [] ],
            [ [] ],
            [ [] ],
            [ [] ],
            [ [] ]
        ];

        tests.
            forEach(function (test, idx) {
                results.length = 0;
                traverse(test, visitor);
                results.should.eql(expected[idx]);
            });
    });

    it('should traverse arrays', function () {
        var obj = {
            list: [ { value: 0 }, { value: 1 }, { value: 2 } ],
        };

        var expected = [
            [],
            ['list'],
            ['list', '0'],
            ['list', '0', 'value'],
            ['list', '1'],
            ['list', '1', 'value'],
            ['list', '2'],
            ['list', '2', 'value']
        ];

        var results = [];

        traverse(obj, function (path) { results.push(path); });

        results.should.eql(expected);
    });

    it('should to a post-traversal if told to do so', function () {
        var obj = { foo: { bar: { baz: 'baz' } } };

        var expected = [
            ['foo', 'bar', 'baz'],
            ['foo', 'bar'],
            ['foo'],
            []
        ];

        var results = [];

        traverse(obj, function (path) { results.push(path); }, true);

        results.should.eql(expected);
    });
});
