"use strict";
function getProperty(obj, key) {
    return obj[key];
}
// Input
var person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
