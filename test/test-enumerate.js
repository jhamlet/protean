/*globals describe, it */

var should = require('should'),
    protean = require('../');

describe('Protean', function () {
    
    describe('.enumerate()', function () {
        
        it('should return an object with keys from arguments and values enumerated', function () {
            var obj = protean.enumerate('A', 'B', 'C');
            obj.should.have.property('A', 1);
            obj.should.have.property('B', 2);
            obj.should.have.property('C', 3);
        });
        
    });

});
