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
