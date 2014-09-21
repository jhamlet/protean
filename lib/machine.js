var ProteanSubject = require('protean-subject'),
    State = require('./state');
/**
 * A finite state machine Rx.Subject.
 *
 * Takes in `trigger` strings and then will change state based on the current
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
        this.initialState = opts.initial;
        this.enter(opts.initial);
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

    set current (name) { this.enter(name); },
    /**
     * Get the currently available triggers
     * @property {Array<String>}
     * @readonly
     */
    get triggers () {
        var current = this._current;
        return (current && current.triggers) || [];
    },
    /**
     * @param {String} name
     * @param {ProteanFiniteState~StateOptions} opts
     * @returns {ProteanFiniteStateMachine} the current instance
     */
    add: function (name, opts) {
        var state;

        this.remove(name);

        if (!this._states[name]) {
            state = new State(name, opts);
            this._states[state.name] = state;
        }

        return this;
    },
    /**
     * Remove the named state. If the state is the current one, it will try to
     * exit it first, and if it does so, will then destroy the state. If it can
     * not, it will not.
     * @param {String} name
     * @returns {ProteanFiniteStateMachine} the current instance
     */
    remove: function (name) {
        var state = this._states[name];

        if (state && this._current !== state) {
            state.destroy();
            delete this._states[name];
        }

        return this;
    },
    /**
     * @param {String} name
     * @returns {Boolean}
     */
    has: function (name) { return !!this._states[name]; },
    /**
     * @param {String} name
     * @returns {ProteanFiniteState}
     */
    get: function (name) { return this._states[name]; },
    /**
     * Call a trigger action and apply the appropriate transition and update the
     * the current state.
     * @param {String} trigger
     * @returns {ProteanFiniteStateMachine} the current instance
     */
    trigger: function (trigger) {
        var current = this._current,
            can = current && current.can(trigger),
            next;

        if (can) {
            next = this._states[current.state(trigger)];
            this._transition(trigger, current, next);
        }

        return this;
    },
    /**
     * @param {String} name
     */
    next: function (trigger) {
        this.trigger(trigger);
    },
    /**
     * Enter the named state
     * @param {String} name
     * @returns {ProteanFiniteStateMachine} the current instance
     */
    enter: function (name) {
        var current = this._current,
            next = this._states[name];

        if (next || this.stateless) {
            this._transition('enter', current, next);
        }

        return this;
    },
    /**
     * Returns the current object-value of the state-machine
     */
    valueOf: function () {
        var states = this._states,
            value = {
                initial: this.initialState,
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
     * @private
     * @param {String} trigger
     * @param {ProteanFiniteState} from
     * @param {ProteanFiniteState} to
     * @returns {ProteanFiniteStateMachine} the current instance
     */
    _transition: function (trigger, from, to) {
        var transition = {
                trigger: trigger,
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
 * @property {String} trigger The trigger name that sparked this transition
 * @property {String} from The name of the state we are transitioning from
 * @property {String} to The name of the state we are transitioning to
 */

