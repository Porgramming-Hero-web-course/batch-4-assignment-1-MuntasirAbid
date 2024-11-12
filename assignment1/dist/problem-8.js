"use strict";
function validateKeys(obj, keys) {
    return keys.every(function (key) { return key in obj; });
}
// Sample Input
var person1 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person1, ["name", "age"])); // Output: true
console.log(validateKeys(person1, ["name", "address"])); // Output: false
