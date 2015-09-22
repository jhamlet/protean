/**
 * @member module:Protean.Store.session
 * @type {external:Storage}
 */
module.exports = typeof sessionStorage !== 'undefined' ? sessionStorage : require('./memory');
