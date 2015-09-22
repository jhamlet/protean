var classify = require('protean/function/classify');
var atoms    = require('protean/falcor/graph/atoms');
/**
 * A Falcor DataSource that proxies another data source and sets all returned
 * atoms to expire immediately.
 *
 * **file:** protean/falcor/data-source/no-cache.js
 *
 * @class NoCacheSource
 * @implements external:DataSource
 * @param {Object} opts
 * @param {external:DataSource} opts.source
 */
function NoCacheSource (opts) {
    opts = opts || {};
    this.source = opts.source;
}

module.exports = classify(NoCacheSource,/** @lends NoCacheSource# */{
    /**
     * @param {PathSets[]} paths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    get: function (paths) { return this.source.get(paths).select(this._expire); },
    /**
     * @param {JSONGraphEnvelope} envelope
     * @returns {Observable<JSONGraphEnvelope>}
     */
    set: function (envelope) { return this.source.set(envelope).select(this._expire); },
    /**
     * @param {PathSet} path
     * @param {Array<Mixed>} args
     * @param {PathSet[]} refSuffixes
     * @param {PathSet[]} thisPaths
     * @returns {Observable<JSONGraphEnvelope>}
     */
    call: function (path, args, refSuffixes, thisPaths) {
        return this.
            source.
            call(path, args, refSuffixes, thisPaths).
            select(this._expire);
    },
    /**
     * @private
     * @param {JSONGraphEnvelope} envelope
     * @returns {JSONGraphEnvelope}
     */
    _expire: function (envelope) {
        if (envelope.jsonGraph) {
            atoms(envelope.jsonGraph, function (path, atom) {
                atom.$expires = 0;
            });
        }

        return envelope;
    }
});
