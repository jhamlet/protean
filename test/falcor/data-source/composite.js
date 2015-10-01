/*globals describe, it, beforeEach*/

require('should');

describe('CompositeSource', function () {
    var Collection = require('protean/utility/collection');
    var CollectionSource = require('protean/falcor/data-source/collection');
    var CompositeSource = require('protean/falcor/data-source/composite');
    var source, foo, bar;

    beforeEach(function () {
        foo = new Collection({ id: 'foo', value: 'foo' });
        bar = new Collection({ id: 'bar', value: 'bar' });

        source = new CompositeSource(
            [['foo'], new CollectionSource(foo)],
            [['bar'], new CollectionSource(bar)]
        );
    });

    describe('#get', function () {
        it('should get', function (done) {
            source.
                get([[['foo', 'bar'], 'byIndex', 0, ['id', 'value']]]).
                subscribe(
                    function (resp) {
                        resp.
                        jsonGraph.
                        should.
                        eql({
                            foo: {
                                byIndex: {
                                    0: {
                                        $type: 'ref',
                                        value: ['foo', 'byId', 'foo']
                                    }
                                },
                                byId: {
                                    foo: {
                                        id: {
                                            $type: 'atom',
                                            value: 'foo'
                                        },
                                        value: {
                                            $type: 'atom',
                                            value: 'foo'
                                        }
                                    }
                                }
                            },
                            bar: {
                                byIndex: {
                                    0: {
                                        $type: 'ref',
                                        value: ['bar', 'byId', 'bar']
                                    }
                                },
                                byId: {
                                    bar: {
                                        id: {
                                            $type: 'atom',
                                            value: 'bar'
                                        },
                                        value: {
                                            $type: 'atom',
                                            value: 'bar'
                                        }
                                    }
                                }
                            }
                        });
                    },
                    null,
                    done
                );
        });
    });
});
