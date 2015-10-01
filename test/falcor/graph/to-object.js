/*globals describe, it */

require('should');

describe('Falcor.Path.toObject()', function () {

    var toObject = require('protean/falcor/graph/to-object');

    it('should turn a JSONGraph into a plain object', function () {
        var graph = {
            foo: {
                bar: {
                    id: {
                        $type: 'atom',
                        value: 'one'
                    },
                    value: {
                        $type: 'atom',
                        value: 'foo-bar-one'
                    },
                    reference: {
                        $type: 'ref',
                        value: ['foo', 'zed', 0]
                    }
                },
                zed: {
                    0: {
                        value: {
                            $type: 'atom',
                            value: 'foo-zed-0'
                        }
                    }
                }
            }
        };

        var expected = {
            foo: {
                bar: {
                    id: 'one',
                    value: 'foo-bar-one',
                    reference: ['foo', 'zed', 0]
                },
                zed: {
                    0: {
                        value: 'foo-zed-0'
                    }
                }
            }
        };

        toObject(graph).should.eql(expected);
    });
});
