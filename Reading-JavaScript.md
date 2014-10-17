
Examples of JavaScript code from the selected assignment


```javascript
var interest = parseFloat(apr.value) / 100 / 12;
```
* Variable: `interest`
* Value: (result of code) divided by 100 divided by 12

----

```javascript
var toc = document.getElementById("TOC");
  if (!toc) {
      toc = document.createElement("div");
      toc.id = "TOC";
      document.body.insertBefore(toc, document.body.firstChild);
  }
```
* Variable: `toc` (terms of condition)
* Value: getElementByID <- is asking for this document

* Condition: `if`
* Value: toc = `document.createElement("div")` <-- If there is no document, create one.

----

```javascript
function forceToUpperCase(element) {
  if (typeof element === "string") element = document.getElementById(element);
  element.oninput = upcase;
  element.onpropertychange = upcaseOnPropertyChange;
```
* Condition: `if`
* Value: `(typeof element === "string") element = document.getElementById(element);
          element.oninput = upcase;
          element.onpropertychange = upcaseOnPropertyChange;`  
**Make Uppercase if they're lowercase**

----

4.

  ```javascript
    function updateTime() {
    var now = new Date();
    var min = now.getMinutes();
    var hour = (now.getHours() % 12) + min/60;
    var minangle = min*6;
    var hourangle = hour*30;
  ```

  * Function: `updateTime()`
  * Variables: `now`, `min`, `hour`, `minangle`, `hourangle`.
  * Values: `new Date()`: `now.getMinutes()`; `(now.getHours() % 12) + min/60;`; `min*6`; `hour*30`;

5.

  ```javascript
    var elements = document.getElementsByClassName("reveal");
    for(var i = 0; i < elements.length; i++) {
        var elt = elements[i];
        var title = elt.getElementsByClassName("handle")[0];
        addRevealHandler(title, elt);
    }
    ```

    * Variable: `elements`
    * Value:`document.getElementsByClassName("reveal");`


6.

  ```javascript
    function onLoad(f) {
    if (onLoad.loaded)
        window.setTimeout(f, 0);
    else if (window.addEventListener)
        window.addEventListener("load", f, false);
    else if (window.attachEvent)
        window.attachEvent("onload", f);
  ```
  * Function: `onLoad(f)`
  * Condition: `if (onLoad.loaded) window.setTimeout(f, 0);`
  * Modifier: `else if (window.addEventListener)`
  * Modifier `else if (window.attachEvent) window.attachEvent("onload", f);`

7.

  ```javascript
    var elts = document.getElementsByClassName("sparkline");
  ```

  * Variable: `elts`
  * Value: `document.getElementsByClassName("sparkline");`

8.

  ```javascript
    var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.title = content;
        elt.innerHTML = "";
        elt.appendChild(canvas);
  ```

  * Variable: `canvas`
  * Value: `document.createElement("canvas");`


9.

  ```javascript
     var types = e.dataTransfer.types;
        if (!types ||
            (types.contains && types.contains("Files")) ||
            (types.indexOf && types.indexOf("Files") != -1)) {
            droptarget.classList.add("active");
            return false;
        }
  ```

  * If Statement: `if (!types ||`
  * Value: `return false;`


10.

  ```javascript
    function reconnect() {
            if (aborted) return;
            if (xhr.status >= 300) return;
            setTimeout(connect, retrydelay)
  ```

  * Conditional function: `function reconnect() {`
  * Value: `if (aborted) return; if (xhr.status >= 300) return; setTimeout(connect, retrydelay)`

----
NEW!
----

1.

```javascript

// Emulate the EventSource API for browsers that do not support it.

```

* Comments:
  * Symbol: `//`
  * Name: Inline Comment
  * Meaning: Ignore everything until the end of the line

---

2.

```javascript
if (window.EventSource === undefined) {     // If EventSource is not defined,
```

* Symbol: `if`
  * Type: keyword
  * Name: condition
  * Meaning: ??
*  Symbol: `()`
  * Type: Operator
  *  Name: Parentheses
  *  Meaning: conditional
* Symbol: `window`
  * Type: identifier
  * Name: variable
  * Meaning: ?
* Symbol: `.`
  * Type: Operator
  * Name: dot
  * Meaning: ?
* Symbol: `EventSource`
  * Type: identifier
  * Name: variable
  * Meaning: ?
* Symbol: `===`
  * Type: Operator
  * Name: Triple Equal (aka Strict Equal)
  * Meaning: compares strictly equal to
* Symbol: `undefined`
  * Type: undefined
  * Name: undefined
  * Meaning: Identifier has not been assigned.

---

3.

```javascript
  function updateTime() {
  var now = newDate();
```

* Symbol: `function`
  * Type: keyword
  * Name: Function
  * Meaning: Begins a function object.
* Symbol: `updateTime`
  * Type: identifier
  * Name: updateTime()
  * Meaning: Will be the word typed to call the function to action.
* Symbol: `var`
  * Type: keyword
  * Name: Variable
  * Meaning: Variable assignor. Assigns to the word a value.
* Symbol: `now`
  * Type: identifier
  * Name: now
  * Meaning: Identifier is what will contain the value.
* Symbol: `newDate();``
  * Type: value (also known as a literal)
  * Name: newDate()
  * Meaning: Will hold the value for the now identifier.

---

4.

```javascript
board[4][4] = board[6][4];
```
* Symbol: `board`
  * Type: array
  * Name: "board"
  * Meaning: refers to an array.
* Symbol: `[4][4]`
  * Type: Index
  * Name: Four
  * Meaning: refers to the index inside the array
* Symbol: `=`
  * Type: Operator
  * Name: assignor
  * Meaning: Assigns values
* Symbol: `board`
  * Type: array
  * Name: "board"
  * Meaning: refers to an array.
* Symbol: `[6][4]`
  * Type: Index
  * Name: Four
  * Meaning: refers to the index inside the array

---

5.

```javascript

function test_wordVal(a, b) {

```

* Symbol: `function`
  * Type: 
