/*globals describe, it */

require('should');

describe('ProteanSubject', function () {
    var ProteanSubject = require('protean/rx/subject');

    it('should be a function', function () {
        ProteanSubject.should.be.a.function;
    });
});
