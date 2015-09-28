var classify = require('protean/function/classify');
var augment = require('protean/object/augment');
var toArray = require('lodash/lang/toArray');

/**
 * @class LinkedList
 * @extends {Object}
 * @param {...*} [items]
 */
function LinkedList () {
    this.reset();
    this.push.apply(this, arguments);
}

// statics
augment(LinkedList,/** @lends LinkedList */{
    /**
     * @class LinkedList.Item
     * @extends {Object}
     * @param {Mixed} data
     * @param {LinkedList.Item} [prev]
     * @param {LinkedList.Item} [next]
     */
    Item: classify(function (data, prev, next) {
        this.data = data;
        this.insert(prev, next);
    },/** @lends LinkedList.Item# */{
        /**
         * @property {LinkedList.Item}
         */
        next: null,
        /**
         * @property {LinkedList.Item}
         */
        prev: null,
        /**
         * @property {*}
         */
        data: null,
        /**
         * @param {LinkedList.Item} prev
         * @param {LinkedList.Item} next
         */
        insert: function (prev, next) {
            this.next = next;
            if (next) {
                next.prev = this;
            }

            this.prev = prev;
            if (prev) {
                prev.next = this;
            }
        }
    })
});

// instance
module.exports = classify(LinkedList,/** @lends LinkedList# */{
    /**
     * @property {LinkedList.Item}
     */
    head: null,
    /**
     * @property {LinkedList.Item}
     */
    tail: null,
    /**
     * @param {...*} value
     * @returns {Integer}
     */
    push: function () {
        var args = toArray(arguments).reverse();

        while (args.length) {
            this.tail = new LinkedList.Item(args.pop(), this.tail, null);
            if (!this.head) {
                this.head = this.tail;
            }
            this.length++;
        }

        return this.length;
    },
    /**
     * @returns {*}
     */
    pop: function () {
        if (this.length === 0) {
            return;
        }

        var t = this.tail;
        this.tail = t.prev;

        if (t.prev) {
            t.prev = this.tail.next = null;
        }

        this.length--;
        if (this.length === 1) {
            this.head = this.tail;
        }
        else if (this.length === 0) {
            this.head = this.tail = null;
        }

        return t.data;
    },
    /**
     * @param {...*} value
     * @returns {Integer}
     */
    unshift: function () {
        var args = toArray(arguments);

        while (args.length) {
            this.head = new LinkedList.Item(args.pop(), null, this.head);
            if (!this.tail) {
                this.tail = this.head;
            }
            this.length++;
        }

        return this.length;
    },
    /**
     * @returns {*}
     */
    shift: function () {
        if (this.length === 0) {
            return;
        }

        var h = this.head;
        this.head = h.next;
        if (h.next) {
            h.next = this.head.prev = null;
        }

        this.length--;
        if (this.length === 1) {
            this.tail = this.head;
        }
        else if (this.length === 0) {
            this.head = this.tail = null;
        }

        return h.data;
    },
    /**
     * Reset the list
     */
    reset: function () {
        this.head = this.tail = null;
        this.length = 0;
    },
    /**
     * @param {Function} fn
     * @param {Object} [scope]
     */
    forEach: function (fn, scope) {
        var n = this.head;
        var i = 0;
        var len = this.length;

        while (i < len && n) {
            fn.call(scope || this, n.data, i, this);
            n = n.next;
            i++;
        }
    },
    /**
     * @param {Function} fn
     * @param {Object} [scope]
     * @returns {LinkedList}
     */
    map: function (fn, scope) {
        var list = new LinkedList();
        this.forEach(function (data, idx, self) {
            list.push(fn.call(scope || self, data, idx, self));
        });
        return list;
    },
    /**
     * @param {Function} fn
     * @param {Object} [scope]
     * @returns {LinkedList}
     */
    filter: function (fn, scope) {
        var list = new LinkedList();
        this.forEach(function (data, idx, self) {
            fn.call(scope || self, data, idx, self) && list.push(data);
        });
        return list;
    },
    /**
     * @param {Function} fn
     * @param {*} [value] Initial value
     * @param {Object} [scope] Scope to apply to the `fn` passed
     * @returns {*}
     */
    reduce: function (fn, value, scope) {
        var i = 0;
        var n = this.head;
        var len = this.length;

        if (!value) {
            i = 1;
            value = n && n.data;
            n = n && n.next;
        }

        while (i < len && n) {
            value = fn.call(scope || this, value, n.data, this);
            i++;
            n = n.next;
        }

        return value;
    }
});

