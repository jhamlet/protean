var StorageDataSource = require('./storage');
var defaults = require('lodash/object/defaults');
/**
 * **file:** protean/falcor/data-source/local.js
 *
 * @class module:Protean.falcor.LocalDataSource
 * @extends module:Protean.falcor.StorageDataSource
 */
module.exports = StorageDataSource.extend(function LocalDataSource (opts) {
    LocalDataSource.superclass.call(this, defaults(opts, {
        storage: typeof localStorage !== 'undefined' ?
            localStorage :
            require('protean/storage')
    }));
});
