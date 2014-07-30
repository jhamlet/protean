var _ = require('underscore'),
    bind = Function.prototype.bind;
/**
 * Alias a named method. If a scope is not given, the current `this` will be used
 * to determine the method to call, otherwise it will use the supplied scope.
 *
 * The function that is returned has one method on it `as(method)` that allows you to
 * finalize the alias. Basically it updates the receiving object with the bound
 * function.
 *
 * @example { foo: alias('bar', '_delegate').as('foo') };
 * 
 * @member module:Protean.alias
 * @function
 * @param {String} name Name of the function to alias.
 * @param {(Object|String)} [scope] Optional scope to use. If not given, or is
 * falsey, will use the current 'this'. If a `String` will look up `this[scope]`
 * to determine the object to use as the scope. This allows for delegation.
 * @param {...Mixed} [arg] Optional, additional arguments to prepend when calling
 * the aliased function.
 * @returns {Function}
 */
module.exports = function alias (name, scope) {
    var args = _.rest(arguments, 2);

    function surrogate () {
        var obj = typeof scope === 'string' ? this[scope] : scope || this,
            fn = obj[name],
            alias = bind.apply(fn, [obj].concat(args)),
            result = alias.apply(null, arguments);
        
        if (surrogate.method) {
            this[surrogate.method] = alias;
            // clean-up memory
            fn = null;
            alias = null;
            obj = null;
            args = null;
        }

        return result;
    }

    surrogate.as = function (method) {
        this.method = method;
        return this;
    };

    return surrogate;
};

