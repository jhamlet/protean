var classify = require('protean/function/classify');
/**
 * @class Storage
 * @implements external:Storage
 * @param {Object} opts
 * @param {external:Storage} opts.store
 * @param {JSON} opts.json
 */
function Storage (opts) {
    opts = opts || {};

    this.store = opts.store;
    this.json = opts.json;
}

module.exports = classify(Storage,/** @lends Storage# */{
    /**
     * @param {String} key
     * @returns {Mixed}
     */
    getItem: function (key) { return this.store.getItem(key); },
    /**
     * @param {String} key
     * @returns {null|Object}
     */
    getJSON: function (key) {
        return this.json.parse(this.getItem(key));
    },
    /**
     * @param {String} key
     * @param {String} value
     */
    setItem: function (key, value) { return this.store.setItem(key, value); },
    /**
     * @param {String} key
     * @param {String} value
     */
    setJSON: function (key, value) {
        return this.setItem(key, this.json.stringify(value));
    },
    /**
     * @param {String} key
     */
    removeItem: function (key) { this.store.removeItem(key); },
    /**
     */
    clear: function () { this.store.clear(); },
    /**
     * @param {Integer} idx
     * @returns {String}
     */
    key: function (idx) { return this.store.key(idx); },
    /**
     * @property {Integer}
     * @readonly
     */
    get length () { return this.store.length; }
});
