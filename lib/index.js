var _ = require('./underscore'),
    Rx = require('./rx');
/**
 * @module Protean
 */
module.exports = {
    inherit:        require('./inherit'),
    classify:       require('./classify'),
    augment:        require('./augment'),
    instantiate:    require('./instantiate'),
    guid:           require('./guid'),
    underscore:     _,
    _:              _,
    Rx:             Rx,
    rx:             Rx
};

