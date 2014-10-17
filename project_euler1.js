/*
This is where the EULER assignment will go


=== PRODUCTION CODE ===
function solution(){
    // change input to suit the solution, e.g. `limit`
    return {
        // I wanna see this one...
        solveFor: function(limit){ ... },

        // For Problem 2, for example... However you solve it.
        fibonacci: function(limit){ . . .  },
        filterEvens: function(list){ . . . },
        sum: function(list){ . . . }
    }
}


=== TEST CODE ===
You should probably write some..
*/

// Palindrome Test: https://projecteuler.net/problem=4
// Credit: @arigonzo's code. Trying to break down and understand it.
// Paired with @asoper29 to understand code.


function solution(){
  return {
    palin: function() { // Declare Function
      var results = [];
      for(var x = 999; x > 100; x--) { // for loop, x is 999, if x is greater than 100, then subtract 1
        for(var y = 999; y > 100; y--) { // for loop, y is 999, if y is greater than 100, then subtract 1
          var res = x * y; // declare variable res, multiply x times y
          if(res.toString() == res.toString().split("").reverse().join("")){ // Comparing two strings after splitting and reversing, then joining.
            results.push(x * y); // ??
          }
        }
      }
      return Math.max.apply(Math, results) // ???
    }
  }
}

console.log(solution().palin());

//=== TEST CODE ===

var assert = require('chai').assert
var expect = require('chai').expect

describe('palin()', function(){
  it('should be over 10000', function(){
    expect(solution().palin()).to.be.above(10000);
  })
  it('should be under 998001', function(){
    expect(solution().palin()).to.be.below(998001)
  })
  it('should give a 3 digit number', function(){
    assert.equal(solution().palin()), 906609);
  })
  it('should return a number', function(){
  })
})

console.log(solution().palin());
