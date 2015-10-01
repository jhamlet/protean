require('lodash/object/assign')(exports, {
    is:       require('./predicates/is'),
    isTrue:   require('./predicates/is-true'),
    isFalse:  require('./predicates/is-false')
});
