/*globals describe, it*/

require('should');

describe('ProxiedSource', function () {
    var Collection       = require('protean/utility/collection');
    var CollectionSource = require('protean/falcor/data-source/collection');
    var ProxiedSource    = require('protean/falcor/data-source/proxied');

    var ds = new ProxiedSource({
        root: ['foo', 'bar'],
        source: new CollectionSource(new Collection(
            {
                id: '0',
                value: 'zero',
                borg: ['{/}', 'borg', 'byId', '0']
            },
            {
                id: '1',
                value: 'one',
                borg: ['{/}', 'borg', 'byId', '1']
            },
            {
                id: '2',
                value: 'two',
                borg: ['{/}', 'borg', 'byId', '2']
            }
        ))
    });

    // var model = new falcor.Model({ cache: {}, source: ds });

    it('should be offset by the given path', function (done) {
        var expected = {
            jsonGraph: {
                foo: {
                    bar: {
                        byIndex: {
                            0: {
                                $type: 'ref',
                                value: ['foo', 'bar', 'byId', '0']
                            }
                        },
                        byId: {
                            0: {
                                value: {
                                    $type: 'atom',
                                    value: 'zero'
                                },
                                borg: {
                                    $type: 'ref',
                                    value: ['borg', 'byId', '0']
                                }
                            }
                        }
                    }
                }
            }
        };

        ds.
        get([['foo', 'bar', 'byIndex', 0, ['value', 'borg']]]).
            subscribe(
                function (graph) {
                    graph.should.eql(expected);
                },
                function (error) {
                    throw error;
                },
                function () {
                    done();
                }
            );
    });
});
