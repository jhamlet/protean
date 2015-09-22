var assign   = require('lodash/object/assign');
var keys     = require('lodash/object/keys');
var EMPTY    = {};
var SKIP     = 'skip';
var CONTINUE = 'continue';
var BREAK    = 'break';
/**
 * @typedef module:Protean.traverse~visitorFn
 * @function
 * @param {String[]} path The path to the value
 * @param {Mixed} value The value
 * @param {Object} context The original object
 * @returns {undefined|String} One of the constants of 'skip', 'continue', or
 * 'break'. Returning undefined is the same as returing 'continue'.
 */
/**
 * @member module:Protean.traverse
 * @function 
 * @param {Object} obj
 * @param {module:Protean.traverse~visitorFn} visitor
 * @param {Boolean} [post=false] Do a post traversal
 */
function traverse (obj, visitor, post) {
    var visit    = [];
    var visited  = [];
    var paths    = [];
    var traveled = [];
    var path, node, key, nodes, i, result;

    paths.push([]);
    visit.push(obj);

    while (visit.length) {
        node = visit.pop();
        path = paths.pop();

        if (node !== EMPTY) {
            result = !post ?
                visitor(path.slice(), node, obj) :
                CONTINUE;

            if (result === BREAK) {
                break;
            }
            else if (result !== SKIP) {
                if (post) {
                    visit.push(EMPTY);
                    visited.push(node);
                    traveled.push(path);
                }

                if (node !== null && typeof node === 'object') {
                    nodes = keys(node);
                    i = nodes.length;

                    while (i--) {
                        key = nodes[i];

                        paths.push(path.concat([key]));
                        visit.push(node[key]);
                    }
                }
            }
        }
        else {
            node = visited.pop();

            if (node) {
                result = visitor(traveled.pop(), node, obj);

                if (result === BREAK) {
                    break;
                }
            }
        }
    }
}

module.exports = assign(traverse,/** @lends module:Protean.traverse */{
    /**
     * @property {String}
     * @default 'skip'
     */
    SKIP:      SKIP,
    /**
     * @property {String}
     * @default 'continue'
     */
    CONTINUE:  CONTINUE,
    /**
     * @property {String}
     * @default 'break'
     */
    BREAK:     BREAK
});
