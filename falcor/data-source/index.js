/**
 * @external DataSource
 * @see {@link http://netflix.github.io/falcor/doc/DataSource.html}
 */

/**
 * @typedef DataSource
 * @implements external:DataSource
 */

/**
 * @member DataSource#get
 * @function
 * @param {PathSet[]} paths
 * @returns {Observable<JSONGraphEnvelope>}
 */

/**
 * @member DataSource#set
 * @function
 * @param {JSONGraphEnvelope} envelope
 * @returns {Observable<JSONGraphEnvelope>}
 */

/**
 * @member DataSource#call
 * @function
 * @param {PathSet} path
 * @param {Array<Mixed>} args
 * @param {PathSet[]} refSuffixes
 * @param {PathSet[]} thisPaths
 * @returns {Observable<JSONGraphEnvelope>}
 */

require('lodash/collection/reduce')([
    require('./collection'),
    require('./composite'),
    require('./json-graph-envelope-proxy'),
    require('./no-cache'),
    require('./partitioned'),
    require('./proxied'),
    require('./storage')
], require('protean/utility/merge-exports'), exports);
