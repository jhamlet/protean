var inherit  = require('protean/function/inherit');
var defaults = require('lodash/object/defaults');
var keys     = require('lodash/object/keys');
var pairs    = require('lodash/object/pairs');
var spread   = require('lodash/function/spread');

var Rx = require('rx');
var Observable = Rx.Observable;

/**
 * @class FiniteStateMachine
 * @extends external:Rx.Observable
 * @mixes external:Rx.Observer
 * @param {Object} [opts]
 * @param {String} [opts.initial] The initial state to begin in
 * @param {String} [opts.current] Alias for initial
 * @param {Object<String,Object>} [opts.states={}] A map of state names to
 * objects that have inputs as keys, and resulting state names as values.
 * @param {Boolean} [opts.stateless=false] Allow the machine to be in a
 * stateless state. Default false.
 * @throws {Error} "ProteanFiniteStateMachine needs an initial state" If no
 * initial state is given and `stateless` is false.
 */
function FiniteStateMachine (opts) {
    FiniteStateMachine.superclass.call(this, this._subscribe.bind(this));

    this.transitions = new Rx.ReplaySubject(1);

    opts = this.options = defaults({}, opts || { states: {} }, this.options);

    if (opts.states) {
        pairs(opts.states).
            forEach(spread(this.add.bind(this)));
    }

    if (opts.initial || opts.current) {
        this.enter(opts.current || opts.initial);
    }

    if (!opts.stateless && !this.currentState) {
        throw new Error('FiniteStateMachine needs an initial state');
    }
}

module.exports = inherit(Observable, FiniteStateMachine,/** @lends FiniteStateMachine# */{
    /**
     * Default options
     * @property {Object}
     */
    options: {
        /**
         * @property {String}
         */
        initial: null,
        /**
         * @property {String}
         */
        current: null,
        /**
         * @property {Boolean}
         */
        stateless: false,
        /**
         * @property {Object<String,Object>}
         */
        states: null
    },
    /**
     * @property {external:Rx.ReplaySubject}
     */
    transitions: null,
    /**
     * The current state
     * @property {String}
     */
    currentState: null,
    /**
     * Get the currently available inputs
     * @property {String[]}
     * @readonly
     */
    get currentInputs () {
        var current = this.options.states[this.currentState];
        return current && keys(current);
    },
    /**
     * Add a state and its available transitions
     * @param {String} name
     * @param {Object<String,String>} transitions
     * @returns {FiniteStateMachine}
     */
    add: function (name, transitions) {
        this.remove(name);
        this.options.states[name] = transitions;
        return this;
    },
    /**
     * Remove a state and its transitions
     * @param {String} name
     * @returns {FiniteStateMachine}
     */
    remove: function (name) {
        if (this.has(name)) {
            delete this.options.states[name];
        }
        return this;
    },
    /**
     * @param {String} name
     * @returns {Boolean}
     */
    has: function (name) { return this.options.states.hasOwnProperty(name); },
    /**
     * @param {String} input
     * @returns {Boolean}
     */
    can: function (input) {
        var state = this.options.states[this.currentState];
        return state && state.hasOwnProperty(input);
    },
    /**
     * @param {String} input
     * @returns {String|false} the name of the resulting state, or false
     */
    will: function (input) {
        if (this.can(input)) {
            return this.options.states[this.currentState][input];
        }
        return false;
    },
    /**
     * @param {String} input
     * @returns {Boolean}
     */
    onNext: function (input) {
        var current = this.currentState;
        var did = false;

        if (this.can(input)) {
            this.transition(input, current, this.options.states[current][input]);
            did = true;
        }

        return did;
    },
    /**
     * @param {Error} error
     */
    onError: function (error) { this.transitions.onError(error); },
    /**
     */
    onCompleted: function () { this.transitions.onCompleted(); },
    /**
     */
    dispose: function () { this.transitions.dispose(); },
    /**
     * @param {String} input
     * @returns {Boolean}
     */
    input: function (input) { return this.onNext(input); },
    /**
     * @param {String} name
     * @returns {Boolean}
     */
    enter: function (name) {
        var current = this.currentState;
        var can = this.options.states[name] || this.options.stateless;

        if (can) {
            this.transition('enter', current, name);
        }

        return can;
    },
    /**
     * @param {String} input
     * @param {String} from
     * @param {String} to
     * @returns {FiniteStateMachine}
     */
    transition: function (input, from, to) {
        var states = this.options.states;
        var origin = states[from];

        to = to || (origin && origin[input]);

        var t = {
            input: input,
            from: origin && from,
            to: to
        };

        this.currentState = to;
        this.transitions.onNext(t);

        return this;
    },
    /**
     * @returns {Object}
     */
    valueOf: function () {
        var opts = this.options;

        return {
            initial: opts.initial,
            current: this.current,
            stateless: opts.stateless,
            states: defaults({}, opts.states)
        };
    },
    /**
     * @private
     * @param {external:Rx.Observer} observer
     * @returns {external:Rx.Disposable}
     */
    _subscribe: function (observer) {
        return this.transitions.subscribe(observer);
    }
});

