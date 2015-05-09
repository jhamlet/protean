var _ = require('lodash').runInContext();

[
    './enmap',
    './value-of',
    './enumerate'
].
    // require and execute the given function passing in the lodash object and
    // then mix-in the returned object to the main lodash object
    forEach(function (m) { _.mixin(require(m)(_)); });

module.exports = _;
