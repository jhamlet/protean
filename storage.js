var assign = require('lodash/object/assign');

assign(exports, {
    Storage: assign(require('./storage/index'), {
        Local:    require('./storage/local'),
        Session:  require('./storage/session'),
        Memory:   require('./storage/memory'),
    }),
    Store: assign(require('./storage/store'), {
        local:    require('./storage/store/local'),
        session:  require('./storage/store/session'),
        memory:   require('./storage/store/memory')
    })
});
