function isEven (a, i) { return i % 2 === 0; }

module.exports = function (_) {
    return {
        enmap: function enmap () {
            var keyValues = _.partition(arguments, isEven);
            return _.object.apply(_, keyValues);
        }
    };
};
