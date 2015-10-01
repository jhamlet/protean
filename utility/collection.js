var classify = require('protean/function/classify');
var guid     = require('protean/utility/guid');
var toArray  = require('lodash/lang/toArray');
var Record   = require('./record');
/**
 * **File:** [utility/collection.js](utility/collection.js)
 *
 * @class Collection
 * @extends ProteanClass
 * @param {...Record|Object} [rec]
 */
function Collection () {
    this.keys = [];
    this.values = {};
    toArray(arguments).forEach(this.add.bind(this));
}

Collection.fromArray = function (list) {
    var coll = Object.create(Collection.prototype);
    Collection.apply(coll, list);
    return coll;
};

module.exports = classify(Collection,/** @lends Collection# */{
    /**
     * The unique identifier key to use for records
     * @property {String}
     * @default 'id'
     */
    idKey: 'id',
    /**
     * Used to keep the collection ordered when adding items
     * @property {Function}
     */
    comparator: null,
    /**
     * @property {Integer}
     * @readonly
     */
    get length () { return this.keys.length; },
    /**
     * @property {Array<Record>}
     * @readonly
     */
    get records () {
        var values = this.values;
        return this.
            keys.
            map(function (key) { return values[key]; });
    },
    /**
     * @param {String} id
     * @returns {Boolean}
     */
    has: function (id) { return this.values.hasOwnProperty(id); },
    /**
     * @param {Object|Record} obj
     * @returns {Record} The record just created
     */
    add: function (obj) {
        var keys     = this.keys;
        var values   = this.values;
        var idKey    = this.idKey;
        var isRecord = obj instanceof Record;
        var record   = isRecord ? obj : new Record(obj);
        var id       = record.get(idKey);

        if (!id) {
            id = guid();
            record.set(idKey, id);
        }

        if (this.has(id)) {
            this.remove(id);
        }

        values[id] = record;
        keys.push(id);

        this.comparator && this.sort();

        return record;
    },
    /**
     * @param {String} id
     * @returns {Record}
     */
    remove: function (id) {
        var keys = this.keys;
        var values = this.values;
        var value;

        if (this.has(id)) {
            value = values[id];
            delete values[id];
            keys.splice(keys.indexOf(id), 1);
        }

        return value;
    },
    /**
     * @param {Integer} idx
     * @returns {Record}
     */
    at: function (idx) { return this.values[this.keys[idx]]; },
    /**
     * @param {Integer} idx
     * @returns {Record}
     */
    removeAt: function (idx) { return this.remove(this.keys[idx]); },
    /**
     * @param {String} id
     * @returns {Record}
     */
    get: function (id) { return this.values[id]; },
    /**
     * @param {String|Record} idOrRecord
     * @returns {Integer}
     */
    indexOf: function (idOrRecord) {
        var id = typeof idOrRecord === 'string' ?
                idOrRecord :
                idOrRecord.get(this.idKey);

        return this.keys.indexOf(id);
    },
    /**
     * @returns {Collection}
     */
    clear: function () {
        this.keys.slice().forEach(this.remove.bind(this));
        return this;
    },
    /**
     * @returns {Array<Object>}
     */
    valueOf: function () {
        return this.
            records.
            map(function (rec) { return rec.valueOf(); });
    },
    /**
     * @param {Function} predicate
     * @returns {Record}
     */
    find: function (predicate) {
        var keys = this.keys;
        var values = this.values;
        var len = keys.length;
        var i = 0;
        var record;

        for (; i < len; i++) {
            record = values[keys[i]];
            if (predicate(record, i, this)) {
                return record;
            }
        }
    },
    /**
     * Mutates the collection to sorted based on the given comparator, or the
     * one defined on itself.
     * @param {Function} [comparator=this.comparator]
     * @returns {Collection}
     */
    sort: function (comparator) {
        var keys = this.keys;
        var values = this.values;
        comparator = comparator || this.comparator;
        comparator &&
            keys.sort(function (a, b) {
                return comparator(values[a], values[b]);
            });
        return this;
    },
    /**
     * @param {Function} iteratee
     * @returns {Collection}
     */
    map: function (iteratee) {
        return Collection.fromArray(
            this.
            records.
                map(function (rec, idx) { return iteratee(rec, idx, this); }, this)
        );
    },
    /**
     * @param {Function} iteratee
     */
    each: function (iteratee) { this.map(iteratee); },
    /**
     * @param {Function} predicate
     * @returns {Collection}
     */
    where: function (predicate) {
        return Collection.fromArray(
            this.
            records.
                filter(function (rec, idx) { return predicate(rec, idx, this); }, this)
        );
    },
    /**
     * @param {Function} comparator
     * @returns {Collection}
     */
    by: function (comparator) {
        var copy = this.clone();
        copy.comparator = comparator;
        copy.sort();
        return copy;
    },
    /**
     * Returns a copy of the collection with all the records (the records are
     * not cloned)
     * @returns {Collection}
     */
    clone: function () {
        return Collection.fromArray(this.records);
    },
    /**
     * Returns a Collection with all records cloned.
     * @returns {Collection}
     */
    cloneDeep: function () {
        return Collection.
            fromArray(
                this.
                records.
                    map(function (r) { return r.clone(); })
            );
    }
});
