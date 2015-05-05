/*globals describe, it */

var should = require('should'),
    protean = require('../');

describe('Protean', function () {
    
    describe('.guid()', function () {

        it('should not repeat', function () {
            var max = 2000000,
                i = 0,
                hash = {},
                id;

            this.timeout(0);

            for (; i < max; i++) {
                id = protean.guid();
                (hash[id] === undefined).should.be.true;
                hash[id] = true;
            }
        });
        
    });

});
