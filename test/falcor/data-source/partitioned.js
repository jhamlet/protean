/*globals describe, it, before, beforeEach*/

require('should');

describe('PartitionedDataSource', function () {
    var Storage           = require('protean/storage');
    var StorageSource     = require('protean/falcor/data-source/storage');
    var PartitionedSource = require('protean/falcor/data-source/partitioned');
    var userSource, coreSource, source;

    before(function () {
        userSource = new StorageSource({
            storageKey: 'foo',
            storage: new Storage({
                store: Storage.Store.local,
                json: JSON
            })
        });

        coreSource = new StorageSource({
            storageKey: 'bar',
            storage: new Storage({
                store: Storage.Store.local,
                json: JSON
            })
        });

        userSource.clear();
        coreSource.clear();
    });

    beforeEach(function () {
        source = new PartitionedSource({
            partitions: {
                user: userSource,
                core: coreSource
            },
            reads: ['user', 'core'],
            writes: ['user']
        });
    });

    describe('#set', function () {
        it('should set the user source', function (done) {
            source.
            set({
                paths: [
                    ['henry', 'id']
                ],
                jsonGraph: {
                    henry: {
                        id: {
                            $type: 'atom',
                            value: 'henry'
                        }
                    }
                }
            }).
                subscribe(
                    function () {
                        var foo =
                            userSource.
                            options.
                            storage.
                                getJSON('foo');

                        var bar =
                            coreSource.
                            options.
                            storage.
                                getJSON('bar');

                        foo.
                        henry.
                        id.
                        $type.
                            should.
                            eql('atom');
                        
                        foo.
                        henry.
                        id.
                        value.
                            should.
                            eql('henry');

                        (!bar).should.be.true;
                    },
                    null,
                    done
                );
        });
    });

    describe('#get', function () {
        it('should get the local storage key', function (done) {
            source.
            get([['henry', 'id']]).
                subscribe(
                    function (envelope) {
                        envelope.
                        jsonGraph.
                        henry.
                        id.
                        $type.
                            should.
                            equal('atom');

                        envelope.
                        jsonGraph.
                        henry.
                        id.
                        value.
                            should.
                            equal('henry');
                    },
                    null,
                    done
                );
        });
    });
});
