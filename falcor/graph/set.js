var toPath = require('lodash/internal/toPath');
/**
 * @static
 * @member module:Falcor.Graph.set
 * @param {Object} source
 * @param {String|String[]} path
 * @param {*} value
 * @returns {Object}
 */
module.exports = function set (source, path, value) {
    var context = source;
    var len, i, key;

    path = toPath(path);
    len = path.length - 1;
    i = 0;

    for (; i < len; i++) {
        key = path[i];
        if (!context.hasOwnProperty(key)) {
            context[key] = {};
        }
        context = context[key];
    }

    key = path[len];
    context[key] = value;

    return context;
};
