var StorageDataSource = require('./storage');
var defaults = require('lodash/object/defaults');
/**
 * **file:** protean/falcor/data-source/session.js
 *
 * @class module:Protean.falcor.SessionDataSource
 * @extends module:Protean.falcor.StorageDataSource
 */
module.exports = StorageDataSource.extend(function SessionDataSource (opts) {
    SessionDataSource.superclass.call(this, defaults(opts, {
        storage: typeof sessionStorage !== 'undefined' ?
            sessionStorage :
            require('protean/storage')
    }));
});
