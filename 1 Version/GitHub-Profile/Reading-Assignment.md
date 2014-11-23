#Herein lie some words

>* Document the following in your own words:
  * [ ] Form Elements from the [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
    * include HTML examples for each element _and_ `type` variant
    * include pertinent attributes and specifically the event handler attributes
  * [ ] [Web Events](https://developer.mozilla.org/en-US/docs/Web/Events)
    * include an example of the user interaction that would trigger each event in the browser
    * _only_ cover the "standard" events; _omit_ any browser-specific additions
    * cover all form and input device events
  * [ ] HTTP Verbs: GET, POST, PUT, DELETE -- start with [What is Rest?](http://j.mp/what-is-rest)
    * provide 3 examples of each verb being used in the Github API

---

##1. Form Elements -
###Represents a document section that contains interactive controls to submit information to a web server

Examples:

```
<!-- GET request -->
<form action="">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name">
  <input type="submit" value="Save">
</form>

<!-- POST request -->
<form action="" method="post">
  <label for="POST-name">Name:</label>
  <input id="POST-name" type="text" name="name">
  <input type="submit" value="Save">
</form>

<!-- Form with fieldset, legend, and label -->
<form action="" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form>
```

##2. Web Events -
### Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the `Event` interface, and may have additional custom fields and/or functions used to get additional information about what happened.

* `reset` - is fired when a form is reset.
* `submit` - A form is submitted.
* ``



##3. HTTP Verbs -
###
