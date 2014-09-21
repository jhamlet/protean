var protean = require('protean');
/**
 * @class ProteanFiniteState
 * @param {String} [name]
 * @param {ProteanFiniteState~StateOptions} opts
 */
function FiniteState (name, opts) {
    if (typeof name !== 'string') {
        opts = name;
        name = null;
    }

    opts = opts || {};

    this.name = name || opts.name || 'anonymous';

    this._actions = protean.augment({}, opts.actions || {});
}

module.exports = protean.classify(FiniteState,
    /** @lends ProteanFiniteState# */{
    /**
     * @property {String}
     */
    name: null,
    /**
     * @property {Array<String>}
     * @readonly
     */
    get actions () {
        return Object.keys(this._actions);
    },
    /**
     * @param {String} action
     * @returns {Boolean}
     */
    can: function (action) { return !!this._actions[action]; },
    /**
     * Retrieve the state for the given action
     * @param {String} action
     * @returns {String}
     */
    state: function (action) { return this._actions[action]; },
    /**
     * @param {String} action
     * @param {String} state
     * @returns {FiniteState} the current instance
     */
    add: function (action, state) {
        if (!this._actions[action]) {
            this._actions[action] = state;
        }
        return this;
    },
    /**
     * @param {String} action
     * @returns {FiniteState} the current instance
     */
    remove: function (action) {
        delete this._actions[action];
        return this;
    },
    /**
     * Remove all actions with the given state
     * @param {String} state
     * @returns {FiniteState} the current instance
     */
    removeState: function (state) {
        var actions = this._actions;

        Object.
            keys(actions).
            forEach(function (action) {
                if (actions[action] === state) {
                    delete actions[action];
                }
            });

        return this;
    },
    /**
     */
    destroy: function () {
        this._actions = null;
    },
    /**
     * @returns {Object}
     */
    valueOf: function () {
        return {
            name: this.name,
            actions: this._actions
        };
    },
    /**
     * @private
     * @property {Object<String, String>}
     */
    _actions: null
});
/**
 * @typedef ProteanFiniteState~StateOptions
 * @type Object
 * @property {String} [name] The unique name of the state
 * @property {Object<String, String>} actions A mapping of actions to states
 */
