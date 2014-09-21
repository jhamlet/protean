var protean = require('protean');
/**
 * @typedef ProteanFiniteState~StateOptions
 * @type Object
 * @property {String} [name] The unique name of the state
 * @property {Object<String, String>} triggers A mapping of triggers to states
 */
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

    this._triggers = protean.augment({}, opts.triggers || {});
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
    get triggers () {
        return Object.keys(this._triggers);
    },
    /**
     * @param {String} trigger
     * @returns {Boolean}
     */
    can: function (trigger) { return !!this._triggers[trigger]; },
    /**
     * Retrieve the state for the given trigger
     * @param {String} trigger
     * @returns {String}
     */
    state: function (trigger) { return this._triggers[trigger]; },
    /**
     * @param {String} trigger
     * @param {String} state
     * @returns {FiniteState} the current instance
     */
    add: function (trigger, state) {
        if (!this._triggers[trigger]) {
            this._triggers[trigger] = state;
        }
        return this;
    },
    /**
     * @param {String} trigger
     * @returns {FiniteState} the current instance
     */
    remove: function (trigger) {
        delete this._triggers[trigger];
        return this;
    },
    /**
     * Remove all triggers with the given state
     * @param {String} state
     * @returns {FiniteState} the current instance
     */
    removeState: function (state) {
        var triggers = this._triggers;

        Object.
            keys(triggers).
            forEach(function (trigger) {
                if (triggers[trigger] === state) {
                    delete triggers[trigger];
                }
            });

        return this;
    },
    valueOf: function () {
        return {
            name: this.name,
            triggers: this._triggers
        };
    },
    /**
     * @private
     * @property {Object<String, String>}
     */
    _triggers: null
});

