"use strict";
function countWordOccurrences(sentence, word) {
    var words = sentence.toLowerCase().split(" ");
    var targetWord = word.toLowerCase();
    var count = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var w = words_1[_i];
        if (w === targetWord) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrences("I love typescript", "typescript"));
