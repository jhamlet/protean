var Storage = require('./');
var defaults = require('lodash/object/defaults');
/**
 * @class module:Protean.Storage.Session
 * @extends Storage
 */
module.exports = Storage.extend(function SessionStorage (opts) {
    opts = defaults(opts || {}, {
        store: require('./store/session'),
        json: typeof JSON !== 'undefined' ? JSON : null
    });

    SessionStorage.superclass.call(this, opts);
});
