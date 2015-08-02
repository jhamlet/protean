var reduce = require('lodash/collection/reduce'),
    extend = require('lodash/object/extend');
/**
 * @module Protean
 */
reduce([
    require('./array'),
    require('./collection'),
    require('./function'),
    require('./object'),
    require('./string'),
    require('./utility')
], extend, exports);

