var assign = require('lodash/object/assign');
/**
 * @member module:Protean.mergeExports
 * @function
 * @param {Object} receiver
 * @param {Function|Object} supplier
 * @returns {Object}
 */
module.exports = function mergeExports (receiver, supplier) {
    if (typeof supplier === 'function') {
        receiver[supplier.name] = supplier;
    }
    else {
        assign(receiver, supplier);
    }
    return receiver;
};
