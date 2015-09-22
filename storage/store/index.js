var classify = require('protean/function/classify');
var has = require('lodash/object/has');
/**
 * @class Store
 * @implements external:Storage
 */
function Store () {
    this.keys = [];
    this.store = {};
}

module.exports = classify(Store,/** @lends Store# */{
    /**
     * @param {String} key
     * @returns {null|String}
     */
    getItem: function (key) {
        var value = this.store[key];
        return typeof value === 'undefined' ? null : value;
    },
    /**
     * @param {String} key
     * @param {String} value
     */
    setItem: function (key, value) {
        var store = this.store;
        var keys = this.keys;

        if (!has(store, key)) {
            keys.unshift(key);
        }

        store[key] = value.toString();
    },
    /**
     * @param {String} key
     */
    removeItem: function (key) {
        var store = this.store;
        var keys = this.keys;

        if (has(store, key)) {
            delete store[key];
            keys.splice(keys.indexOf(key), 1);
        }
    },
    /**
     */
    clear: function () { this.keys.slice().forEach(this.removeItem.bind(this)); },
    /**
     * @param {Integer} idx
     * @returns {String}
     */
    key: function (idx) { return this.keys[idx]; },
    /**
     * @property {Integer}
     * @readonly
     */
    get length () { return this.keys.length; }
});
