/*globals describe, it, before */

var protean = require('../'),
    classify = protean.classify;

require('should'),
    
describe('Protean', function () {
    var Foo;
    
    before(function () {
        Foo = classify({
                constructor: function (arg) {
                    this.foo = arg;
                }
            });
    });

    describe('.inherit(superclass, [subclass], [props], [properties])', function () {
        it('should correctly inherit from superclass', function () {
            var Bar = protean.inherit(Foo);
            Bar.superproto.should.equal(Foo.prototype);
            (new Bar()).should.be.an.instanceof(Foo);
        });
        
        it('getters/setters should be preserved', function () {
            var Bar = protean.inherit(Foo, {
                    constructor: function (arg) {
                        Bar.superclass.call(this, arg);
                    },
                    get bar () {
                        return this.foo;
                    },
                    set bar (v) {
                        this.foo = v;
                    }
                }),
                obj;
            
            Bar.prototype.__lookupGetter__('bar').should.be.function;
            Bar.prototype.__lookupSetter__('bar').should.be.function;
            
            obj = new Bar('bar');
            obj.bar.should.equal('bar');
            obj.bar = 'buz';
            obj.foo.should.equal('buz');
        });
        
        it('should extend non-protean classes', function () {
            var EM = require('events').EventEmitter,
                Foo, obj;
            
            Foo = protean.inherit(EM, {
                constructor: function Foo () {
                    Foo.superclass.call(this);
                }
            });
            
            obj = new Foo();
            
            obj.should.be.an.instanceof(EM);
            obj.should.have.property('domain');
            obj.should.have.property('_events');
            obj.should.have.property('_maxListeners');
        });

        it('should set up the extended static chain', function () {
            function A () {}
            A.extended = function (sc) {
                var scp = sc.prototype;

                scp.extensions = [];
                scp.extensions.push('A');
            };
            protean.classify(A, { extensions: [] });

            function B () {}
            B.extended = function (sc) {
                sc.prototype.extensions.push('B');
            };
            A.extend(B);

            function C () {}
            B.extend(C);

            C.prototype.extensions[0].should.equal('A');
            C.prototype.extensions[1].should.equal('B');
        });
    });
    
    describe('.classify(props, [properties])', function () {
        it('should return a constructor function', function () {
            Foo.should.be.function;
            (new Foo()).should.be.an.instanceof(Foo);
        });
        
        it('should correctly call the constructor function', function () {
            (new Foo('foo')).foo.should.equal('foo');
        });
        
        it('should have an \'extend\' method', function () {
            Foo.extend.should.be.function;
        });

        it(
            'should have a \'superproto\' property that points to the superclass\'s prototype',
            function () {
                Foo.superproto.should.equal(Object.prototype);
            }
        );
        
        it('extending a class should be an instance of the superclass', function () {
            var Bar = Foo.extend({});
            Bar.superproto.should.equal(Foo.prototype);
            (new Bar()).should.be.an.instanceof(Bar);
            (new Bar()).should.be.an.instanceof(Foo);
        });
    });
    
});
