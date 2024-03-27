const _ = require("lodash");

const add = (a, b) => {
    return _.add(a, b);
}

const subtract = (a, b) => {
    return _.subtract(a, b);
}

module.exports = {
    add, subtract
}