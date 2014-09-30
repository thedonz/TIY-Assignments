/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" --
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */

//console.log('"For my ally is the Force; and a powerful ally, it is."')


var divide = function(a, b){
  if (a === "two"){
    return 2
    }
    return 1
  }
console.log('it should divide "one" by "one": ',
    divide("one", "one") === 1);
console.log('it should divide "two" by "one": ',
    divide("two", "one") === 2)
console.log('it should divide "three" by "one": ',
    divide("three", "one") === 3)
