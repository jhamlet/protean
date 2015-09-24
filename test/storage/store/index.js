/*globals describe, it, beforeEach, afterEach*/

require('should');

[ ['Memory', require('protean/storage/store/memory')],
    ['Local', require('protean/storage/store/local')],
    ['Session', require('protean/storage/store/session')]
].
forEach(function (args) {
    var pkg = args[0] + 'Store';
    var store = args[1];

    beforeEach(function () { store.clear(); });
    afterEach(function () { store.clear(); });

    describe(pkg, function () {

        describe('#getItem(key)', function () {
            it('should return null if value does not exist for key', function () {
                var value = store.getItem('foo');
                (value === null).should.be.true;
            });
        });

        describe('#setItem(key, value)', function () {
            it('should store the value as a string', function () {
                store.setItem('foo', true);
                store.getItem('foo').should.equal('true');
            });
        });

        describe('#removeItem(key)', function () {
            it('should remove the given key', function () {
                store.setItem('foo', 'foo');
                store.length.should.equal(1);
                store.removeItem('foo');
                store.length.should.equal(0);
            });
        });

        describe('#clear()', function () {
            it('should remove all keys and values', function () {
                store.setItem('foo', 'foo');
                store.setItem('bar', 'bar');
                store.length.should.equal(2);
                store.clear();
                store.length.should.equal(0);
            });
        });

        describe('#key(idx)', function () {
            it('should retrieve keys in reverse order', function () {
                var expected = ['foo', 'bar'];

                expected.
                    forEach(function (item) {
                        store.setItem(item, item);
                    });

                store.length.should.equal(expected.length);

                expected.
                    slice().
                    reverse().
                    forEach(function (e, i) {
                        store.key(i).should.equal(e);
                    });
            });
        });
    });
});
