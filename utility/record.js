var classify = require('protean/function/classify');
var keys = require('lodash/object/keys');
/**
 * **File:** [utility/record.js](utility/record.js)
 *
 * @class Record
 * @extends ProteanClass
 * @param {Object} [data]
 */
function Record (data) {
    this.keys = [];
    this.values = {};
    data && this.merge(data);
}

module.exports = classify(Record,/** @lends Record# */{
    /**
     * @property {Integer}
     * @readonly
     */
    get length () { return this.keys.length; },
    /**
     * @param {String} key
     * @returns {Mixed}
     */
    get: function (key) { return this.values[key]; },
    /**
     * @param {String|Record|Object} keyOrRecord
     * @param {Mixed} [value]
     * @returns {Record}
     */
    set: function (keyOrRecord, value) {
        var keys = this.keys;
        var values = this.values;

        if (typeof keyOrRecord !== 'string') {
            return this.merge(keyOrRecord);
        }

        if (!this.has(keyOrRecord)) {
            keys.push(keyOrRecord);
        }

        values[keyOrRecord] = value;

        return this;
    },
    /**
     * @param {Record|Object} record
     * @returns {Record}
     */
    merge: function (record) {
        if (record instanceof Record) {
            return this.mergeRecord(record);
        }

        keys(record).
            forEach(function (key) { this.set(key, record[key]); }, this);

        return this;
    },
    /**
     * @param {String} key
     * @returns {Mixed}
     */
    remove: function (key) {
        var keys = this.keys;
        var values = this.values;
        var value;

        if (this.has(key)) {
            value = values[key];
            delete values[key];
            keys.splice(keys.indexOf(key), 1);
        }

        return value;
    },
    /**
     * @param {String} key
     * @returns {Boolean}
     */
    has: function (key) { return this.values.hasOwnProperty(key); },
    /**
     * @returns {Record}
     */
    clear: function () {
        this.keys.slice().forEach(this.remove.bind(this));
        return this;
    },
    /**
     * @param {Integer} idx
     * @returns {String}
     */
    key: function (idx) { return this.keys[idx]; },
    /**
     * @returns {Object}
     */
    valueOf: function () { return this.values; },
    /**
     * @param {Object} [values]
     * @returns {Record}
     */
    clone: function (values) {
        var copy = new Record(this.values);
        values && copy.merge(values);
        return copy;
    }
});

