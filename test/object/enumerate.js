/*globals describe, it */

var enumerate = require('protean/object/enumerate');

require('should');

describe('Protean.enumerate(...args)', () => {
    it('should return an object with keys from arguments and values enumerated', () => {
        var obj = enumerate('A', 'B', 'C');
        obj.should.have.property('A', 1);
        obj.should.have.property('B', 2);
        obj.should.have.property('C', 3);
    });
});
