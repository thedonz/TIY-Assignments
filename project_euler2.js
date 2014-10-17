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

// Paired with @asoper29 to understand Project Euler #1 Multiples of 3 and 5

function solution(){
  return {
    solveFor: function(input){
      var sum = 0;
      for(var num = 0; num < input; num++){
        if (num % 5 === 0 || num % 3 === 0){
          sum += num;
        }
      }
      return sum;
    }
  }
}

var assert = require('chai').assert;

describe('Solution().solveFor', function(){
  it('should take "1000" and return "233168"', function(){
    assert.equal(solution().solveFor(1000), 233168);
  });
});
