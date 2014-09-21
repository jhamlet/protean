/*globals describe, it*/
var should = require('should'),
    State = require('../lib/state.js');

describe('ProteanFiniteState', function () {
    describe('#constructor()', function () {
        it('should set appropriate properties', function () {
            var s = new State('foo', {
                    triggers: {
                        'tick': 'bar'
                    }
                });

            s.name.should.equal('foo');
            s.triggers.should.include('tick');
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

    describe('#add(trigger, state)', function () {
        it('should add the appropriate trigger', function () {
            var s = new State('foo');
            s.add('tick', 'bar');
        });

        it('should not overwrite a trigger', function () {
            var s = new State('foo', { triggers: { tick: 'bar' } });
            s.add('tick', 'baz');
            s.state('tick').should.equal('bar');
        });
    });

    describe('#remove(trigger)', function () {
        it('should remove an existing trigger', function () {
            var s = new State('foo', { triggers: { tick: 'bar' } });
            s.remove('tick');
            s.can('tick').should.be.false;
        });
    });

    describe('#removeState(state)', function () {
        it('should remove all triggers with the given state', function () {
            var s = new State('foo', {
                    triggers: {
                        tick: 'bar',
                        tock: 'bar'
                    }
                });

            s.removeState('bar');

            s.triggers.should.not.include('tick');
            s.triggers.should.not.include('tock');
        });
    });

    describe('#valueOf()', function () {
        it('should return an object representation of the state', function () {
            var s = new State('foo', {
                    triggers: {
                        tick: 'bar',
                        tock: 'bar'
                    }
                });

            s.valueOf().should.eql({
                name: 'foo',
                triggers: {
                    tick: 'bar',
                    tock: 'bar'
                }
            });
        });
    });
});
