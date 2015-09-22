var Storage = require('./');
var defaults = require('lodash/object/defaults');
/**
 * @class module:Protean.Storage.Memory
 * @extends Storage
 */
module.exports = Storage.extend(function MemoryStorage (opts) {
    opts = defaults(opts || {}, {
        store: require('./store/memory'),
        json: typeof JSON !== 'undefined' ? JSON : null
    });

    MemoryStorage.superclass.call(this, opts);
});
