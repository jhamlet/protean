/*globals describe, it*/
var should = require('should'),
    Machine = require('../lib');

function onError (error) { throw error; }

describe('ProteanFiniteStateMachine', function () {
    describe('#constructor()', function () {
        it('should throw an error if not given initial state', function () {
            var m;
            (function () { m = new Machine(); }).should.throw;
            (function () { m = new Machine({ initial: 'foo' }); }).should.throw;
            (function () {
                m = new Machine({ stateless: true });
            }).should.not.throw;
            (function () {
                m = new Machine({
                    initial: 'foo',
                    states: { foo: {} }
                });
                m.current.name.should.equal('foo');
            }).should.not.throw;
        });
    });

    describe('#valueOf()', function () {
        it('should ', function () {
            var m = new Machine({
                    initial: 'foo',
                    states: {
                        foo: { triggers: { tick: 'bar' } },
                        bar: { triggers: { tock: 'foo' } }
                    }
                });

            m.valueOf().should.eql({
                initial: 'foo',
                stateless: false,
                states: {
                    foo: { name: 'foo', triggers: { tick: 'bar' } },
                    bar: { name: 'bar', triggers: { tock: 'foo' } }
                }
            });
        });
    });

    describe('transitions', function () {
        it('should emit the transitions', function () {
            var m = new Machine({
                    initial: 'foo',
                    states: {
                        foo: { triggers: { tick: 'bar' } },
                        bar: { triggers: { tock: 'foo' } }
                    }
                }),
                count = 0;

            m.subscribe(
                function (transition) {
                    // console.log('transition: %j', transition);
                    switch (count) {
                    case 0:
                        transition.trigger.should.equal('tick');
                        transition.from.should.equal('foo');
                        transition.to.should.equal('bar');
                        break;
                    case 1:
                        transition.trigger.should.equal('tock');
                        transition.from.should.equal('bar');
                        transition.to.should.equal('foo');
                        break;
                    }
                    count++;
                },
                onError,
                function () {
                    count.should.equal(2);
                }
            );

            m.current.should.equal('foo');

            m.onNext('tick');
            m.onNext('tock');
        });
    });
});

