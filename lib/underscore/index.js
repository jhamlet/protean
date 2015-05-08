var _ = require('lodash').runInContext();

[
    require('./enmap'),
    require('./value-of'),
    require('./enumerate')
].
    map(function (fn) { return fn(_); }).
    forEach(function (pkg) { _.mixin(pkg); });

module.exports = _;
