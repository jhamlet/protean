/*globals describe, it*/
var should = require('should'),
    Machine = require('../lib');

function onError (error) { throw error; }

describe('ProteanFiniteStateMachine', function () {
    describe('#constructor()', function () {
        it('should throw an error if not given initial state', function () {
            var m;
            // no initial, no state
            (function () { m = new Machine(); }).should.throw;
            // initial but no state
            (function () { m = new Machine({ initial: 'foo' }); }).should.throw;
            // stateless
            (function () {
                m = new Machine({ stateless: true });
            }).should.not.throw;
            // initial and state
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
        it('should return an object representation of the state machine', function () {
            var m = new Machine({
                    initial: 'foo',
                    states: {
                        foo: { actions: { tick: 'bar' } },
                        bar: { actions: { tock: 'foo' } }
                    }
                });

            m.valueOf().should.eql({
                initial: 'foo',
                current: 'foo',
                stateless: false,
                states: {
                    foo: { name: 'foo', actions: { tick: 'bar' } },
                    bar: { name: 'bar', actions: { tock: 'foo' } }
                }
            });
        });
    });

    describe('transitions', function () {
        it('should emit the transitions', function () {
            var m = new Machine({
                    initial: 'foo',
                    states: {
                        foo: { actions: { tick: 'bar' } },
                        bar: { actions: { tock: 'foo' } }
                    }
                }),
                count = 0;

            m.subscribe(
                function (transition) {
                    // console.log('transition: %j', transition);
                    switch (count) {
                    case 0:
                        transition.type.should.equal('tick');
                        transition.from.should.equal('foo');
                        transition.to.should.equal('bar');
                        break;
                    case 1:
                        transition.type.should.equal('tock');
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

