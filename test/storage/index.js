/*globals describe, it*/

require('should');

describe('Storage', function () {
    var Storage = require('protean/storage').Storage;
    var storage = new Storage({
        store: require('protean/storage/store/memory'),
        json: JSON
    });

    describe('#getItem(key)', function () {
        it('should return null if value does not exist for key', function () {
            storage.clear();
            var value = storage.getItem('foo');
            (value === null).should.be.true;
        });
    });

    describe('#setItem(key, value)', function () {
        it('should store the value as a string', function () {
            storage.clear();
            storage.setItem('foo', true);
            storage.getItem('foo').should.equal('true');
        });
    });

    describe('#getJSON(key, value)', function () {
        it('should retrieve the value as true', function () {
            storage.clear();
            storage.setItem('foo', true);
            storage.getJSON('foo').should.equal(true);
        });
    });

    describe('#setJSON(key, value)', function () {
        it('should store the value as a JSON', function () {
            var value = { foo: ['foo', 'bar'] };
            storage.clear();
            storage.setJSON('foo', value);
            storage.getJSON('foo').should.eql(value);
        });
    });

    describe('#removeItem(key)', function () {
        it('should remove the given key', function () {
            storage.clear();
            storage.setItem('foo', 'foo');
            storage.length.should.equal(1);
            storage.removeItem('foo');
            storage.length.should.equal(0);
        });
    });

    describe('#clear()', function () {
        it('should remove all keys and values', function () {
            storage.clear();
            storage.setItem('foo', 'foo');
            storage.setItem('bar', 'bar');
            storage.length.should.equal(2);
            storage.clear();
            storage.length.should.equal(0);
        });
    });

    describe('#key(idx)', function () {
        it('should retrieve keys in reverse order', function () {
            storage.clear();

            var expected = ['foo', 'bar'];

            expected.
                forEach(function (item) {
                    storage.setItem(item, item);
                });

            storage.length.should.equal(expected.length);

            expected.
                slice().
                reverse().
                forEach(function (e, i) {
                    storage.key(i).should.equal(e);
                });
        });
    });
});
