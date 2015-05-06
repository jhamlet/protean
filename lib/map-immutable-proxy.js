var MapProxy = require('./map-proxy'),
    _ = require('./underscore');
/**
 * @class MapImmutableProxy
 * @extends Map
 * @param {String|Mixed} [...keyValue]
 */
function MapImmutableProxy () {
    MapImmutableProxy.superclass.apply(this, arguments);
}

module.exports = MapProxy.extend(MapImmutableProxy,/** @lends MapImmutableProxy# */{
    /**
     * Merge all given objects into this map
     * @param {...Object|Map} map
     */
    extend: function () {
        var keys = this._keys,
            map = this._map,
            changes =
                _.
                chain(arguments).
                map(_.valueOf).
                map(_.pairs).
                flatten(1).
                object().
                value();

        if (!_.isMatch(map, changes)) {
            this._keys = keys = keys.slice();
            this._map = map = _.extend(Object.create(null), map);
            keys.push.apply(keys, _.difference(_.keys(changes), _.keys(map)));
            _.extend(map, changes);
            Object.freeze(keys);
            Object.freeze(map);
        }
    },
    /**
     * @param {String} key
     * @param {Mixed}  value
     */
    set: function (key, value) {
        if (this._map[key] !== value) {
            this._keys = this._keys.slice();
            this._map = _.extend(Object.create(null), this._map);
            MapImmutable.superproto.set.call(key, value);
            Object.freeze(this._keys);
            Object.freeze(this._map);
        }
    }
});
