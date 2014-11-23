var num = {      //This is a dictionary
    "zero" :  0, // "Keys" are on the left : "Values" are on the right.
    "one"  :  1,
    "two"  :  2,
    "three":  3,
    "four" :  4,
    "five" :  5,
    "six"  :  6,
    "seven":  7,
    "eight":  8,
    "nine" :  9,
    "ten"  :  10
}

/* dictionary.key

console.log(num.zero);
console.log(num["zero"]);

*/

var stringCalc = {
  wordsToNum : function(wordA, wordB){
    return num[wordA] + num[wordB];
  }
}

console.log(stringCalc.wordsToNum("one", "five"))
//-- is how you use the function above.

var assert = require('chai').assert;

describe("wordsToNum(), will convert two written numbers and return the sum", function() {
  it('should return "0" when given "zero" and "zero"', function(){
    assert.equal(0, stringCalc.wordsToNum("zero", "zero"));
  });
  it('should return "6" when given "three" and "three"', function(){
    assert.equal(6, stringCalc.wordsToNum("three", "three"));
  });
  it('should return "10" when given "five" and "five"', function(){
    assert.equal(10, stringCalc.wordsToNum("five", "five"));
  });
})
