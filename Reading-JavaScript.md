
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
