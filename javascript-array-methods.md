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
```

// Sorts the elements of an array in place and returns the array.

```javascript
Array.prototype.splice()
```

// Adds and/or removes elements from an array.

```javascript
Array.prototype.unshift()
```

// Adds one or more elements to the front of an array and returns the new length of the array.

```
