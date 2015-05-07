var classify = require('./classify'),
    _ = require('./underscore');

/**
 * @class MapProxy
 * @param {String|Mixed} [...keyValue]
 */
function MapProxy () {
    this.clear();
    this.extend(_.enmap.apply(_, arguments));
}

module.exports = classify(MapProxy,/** @lends MapProxy# */{
    /**
     * Clear out all keys and values
     */
    clear: function () {
        this._keys = [];
        this._map  = Object.create(null);
    },
    /**
     * Merge all given objects into this map
     * @param {Object|MapProxy} ...map
     */
    extend: function (/*...map*/) {
        var keys = this._keys,
            map = this._map,
            changes =
                _.
                chain(arguments).
                toArray().
                map(_.valueOf).
                map(_.pairs).
                flatten(1).
                object().
                value();

        keys.push.apply(keys, _.difference(_.keys(changes), _.keys(map)));
        _.extend(this._map, changes);
    },
    /**
     * @param   {String}  key
     * @returns {Boolean}
     */
    has: function (key) { return _.has(this._map, key); },
    /**
     * @param {String} key
     * @returns {Mixed}
     */
    get: function (key) { return this._map[key]; },
    /**
     * @param {String} key
     * @param {Mixed}  value
     */
    set: function (key, value) {
        if (!this.has(key)) {
            this._keys.push(key);
        }
        this._map[key] = value;
    },
    /**
     * @param {String} key
     */
    delete: function (key) {
        var keys = this._keys;

        delete this._map[key];
        keys.splice(keys.indexOf(key), 1);
    },
    /**
     * @returns {Array<String>}
     */
    keys: function () { return this._keys.slice(); },
    /**
     * @returns {Array<Mixed>}
     */
    values: function () {
        return this.entries().map(function (args) { return args[1]; });
    },
    /**
     * @returns {Object<String,Mixed>}
     */
    valueOf: function () { return this._map; },
    /**
     * @returns {Array<Array<String,Mixed>>}
     */
    entries: function () {
        var map = this._map;

        return this.
            _keys.
            map(function (key) { return [key, map[key]]; });
    },
    /**
     * @param {Function} fn
     * @param {Object}   [scope]
     * @returns {Array<Mixed>}
     */
    map: function (fn, scope) {
        return this.
            entries.
            map(function (args, idx) {
                return fn.call(scope || null, args[0], args[1], idx, this);
            }, this);
    },
    /**
     * @param {Function} fn
     * @param {Object}   [scope]
     */
    forEach: function (fn, scope) { this.map(fn, scope); }
});
