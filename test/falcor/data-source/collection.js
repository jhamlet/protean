/*globals describe, it, before*/

require('should');

describe('CollectionSource', function () {
    var Collection = require('protean/utility/collection');
    var CollectionSource = require('protean/falcor/data-source/collection');
    var collection, ds;

    before(function () {
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
        ds = new CollectionSource(collection);
    });

    describe('#routes', function () {
        // it('should have routes', function () {
        // });
    });

    describe('#get(paths)', function () {
        it('byId', function (done) {
            var expected = {
                jsonGraph: {
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
            };

            ds.
            get([['byId', ['foo', 'bar', 'baz'], 'value']]).
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
                    byIndex: {
                        0: {
                            $type: 'ref',
                            value: ['byId', 'foo']
                        },
                        1: {
                            $type: 'ref',
                            value: ['byId', 'bar']
                        },
                        2: {
                            $type: 'ref',
                            value: ['byId', 'baz']
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
            };

            ds.
            get([['byIndex', { to: 2 }, ['id', 'value']]]).
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
                    length: {
                        $type: 'atom',
                        value: 3
                    }
                }
            };

            ds.
            get([['length']]).
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
                    ['byId', ['foo', 'bar', 'baz'], 'value']
                ],
                jsonGraph: {
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
            }).
                subscribe(
                    function () {
                        collection.get('foo').get('value').should.equal('foo-2');
                        collection.get('bar').get('value').should.equal('bar-2');
                        collection.get('baz').get('value').should.equal('baz-2');
                        // console.log('%j', arguments[0]);
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
                    ['byIndex', [0, 1, 2], 'value']
                ],
                jsonGraph: {
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

    describe('#call(path, args, refSuffixes, thisPaths)', function () {
        describe('#call([\'add\'], [{}])', function () {
            it('should add a record', function (done) {
                ds.
                call(['add'], [{ id: 'fud', value: 'fud' }]).
                    subscribe(
                        function () {
                            collection.get('fud').should.exist;
                            collection.get('fud').get('value').should.equal('fud');
                            collection.length.should.equal(4);
                        },
                        null,
                        done
                    );
            });
        });

        describe('#call([\'remove\'], [\'fud\'])', function () {
            it('should remove that record', function (done) {
                ds.
                call(['remove'], ['fud']).
                    subscribe(
                        function () {
                            (!collection.get('fud')).should.be.true;
                            collection.length.should.equal(3);
                        },
                        null,
                        done
                    );
            });
        });
    });
});
