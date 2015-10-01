var traverse   = require('protean/object/traverse');
var defaults   = require('lodash/object/defaults');
var gutil      = require('falcor-json-graph');
var isSentinel = require('protean/falcor/graph/is-sentinel');
var set        = require('protean/falcor/graph/set');
var isRef      = require('protean/falcor/graph/is-ref');
var isRootRef  = require('protean/falcor/graph/is-root-ref');
var $ref       = gutil.ref;
var $atom      = gutil.atom;
var isArray    = Array.isArray;

var DEFAULT_OPTIONS = {
    arrayIsRef: true,
    get root () { return []; }
};

function visitor (opts, accumulator, path, value) {
    var root = opts.root;

    if (path.length) {
        var local = root.concat(path);

        if (isSentinel(value)) {
            if (isRef(value) && !isRootRef(value)) {
                value.value = root.concat(value.value);
            }

            set(accumulator, local, value);
            return traverse.SKIP;
        }
        else if (isArray(value)) {
            if (opts.arrayIsRef) {
                set(accumulator, local, $ref(root.concat(value)));
                return traverse.SKIP;
            }
            else {
                return traverse.CONTINUE;
            }
        }
        else {
            var isPrimitive = false;

            switch (typeof value) {
                case 'string':
                case 'number':
                case 'boolean':
                    isPrimitive = true;
                    break;
                case 'object':
                    isPrimitive = value === null;
            }

            if (isPrimitive) {
                set(accumulator, local, $atom(value));
                return traverse.SKIP;
            }

            return traverse.CONTINUE;
        }
    }
}
/**
 * Takes a normal javascript object and returns a JSONGraph.
 *
 * **File:** [falcor/graph/from-object.js](falcor/graph/from-object.js)
 *
 * @member module:Falcor.Graph.fromObject
 * @function
 * @param {Object} obj
 * @param {Object} [opts]
 * @param {Boolean} [opts.arrayIsRef=true]
 * @param {Path} [opts.root=[]]
 * @returns {JSONGraph}
 */
module.exports = function fromObject (obj, opts) {
    var graph = {};

    opts = defaults(opts || {}, DEFAULT_OPTIONS);

    traverse(obj, visitor.bind(null, opts, graph));

    return graph;
};
