var Storage = require('./');
var defaults = require('lodash/object/defaults');
/**
 * @class module:Protean.Storage.Local
 * @extends module:Protean.Storage
 */
module.exports = Storage.extend(function LocalStorage (opts) {
    opts = defaults(opts || {}, {
        store: require('./store/local'),
        json: typeof JSON !== 'undefined' ? JSON : null
    });

    LocalStorage.superclass.call(this, opts);
});
