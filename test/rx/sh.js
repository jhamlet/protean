/*globals describe, it */

require('should');

describe('Protean.Rx.sh(command, [opts])', function () {
    var sh = require('protean/rx/sh');

    it('should run', function (done) {
        sh('ls && ls -al $(find ./test -name "*.js")', { stdio: [0, 1, 2] }).
            subscribe(function (output) {
                // console.log(output);
            }, null, done);
    });

});

