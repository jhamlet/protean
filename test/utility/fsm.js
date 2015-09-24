/*globals describe, it */
var FSM = require('protean/utility/fsm');

require('should');

function createFSM (start, states, stateless) {
    return new FSM({
        initial: start,
        stateless: stateless,
        states: states || {
            start: {
                foo: 'second',
                bar: 'third'
            },
            second: {
                bar: 'third',
                foo: 'start'
            },
            third: {
                done: 'finished'
            },
            finished: {
                restart: 'start'
            }
        }
    });
}

describe('FiniteStateMachine', function () {
    describe('#constructor(opts)', function () {
        it('should have an initial state', function () {
            createFSM('start').currentState.should.equal('start');
        });

        it('should throw an error if no initial state', function () {
            (function () { createFSM(); }).
                should.throw();
        });

        it('should not throw an error if stateless', function () {
            (function () { createFSM(null, null, true); }).
                should.not.throw();
        });
    });

    describe('#transitions', function () {
        it('should emit transition objects', function (done) {
            var fsm = createFSM('start');

            fsm.
            transitions.
                subscribe(
                    function (t) {
                        // console.log(JSON.stringify(t));
                    },
                    function (error) {
                        throw error;
                    },
                    done
                );

            fsm.input('foo');
            fsm.input('bar');
            fsm.input('done');
            fsm.input('restart');
            fsm.onCompleted();
        });
    });
});
