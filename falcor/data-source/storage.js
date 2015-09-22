var falcor   = require('protean/falcor');
var classify = require('protean/function/classify');
var defaults = require('lodash/object/defaults');
/**
 * **file:** protean/falcor/data-source/storage.js
 *
 * @class module:Protean.falcor.StorageDataSource
 * @implements external:falcor.DataSource
 * @param {Object} opts
 * @param {Object} [opts.cache]
 * @param {external:Storage} [opts.storage]
 * @param {String} opts.storageKey
 */
function StorageDataSource (opts) {
    opts = this.options = defaults({}, opts || {}, this.options);

    this.model = new falcor.Model({ cache: opts.cache });
    this.source = this.model.asDataSource();

    if (opts.cache) {
        this.serialize();
    }

    this.deserialize();
}

module.exports = classify(StorageDataSource,/** @lends module:Protean.falcor.StorageDataSource# */{
    /**
     * @property {external:falcor.Model}
     */
    model: null,
    /**
     * @property {external:faclor.DataSource}
     */
    source: null,
    /**
     * @property {Object}
     */
    options: {
        /**
         * @property {String}
         */
        storageKey: null,
        /**
         * @property {external:Storage}
         */
        storage: null
    },
    /**
     * @param {external:falcor.PathSets[]} paths
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    get: function (paths) { return this.dataSource.get(paths); },
    /**
     * @param {external:falcor.JSONGraphEnvelope} envelope
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    set: function (envelope) {
        return this.
            source.
            set(envelope).
            do(this.serialize.bind(this));
    },
    /**
     * @param {external:falcor.PathSet} path
     * @param {Array<Mixed>} args
     * @param {external:falcor.PathSet[]} refSuffixes
     * @param {external:falcor.PathSet[]} thisPaths
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    call: function (paths, args, refSuffixes, thisPaths) {
        return this.
            source.
            call(paths, args, refSuffixes, thisPaths).
            do(this.serialize.bind(this));
    },
    /**
     * Clear our storage item
     */
    clear: function () {
        var opts = this.options;
        var storage = opts.storage;
        var key = opts.storageKey;

        if (storage) {
            storage.removeItem(key);
        }
    },
    /**
     * Write our cache to storage
     */
    serialize: function () {
        var opts    = this.options;
        var storage = opts.storage;
        var key     = opts.storageKey;
        var model   = this.model;
        var graph   = model && model.getCache();

        if (storage && graph) {
            storage.setItem(key, JSON.stringify(graph));
        }
    },
    /**
     * Get our cache from storage
     */
    deserialize: function () {
        var opts    = this.options;
        var storage = opts.storage;
        var key     = opts.storageKey;
        var json    = storage && storage.getItem(key);
        var model   = this.model;

        if (model && json) {
            model.setCache(JSON.parse(json));
        }
    }
});

