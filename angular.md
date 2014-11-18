#AngularJS -
## Shaping up with Angular

* [ ] Using [the API documentation](https://docs.angularjs.org/api/), document the following parts of the framework; include the arguments, the return value, and an example of each in use:
  * function
    * ~~`angular.module` -- returns an instance of _type_ `angular.Module`, which you should also document~~
    * ~~`angular.extend`~~
    * ~~`angular.copy`~~
    * `angular.element`
  * directive -- keep in mind that some directives can only be used on specific HTML elements!
    * `ngApp`
    * `ngBind`
    * `ngClass`
    * `ngClick`
    * `ngController`
    * `ngDblclick`
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
