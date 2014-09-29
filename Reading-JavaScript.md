
Examples of JavaScript code from the selected assignment


1.

  ```javascript
  var interest = parseFloat(apr.value) / 100 / 12;
  ```
  * Variable: `interest`
  * Value: (result of code) divided by 100 divided by 12

2.

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

3.

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
    
