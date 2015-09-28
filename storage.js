var assign = require('lodash/object/assign');

module.exports = exports = require('./storage/index');

assign(exports, {
    Store: assign(require('./storage/store'), {
        local:    require('./storage/store/local'),
        session:  require('./storage/store/session'),
        memory:   require('./storage/store/memory')
    })
});
