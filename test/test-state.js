/*globals describe, it*/
var should = require('should'),
    State = require('../lib/state.js');

describe('ProteanFiniteState', function () {
    describe('#constructor()', function () {
        it('should set appropriate properties', function () {
            var s = new State('foo', {
                    actions: {
                        'tick': 'bar'
                    }
                });

            s.name.should.equal('foo');
            s.actions.should.include('tick');
            s.can('tick').should.be.true;
            s.state('tick').should.equal('bar');
        });

        it('should create an anonymous state if not given arguments', function () {
            var s = new State();

            s.name.should.equal('anonymous');
        });

        it('should get name from options object', function () {
            var s = new State({ name: 'foo' });
            s.name.should.equal('foo');
        });
    });

    describe('#add(action, state)', function () {
        it('should add the appropriate action', function () {
            var s = new State('foo');
            s.add('tick', 'bar');
        });

        it('should not overwrite an action', function () {
            var s = new State('foo', { actions: { tick: 'bar' } });
            s.add('tick', 'baz');
            s.state('tick').should.equal('bar');
        });
    });

    describe('#remove(action)', function () {
        it('should remove an existing action', function () {
            var s = new State('foo', { actions: { tick: 'bar' } });
            s.remove('tick');
            s.can('tick').should.be.false;
        });
    });

    describe('#removeState(state)', function () {
        it('should remove all actions with the given state', function () {
            var s = new State('foo', {
                    actions: {
                        tick: 'bar',
                        tock: 'bar'
                    }
                });

            s.removeState('bar');

            s.actions.should.not.include('tick');
            s.actions.should.not.include('tock');
        });
    });

    describe('#valueOf()', function () {
        it('should return an object representation of the state', function () {
            var s = new State('foo', {
                    actions: {
                        tick: 'bar',
                        tock: 'bar'
                    }
                });

            s.valueOf().should.eql({
                name: 'foo',
                actions: {
                    tick: 'bar',
                    tock: 'bar'
                }
            });
        });
    });
});
