/*globals describe, it, beforeEach */

require('should');

describe('LinkedList', function () {
    var LinkedList = require('protean/utility/linked-list');

    describe('#constructor(...args)', function () {
        it('should append any arguments to constructor', function () {
            var list = new LinkedList('foo', 'bar', 'baz');
            list.length.should.equal(3);
            list.head.data.should.equal('foo');
            list.tail.data.should.equal('baz');
        });
    });

    describe('#push()', function () {
        var list;

        beforeEach(function () {
            list = new LinkedList();
        });

        it('should return its current length', function () {
            list.push('a').should.equal(list.length);
        });

        it('should handle multiple arguments', function () {
            var args = ['foo', 'bar', 'baz'];

            list.push.apply(list, args).should.equal(3);

            list.head.data.should.equal(args[0]);
            list.tail.data.should.equal(args[2]);
        });

        it('should set the head to the tail when only length === 1', function () {
            list.push('foo');
            list.head.should.equal(list.tail);
        })
    });

    describe('#pop()', function () {
        var list;

        beforeEach(function () {
            list = new LinkedList();
            list.push('a', 'b', 'c');
        });

        it('should return the tail value', function () {
            list.pop().should.equal('c');
        });

        it('should decrement the length', function () {
            list.length.should.equal(3);
            list.pop();
            list.length.should.equal(2);
        });

        it('should set head to tail when length === 1', function () {
            list.pop();
            list.pop();
            list.head.should.equal(list.tail);
        });

        it('should head and tail to null when length === 0', function () {
            list.pop();
            list.pop();
            list.pop();
            (list.head === null && list.tail === null).should.be.true;
        });
    });

    describe('#unshift()', function () {
        var list;

        beforeEach(function () {
            list = new LinkedList();
        });

        it('should return its current length', function () {
            list.unshift('a').should.equal(list.length);
        });

        it('should handle multiple arguments', function () {
            var args = ['foo', 'bar', 'baz'];

            list.unshift.apply(list, args).should.equal(3);

            list.head.data.should.equal(args[0]);
            list.tail.data.should.equal(args[2]);
        });

        it('should set the head to the tail when only length === 1', function () {
            list.unshift('foo');
            list.head.should.equal(list.tail);
        })
    });

    describe('#shift()', function () {
        var list;

        beforeEach(function () {
            list = new LinkedList();
            list.push('a', 'b', 'c');
        });

        it('should return the head value', function () {
            list.shift().should.equal('a');
        });

        it('should decrement the length', function () {
            list.length.should.equal(3);
            list.shift();
            list.length.should.equal(2);
        });

        it('should set head to tail when length === 1', function () {
            list.pop();
            list.pop();
            list.head.should.equal(list.tail);
        });

        it('should head and tail to null when length === 0', function () {
            list.pop();
            list.pop();
            list.pop();
            (list.head === null && list.tail === null).should.be.true;
        });
    });

    describe('#at()', function () {
        var list;

        beforeEach(function () {
            list = new LinkedList('a', 'b', 'c');
        });

        it('should return the value at index', function () {
            list.at(0).should.equal('a');
        });
    });

    describe('#remove', function () {
        var list;

        beforeEach(function () {
            list = new LinkedList('a', 'b', 'c');
        });

        it('should adjust the length', function () {
            list.remove(list.head);
            list.length.should.equal(2);
        });

        it('should adjust the head', function () {
            list.remove(list.head);
            list.head.data.should.equal('b');
        });

        it('should adjust the tail', function () {
            list.remove(list.tail);
            list.tail.data.should.equal('b');
        });

        it('should adjust head and tail if length becomes 1', function () {
            list.remove(2);
            list.remove(1);
            list.head.should.equal(list.tail);
        });

        it('should null out head and tail if length becomes 0', function () {
            list.remove(2);
            list.remove(1);
            list.remove(0);
            (list.head === null && list.tail === null).
                should.be.true;
        });
    });

    describe('#insert', function () {
        var list;

        beforeEach(function () {
            list = new LinkedList('a', 'b', 'c');
        });

        it('should adjust the length', function () {
            list.remove(list.head);
            list.length.should.equal(2);
        });

        it('should adjust the head', function () {
            list.remove(list.head);
            list.head.data.should.equal('b');
        });

        it('should adjust the tail', function () {
            list.remove(list.tail);
            list.tail.data.should.equal('b');
        });
    });
});
