var assign = require('lodash/object/assign');

module.exports = assign(require('falcor-path-syntax'), {
    rootKey: require('./syntax/root-key')
});