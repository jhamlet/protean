var reduce = require('lodash/collection/reduce'),
    assign = require('lodash/object/assign');
/**
 * @module Protean
 */
reduce([
    require('./array'),
    require('./collection'),
    require('./falcor'),
    require('./function'),
    require('./object'),
    require('./storage'),
    require('./string'),
    require('./utility')
], assign, exports);

