"use strict";
function removeDuplicates(numbers) {
    var uniqueNumbers = [];
    var seen = new Set();
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (!seen.has(num)) {
            uniqueNumbers.push(num);
            seen.add(num);
        }
    }
    return uniqueNumbers;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // 
