/*globals describe, it */

var should = require('should'),
    protean = require('../');

describe('Protean', function () {
    
    describe('.hashify()', function () {
        
        it('should return an object with keys and values equal to arguments', function () {
            var obj = protean.hashify('A', 'B', 'C');
            obj.should.have.property('A', 'A');
            obj.should.have.property('B', 'B');
            obj.should.have.property('C', 'C');
        });
        
    });

});
