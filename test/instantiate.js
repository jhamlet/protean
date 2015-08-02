/*globals describe, it */

var instantiate = require('protean/function/instantiate');

require('should');

describe('Protean', function () {

    describe('.instantiate()', function () {

        it(
            'should create a new object from constructor function and passed arguments',
            function () {
                var obj;

                function Ctor (arg) {
                    this.foo = arg;
                }

                obj = instantiate(Ctor, ['foo']);
                obj.should.be.an.instanceof(Ctor);
                obj.should.have.property('foo', 'foo');
            }
        );

    });

});
