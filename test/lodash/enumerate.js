/*globals describe, it */

var protean = require('../../'),
    _ = protean.lodash;

require('should');

describe('Protean.lodash', function () {
    describe('.enumerate(...args)', function () {
        it('should return an object with keys from arguments and values enumerated', function () {
            var obj = _.enumerate('A', 'B', 'C');
            obj.should.have.property('A', 1);
            obj.should.have.property('B', 2);
            obj.should.have.property('C', 3);
        });
    });
});
