var classify = require('protean/function/classify');
var get      = require('lodash/object/get');
/**
 * A Falcor DataSource that proxies another data source and sets all returned
 * atoms to expire immediately.
 *
 * **file:** protean/falcor/data-source/no-cache.js
 *
 * @class module:Protean.falcor.NoCacheSource
 * @implements external:falcor.DataSource
 * @param {external:falcor.DataSource} source
 */
function NoCacheSource (source) {
    this.source = source;
    this._expire = this._expire.bind(this);
}

module.exports = classify(NoCacheSource,/** @lends module:Protean.falcor.NoCacheSource# */{
    /**
     * @param {external:falcor.PathSets[]} paths
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    get: function (paths) { return this.source.get(paths).select(this._expire); },
    /**
     * @param {external:falcor.JSONGraphEnvelope} envelope
     * @returns {external:Rx.Observable<external:falcor.JSONGraphEnvelope>}
     */
    set: function (envelope) { return this.source.set(envelope).select(this._expire); },
    /**
     * @param {external:falcor.PathSet} path
     * @param {Array<Mixed>} args
     * @param {external:falcor.PathSet[]} refSuffixes
     * @param {external:falcor.PathSet[]} thisPaths
     * @returns {externa:Rx.Observable<external:falcor.JSONGraphEnvelope>}
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
        var paths = envelope.paths;
        var graph = envelope.jsonGraph;

        paths.
            forEach(function (path) {
                var atom = get(graph, path);
                if (atom) { atom.$expires = 0; }
            });

        return envelope;
    }
});
