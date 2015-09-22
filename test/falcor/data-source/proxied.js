/*globals describe, it*/

require('should');

describe('falcor.DataSource', function () {
    describe('ProxiedSource', function () {
        var falcor = require('falcor');
        var Collection = require('protean/utility/collection');
        var CollectionSource = require('protean/falcor/data-source/collection');
        var ProxiedSource = require('protean/falcor/data-source/proxied');

        var ds = new ProxiedSource({
            root: ['foo', 'bar'],
            source: new CollectionSource(new Collection(
                {
                    id: '0',
                    value: 'zero',
                    borg: ['{/}', 'borg', 'byId', '123']
                },
                {
                    id: '1',
                    value: 'one'
                },
                {
                    id: '2',
                    value: 'two'
                },
                {
                    id: '3',
                    value: 'three'
                },
                {
                    id: '4',
                    value: 'four'
                }
            ))
        });

        var model = new falcor.Model({ cache: {}, source: ds });

        it('should ...', function (done) {
            ds.
            // get([['foo', 'bar', 'byIndex', 'length']]).
            get([['foo', 'bar', 'byIndex', 0, ['value', 'borg']]]).
                subscribe(
                    function (graph) {
                        console.log(JSON.stringify(graph, null, 4));
                    },
                    function (error) {
                        throw error;
                    },
                    function () {
                        console.log(JSON.stringify(model.getCache(), null, 4));
                        done();
                    }
                );
        });
    });
});
