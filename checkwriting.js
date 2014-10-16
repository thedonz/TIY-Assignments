/*var assert = require('asstert');

function test(actual,expected, success) {
  assert(actual === expected) || console.log(success);
}*/


/**
 * Check Writing
 *
 * Given an integer representing money -- $1234.56 -- convert
 * that into its string representatation in English words. For
 * example, "1234.56" to "one thousand two hundred thirty four
 * and 56/100", just like you would see on a check.
 *
 * In a lot of ways, this is the inverse of the "String Calculator"
 * problem, so a lot of what you've learned will be put into
 * practice here, but backwards. Hooray!
 */

 /**
  * Sample Data:
  *
  * 1234.56 => "one thousand two hundred thirty four and 56/100"
  * 123.45 => "one hundred twenty three and 45/100s"
  * 12.34 =>
  * 1.23 =>
  *
  * Make up you own, too.
  */

//Typing up and analyzing @asoper29's checkwriting code for review.

function checkWriting(){
  var ones = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];

  var tens = ["zero","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];

  var teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];

  var hundreds = " hundred";

  var thousands = " thousand";

  return {
    toEnglish : function(val){
      val = Number(val).toFixed(2);
      var checkEnd = ' ' + val.slice(-2) + '/100 Dollars';
      var dollars = val.slice(0,-3);

        if (dollars < 20) {
          return ones[dollars] + checkEnd;
        }
        else if (dollars < 100) {
          if (dollars % 10 === 0) {
            return tens[dollars[0]] + checkEnd;
          } else {
            return tens[dollars[0]] + " " + ones[dollars[1]] + checkEnd;
          }
        }
        else if (dollars < 1000) {
          if (dollars % 100 === 0) {
            return ones[dollars[0]] + hundreds + checkEnd;
          }
          else if (dollars % 10 === 0) {
            return ones[dollars[0]] + hundreds + " " + tens[dollars[1]] + checkEnd;
          }
          else if (dollars[2] < 2) {
            return ones[dollars[0]] + hundreds + " " + teens[dollars[2]] + checkEnd;
          } else {
            return ones[dollars[0]] + hundreds + " " + tens[dollars[1]] + " " + ones[dollars[2]] + checkEnd;
          }
        }
        else if (dollars < 10000) {
          if (dollars % 1000 === 0) {
            return ones[dollars[0]] + thousands + checkEnd;
          }
          else if (dollars % 100 === 0) {
            return ones[dollars[0]] + thousands + " " + ones[dollars[1]] + hundreds + checkEnd;
          }
          else if (dollars % 10 === 0) {
            return ones[dollars[0]] + thousands + " " + ones [dollars[1]] + hundreds + " " + tens[dollars[2]] + checkEnd;
          }
          else if (dollars[2] < 2) {
            return ones[dollars[0]] + thousands + " " + ones[dollars[1]] + hundreds + " " + teens[dollars[3]] + checkEnd;
          } else {
            return ones[dollars[0]] + thousands + " " + ones[dollars[1]] + hundreds + " " + tens[dollars[2]] + " " + ones[dollars[3]] + checkEnd;
          }
        }
    }
  }
}

var assert = require('chai').assert;

describe('checkWriting().toEnglish()', function() {
  it('should convert "0" to "zero"', function() {
    assert.equal(checkWriting().toEnglish(0), 'zero 00/100 Dollars');
  });
  it('should convert "1234.56" to "one thousand two hundred and thirty four"', function() {
    assert.equal(checkWriting().toEnglish(1234.56), 'one thousand two hundred thirty four 56/100 Dollars');
  })
  it('should convert "9000.50" to "nine thousand 50/100 Dollars"', function() {
    assert.equal(checkWriting().toEnglish(9000.50), 'nine thousand 50/100 Dollars');
  })
})
