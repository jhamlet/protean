/**
 * @member module:Protean.Store.local
 * @type {external:Storage}
 */
module.exports = typeof localStorage !== 'undefined' ? localStorage : require('./memory');
