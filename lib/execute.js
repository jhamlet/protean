var ProtoBind = Function.prototype.bind,
    _ = require('underscore');
/**
 * @typedef module:Protean~executor
 * @type {Function}
 * @param {...Mixed} arg Additional arguments to pass to the first function
 */
/**
 * @member module:Protean.execute
 * @function
 * @param {...(Function|Mixed)} fnOrArgument
 * @returns {module:Protean~executor}
 */
function execute () {
    var fns = _.flatten(_.rest(arguments, 0)).
            reduce(function (acc, cur) {
                var spec;

                if (_.isFunction(cur)) {
                    spec = {};
                    spec.fn = cur;
                    acc.push(spec);
                }
                else {
                    spec = acc[acc.length - 1];
                    spec.args = spec.args || [null];
                    spec.args.push(cur);
                }

                return acc;
            }, []).
            map(function (spec) {
                return ProtoBind.apply(spec.fn, spec.args);
            });

    return function executor () {
        var curArgs = _.rest(arguments, 0),
            len = fns.length,
            i = 0,
            fn;

        for (; i < len; i++) {
            fn = fns[i];
            curArgs = fn[_.isArray(curArgs) ? 'apply' : 'call'](null, curArgs);
        }

        return curArgs;
    };
}

module.exports = execute;
