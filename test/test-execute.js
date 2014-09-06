/*globals describe, it */

var should = require('should'),
    protean = require('../'),
    _ = require('underscore');

describe('Protean', function () {
    
    describe('.execute(fn)', function () {
        it('should execute the function with additional arguments', function () {
            var fn = protean.execute(function () {
                    return _.rest(arguments, 0);
                });

            fn(1, 2, 3).should.eql([1, 2, 3]);
        });
    });

    describe('.execute(fn, fn, fn)', function () {
        it(
            'should execute the functions and return the last returned value',
            function () {
                var fn = protean.execute(
                        function (arg) {
                            return arg + '-' + 'bar';
                        },
                        function (arg) {
                            return arg + '-' + 'baz';
                        },
                        function (arg) {
                            return arg + '-' + 'buz';
                        }
                    );

                fn('foo').should.eql('foo-bar-baz-buz');
            }
        );
    });

    describe('.execute(fn, arg, fn, arg)', function () {
        it(
            'should execute the functions with given argument',
            function () {
                var fn = protean.execute(
                        function (arg) {
                            return arg + '-' + 'bar';
                        },
                        'foo',
                        function (arg, argB) {
                            return argB + '-' + arg + '-' + 'baz';
                        },
                        'foo'
                    );

                fn().should.eql('foo-bar-foo-baz');
            }
        );
    });
});
