/*globals describe, it, before*/

require('should');

describe('Utility', function () {
    describe('Collection', function () {
        var Collection = require('protean/utility/collection');
        var Record = require('protean/utility/record');
        var coll;

        before(function () {
            coll = new Collection();
        });

        describe('#add(obj)', function () {
            it('should add an object as a Record', function () {
                coll.add({ id: 'foo', value: 'foo' });

                coll.length.should.equal(1);
                coll.get('foo').should.be.an.instanceof(Record);
                coll.get('foo').get('value').should.equal('foo');
            });

            it('should not add a record with the same id', function () {
                var values = { id: 'foo', value: 'foo2' };
                coll.add(values);
                coll.length.should.equal(1);
                coll.get('foo').valueOf().should.eql(values);
            });

            it('should create a unique identifier if not given one', function () {
                coll.add({ value: 'noid' });
                coll.at(coll.length - 1).get('id').should.be.an.instanceof(String);
                // console.log(JSON.stringify(coll.at(coll.length - 1).get('id')));
                // remove it so we don't muck up tests below us
                coll.removeAt(coll.length - 1);
            });
        });

        describe('#at(idx)', function () {
            it('should return the record at the given index', function () {
                var values = { id: 'bar', value: 'bar' };
                coll.add(values);
                coll.at(1).valueOf().should.eql(values);
            });
        });

        describe('#clone()', function () {
            it('should return a copy of the Collection', function () {
                var copy = coll.clone();
                copy.should.not.equal(coll);
                copy.length.should.equal(2);
                copy.get('bar').get('value').should.equal('bar');
            });
        });

        describe('#by(comparator)', function () {
            var copy;

            it('should return a clone of the Collection', function () {
                var comparator = function (a, b) {
                    var aId = a.get('id');
                    var bId = b.get('id');

                    return aId < bId ?
                        -1 :
                        aId > bId ?
                            1 :
                            0;
                };

                copy = coll.by(comparator);

                copy.should.not.equal(coll);
                copy.length.should.equal(2);
            });

            it('should keep them in the correct order', function () {
                copy.add({ id: 'aiy', value: 'aiy' });
                copy.at(0).get('value').should.equal('aiy');
                copy.keys.should.eql(['aiy', 'bar', 'foo']);
            });
        });

        describe('#clear()', function () {
            it('should remove all records', function () {
                coll.clear();
                coll.length.should.equal(0);
                coll.keys.should.eql([]);
                coll.values.should.eql({});
            });
        });
    });
});
