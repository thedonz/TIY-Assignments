#AngularJS -
## Shaping up with Angular

* [ ] Using [the API documentation](https://docs.angularjs.org/api/), document the following parts of the framework; include the arguments, the return value, and an example of each in use:
  * function
    * ~~`angular.module` -- returns an instance of _type_ `angular.Module`, which you should also document~~
    * ~~`angular.extend`~~
    * ~~`angular.copy`~~
    * ~~`angular.element`~~
  * directive -- keep in mind that some directives can only be used on specific HTML elements!
    * ~~`ngApp`~~
    * ~~`ngBind`~~
    * ~~`ngClass`~~
    * ~~`ngClick`~~
    * ~~`ngController`~~
    * ~~`ngDblclick`~~
    * `ngForm`
    * `ngKeyup`
    * `ngModel`
    * `ngRepeat`
    * `ngSubmit`

---

###1. `angular.module`

**Description** - a global place for creating, registering and retrieving Angular modules. All modules (angular core or 3rd party) that should be available to an application must be registered using this mechanism.

**Arguments** -

  * name (string) - _The name of the module to create or retrieve._
  * requires (!Array.<string>=) - _(optional) If specified, then the new module is being created. If unspecified, then the module is being retrieved for further configuration._
  * configFn (Function=) - _Optional config function for the module._

**Return Value** - a new module with the `angular.Module` api.

###2. `angular.extend`

**Description** - Extends the destination object `dst` by copying own enumerable properties from the `src` objects to `dst`. Multiple `src` objects can be specified.

**Arguments** -

  * dst (object) - _Destination object._
  * src (object) - _Source object._

**Return Value** - References to `dst`.

###3. `angular.copy`

**Description** - Creates a deep copy of `source`, which should be an object or an array.

**Arguments** -

  * source ( * ) - _The source that will be used to make a copy. Can be any type, including primitives, `null`, and `undefined`._
  * destination (object, array) - _Destination into which the source is copied. If provided, must be of the same type as `source`._

**Return Value** - The copy or updated `destination`, if `destionation` was specified.

###4. `angular.element`

**Description** - Wraps a raw DOM element or HTML string as a jQuery element.

**Arguments** -
  * element (string, DOM Element) - _HTML string or DOM Element to be wrapped into jQuery._

**Return Value** - jQuery object.

###5. `ngApp`

**Description** - Use this directive to auto-bootstrap an AngularJS application. The `ngApp` directive designates the root element of the application and is typically placed near the root element of the page. (The `<body>` or `<html>` tags.)
**Arguments** -

  * ngApp (angular.Module) - _An optional application module name to load._
  * ngStrictDi (boolean) - _if this attribute is present on the app element, the injector will be created in strict-di mode._

**Return Value** - n/a.

###6. `ngBind`

**Description** - The `ngbind` attribute tells Angular to replace the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes.

**Arguments** -

  * ngBind (expression) - _Expression to evaluate_.

**Example** -
```HTML
<script>
  angular.module('bindExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.name = 'Whirled';
    }]);
</script>
<div ng-controller="ExampleController">
  Enter name: <input type="text" ng-model="name"><br>
  Hello <span ng-bind="name"></span>!
</div>
```

```javascript

it('should check ng-bind', function() {
  var nameInput = element(by.model('name'));

  expect(element(by.binding('name')).getText()).toBe('Whirled');
  nameInput.clear();
  nameInput.sendKeys('world');
  expect(element(by.binding('name')).getText()).toBe('world');
});
```

###7 `ngClass`

**Description** - Allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

**Arguments** -

  * ngClass (expression) - _Expression to eval._

**Return Value** - n/a

###8 `ngClick`

**Description** - allows you to specifiy custom behavior when an element is clicked.

**Arguments** -

  * ngClick (expression) - _Expression to evaluate upon click. (Event object is available as `$event`)_

**Example** -

```HTML
<button ng-click="count = count + 1" ng-init="count=0">
  Increment
</button>
<span>
  count: {{count}}
</span>
```
```javascript
it('should check ng-click', function() {
  expect(element(by.binding('count')).getText()).toMatch('0');
  element(by.css('button')).click();
  expect(element(by.binding('count')).getText()).toMatch('1');
});
```
###9. `ngController`

**Description** - attaches a controller class to the view. This is a key aspect of how angular supports the principles behind the MVC design pattern.

**Arguments** -

* ngController (expression) - _Name of a constructor function registered with the current $controllerProvider or an expression that on the current scope evaluates to a constructor function._

###10. `ngDblclick`

**Description** - allows you to specify custom behavior on a dblclick event.

**Arguments** -

* ngDblclick (expression) - _Expression to evaluate upon a dblclick. (The Event object is available as `$event`)_

**Example**

```html
<button ng-dblclick="count = count + 1" ng-init="count=0">
  Increment (on double click)
</button>
count: {{count}}
```

###11. `ngForm`

**Description** - 

**Arguments** -

**Example** -
