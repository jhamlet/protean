/*globals describe, it, before*/

require('should');

describe('Utility', function () {
    describe('Record', function () {
        var Record = require('protean/utility/record');
        var rec;

        before(function () {
            rec = new Record({ foo: 'foo', bar: 'bar', baz: 'baz' });
        });

        describe('#length', function () {
            it('should return an number', function () {
                rec.length.should.be.a.number;
                rec.length.should.equal(3);
            });
        });

        describe('#get(key)', function () {
            it('should return the value for the given key', function () {
                rec.get('foo').should.equal('foo');
            });

            it('should return undefined if key does not exist', function () {
                (typeof rec.get('foo-bar')).should.equal('undefined');
            });
        });

        describe('#set(key, value)', function () {
            it('should set the value for the key', function () {
                var key = 'foo';
                var value = 'fub';

                rec.set(key, value);
                rec.get(key).should.equal(value);
            });

            it('should create the key if it is a new key', function () {
                var key = 'fab';
                var value = 'fab';

                rec.set(key, value);
                rec.get(key).should.equal(value);

                rec.length.should.equal(4);
            });
        });

        describe('#set(obj)', function () {
            it('should merge in all key/values', function () {
                var values = {
                    foo: 'fib',
                    bar: 'fiq',
                    baz: 'zob',
                    fab: 'fab',
                    fub: 'grub'
                };

                rec.set(values);

                rec.valueOf().should.eql(values);
            });
        });

        describe('#remove(key)', function () {
            it('should remove the given key and its value', function () {
                rec.remove('fub');
                rec.length.should.equal(4);
                (typeof rec.get('fub')).should.equal('undefined');
            });
        });

        describe('#clear()', function () {
            it('should remove all key/values', function () {
                rec.clear();
                rec.valueOf().should.eql({});
            });
        });
    });
});
