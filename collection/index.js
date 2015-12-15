var classify = require('protean/function/classify');
var augment  = require('protean/object/augment');
var pipe     = require('ramda/src/pipe');
var forEach  = require('ramda/src/forEach');
var reduce   = require('ramda/src/reduce');
var filter   = require('ramda/src/filter');
var toPairs  = require('ramda/src/toPairs');
var apply    = require('ramda/src/apply');
var merge    = require('ramda/src/merge');
var clone    = require('ramda/src/clone');
var props    = require('ramda/src/props');
var zip      = require('ramda/src/zip');
var isArray  = Array.isArray;
/**
 * **File:** [collection/index](collection/index)
 *
 * @class Collection
 * @extends ProteanClass
 * @constructor
 * @param {Object|Array<KeyValueArray>} entries
 */
function Collection (entries) {
    /** @private */
    this._keys   = [];
    /** @private */
    this._values = {};

    if (entries) {
        forEach(
            apply(this.set.bind(this)),
            isArray(entries) ? entries : toPairs(entries)
        );
    }
}

augment(Collection,/** @lends Collection */{
    create: function (protoOrEntries, entries) {
        var len = arguments.length;
        var proto   = len > 1 ? protoOrEntries : this.prototype;
        var entries = len > 1 ? entries : protoOrEntries;

        var instance = Object.create(proto);
        instance.constructor.call(instance, entries);

        return instance;
    }
});

module.exports = classify(Collection,/** @lends Collection# */{
    /**
     * @property {Integer}
     * @readonly
     */
    get size () { return this._keys.length; },
    /**
     * @property {String[]}
     * @readonly
     */
    get keys () { return this._keys.slice(); },
    /**
     * @property {Object[]}
     * @readonly
     */
    get values () { return props(this._keys, this._values); },
    /**
     * @property {Array<KeyValueArray>}
     * @readonly
     */
    get entries () { return zip(this._keys, this.values); },
    /**
     * @param {String} key
     * @returns {Boolean}
     */
    has: function (key) { return !!this._values[key]; },
    /**
     * @param {String} key
     * @returns {undefined|Object}
     */
    get: function (key) { return this._values[key]; },
    /**
     * @param {String} key
     * @param {Object} value
     * @returns {undefined|Object} the old value, if any
     */
    set: function (key, value) {
        var keys = this._keys;
        var values = this._values;

        if (!this.has(key)) {
            keys.push(key);
        }

        var old = values[key];
        values[key] = value;

        return old;
    },
    /**
     * @param {Integer} idx
     * @returns {undefined|Object}
     */
    at: function (idx) { return this._values[this._keys[idx]]; },
    /**
     * @param {String} key
     * @returns {Integer}
     */
    indexOf: function (key) { return this._keys.indexOf(key); },
    /**
     * @param {String} key
     * @returns {undefined|Object} the removed value, if any
     */
    remove: function (key) {
        var keys   = this._keys;
        var values = this._values;
        var value  = values[key];

        if (this.has(key)) {
            var idx = keys.indexOf(key);
            value   = values[key];
            keys.splice(idx, 1);
            delete values[key];
        }

        return value;
    },
    /**
     * @param {Integer} idx
     * @returns {undefined|Object} the removed value, if any
     */
    removeAt: function (idx) { return this.remove(this._keys[idx]); },
    /**
     * Remove all key/values
     */
    clear: function () { forEach(this.remove.bind(this), this._keys); },
    /**
     * @param {Boolean} [deep]
     * @returns {Collection}
     */
    clone: function (deep) {
        return Collection.create(this, this.values().map(function (entry) {
            return deep ? clone(entry) : entry;
        }));
    },
    /**
     * Clear and remove instance properties
     */
    dispose: function () {
        this.clear();
        this._keys = this._values = null;
    },
    /**
     * @returns {Array<Object>}
     */
    toArray: function () { return this.values; },
    /**
     * @returns {Object}
     */
    toObject: function () { return merge({}, this._values); },
    /**
     * @returns {Object}
     */
    toJSON: function () { return this.toObject(); },
    /**
     * @param {Function} selector
     */
    forEach: function (selector) { forEach(selector, this.entries); },
    /**
     * @param {Function} selector
     * @returns {Collection}
     */
    map: function (selector) {
        var copy = Collection.create(this);
        forEach(pipe(selector, apply(copy.set.bind(copy))), this.entries);
        return copy;
    },
    /**
     * @param {Function} selector
     * @param {Object} initial
     * @returns {Object}
     */
    reduce: function (selector, initial) {
        return reduce(selector, initial, this.entries);
    },
    /**
     * @param {Function} predicate
     * @returns {Collection}
     */
    filter: function (predicate) {
        return Collection.create(this, filter(predicate, this.entries));
    },
    /**
     * @param {Function} predicate
     * @returns {undefined|Object}
     */
    find: function (predicate) { return find(predicate, this.values); },
    /**
     * @param {...Collection} collection
     * @returns {Collection}
     */
    concat: function () {
        var collections = Array.prototype.slice.call(arguments);
        Collection.create(
            this,
            [this].
                concat(collections).
                reduce(function (acc, cur) {
                    acc.push.apply(acc, cur.entries);
                    return acc;
                }, [])
        );
    }
});
