var _ = require('./lodash'),
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
    lodash:             _,
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
    /**
     * @property {MapProxy}
     * @see {MapProxy}
     */
    MapProxy:           require('./map-proxy'),
    /**
     * @property {MapImmutableProxy}
     * @see {ImmutableMapProxy}
     */
    ImmutableMapProxy:  require('./immutable-map-proxy')
};

