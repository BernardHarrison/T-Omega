module.exports = {
    string: {
        startsWith: function (left: string, right: string) {
            if (typeof left !== "string" || typeof right !== "string") return false;
            return left.startsWith(right);
        },
        startsWithIgnoreCase: function (left: string, right: string) {
            if (typeof left !== "string" || typeof right !== "string") return false;
            return left.toLowerCase().startsWith(right.toLowerCase());
        },
        endsWith: function (left: string, right: string) {
            if (typeof left !== "string" || typeof right !== "string") return false;
            return left.endsWith(right);
        },
        endsWithIgnoreCase: function (left: string, right: string) {
            if (typeof left !== "string" || typeof right !== "string") return false;
            return left.toLowerCase().endsWith(right.toLowerCase());
        },
        contains: function (left: string, right: string) {
            if (typeof left !== "string" || typeof right !== "string") return false;
            return left.includes(right);
        },
        containsIgnoreCase: function (left: string, right: string) {
            if (typeof left !== "string" || typeof right !== "string") return false;
            return left.toLowerCase().includes(right.toLowerCase());
        },
        equals: function (left: string, right: string) {
            if (typeof left !== "string" || typeof right !== "string") return false;
            return left == right;
        },
        equalsIgnoreCase: function (left: string, right: string) {
            if (typeof left !== "string" || typeof right !== "string") return false;
            return left.toLowerCase() == right.toLowerCase();
        },
    },
    number: {

    },
    boolean: {},
    date: {}
}

enum simpleFieldTypes {
    string,
    number,
    boolean,
    date    
}

enum complexFieldTypes {
    object
}

interface simple{
    name: string;
    type: simpleFieldTypes
}

interface complex extends simple{

}