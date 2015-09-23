var reduce = require('lodash/collection/reduce'),
    assign = require('lodash/object/assign');
/**
 * @module Protean
 */
reduce([
    require('./array'),
    require('./collection'),
    require('./dom'),
    require('./function'),
    require('./object'),
    require('./string'),
    require('./utility')
], assign, exports);

