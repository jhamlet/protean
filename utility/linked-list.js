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
     * @class LinkedList.Node
     * @extends {Object}
     * @param {Mixed} data
     * @param {LinkedList.Node} [prev]
     * @param {LinkedList.Node} [next]
     */
    Node: classify(function (data, prev, next) {
        this.data = data;
        this.insert(prev, next);
    },/** @lends LinkedList.Node# */{
        /**
         * @property {LinkedList.Node}
         */
        next: null,
        /**
         * @property {LinkedList.Node}
         */
        prev: null,
        /**
         * @property {*}
         */
        data: null,
        /**
         * @param {LinkedList.Node} prev
         * @param {LinkedList.Node} next
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
        },
        /**
         * Remove the given node, nulling out its prev and next pointers
         */
        remove: function () {
            var n = this.next;
            var p = this.prev;

            if (n) {
                n.prev = p;
            }

            if (p) {
                p.next = n;
            }

            this.next = this.prev = null;
        }
    })
});

// instance
module.exports = classify(LinkedList,/** @lends LinkedList# */{
    /**
     * @property {LinkedList.Node}
     */
    head: null,
    /**
     * @property {LinkedList.Node}
     */
    tail: null,
    /**
     * @param {...*} value
     * @returns {Integer}
     */
    push: function () {
        var args = toArray(arguments).reverse();

        while (args.length) {
            this.tail = new LinkedList.Node(args.pop(), this.tail, null);
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
            this.head = new LinkedList.Node(args.pop(), null, this.head);
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
     * @param {Integer} idx
     * @returns {LinkdList.Node}
     */
    nodeAt: function (idx) {
        var n = this.head;
        var i = 0;

        while (i < idx && n) {
            n = n.next;
            i++;
        }

        if (i === idx) {
            return n;
        }
    },
    /**
     * @param {Integer} idx
     * @returns {*}
     */
    at: function (idx) {
        var n = this.nodeAt(idx);
        return n && n.data;
    },
    /**
     * Insert a new value (or an existing node) after the given sibling or
     * index.
     * @param {LinkedList.Node|*} nodeOrValue
     * @param {LinkdeList.Node|Integer} siblingOrIndex
     */
    insert: function (nodeOrValue, siblingOrIndex) {
        var isNum = typeof siblingOrIndex === 'number';
        var s = isNum ? this.nodeAt(siblingOrIndex) : siblingOrIndex;
        var n = nodeOrValue instanceof LinkedList.Node ?
                nodeOrValue :
                new LinkedList.Node(nodeOrValue);

        n.insert(s, s && s.next);
        this.length++;

        if (s === this.tail) {
            this.tail = n;
        }

        if (this.length === 1) {
            this.head = this.tail = n;
        }
    },
    /**
     * @param {LinkedList.Node|Integer} nodeOrIndex
     */
    remove: function (nodeOrIndex) {
        var isNum = typeof nodeOrIndex === 'number';
        var n = isNum ? this.nodeAt(nodeOrIndex) : nodeOrIndex;

        if (!n) {
            return;
        }

        if (n == this.head) {
            this.head = this.head.next;
        }

        if (n === this.tail) {
            this.tail = this.tail.prev;
        }

        n.remove();
        this.length--;

        if (this.length === 1) {
            this.head = this.tail;
        }
        else if (this.length === 0) {
            this.head = this.tail = null;
        }
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
    },
    /**
     * @returns {Array<*>}
     */
    toArray: function () {
        var list = [];
        this.forEach(function (v) { list.push(v); });
        return list;
    }
});

