var MapProxy = require('./map-proxy'),
    _ = require('./lodash');
/**
 * A utility class to handle immutable maps. When setting, or extending the
 * keys/values of this map, the underlying object/map will be created anew if
 * the values have changed, otherwise it will not.
 * @class ImmutableMapProxy
 * @extends MapProxy
 * @param {String|Mixed} [...keyValue]
 */
function ImmutableMapProxy () {
    ImmutableMapProxy.superclass.apply(this, arguments);
}

module.exports = MapProxy.extend(ImmutableMapProxy,/** @lends ImmutableMapProxy# */{
    /**
     * Merge all given objects into this map
     * @param {Object|Map} ...map
     */
    extend: function () {
        var keys = this._keys,
            map = this._map,
            changes =
                _.
                toArray(arguments).
                map(function (arg) {
                    return arg instanceof MapProxy ? arg.valueOf() : arg;
                }).
                reduce(_.extend, {});

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
            ImmutableMapProxy.superproto.set.call(this, key, value);
            Object.freeze(this._keys);
            Object.freeze(this._map);
        }
    }
});
