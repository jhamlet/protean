Protean
=======

> An ever changing set of utilities.


Summary
-------


Installation
------------

~~~
% npm install protean
~~~

API
---

<a name="module_Protean"></a>
####Protean
**Members**

* [Protean](#module_Protean)
  * [Protean.classify([subclass], props, [properties])](#module_Protean.classify)
  * [Protean.inherit(superclass, [subclass], [props], [properties])](#module_Protean.inherit)
  * [Protean.instantiate(fn, [args])](#module_Protean.instantiate)
  * [Protean.augment(...obj)](#module_Protean.augment)
  * [Protean.enmap(...args)](#module_Protean.enmap)
  * [Protean.enumerate()](#module_Protean.enumerate)
  * [Protean.guid()](#module_Protean.guid)
  * [callback: Protean~ClassExtend](#module_Protean..ClassExtend)
  * [callback: Protean~ClassExtended](#module_Protean..ClassExtended)
  * [callback: Protean~Class](#module_Protean..Class)

<a name="module_Protean.classify"></a>
#####Protean.classify([subclass], props, [properties])
Create a constructor function passing in it's prototype methods.

**file**: protean/function/classify

**Params**

- \[subclass\] `function` - The subclass constructor function.  
- props `Object` - Bare properties for the constructor's prototype.  
- \[properties\] `Object` - Object.defineProperty property definitions.  

**Returns**: [Class](#module_Protean..Class)  
<a name="module_Protean.inherit"></a>
#####Protean.inherit(superclass, [subclass], [props], [properties])
Create a constructor function that inherits properties and methods from the
given super constructor.

**file**: protean/function/inherit

**Params**

- superclass `function` - The function to inherit from.  
- \[subclass=Function\] `function` - The Subclass constructor function.
If omitted, and a `constructor` property is not defined in `props`, defaults
to a function that calls the superclass' constructor function.  
- \[props\] `Object` - Bare properties to initialize the prototype with.  
- \[properties={}\] `Object` - Object.defineProperty property definitions.  

**Returns**: [Class](#module_Protean..Class) - The constructor function.  
<a name="module_Protean.instantiate"></a>
#####Protean.instantiate(fn, [args])
Create a new object and then apply the constructor function with the arguments.

**file**: protean/function/instantiate

**Params**

- fn `function` - The constructor function  
- \[args\] `Array.<Mixed>` - Arguments to pass to the constructor function  

**Returns**: `Object` - The new instance  
<a name="module_Protean.augment"></a>
#####Protean.augment(...obj)
Like 'extend', but it preserves getters and setters, and will not overwrite
existing properties defined directly on the source object.

**Params**

- ...obj `Object`  

**Returns**: `Object`  
<a name="module_Protean.enmap"></a>
#####Protean.enmap(...args)
Takes a list of alternating key/values and returns an object.

**Params**

- ...args `Mixed`  

**Returns**: `Object`  
<a name="module_Protean.enumerate"></a>
#####Protean.enumerate()
Takes an argument list of strings and returns an object with those keys, and their
values being the index of that key plus one.

**Params**

- ... `String`  

**Returns**: `Object`  
<a name="module_Protean.guid"></a>
#####Protean.guid()
Fast GUID generator, RFC4122 version 4 compliant.

**Returns**: `String`  
**Author**: Jeff Ward (jcward.com).  
**License**: MIT license  
<a name="module_Protean..ClassExtend"></a>
#####callback: Protean~ClassExtend
**Params**

- \[subclass\] `function`  
- \[props\] `Object`  
- \[properties\] `Object`  

**Scope**: inner typedef of [Protean](#module_Protean)  
**Type**: `function`  
**Returns**: [Class](#module_Protean..Class)  
<a name="module_Protean..ClassExtended"></a>
#####callback: Protean~ClassExtended
**Params**

- subclass `function`  

**Scope**: inner typedef of [Protean](#module_Protean)  
**Type**: `function`  
<a name="module_Protean..Class"></a>
#####callback: Protean~Class
**Scope**: inner typedef of [Protean](#module_Protean)  
**Type**: `function`  



Report an Issue
---------------

* [Bugs](http://github.com/jhamlet/protean/issues)
* Contact the author: <jerry@hamletink.com>


License
-------

> Copyright (c) 2015 Jerry Hamlet <jerry@hamletink.com>
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> The Software shall be used for Good, not Evil.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.
> 
