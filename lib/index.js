var _ = require('./underscore'),
    Rx = require('./rx');
/**
 * @module Protean
 */
module.exports = {
    inherit:            require('./inherit'),
    classify:           require('./classify'),
    augment:            require('./augment'),
    instantiate:        require('./instantiate'),
    guid:               require('./guid'),
    /**
     * @property {external:underscore}
     */
    underscore:         _,
    /**
     * @property {external:underscore}
     */
    _:                  _,
    /**
     * @property {external:Rx}
     */
    Rx:                 Rx,
    /**
     * @property {external:Rx}
     */
    rx:                 Rx,
    MapProxy:           require('./map-proxy'),
    MapImmutableProxy:  require('./map-immutable-proxy')
};

