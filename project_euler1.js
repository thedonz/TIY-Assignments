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
// Pair with @arigonzo

function solution(){
  return {
    palin: function() {
      var results = [];
      for(var x = 999; x > 100; x--) {
        for(var y = 999; y > 100; y--) {
          var res = x * y;
          if(res.toString() == res.toString().split("").reverse().join("")){
            results.push(x * y);
          }
        }
      }
      return Math.max.apply(Math, results)
    }
  }
}

console.log(solution().palin());
