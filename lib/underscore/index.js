var _ = require('underscore');

[
    require('./enmap'),
    require('./value-of'),
    require('./enumerate')
].
    map(function (fn) { return fn(_); }).
    forEach(_.mixin.bind(_));

module.exports = _;
