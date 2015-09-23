var assign = require('lodash/object/assign');

assign(exports, {
    Storage: require('./storage/index'),
    Store: assign(require('./storage/store'), {
        local:    require('./storage/store/local'),
        session:  require('./storage/store/session'),
        memory:   require('./storage/store/memory')
    })
});
