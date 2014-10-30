##MUTATORS!! (SNIKT!)##

```javascript
Array.prototype.copyWithin()

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

```
// This method grabs a subset of the array and based on a start and an optional end index of the array. It then takes the subset and copies that, starting at the target, over the existing array elements.

----

```javascript
Array.prototype.fill()

[1, 2, 3].fill(4, 1, 2)
// [1, 4, 3]

```
// .fill replaces all the existing elements of the array with a static value, unless a start and end index are indicated; in which case, only the values within the specified range are replaced.

----

```javascript
Array.prototype.pop()

var myNumbers = [1, 2, 3, 4, 5];
var popped = myNumbers.pop();

console.log(myNumbers); // [1, 2, 3, 4]
console.log(popped); // 5

```

// This method removes the last element from an array and returns that element.

----

```javascript
Array.prototype.push()

var droids = ['R2-D2', 'C-3PO'];
var total = droids.push('R5-D4', '4-LOM', 'C1-10P');

console.log(droids); // ['R2-D2', 'C-3PO', 'R5-D4', '4-LOM', 'C1-10P']
console.log(total); // 5

```
// Adds new elements to the end of the array specified by the .push() command

----

```javascript
Array.prototype.reverse()

var mySuitcase = ['Socks', 'Lightsaber', 'Communicator'];
mySuitcase.reverse();

console.log(mySuitcase) // ['Communicator', 'Lightsaber', 'Socks']

```

// Reverses the order of the elements of an array.


```javascript
Array.prototype.shift()

var crewEnterprise = ['Red Shirt', ' Kirk', ' Spock', ' McCoy', ' Sulu'];

console.log('Enterprise Crew before away mission: ' + crewEnterprise);

var shifted = crewEnterprise.shift();

console.log('Enterprise Crew after away mission: ' + crewEnterprise);
console.log('This crew member didn\'t make it: ' + shifted);

```

// Removes the first element from an array and returns that element.

```javascript
Array.prototype.sort()

var captains = ["Kirk", "Solo", "Reynolds", "Sparrow"];
captains.sort(); // ["Kirk", "Reynolds", "Solo", "Sparrow"]

```

// Sorts the elements of an array in place (?!) and returns the array.

```javascript
Array.prototype.splice()

var notAnXMen = ['Cyclops', ' Wolverine', ' Gambit', ' Rogue', ' Mystique'];

console.log("One of these is NOT an X-Men: " + notAnXMen);

var removed = notAnXMen.splice(4, 1);

console.log("Ha! Found her!: " + removed);
console.log("The Actual X-Men: " + notAnXMen);
```

// Adds and/or removes elements from an array.

----

```javascript
Array.prototype.unshift()

var firstAvenger = [" Hulk", " Iron Man", " Hawk Eye", " Black Widow"];

console.log("We're missing an Avenger! " + firstAvenger);

firstAvenger.unshift("Captain America");

console.log("Ah, here he is! " + firstAvenger);


```

// Adds one or more elements to the front of an array and returns the new length of the array.

----
----

##ACCESSORS!##

```javascript
Array.prototype.concat()

var godsOlympus = ['Zeus', 'Hades', 'Poseidon'],
    godsEgypt   = ['Set', 'Osiris', 'Ra'],
    godsAmerica = ['Teotihuacan', 'Viracocha', 'Quetzacoatl'];

var godsOfAncientWorld = godsOlympus.concat(godsEgypt, godsAmerica);


```
Array mixer- adds the array before the .concat to the array(s) after the (). Sweet.


```javascript
Array.prototype.contains()

var ninjaTurtles = ['Donatello', 'Michaelangelo', 'Raphael'];

console.log("Who's here? " + ninjaTurtles);

var missingTurtle = ninjaTurtles.contains('Leonardo');

console.log("Who's missing? " + missingTurtle);


```
Determines whether an array contains a certain element, returning true or false as appropriate.

```javascript
Array.prototype.join()

var planeteers = new Array('Earth', 'Fire', 'Wind', 'Water', 'Heart');

var captainPlanet = planeteers.join('!, ');

console.log(captainPlanet + "! By your powers combined, I AM CAPTAIN PLANET!");


```
Joins all elements of an array into a string, forming the legendary ecological hero: Captain Planet!!


```javascript
Array.prototype.slice()

var justiceLeague = ["Batman", " Wonder Woman", " The Flash", " Aquaman", " Superman", " Martian Manhunter",];

var alienBeings = justiceLeague.slice(4,6);

console.log("The Justice League of America is composed of " + justiceLeague + ". And of those," + alienBeings + " are from another world!");

```
Picks out and displays a section of the array defined by params.


```javascript
Array.prototype.toString()

var numbers = [1, 2, 3, 4, 5];
var anExample = numbers.toString();

console.log(anExample);

```

Returns a string. Converts numbers to 'string' characters.


```javascript
Array.prototype.toLocaleString()

var number = 1337;
var date = new Date();
var myArr = [number, date, 'foo'];

var str = myArr.toLocaleString();

console.log(str);

```

Returns a localized string representing the array and its elements.

```javascript
Array.prototype.indexOf()

var array = ['code', 'dojo', 'kata', 'sensei'];

var index = array.indexOf('dojo', 'sensei');

console.log(index); // 1

```

Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. (Practice this one more! 3/5 fingers)


```javascript
Array.prototype.lastIndexOf()

var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2); // index is 3
index = array.lastIndexOf(7); // index is -1
index = array.lastIndexOf(2, 3); // index is 3
index = array.lastIndexOf(2, 2); // index is 0
index = array.lastIndexOf(2, -2); // index 0
index = array.lastIndexOf(2, -1); //index is 3


```
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

----
----
##Iterators!!!##

```javascript
Array.prototype.forEach()

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

['Jabba', 'The', , 'Hutt'].forEach(logArrayElements);

```
Calls a function for each element in the array.


```javascript
Array.prototype.entries()

var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']

```
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.


```javascript
Array.prototype.every()

function isBigEnough(element, index, array) {
  return element >= 10;
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);

passed = [12, 54, 18, 130, 44].every(isBigEnough);

```

Returns true if every element in this array satisfies the provided testing function.

```javascript
Array.prototype.some()

function isBigEnough(element, index, array) {
  return element >= 10;
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough); //passed is false (no number is equal to, or greater than 10)
passed = [12, 5, 8, 1, 4].some(isBigEnough); //passed is true ( 12 is bigger than 10)

```

Returns true if *at least one* element in this array satisfies the provided testing function.

```javascript
Array.prototype.filter()

function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // filtered is [12, 130, 44]
```

Creates a new array with all of the elements of this array for which the provided filtering function returns true.

```javascript
Array.prototype.find()
//The following formula was transcribed from MDN. I'm not entirely sure how it works, so I've annotated the parts I'm confused below. --xdonze

function isPrime(element, index, array) {
  var start = 2; //starting at 2, I imagine, because 1 isn't being considered in this equation.
  while (start <= Math.sqrt(element)) { //this part is the most confusing
    if (element % start++ < 1) { //followed by this part.
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); //undefined, not found - none of these numbers are prime.
console.log([4, 5, 8, 12].find(isPrime)); // 5 - I understand that it's looking for a prime #, in which it find the # 5.

```

Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.


```javascript
Array.prototype.findIndex()
//This iterator is related to the one above, and thus I'm not sure exactly how it works. In the example below, it's designed to find the index in which the prime number resides.

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2

```

Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

```javascript
Array.prototype.keys()
// This one really stumped me.

var arr = ['a', 'b', 'c'];
var eArr = arr.keys();

console.log(eArr.next().value); // 0
console.log(eArr.next().value); // 1
console.log(eArr.next().value); // 2


```
Returns a new Array Iterator that contains the keys for each index in the array.

```javascript
Array.prototype.map()

var numbers = [25, 64, 400, 3600];

console.log(numbers); // [25, 64, 400, 3600]

var roots = numbers.map(Math.sqrt);

console.log(roots); // [ 5, 8, 20, 60 ]

```
Creates a new array with the results of calling a provided function on every element in this array.

```javascript
Array.prototype.reduce()

var total = [0, 1, 2, 3].reduce(function(a,b) {
  return a + b;
});

```

Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

```javascript
Array.prototype.reduceRight()

var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]


```

Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
