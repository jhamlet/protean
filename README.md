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

####Index

**Modules**

* [Protean](#module_Protean)
  * [Protean.underscore](#module_Protean.underscore)
  * [Protean._](#module_Protean._)
  * [Protean.Rx](#module_Protean.Rx)
  * [Protean.rx](#module_Protean.rx)
  * [Protean.MapProxy](#module_Protean.MapProxy)
  * [Protean.ImmutableMapProxy](#module_Protean.ImmutableMapProxy)
  * [Protean.alias(name, [scope], [...arg])](#module_Protean.alias)
  * [Protean.augment(...obj)](#module_Protean.augment)
  * [Protean.classify([subclass], props, [properties])](#module_Protean.classify)
  * [Protean.guid()](#module_Protean.guid)
  * [Protean.inherit(superclass, [subclass], [props], [properties])](#module_Protean.inherit)
  * [Protean.instantiate(fn, [args])](#module_Protean.instantiate)
  * [Protean.enumerate()](#module_Protean.enumerate)
  * [callback: Protean~ClassExtend](#module_Protean..ClassExtend)
  * [callback: Protean~ClassExtended](#module_Protean..ClassExtended)
  * [callback: Protean~Class](#module_Protean..Class)

**Classes**

* [class: ImmutableMapProxy](#ImmutableMapProxy)
  * [new ImmutableMapProxy([...keyValue])](#new_ImmutableMapProxy)
  * [immutableMapProxy.extend(...map)](#ImmutableMapProxy#extend)
  * [immutableMapProxy.set(key, value)](#ImmutableMapProxy#set)
  * [immutableMapProxy.clear()](#ImmutableMapProxy#clear)
  * [immutableMapProxy.has(key)](#ImmutableMapProxy#has)
  * [immutableMapProxy.get(key)](#ImmutableMapProxy#get)
  * [immutableMapProxy.delete(key)](#ImmutableMapProxy#delete)
  * [immutableMapProxy.keys()](#ImmutableMapProxy#keys)
  * [immutableMapProxy.values()](#ImmutableMapProxy#values)
  * [immutableMapProxy.valueOf()](#ImmutableMapProxy#valueOf)
  * [immutableMapProxy.entries()](#ImmutableMapProxy#entries)
  * [immutableMapProxy.map(fn, [scope])](#ImmutableMapProxy#map)
  * [immutableMapProxy.forEach(fn, [scope])](#ImmutableMapProxy#forEach)
* [class: MapProxy](#MapProxy)
  * [new MapProxy([...keyValue])](#new_MapProxy)
  * [mapProxy.clear()](#MapProxy#clear)
  * [mapProxy.extend(...map)](#MapProxy#extend)
  * [mapProxy.has(key)](#MapProxy#has)
  * [mapProxy.get(key)](#MapProxy#get)
  * [mapProxy.set(key, value)](#MapProxy#set)
  * [mapProxy.delete(key)](#MapProxy#delete)
  * [mapProxy.keys()](#MapProxy#keys)
  * [mapProxy.values()](#MapProxy#values)
  * [mapProxy.valueOf()](#MapProxy#valueOf)
  * [mapProxy.entries()](#MapProxy#entries)
  * [mapProxy.map(fn, [scope])](#MapProxy#map)
  * [mapProxy.forEach(fn, [scope])](#MapProxy#forEach)
 
<a name="module_Protean"></a>
####Protean
**Members**

* [Protean](#module_Protean)
  * [Protean.underscore](#module_Protean.underscore)
  * [Protean._](#module_Protean._)
  * [Protean.Rx](#module_Protean.Rx)
  * [Protean.rx](#module_Protean.rx)
  * [Protean.MapProxy](#module_Protean.MapProxy)
  * [Protean.ImmutableMapProxy](#module_Protean.ImmutableMapProxy)
  * [Protean.alias(name, [scope], [...arg])](#module_Protean.alias)
  * [Protean.augment(...obj)](#module_Protean.augment)
  * [Protean.classify([subclass], props, [properties])](#module_Protean.classify)
  * [Protean.guid()](#module_Protean.guid)
  * [Protean.inherit(superclass, [subclass], [props], [properties])](#module_Protean.inherit)
  * [Protean.instantiate(fn, [args])](#module_Protean.instantiate)
  * [Protean.enumerate()](#module_Protean.enumerate)
  * [callback: Protean~ClassExtend](#module_Protean..ClassExtend)
  * [callback: Protean~ClassExtended](#module_Protean..ClassExtended)
  * [callback: Protean~Class](#module_Protean..Class)

<a name="module_Protean.underscore"></a>
#####Protean.underscore
<a name="module_Protean._"></a>
#####Protean._
<a name="module_Protean.Rx"></a>
#####Protean.Rx
<a name="module_Protean.rx"></a>
#####Protean.rx
<a name="module_Protean.MapProxy"></a>
#####Protean.MapProxy
<a name="module_Protean.ImmutableMapProxy"></a>
#####Protean.ImmutableMapProxy
<a name="module_Protean.alias"></a>
#####Protean.alias(name, [scope], [...arg])
Alias a named method. If a scope is not given, the current `this` will be used
to determine the method to call, otherwise it will use the supplied scope.

The function that is returned has one method on it `as(method)` that allows you to
finalize the alias. Basically it updates the receiving object with the bound
function.

**Params**

- name `String` - Name of the function to alias.  
- \[scope\] `Object` | `String` - Optional scope to use. If not given, or is
falsey, will use the current 'this'. If a `String` will look up `this[scope]`
to determine the object to use as the scope. This allows for delegation.  
- \[...arg\] `Mixed` - Optional, additional arguments to prepend when calling
the aliased function.  

**Returns**: `function`  
**Example**  
{ foo: alias('bar', '_delegate').as('foo') };

<a name="module_Protean.augment"></a>
#####Protean.augment(...obj)
Like 'extend', but it preserves getters and setters, and will not overwrite
existing properties defined directly on the source object.

**Params**

- ...obj `Object`  

**Returns**: `Object`  
<a name="module_Protean.classify"></a>
#####Protean.classify([subclass], props, [properties])
**Params**

- \[subclass\] `function` - The subclass constructor function.  
- props `Object` - Bare properties for the constructor's prototype.  
- \[properties\] `Object` - Object.defineProperty property definitions.  

**Returns**: [Class](#module_Protean..Class)  
<a name="module_Protean.guid"></a>
#####Protean.guid()
Fast GUID generator, RFC4122 version 4 compliant.

**Returns**: `String`  
**Author**: Jeff Ward (jcward.com).  
**License**: MIT license  
<a name="module_Protean.inherit"></a>
#####Protean.inherit(superclass, [subclass], [props], [properties])
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

**Params**

- fn `function` - The constructor function  
- \[args\] `Array.<Mixed>` - Arguments to pass to the constructor function  

**Returns**: `Object` - The new instance  
<a name="module_Protean.enumerate"></a>
#####Protean.enumerate()
Takes an argument list of strings and returns an object with those keys, and their
values being the index of that key plus one.

**Params**

- ... `String`  

**Returns**: `Object`  
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
<a name="ImmutableMapProxy"></a>
####class: ImmutableMapProxy
**Extends**: `MapProxy`  
**Members**

* [class: ImmutableMapProxy](#ImmutableMapProxy)
  * [new ImmutableMapProxy([...keyValue])](#new_ImmutableMapProxy)
  * [immutableMapProxy.extend(...map)](#ImmutableMapProxy#extend)
  * [immutableMapProxy.set(key, value)](#ImmutableMapProxy#set)
  * [immutableMapProxy.clear()](#ImmutableMapProxy#clear)
  * [immutableMapProxy.has(key)](#ImmutableMapProxy#has)
  * [immutableMapProxy.get(key)](#ImmutableMapProxy#get)
  * [immutableMapProxy.delete(key)](#ImmutableMapProxy#delete)
  * [immutableMapProxy.keys()](#ImmutableMapProxy#keys)
  * [immutableMapProxy.values()](#ImmutableMapProxy#values)
  * [immutableMapProxy.valueOf()](#ImmutableMapProxy#valueOf)
  * [immutableMapProxy.entries()](#ImmutableMapProxy#entries)
  * [immutableMapProxy.map(fn, [scope])](#ImmutableMapProxy#map)
  * [immutableMapProxy.forEach(fn, [scope])](#ImmutableMapProxy#forEach)

<a name="new_ImmutableMapProxy"></a>
#####new ImmutableMapProxy([...keyValue])
**Params**

- \[...keyValue\] `String` | `Mixed`  

**Extends**: `MapProxy`  
<a name="ImmutableMapProxy#extend"></a>
#####immutableMapProxy.extend(...map)
Merge all given objects into this map

**Params**

- ...map `Object` | `Map`  

<a name="ImmutableMapProxy#set"></a>
#####immutableMapProxy.set(key, value)
**Params**

- key `String`  
- value `Mixed`  

<a name="ImmutableMapProxy#clear"></a>
#####immutableMapProxy.clear()
Clear out all keys and values

<a name="ImmutableMapProxy#has"></a>
#####immutableMapProxy.has(key)
**Params**

- key `String`  

**Returns**: `Boolean`  
<a name="ImmutableMapProxy#get"></a>
#####immutableMapProxy.get(key)
**Params**

- key `String`  

**Returns**: `Mixed`  
<a name="ImmutableMapProxy#delete"></a>
#####immutableMapProxy.delete(key)
**Params**

- key `String`  

<a name="ImmutableMapProxy#keys"></a>
#####immutableMapProxy.keys()
**Returns**: `Array.<String>`  
<a name="ImmutableMapProxy#values"></a>
#####immutableMapProxy.values()
**Returns**: `Array.<Mixed>`  
<a name="ImmutableMapProxy#valueOf"></a>
#####immutableMapProxy.valueOf()
**Returns**: `Object.<String, Mixed>`  
<a name="ImmutableMapProxy#entries"></a>
#####immutableMapProxy.entries()
**Returns**: `Array.<Array.<String, Mixed>>`  
<a name="ImmutableMapProxy#map"></a>
#####immutableMapProxy.map(fn, [scope])
**Params**

- fn `function`  
- \[scope\] `Object`  

**Returns**: `Array.<Mixed>`  
<a name="ImmutableMapProxy#forEach"></a>
#####immutableMapProxy.forEach(fn, [scope])
**Params**

- fn `function`  
- \[scope\] `Object`  

<a name="MapProxy"></a>
####class: MapProxy
**Members**

* [class: MapProxy](#MapProxy)
  * [new MapProxy([...keyValue])](#new_MapProxy)
  * [mapProxy.clear()](#MapProxy#clear)
  * [mapProxy.extend(...map)](#MapProxy#extend)
  * [mapProxy.has(key)](#MapProxy#has)
  * [mapProxy.get(key)](#MapProxy#get)
  * [mapProxy.set(key, value)](#MapProxy#set)
  * [mapProxy.delete(key)](#MapProxy#delete)
  * [mapProxy.keys()](#MapProxy#keys)
  * [mapProxy.values()](#MapProxy#values)
  * [mapProxy.valueOf()](#MapProxy#valueOf)
  * [mapProxy.entries()](#MapProxy#entries)
  * [mapProxy.map(fn, [scope])](#MapProxy#map)
  * [mapProxy.forEach(fn, [scope])](#MapProxy#forEach)

<a name="new_MapProxy"></a>
#####new MapProxy([...keyValue])
**Params**

- \[...keyValue\] `String` | `Mixed`  

<a name="MapProxy#clear"></a>
#####mapProxy.clear()
Clear out all keys and values

<a name="MapProxy#extend"></a>
#####mapProxy.extend(...map)
Merge all given objects into this map

**Params**

- ...map `Object` | <code>[MapProxy](#MapProxy)</code>  

<a name="MapProxy#has"></a>
#####mapProxy.has(key)
**Params**

- key `String`  

**Returns**: `Boolean`  
<a name="MapProxy#get"></a>
#####mapProxy.get(key)
**Params**

- key `String`  

**Returns**: `Mixed`  
<a name="MapProxy#set"></a>
#####mapProxy.set(key, value)
**Params**

- key `String`  
- value `Mixed`  

<a name="MapProxy#delete"></a>
#####mapProxy.delete(key)
**Params**

- key `String`  

<a name="MapProxy#keys"></a>
#####mapProxy.keys()
**Returns**: `Array.<String>`  
<a name="MapProxy#values"></a>
#####mapProxy.values()
**Returns**: `Array.<Mixed>`  
<a name="MapProxy#valueOf"></a>
#####mapProxy.valueOf()
**Returns**: `Object.<String, Mixed>`  
<a name="MapProxy#entries"></a>
#####mapProxy.entries()
**Returns**: `Array.<Array.<String, Mixed>>`  
<a name="MapProxy#map"></a>
#####mapProxy.map(fn, [scope])
**Params**

- fn `function`  
- \[scope\] `Object`  

**Returns**: `Array.<Mixed>`  
<a name="MapProxy#forEach"></a>
#####mapProxy.forEach(fn, [scope])
**Params**

- fn `function`  
- \[scope\] `Object`  



Dependencies
------------

These are installed when **protean** is installed.

~~~
underscore: 1.x
rx:         2.x
~~~


### Development Dependencies ###

Installed when you run `npm link` in the package directory.

~~~
mocha:             2.x
should:            6.x
del:               *
gulp:              3.x.x
gulp-ejs:          0.x.x
gulp-jsdoc:        0.x.x
jsdoc-to-markdown: 0.x.x
~~~


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
