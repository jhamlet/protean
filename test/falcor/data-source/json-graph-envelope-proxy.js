/*globals describe, it, beforeEach*/

require('should');

describe('JSONGraphEnvelopeProxy', function () {
    var JSONGraphEnvelopeProxy = require('protean/falcor/data-source/json-graph-envelope-proxy');

    describe('#pending', function () {
        var envelope;

        beforeEach(function () {
            var paths = [
                [['foo', 'bar'], 'baz', ['value', 'meat']]
            ];
            envelope = new JSONGraphEnvelopeProxy();
            envelope.expect(paths);
        });

        it('should reflect all pending paths', function () {
            envelope.
            pending.
                should.
                eql([
                    ['foo', 'baz', 'value'],
                    ['foo', 'baz', 'meat'],
                    ['bar', 'baz', 'value'],
                    ['bar', 'baz', 'meat']
                ]);
        });

        it('should reflect outstanding paths', function () {
            envelope.
                set(['foo', 'baz', 'value'], { $type: 'atom', value: 'baz' });
            envelope.
                set(['foo', 'baz', 'meat'], { $type: 'atom', value: 'baz' });

            envelope.
            pending.
                should.
                eql([
                    ['bar', 'baz', 'value'],
                    ['bar', 'baz', 'meat']
                ]);
        });
    });

    describe('#valueOf()', function () {
        var envelope;

        beforeEach(function () {
            var paths = [
                [['foo', 'bar'], 'baz', ['value', 'meat']]
            ];
            envelope = new JSONGraphEnvelopeProxy();
            envelope.expect(paths);

            envelope.set({
                foo: {
                    baz: {
                        value: {
                            $type: 'atom',
                            value: 'foo-baz'
                        },
                        meat: {
                            $type: 'atom',
                            value: 'foo-baz-meat'
                        }
                    }
                },
                bar: {
                    baz: {
                        value: {
                            $type: 'atom',
                            value: 'bar-baz'
                        },
                        meat: {
                            $type: 'atom',
                            value: 'bar-baz-meat'
                        }
                    }
                }
            });
        });

        it('#paths should reflect the fulfilled paths', function () {
            envelope.
            valueOf().
            paths.
                map(function (path) {
                    path.map(function (segment, idx) {
                        switch (idx) {
                            case 0:
                                segment.length.should.equal(2);
                                segment.should.containEql('foo');
                                segment.should.containEql('bar');
                                break;
                            case 1:
                                segment.should.equal('baz');
                                break;
                            case 2:
                                segment.length.should.equal(2);
                                segment.should.containEql('meat');
                                segment.should.containEql('value');
                                break;
                        }
                    });
                });
        });

        it('#jsonGraph should reflect fulfilled paths', function () {
            envelope.
            valueOf().
            jsonGraph.
                should.
                eql({
                    foo: {
                        baz: {
                            value: {
                                $type: 'atom',
                                value: 'foo-baz'
                            },
                            meat: {
                                $type: 'atom',
                                value: 'foo-baz-meat'
                            }
                        }
                    },
                    bar: {
                        baz: {
                            value: {
                                $type: 'atom',
                                value: 'bar-baz'
                            },
                            meat: {
                                $type: 'atom',
                                value: 'bar-baz-meat'
                            }
                        }
                    }
                });
        });
    });
});
