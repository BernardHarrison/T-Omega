"use strict";
module.exports = {
    string: {
        startsWith: function (left, right) {
            if (typeof left !== "string" || typeof right !== "string")
                return false;
            return left.startsWith(right);
        },
        startsWithIgnoreCase: function (left, right) {
            if (typeof left !== "string" || typeof right !== "string")
                return false;
            return left.toLowerCase().startsWith(right.toLowerCase());
        },
        endsWith: function (left, right) {
            if (typeof left !== "string" || typeof right !== "string")
                return false;
            return left.endsWith(right);
        },
        endsWithIgnoreCase: function (left, right) {
            if (typeof left !== "string" || typeof right !== "string")
                return false;
            return left.toLowerCase().endsWith(right.toLowerCase());
        },
        contains: function (left, right) {
            if (typeof left !== "string" || typeof right !== "string")
                return false;
            return left.includes(right);
        },
        containsIgnoreCase: function (left, right) {
            if (typeof left !== "string" || typeof right !== "string")
                return false;
            return left.toLowerCase().includes(right.toLowerCase());
        },
        equals: function (left, right) {
            if (typeof left !== "string" || typeof right !== "string")
                return false;
            return left == right;
        },
        equalsIgnoreCase: function (left, right) {
            if (typeof left !== "string" || typeof right !== "string")
                return false;
            return left.toLowerCase() == right.toLowerCase();
        },
    },
    number: {},
    boolean: {},
    date: {}
};
