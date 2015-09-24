var set = require('./set');
var atoms = require('./atoms');
/**
 * **File:** [falcor/graph/merge.js](falcor/graph/merge.js)
 *
 * @member module:Falcor.Graph.mergeEnvelope
 * @function
 * @param {JSONGraphEnvelope} receiver
 * @param {JSONGraphEnvelope} supplier
 * @returns {JSONGraphEnvelope}
 */
module.exports = function mergeEnvelope (receiver, supplier) {
    if (supplier.paths) {
        var paths = receiver.paths || (receiver.paths = []);
        paths.push.apply(paths, supplier.paths);
    }

    if (supplier.jsonGraph) {
        var graph = receiver.jsonGraph || (receiver.jsonGraph = {});
        atoms(supplier.jsonGraph, set.bind(null, graph));
    }

    if (supplier.invalidated) {
        var invalid = receiver.invalidated || (receiver.invalidated = []);
        invalid.push.apply(invalid, supplier.invalidated);
    }

    return receiver;
};
