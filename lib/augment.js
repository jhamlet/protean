var _ = require('./lodash'),
    doesGetSet = Boolean(Object.prototype.__lookupGetter__);
/**
 * Like 'extend', but it preserves getters and setters, and will not overwrite
 * existing properties defined directly on the source object.
 * @member module:Protean.augment
 * @function
 * @param {...Object} obj
 * @returns {Object}
 */
function augment () {
    return _.
        rest(arguments, 1).
        reduce(function (acc, obj) {
            var key, getter, setter, props;

            for (key in obj) {
                if (!acc.hasOwnProperty(key)) {
                    getter = doesGetSet && obj.__lookupGetter__(key);
                    setter = doesGetSet && obj.__lookupSetter__(key);

                    if (getter || setter) {
                        props = props || {};
                        props[key] = {
                            get: getter,
                            set: setter,
                            configurable: true,
                            enumerable: true
                        };
                    }
                    else {
                        acc[key] = obj[key];
                    }
                }
            }

            if (props) {
                Object.defineProperties(acc, props);
            }

            return acc;
        }, arguments[0]);
}

module.exports = augment;
