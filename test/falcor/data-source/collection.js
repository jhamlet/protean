/*globals describe, it, before*/

require('should');

describe('falcor.DataSource', function () {
    describe('CollectionSource', function () {
        var Collection = require('protean/utility/collection');
        var CollectionSource = require('protean/falcor/data-source/collection');
        var collection, path, ds;

        before(function () {
            path = ['test'];
            collection = new Collection(
                {
                    id: 'foo',
                    value: 'foo'
                },
                {
                    id: 'bar',
                    value: 'bar'
                },
                {
                    id: 'baz',
                    value: 'baz'
                }
            );
            ds = new CollectionSource(collection, path);
        });

        describe('#routes', function () {
            // it('should have routes', function () {
            // });
        });

        describe('#get(paths)', function () {
            it('byId', function (done) {
                var expected = {
                    jsonGraph: {
                        test: {
                            byId: {
                                foo: {
                                    value: {
                                        $type: 'atom',
                                        value: 'foo'
                                    }
                                },
                                bar: {
                                    value: {
                                        $type: 'atom',
                                        value: 'bar'
                                    }
                                },
                                baz: {
                                    value: {
                                        $type: 'atom',
                                        value: 'baz'
                                    }
                                }
                            }
                        }
                    }
                };

                ds.
                get([['test', 'byId', ['foo', 'bar', 'baz'], 'value']]).
                    subscribe(
                        function (json) {
                            json.
                                should.
                                eql(expected);
                        },
                        function (error) {
                            throw error;
                        },
                        done
                    );
            });

            it('byIndex', function (done) {
                var expected = {
                    jsonGraph: {
                        test: {
                            byIndex: {
                                0: {
                                    $type: 'ref',
                                    value: ['test', 'byId', 'foo']
                                },
                                1: {
                                    $type: 'ref',
                                    value: ['test', 'byId', 'bar']
                                },
                                2: {
                                    $type: 'ref',
                                    value: ['test', 'byId', 'baz']
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
                                },
                                bar: {
                                    id: {
                                        $type: 'atom',
                                        value: 'bar'
                                    },
                                    value: {
                                        $type: 'atom',
                                        value: 'bar'
                                    }
                                },
                                baz: {
                                    id: {
                                        $type: 'atom',
                                        value: 'baz'
                                    },
                                    value: {
                                        $type: 'atom',
                                        value: 'baz'
                                    }
                                }
                            }
                        }
                    }
                };

                ds.
                get([['test', 'byIndex', { to: 2 }, ['id', 'value']]]).
                    subscribe(
                        function (json) {
                            json.should.eql(expected);
                        },
                        function (error) {
                            throw error;
                        },
                        done
                    );
            });

            it('length', function (done) {
                var expected = {
                    jsonGraph: {
                        test: {
                            byIndex: {
                                length: {
                                    $type: 'atom',
                                    value: 3
                                }
                            }
                        }
                    }
                };

                ds.
                get([['test', 'byIndex', 'length']]).
                    subscribe(
                        function (json) {
                            json.should.eql(expected);
                        },
                        function (error) {
                            throw error;
                        },
                        done
                    );
            });
        });

        describe('#set(tree)', function () {
            it('should set directly', function (done) {
                ds.
                set({
                    paths: [
                        ['test', 'byId', ['foo', 'bar', 'baz'], 'value']
                    ],
                    jsonGraph: {
                        test: {
                            byId: {
                                foo: {
                                    value: 'foo-2'
                                },
                                bar: {
                                    value: 'bar-2'
                                },
                                baz: {
                                    value: 'baz-2'
                                }
                            }
                        }
                    }
                }).
                    subscribe(
                        function () {
                            collection.get('foo').get('value').should.equal('foo-2');
                            collection.get('bar').get('value').should.equal('bar-2');
                            collection.get('baz').get('value').should.equal('baz-2');
                        },
                        function (error) {
                            throw error;
                        },
                        done
                    );
            });

            it('should set through the reference', function (done) {
                ds.
                set({
                    paths: [
                        ['test', 'byIndex', [0, 1, 2], 'value']
                    ],
                    jsonGraph: {
                        test: {
                            byIndex: {
                                0: {
                                    value: 'foo-3'
                                },
                                1: {
                                    value: 'bar-3'
                                },
                                2: {
                                    value: 'baz-3'
                                }
                            }
                        }
                    }
                }).
                    subscribe(
                        function () {
                            collection.get('foo').get('value').should.equal('foo-3');
                            collection.get('bar').get('value').should.equal('bar-3');
                            collection.get('baz').get('value').should.equal('baz-3');
                        },
                        function (error) {
                            throw error;
                        },
                        done
                    );
            });
        });
    });
});
