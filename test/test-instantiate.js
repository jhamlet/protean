/*globals describe, it */

var should = require('should'),
    protean = require('../');

describe('Protean', function () {
    
    describe('.instantiate()', function () {
        
        it(
            'should create a new object from constructor function and passed arguments',
            function () {
                var obj;
                
                function Ctor (arg) {
                    this.foo = arg;
                }
                
                obj = protean.instantiate(Ctor, ['foo']);
                obj.should.be.an.instanceof(Ctor);
                obj.should.have.property('foo', 'foo');
            }
        );
        
    });

});
