/*globals describe, it */

require('should');

describe('Falcor.Path.fromObject()', function () {

    var fromObject = require('protean/falcor/graph/from-object');

    it('should turn a plain object into a JSONGraph', function () {
        var object = {
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

        var expected = {
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

        fromObject(object).should.eql(expected);
    });

    it('should preserve root references and errors', function () {
        var object = {
            foo: {
                bar: {
                    $type: 'ref',
                    $root: true,
                    value: ['zed', 'xes', 'yak']
                },
                baz: {
                    $type: 'error',
                    value: '{Something didn\'t work}'
                }
            }
        };

        var graph = fromObject(object);

        graph.should.not.equal(object);
        graph.should.eql(object);
    });

    it('should localize references', function () {
        var object = {
            foo: {
                bar: {
                    $type: 'ref',
                    value: ['zed', 'xes', 'yak']
                },
                baz: ['zed', 'xes', 'yak']
            }
        };

        var expected = {
            zoo: {
                yoo: {
                    foo: {
                        bar: {
                            $type: 'ref',
                            value: ['zoo', 'yoo', 'zed', 'xes', 'yak']
                        },
                        baz: {
                            $type: 'ref',
                            value: ['zoo', 'yoo', 'zed', 'xes', 'yak']
                        }
                    }
                }
            }
        };

        fromObject(object, { root: ['zoo', 'yoo'] }).should.eql(expected);
    });
});
