require('lodash/collection/reduce')([
    require('./object/augment'),
    require('./object/enmap'),
    require('./object/enumerate'),
    require('./object/denominate'),
    require('./object/pluck'),
    require('./object/traverse')
], require('protean/utility/merge-exports'), exports);
