var ProteanSubject = require('protean-subject'),
    State = require('./state');
/**
 * A finite state machine Rx.Subject.
 *
 * Takes in `action` strings and then will change state based on the current
 * state.
 *
 * Emits {@link FiniteStateMachine~Transition} objects.
 *
 * @class ProteanFiniteStateMachine
 * @extends external:ProteanSubject
 * @param {Object} [opts]
 * @param {String} [opts.initial]
 * @param {Object<String, ProteanFiniteState~StateOptions>} [opts.states={}]
 * @param {Boolean} [opts.stateless=false] Allow the machine to be in a
 * stateless state. Default false.
 * @throws {Error} "ProteanFiniteStateMachine needs an initial state" If no
 * initial state is given and `stateless` is false.
 */
function FiniteStateMachine (opts) {
    FiniteStateMachine.superclass.call(this);

    opts = opts || {};

    this._states = {};

    this.stateless = opts.stateless || false;

    if (opts.states) {
        Object.
            keys(opts.states).
            forEach(function (name) {
                this.add(name, opts.states[name]);
            }, this);
    }

    if (opts.initial) {
        this.initial = opts.initial;
        this.enter(opts.initial);
    }

    if (opts.current) {
        this.enter(opts.current);
    }

    if (!this.stateless && !this._current) {
        throw new Error('ProteanFiniteStateMachine needs an initial state');
    }
}
//------------------------------------------------------------------------------
// Static Members
//------------------------------------------------------------------------------
/**
 * @member ProteanFiniteStateMachine.State
 * @type ProteanFiniteState
 */
FiniteStateMachine.State = State;
//------------------------------------------------------------------------------
// Instance Members
//------------------------------------------------------------------------------
module.exports = ProteanSubject.extend(FiniteStateMachine,
    /** @lends ProteanFiniteStateMachine# */ {
    /**
     * The current state object
     * @property {ProteanFiniteState}
     */
    get current () {
        var current = this._current;
        return current && current.name;
    },

    set current (state) { this.enter(state); },
    /**
     * Get the currently available actions
     * @property {Array<String>}
     * @readonly
     */
    get actions () {
        var current = this._current;
        return (current && current.actions) || [];
    },
    /**
     * @param {String} state
     * @param {ProteanFiniteState~StateOptions} opts
     * @returns {ProteanFiniteStateMachine} the current instance
     */
    add: function (state, opts) {
        var obj;

        this.remove(state);

        if (!this._states[state]) {
            obj = new State(state, opts);
            this._states[obj.name] = obj;
        }

        return this;
    },
    /**
     * Remove the named state unless the state is the current one.
     * @param {String} state
     * @returns {ProteanFiniteStateMachine} the current instance
     */
    remove: function (state) {
        var obj = this._states[state];

        if (obj && this._current !== obj) {
            obj.destroy();
            delete this._states[state];
        }

        return this;
    },
    /**
     * @param {String} state
     * @returns {Boolean}
     */
    has: function (state) { return !!this._states[state]; },
    /**
     * @param {String} action
     * @returns {Boolean}
     */
    can: function (action) {
        var current = this._current;
        return !!(current && current.can(action));
    },
    /**
     * @param {String} state
     * @returns {ProteanFiniteState}
     */
    get: function (state) { return this._states[state]; },
    /**
     * Call a action action and apply the appropriate transition and update the
     * the current state.
     * @param {String} action
     */
    next: function (action) {
        var current = this._current,
            can = current && current.can(action),
            next;

        if (can) {
            next = this._states[current.state(action)];
            this._transition(action, current, next);
        }
    },
    /**
     * Enter the named state
     * @param {String} state
     * @returns {Boolean} whether or not the state was entered
     */
    enter: function (state) {
        var current = this._current,
            next = this._states[state],
            flag = !!(next || this.stateless);

        if (flag) {
            this._transition('enter', current, next);
        }

        return flag;
    },
    /**
     * Returns the current object-value of the state-machine
     * @returns {Object}
     */
    valueOf: function () {
        var states = this._states,
            value = {
                initial: this.initial,
                current: this._current && this._current.name,
                stateless: this.stateless,
                states:
                    Object.
                        keys(states).
                        reduce(function (acc, state) {
                            acc[state] = states[state].valueOf();
                            return acc;
                        }, {}),
            };

        return value;
    },
    /**
     */
    destroy: function () {
        var states = this._states;

        this.onCompleted();
        FiniteStateMachine.superproto.destroy.call(this);

        if (this._current) {
            this._current.destroy();
        }

        Object.
            keys(states).
            forEach(function (state) {
                states[state].destroy();
            });
    },
    /**
     * @private
     * @param {String} action
     * @param {ProteanFiniteState} from
     * @param {ProteanFiniteState} to
     * @returns {ProteanFiniteStateMachine} the current instance
     */
    _transition: function (action, from, to) {
        var transition = {
                type: action,
                from: from && from.name,
                to: to && to.name
            };

        this._current = to;
        this.notifyNext(transition);

        return this;
    }
});
/**
 * @typedef ProteanFiniteStateMachine~Transition
 * @type Object
 * @property {String} type The event name that sparked this transition
 * @property {String} from The name of the state we are transitioning from
 * @property {String} to The name of the state we are transitioning to
 */

