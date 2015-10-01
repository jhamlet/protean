var falcor   = require('falcor');
var classify = require('protean/function/classify');
var defaults = require('lodash/object/defaults');
/**
 * **File:** [falcor/data-source/storage.js](falcor/data-source/storage.js)
 *
 * @class StorageSource
 * @extends ProteanClass
 * @implements DataSource
 * @param {Object} opts
 * @param {Storage} opts.storage
 * @param {String} opts.storageKey
 * @param {Object} [opts.cache]
 * @param {Function} [opts.serializer]
 * @param {Function} [opts.deserializer]
 */
function StorageSource (opts) {
    opts = this.options = defaults({}, opts || {}, this.options);

    this.model = new falcor.Model({ cache: opts.cache });
    this.source = this.model.asDataSource();

    if (opts.cache) {
        this.serialize();
    }

    this.deserialize();
}

module.exports = classify(StorageSource,/** @lends StorageSource# */{
    /**
     * @property {FalcorFModel}
     */
    model: null,
    /**
     * @property {DataSource}
     */
    source: null,
    /**
     * @property {Object}
     */
    options: {
        /**
         * The key to use when accessing the Storage object to serialize the
         * graph to.
         * @property {String}
         */
        storageKey: null,
        /**
         * The storage source
         * @property {Storage}
         */
        storage: null,
        /**
         * A function to convert a JSONGraph to a String.
         * @param {JSONGraph} graph
         * @returns {String}
         */
        serializer: function (graph) { return JSON.stringify(graph); },
        /**
         * A function to convert a String to a JSONGraph.
         * @param {String} src
         * @returns {JSONGraph}
         */
        deserializer: function (src) { return JSON.parse(src); }
    },
    /**
     * @param {PathSets[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    get: function (paths) { return this.source.get(paths); },
    /**
     * @param {JSONGraphEnvelope} envelope
     * @returns {Observable<JSONGraphEnvelope>}
     */
    set: function (envelope) {
        return this.
            source.
            set(envelope).
            do(this.serialize.bind(this));
    },
    /**
     * @param {PathSet} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
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
        var opts    = this.options;
        var storage = opts.storage;
        var key     = opts.storageKey;

        if (storage) {
            storage.removeItem(key);
        }
    },
    /**
     * Write our cache to storage
     */
    serialize: function () {
        var opts       = this.options;
        var storage    = opts.storage;
        var key        = opts.storageKey;
        var serializer = opts.serializer;
        var model      = this.model;
        var graph      = model && model.getCache();

        if (storage && graph) {
            storage.setItem(key, serializer(graph));
        }
    },
    /**
     * Get our cache from storage
     */
    deserialize: function () {
        var opts         = this.options;
        var storage      = opts.storage;
        var key          = opts.storageKey;
        var deserializer = opts.deserializer;
        var json         = storage && storage.getItem(key);
        var model        = this.model;

        if (model && json) {
            model.setCache(deserializer(json));
        }
    }
});

