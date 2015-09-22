/*globals describe, it, before, beforeEach*/

describe('falcor', function () {
    describe.skip('PartitionedDataSource', function () {
        // var falcor = require('protean/falcor');
        // var Model = falcor.Model;
        // var PartitionedDataSource = require('protean/falcor/data-source/partitioned');
        // var LocalDataSource = require('protean/falcor/data-source/local');
        // var userSource, coreSource, model;

        before(function () {
            userSource = new LocalDataSource({ storageKey: 'foo' });
            coreSource = new LocalDataSource({ storageKey: 'bar' });

            userSource.clear();
            coreSource.clear();
        });

        beforeEach(function () {
            model = new Model({
                source: new PartitionedDataSource({
                    partitions: {
                        user: userSource,
                        core: coreSource
                    },
                    reads: ['user', 'core'],
                    writes: ['user', 'core']
                })
            });
        });

        describe('#set', function () {
            it('should set the local storage key', function (done) {
                model.
                    setValue(['henry'], { id: 'henry' }).
                    subscribe(
                        function () {
                            // console.log(JSON.parse(localStorage.getItem('foo')));
                            // console.log(JSON.parse(localStorage.getItem('bar')));
                        },
                        null,
                        done
                    );
            });
        });

        describe('#get', function () {
            it('should get the local storage key', function (done) {
                model.
                    boxValues().
                    get(['henry']).
                    subscribe(
                        function (value) {
                            console.log(JSON.stringify(value, null, 4));
                        },
                        function (error) {
                            throw error;
                            done();
                        },
                        done
                    );
            });
        });
    });
});
