var classify   = require('protean/function/classify');
// var gutil      = require('protean/falcor/graph');
var defaults   = require('lodash/object/defaults');
var GraphProxy = require('./json-graph-envelope-proxy');
var Rx         = require('rx');
var Observable = Rx.Observable;
/**
 * A falcor DataSource that optionally reads from and writes to a variety of
 * 'partitions' of other DataSources.
 *
 * When reading (get) it will try the partitions in the order set by the 'reads'
 * option. Any paths gone unfilled by the first, will be requested by the
 * second, and so on. The final graph is a merge of all returned values from
 * those partitions.
 *
 * When writing (set/call) it will send the request to all given partitions in
 * the 'writes' option. Again, returning a merged graph of all values writen.
 *
 * @class PartitionedSource
 * @implements DataSource
 * @param {Object} [opts]
 * @param {String[]} [opts.reads=[]]
 * @param {String[]} [opts.writes=[]]
 * @param {Object<String,DataSource>} [opts.partitions={}]
 */
function PartitionedSource (opts) {
    opts = this.options = defaults({}, opts || {}, this.options);
}

module.exports = classify(PartitionedSource,/** @lends PartitionedSource# */{
    /**
     * Default options
     * @property {Object}
     */
    options: {
        /**
         * @property {String[]}
         */
        get reads () { return []; },
        /**
         * @property {String[]}
         */
        get writes () { return []; },
        /**
         * @property {Object<String,DataSource>}
         */
        get partitions () { return {}; }
    },
    /**
     * @param {PathSet[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    get: function (paths) {
        var opts          = this.options;
        var reads         = opts.reads;
        var partitions    = opts.partitions;
        var proxyEnvelope = new GraphProxy();

        proxyEnvelope.expect(paths);

        return Observable.
            fromArray(reads).
            takeWhile(function () { return proxyEnvelope.pending.length; }).
            concatMap(function (name) {
                return partitions[name].
                    get(paths).
                    map(proxyEnvelope.merge);
            }).
            takeLast(1).
            map(proxyEnvelope.finalize).
            publishLast().
            refCount();
    },
    /**
     * @param {JSONGraphEnvelope} envelope
     * @returns {Observable<JSONGraphEnvelope>}
     */
    set: function (envelope) {
        var opts          = this.options;
        var writes        = opts.writes;
        var partitions    = opts.partitions;
        var proxyEnvelope = new GraphProxy();

        return Observable.
            fromArray(writes).
            flatMap(function (name) {
                return partitions[name].
                    set(envelope).
                    map(proxyEnvelope.merge);
            }).
            takeLast(1).
            map(proxyEnvelope.finalize).
            publishLast().
            refCount();
    },
    /**
     * @param {PathSet} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    call: function (path, args, refSuffixes, thisPaths) {
        var opts          = this.options;
        var writes        = opts.writes;
        var partitions    = opts.partitions;
        var proxyEnvelope = new GraphProxy();

        return Observable.
            fromArray(writes).
            flatMap(function (name) {
                return partitions[name].
                    call(path, args, refSuffixes, thisPaths).
                    map(proxyEnvelope.merge);
            }).
            takeLast(1).
            map(proxyEnvelope.finalize).
            publishLast().
            refCount();
    }
});
