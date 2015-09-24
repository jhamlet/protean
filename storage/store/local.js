/**
 * **File:** [storage/store/local.js](storage/store/local.js)
 *
 * @member Store.local
 * @type {external:Storage}
 */
module.exports = typeof localStorage !== 'undefined' ? localStorage : require('./memory');
