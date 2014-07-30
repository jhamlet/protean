var _ = require('underscore');
/**
 * Takes an argument list of strings and returns an object of key => key
 * @member module:Protean.hashify
 * @function
 * @param {...String}
 * @returns {Object}
 */
module.exports = function hasify () {
    var args = _.rest(arguments, 0);
    return _.object(args, args);
};
