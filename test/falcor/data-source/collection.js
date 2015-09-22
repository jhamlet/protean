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
                ds.
                get([['test', 'byId', ['foo', 'bar', 'baz'], 'value']]).
                    subscribe(
                        function (json) {
                            console.log(JSON.stringify(json, null, 4));
                        },
                        function (error) {
                            throw error;
                        },
                        done
                    );
            });

            it('byIndex', function (done) {
                ds.
                get([['test', 'byIndex', { to: 2 }, ['id', 'value']]]).
                    subscribe(
                        function (json) {
                            console.log(JSON.stringify(json, null, 4));
                        },
                        function (error) {
                            throw error;
                        },
                        done
                    );
            });

            it('length', function (done) {
                ds.
                get([['test', 'byIndex', 'length']]).
                    subscribe(
                        function (json) {
                            console.log(JSON.stringify(json, null, 4));
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
                        function (json) {
                            var rec = collection.get('foo');

                            var value = rec.get('value');
                            
                            value.should.equal('foo-2');

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
                        function (json) {
                            collection.get('foo').get('value').should.equal('foo-3');
                            collection.get('bar').get('value').should.equal('bar-3');
                            collection.get('baz').get('value').should.equal('baz-3');
                            console.log(JSON.stringify(json, null, 4));
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
