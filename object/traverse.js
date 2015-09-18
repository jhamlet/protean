var assign   = require('lodash/object/assign');
var keys     = require('lodash/object/keys');
var EMPTY    = {};
var SKIP     = 'skip';
var CONTINUE = 'continue';
var BREAK    = 'break';
/**
 * @member module:Protean.traverse
 * @function 
 * @param {Object} obj
 * @param {Function} visitor
 * @param {Boolean} [post=false]
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
                visitor(path.slice(), node) :
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
                result = visitor(traveled.pop(), node);

                if (result === BREAK) {
                    break;
                }
            }
        }
    }
}

module.exports = assign(traverse, {
    SKIP:      SKIP,
    CONTINUE:  CONTINUE,
    BREAK:     BREAK
});
