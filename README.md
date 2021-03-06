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

## Modules
<dl>
<dt><a href="#module_Protean">Protean</a></dt>
<dd></dd>
<dt><a href="#module_Falcor">Falcor</a></dt>
<dd></dd>
</dl>
## Classes
<dl>
<dt><a href="#CollectionSource">CollectionSource</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#CompositeSource">CompositeSource</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#JSONGraphEnvelopeProxy">JSONGraphEnvelopeProxy</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#NoCacheSource">NoCacheSource</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#PartitionedSource">PartitionedSource</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#ProxiedSource">ProxiedSource</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#StorageSource">StorageSource</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#ProteanClass">ProteanClass</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#Storage">Storage</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#Store">Store</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#Collection">Collection</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#FiniteStateMachine">FiniteStateMachine</a> ⇐ <code><a href="#Subject">Subject</a></code></dt>
<dd></dd>
<dt><a href="#LinkedList">LinkedList</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#Record">Record</a> ⇐ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
</dl>
## Typedefs
<dl>
<dt><a href="#onNextFunction">onNextFunction</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#onErrorFunction">onErrorFunction</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#onCompletedFunction">onCompletedFunction</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#Observable">Observable</a></dt>
<dd></dd>
<dt><a href="#Observer">Observer</a></dt>
<dd></dd>
<dt><a href="#Disposable">Disposable</a></dt>
<dd></dd>
<dt><a href="#Subject">Subject</a> ⇐ <code><a href="#Observable">Observable</a></code></dt>
<dd></dd>
<dt><a href="#DataSource">DataSource</a></dt>
<dd></dd>
<dt><a href="#Sentinel">Sentinel</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Reference">Reference</a> : <code><a href="#Sentinel">Sentinel</a></code></dt>
<dd></dd>
<dt><a href="#RootReference">RootReference</a> : <code><a href="#Reference">Reference</a></code></dt>
<dd></dd>
<dt><a href="#Atom">Atom</a> : <code><a href="#Sentinel">Sentinel</a></code></dt>
<dd></dd>
<dt><a href="#JSONEnvelope">JSONEnvelope</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#JSONGraph">JSONGraph</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#JSONGraphEnvelope">JSONGraphEnvelope</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Key">Key</a> : <code>String</code> | <code>null</code></dt>
<dd></dd>
<dt><a href="#KeySet">KeySet</a> : <code><a href="#Key">Key</a></code> | <code><a href="#Range">Range</a></code> | <code>Array.&lt;(Key|Range)&gt;</code></dt>
<dd></dd>
<dt><a href="#Path">Path</a> : <code><a href="#Key">Array.&lt;Key&gt;</a></code></dt>
<dd></dd>
<dt><a href="#PathSet">PathSet</a> : <code><a href="#KeySet">Array.&lt;KeySet&gt;</a></code></dt>
<dd></dd>
<dt><a href="#PathValue">PathValue</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Range">Range</a> : <code>Object</code></dt>
<dd></dd>
</dl>
<a name="module_Protean"></a>
## Protean

* [Protean](#module_Protean)
  * [.Rx](#module_Protean.Rx)
    * [.append](#module_Protean.Rx.append) ⇒ <code>Observable.&lt;String&gt;</code>
    * [.mv](#module_Protean.Rx.mv) ⇒ <code>Observable.&lt;String&gt;</code>
    * [.fsWrapper](#module_Protean.Rx.fsWrapper) ⇒ <code>function</code>
    * [.write](#module_Protean.Rx.write) ⇒ <code>Observable.&lt;String&gt;</code>
    * [.from(arg)](#module_Protean.Rx.from) ⇒ <code>[Observable](#Observable)</code>
    * [.cp(from, to, [opts])](#module_Protean.Rx.cp) ⇒ <code>Observable.&lt;fs.Stats&gt;</code>
    * [.glob(pattern, [opts])](#module_Protean.Rx.glob) ⇒ <code>Observable.&lt;String&gt;</code>
    * [.isDirectory(paths)](#module_Protean.Rx.isDirectory) ⇒ <code>Observable.&lt;Boolean&gt;</code>
    * [.isFile(paths)](#module_Protean.Rx.isFile) ⇒ <code>Observable.&lt;Boolean&gt;</code>
    * [.mkdir(paths, [opts])](#module_Protean.Rx.mkdir) ⇒ <code>Observable.&lt;String&gt;</code>
    * [.read(patterns, [enc])](#module_Protean.Rx.read) ⇒ <code>Observable.&lt;(String\|Buffer)&gt;</code>
    * [.rm(patterns, [recursive])](#module_Protean.Rx.rm) ⇒ <code>Observable.&lt;String&gt;</code>
    * [.stat(patterns)](#module_Protean.Rx.stat) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
      * [.link(patterns)](#module_Protean.Rx.stat.link) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
      * [.fd(fds)](#module_Protean.Rx.stat.fd) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
  * [.denominate](#module_Protean.denominate) ⇒ <code>Object</code>
  * [.invoke](#module_Protean.invoke) ⇒ <code>\*</code>
  * [.pluck](#module_Protean.pluck) ⇒ <code>\*</code> &#124; <code>function</code>
  * [.classnames(arg)](#module_Protean.classnames) ⇒ <code>String</code>
  * [.classify([subclass], props, [properties])](#module_Protean.classify) ⇒ <code>[ProteanClass](#ProteanClass)</code>
  * [.inherit(superclass, [subclass], [props], [properties])](#module_Protean.inherit) ⇒ <code>[ProteanClass](#ProteanClass)</code>
  * [.instantiate(fn, [args])](#module_Protean.instantiate) ⇒ <code>Object</code>
  * [.augment(...obj)](#module_Protean.augment) ⇒ <code>Object</code>
  * [.enmap(...args)](#module_Protean.enmap) ⇒ <code>Object</code>
  * [.enumerate()](#module_Protean.enumerate) ⇒ <code>Object</code>
  * [.traverse(obj, visitor, [post])](#module_Protean.traverse)
    * _static_
      * [.SKIP](#module_Protean.traverse.SKIP) : <code>String</code>
      * [.CONTINUE](#module_Protean.traverse.CONTINUE) : <code>String</code>
      * [.BREAK](#module_Protean.traverse.BREAK) : <code>String</code>
    * _inner_
      * [~visitorFn(path, value, context)](#module_Protean.traverse..visitorFn) ⇒ <code>undefined</code> &#124; <code>String</code>
  * [.guid()](#module_Protean.guid) ⇒ <code>String</code>
  * [.mergeExports(receiver, supplier)](#module_Protean.mergeExports) ⇒ <code>Object</code>

<a name="module_Protean.Rx"></a>
### Protean.Rx
**Kind**: static property of <code>[Protean](#module_Protean)</code>  

* [.Rx](#module_Protean.Rx)
  * [.append](#module_Protean.Rx.append) ⇒ <code>Observable.&lt;String&gt;</code>
  * [.mv](#module_Protean.Rx.mv) ⇒ <code>Observable.&lt;String&gt;</code>
  * [.fsWrapper](#module_Protean.Rx.fsWrapper) ⇒ <code>function</code>
  * [.write](#module_Protean.Rx.write) ⇒ <code>Observable.&lt;String&gt;</code>
  * [.from(arg)](#module_Protean.Rx.from) ⇒ <code>[Observable](#Observable)</code>
  * [.cp(from, to, [opts])](#module_Protean.Rx.cp) ⇒ <code>Observable.&lt;fs.Stats&gt;</code>
  * [.glob(pattern, [opts])](#module_Protean.Rx.glob) ⇒ <code>Observable.&lt;String&gt;</code>
  * [.isDirectory(paths)](#module_Protean.Rx.isDirectory) ⇒ <code>Observable.&lt;Boolean&gt;</code>
  * [.isFile(paths)](#module_Protean.Rx.isFile) ⇒ <code>Observable.&lt;Boolean&gt;</code>
  * [.mkdir(paths, [opts])](#module_Protean.Rx.mkdir) ⇒ <code>Observable.&lt;String&gt;</code>
  * [.read(patterns, [enc])](#module_Protean.Rx.read) ⇒ <code>Observable.&lt;(String\|Buffer)&gt;</code>
  * [.rm(patterns, [recursive])](#module_Protean.Rx.rm) ⇒ <code>Observable.&lt;String&gt;</code>
  * [.stat(patterns)](#module_Protean.Rx.stat) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
    * [.link(patterns)](#module_Protean.Rx.stat.link) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
    * [.fd(fds)](#module_Protean.Rx.stat.fd) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>

<a name="module_Protean.Rx.append"></a>
#### Rx.append ⇒ <code>Observable.&lt;String&gt;</code>
**Kind**: static property of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type |
| --- | --- |
| filepath | <code>String</code> | 
| data | <code>Buffer</code> &#124; <code>String</code> | 
| [opts] | <code>Object</code> &#124; <code>String</code> | 

<a name="module_Protean.Rx.mv"></a>
#### Rx.mv ⇒ <code>Observable.&lt;String&gt;</code>
**File:** [rx/fs/mv.js](rx/fs/mv.js)

**Kind**: static property of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type | Default |
| --- | --- | --- |
| from | <code>String</code> |  | 
| to | <code>String</code> |  | 
| opts | <code>Object</code> |  | 
| [opts.mkdirp] | <code>Boolean</code> | <code>false</code> | 
| [opts.clobber] | <code>Boolean</code> | <code>false</code> | 

<a name="module_Protean.Rx.fsWrapper"></a>
#### Rx.fsWrapper ⇒ <code>function</code>
**Kind**: static property of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type |
| --- | --- |
| method | <code>String</code> | 

<a name="module_Protean.Rx.write"></a>
#### Rx.write ⇒ <code>Observable.&lt;String&gt;</code>
**Kind**: static property of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type |
| --- | --- |
| filepath | <code>String</code> | 
| data | <code>Buffer</code> &#124; <code>String</code> | 
| [opts] | <code>Object</code> &#124; <code>String</code> | 

<a name="module_Protean.Rx.from"></a>
#### Rx.from(arg) ⇒ <code>[Observable](#Observable)</code>
**File:** [rx/from.js](rx/from.js)

**Kind**: static method of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type |
| --- | --- |
| arg | <code>[Observable](#Observable)</code> &#124; <code>Promise</code> &#124; <code>Array</code> &#124; <code>Object</code> | 

<a name="module_Protean.Rx.cp"></a>
#### Rx.cp(from, to, [opts]) ⇒ <code>Observable.&lt;fs.Stats&gt;</code>
**File:** [rx/fs/cp.js](rx/fs/cp.js)

**Kind**: static method of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type | Default |
| --- | --- | --- |
| from | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Observable.&lt;String&gt;</code> &#124; <code>Promise.&lt;String&gt;</code> |  | 
| to | <code>String</code> |  | 
| [opts] | <code>Object</code> |  | 
| [opts.recursive] | <code>Boolean</code> | <code>true</code> | 
| [opts.force] | <code>Boolean</code> | <code>false</code> | 

<a name="module_Protean.Rx.glob"></a>
#### Rx.glob(pattern, [opts]) ⇒ <code>Observable.&lt;String&gt;</code>
**File:** [rx/glob.js](rx/glob.js)

**Kind**: static method of <code>[Rx](#module_Protean.Rx)</code>  
**Returns**: <code>Observable.&lt;String&gt;</code> - An Observable emiting the paths found  

| Param | Type | Description |
| --- | --- | --- |
| pattern | <code>String</code> | The glob pattern |
| [opts] | <code>Object</code> | [https://github.com/isaacs/node-glob#options](https://github.com/isaacs/node-glob#options) |

<a name="module_Protean.Rx.isDirectory"></a>
#### Rx.isDirectory(paths) ⇒ <code>Observable.&lt;Boolean&gt;</code>
**File:** [rx/is-directory.js](rx/is-directory.js)

**Kind**: static method of <code>[Rx](#module_Protean.Rx)</code>  
**Returns**: <code>Observable.&lt;Boolean&gt;</code> - An Observable emiting the paths found  

| Param | Type |
| --- | --- |
| paths | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Observable.&lt;String&gt;</code> | 

<a name="module_Protean.Rx.isFile"></a>
#### Rx.isFile(paths) ⇒ <code>Observable.&lt;Boolean&gt;</code>
**File:** [rx/is-file.js](rx/is-file.js)

**Kind**: static method of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type |
| --- | --- |
| paths | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Observable.&lt;String&gt;</code> | 

<a name="module_Protean.Rx.mkdir"></a>
#### Rx.mkdir(paths, [opts]) ⇒ <code>Observable.&lt;String&gt;</code>
Create the given paths in the file system.

**File:** [rx/mkdir.js](rx/mkdir.js)

**Kind**: static method of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type | Default |
| --- | --- | --- |
| paths | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Observable.&lt;String&gt;</code> |  | 
| [opts] | <code>Object</code> |  | 
| [opts.mode] | <code>String</code> | <code>&#x27;0777&#x27;</code> | 

<a name="module_Protean.Rx.read"></a>
#### Rx.read(patterns, [enc]) ⇒ <code>Observable.&lt;(String\|Buffer)&gt;</code>
**File:** [rx/read.js](rx/read.js)

**Kind**: static method of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type |
| --- | --- |
| patterns | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Observable.&lt;String&gt;</code> &#124; <code>Promise.&lt;String&gt;</code> | 
| [enc] | <code>String</code> | 

<a name="module_Protean.Rx.rm"></a>
#### Rx.rm(patterns, [recursive]) ⇒ <code>Observable.&lt;String&gt;</code>
**File:** [rx/rm.js](rx/rm.js)

**Kind**: static method of <code>[Rx](#module_Protean.Rx)</code>  

| Param | Type | Default |
| --- | --- | --- |
| patterns | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Observable.&lt;String&gt;</code> &#124; <code>Promise.&lt;String&gt;</code> |  | 
| [recursive] | <code>Boolean</code> | <code>true</code> | 

<a name="module_Protean.Rx.stat"></a>
#### Rx.stat(patterns) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
**File:** [rx/stat.js](rx/stat.js)

**Kind**: static method of <code>[Rx](#module_Protean.Rx)</code>  
**Returns**: <code>Observable.&lt;external:fs.Stats&gt;</code> - An Observable emiting the paths found  

| Param | Type |
| --- | --- |
| patterns | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Observable.&lt;String&gt;</code> &#124; <code>Promise.&lt;String&gt;</code> | 


* [.stat(patterns)](#module_Protean.Rx.stat) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
  * [.link(patterns)](#module_Protean.Rx.stat.link) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
  * [.fd(fds)](#module_Protean.Rx.stat.fd) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>

<a name="module_Protean.Rx.stat.link"></a>
##### stat.link(patterns) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
**Kind**: static method of <code>[stat](#module_Protean.Rx.stat)</code>  

| Param | Type |
| --- | --- |
| patterns | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Observable.&lt;String&gt;</code> &#124; <code>Promise.&lt;String&gt;</code> | 

<a name="module_Protean.Rx.stat.fd"></a>
##### stat.fd(fds) ⇒ <code>Observable.&lt;external:fs.Stats&gt;</code>
**Kind**: static method of <code>[stat](#module_Protean.Rx.stat)</code>  

| Param | Type |
| --- | --- |
| fds | <code>Integer</code> &#124; <code>Array.&lt;Integer&gt;</code> &#124; <code>Observable.&lt;Integer&gt;</code> &#124; <code>Promise.&lt;Integer&gt;</code> | 

<a name="module_Protean.denominate"></a>
### Protean.denominate ⇒ <code>Object</code>
**Kind**: static property of <code>[Protean](#module_Protean)</code>  
**Returns**: <code>Object</code> - The object now with a immutable 'name' property of the
given name value  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 
| name | <code>String</code> | 

<a name="module_Protean.invoke"></a>
### Protean.invoke ⇒ <code>\*</code>
**Kind**: static property of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| property | <code>String</code> | 
| subject | <code>Object</code> | 

<a name="module_Protean.pluck"></a>
### Protean.pluck ⇒ <code>\*</code> &#124; <code>function</code>
**File:** [object/pluck.js](object/pluck.js)

**Kind**: static property of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| [obj] | <code>Object</code> | 

<a name="module_Protean.classnames"></a>
### Protean.classnames(arg) ⇒ <code>String</code>
Utility function to get a className string.

Supply a list of strings, or objects with class names -> boolean indicating
whether that class should be used. The returned string will contain all the
class names indicated without duplicates, and separated by spaces.

**File**: [dom/classnames.js](dom/classnames.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| arg | <code>String</code> &#124; <code>Object.&lt;String, Boolean&gt;</code> | 

<a name="module_Protean.classify"></a>
### Protean.classify([subclass], props, [properties]) ⇒ <code>[ProteanClass](#ProteanClass)</code>
Create a constructor function passing in it's prototype methods.

**File**: [function/classify](function/classify.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [subclass] | <code>function</code> | The subclass constructor function. |
| props | <code>Object</code> | Bare properties for the constructor's prototype. |
| [properties] | <code>Object</code> | Object.defineProperty property definitions. |

<a name="module_Protean.inherit"></a>
### Protean.inherit(superclass, [subclass], [props], [properties]) ⇒ <code>[ProteanClass](#ProteanClass)</code>
Create a constructor function that inherits properties and methods from the
given super constructor.

**File**: [function/inherit.js](function/inherit.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  
**Returns**: <code>[ProteanClass](#ProteanClass)</code> - The constructor function.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| superclass | <code>function</code> |  | The function to inherit from. |
| [subclass] | <code>function</code> | <code>Function</code> | The Subclass constructor function. If omitted, and a `constructor` property is not defined in `props`, defaults to a function that calls the superclass' constructor function. |
| [props] | <code>Object</code> |  | Bare properties to initialize the prototype with. |
| [properties] | <code>Object</code> | <code>{}</code> | Object.defineProperty property definitions. |

<a name="module_Protean.instantiate"></a>
### Protean.instantiate(fn, [args]) ⇒ <code>Object</code>
Create a new object and then apply the constructor function with the arguments.

**File**: [function/instantiate.js](function/instantiate.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  
**Returns**: <code>Object</code> - The new instance  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The constructor function |
| [args] | <code>Array.&lt;Mixed&gt;</code> | Arguments to pass to the constructor function |

<a name="module_Protean.augment"></a>
### Protean.augment(...obj) ⇒ <code>Object</code>
Like 'extend', but it preserves getters and setters, and will not overwrite
existing properties defined directly on the source object.

**File:** [object/augment.js](object/augment.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| ...obj | <code>Object</code> | 

<a name="module_Protean.enmap"></a>
### Protean.enmap(...args) ⇒ <code>Object</code>
Takes a list of alternating key/values and returns an object.

**File:** [object/enmap.js](object/enmap.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| ...args | <code>Mixed</code> | 

<a name="module_Protean.enumerate"></a>
### Protean.enumerate() ⇒ <code>Object</code>
Takes an argument list of strings and returns an object with those keys, and their
values being the index of that key plus one.

**File:** [object/enumerate.js](object/enumerate.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Type |
| --- |
| <code>String</code> | 

<a name="module_Protean.traverse"></a>
### Protean.traverse(obj, visitor, [post])
**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>Object</code> |  |  |
| visitor | <code>[visitorFn](#module_Protean.traverse..visitorFn)</code> |  |  |
| [post] | <code>Boolean</code> | <code>false</code> | Do a post traversal |


* [.traverse(obj, visitor, [post])](#module_Protean.traverse)
  * _static_
    * [.SKIP](#module_Protean.traverse.SKIP) : <code>String</code>
    * [.CONTINUE](#module_Protean.traverse.CONTINUE) : <code>String</code>
    * [.BREAK](#module_Protean.traverse.BREAK) : <code>String</code>
  * _inner_
    * [~visitorFn(path, value, context)](#module_Protean.traverse..visitorFn) ⇒ <code>undefined</code> &#124; <code>String</code>

<a name="module_Protean.traverse.SKIP"></a>
#### traverse.SKIP : <code>String</code>
**Kind**: static constant of <code>[traverse](#module_Protean.traverse)</code>  
<a name="module_Protean.traverse.CONTINUE"></a>
#### traverse.CONTINUE : <code>String</code>
**Kind**: static constant of <code>[traverse](#module_Protean.traverse)</code>  
<a name="module_Protean.traverse.BREAK"></a>
#### traverse.BREAK : <code>String</code>
**Kind**: static constant of <code>[traverse](#module_Protean.traverse)</code>  
<a name="module_Protean.traverse..visitorFn"></a>
#### traverse~visitorFn(path, value, context) ⇒ <code>undefined</code> &#124; <code>String</code>
**File:** [object/traverse.js](object/traverse.js)

**Kind**: inner method of <code>[traverse](#module_Protean.traverse)</code>  
**Returns**: <code>undefined</code> &#124; <code>String</code> - One of the constants of 'skip', 'continue', or
'break'. Returning undefined is the same as returing 'continue'.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>Array.&lt;String&gt;</code> | The path to the value |
| value | <code>Mixed</code> | The value |
| context | <code>Object</code> | The original object |

<a name="module_Protean.guid"></a>
### Protean.guid() ⇒ <code>String</code>
Fast GUID generator, RFC4122 version 4 compliant.

**File:** [utility/guid.js](utility/guid.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  
**See**: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136  
**Author:** Jeff Ward (jcward.com).  
**License**: MIT license  
<a name="module_Protean.mergeExports"></a>
### Protean.mergeExports(receiver, supplier) ⇒ <code>Object</code>
**File:** [utility/merge-exports.js](utility/merge-exports.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| receiver | <code>Object</code> | 
| supplier | <code>function</code> &#124; <code>Object</code> | 

<a name="module_Falcor"></a>
## Falcor

* [Falcor](#module_Falcor)
  * [.Graph](#module_Falcor.Graph)
    * [.set](#module_Falcor.Graph.set) ⇒ <code>Object</code>
    * [.atoms(graph, fn)](#module_Falcor.Graph.atoms)
      * [~visitorFn(path, atom, graph)](#module_Falcor.Graph.atoms..visitorFn)
    * [.fromObject(obj, [opts])](#module_Falcor.Graph.fromObject) ⇒ <code>[JSONGraph](#JSONGraph)</code>
    * [.isAtom(sentinel)](#module_Falcor.Graph.isAtom) ⇒ <code>Boolean</code>
    * [.isError(sentinel)](#module_Falcor.Graph.isError) ⇒ <code>Boolean</code>
    * [.isRef(sentinel)](#module_Falcor.Graph.isRef) ⇒ <code>Boolean</code>
    * [.isRootRef(sentinel)](#module_Falcor.Graph.isRootRef) ⇒ <code>Boolean</code>
    * [.isSentinel(sentinel)](#module_Falcor.Graph.isSentinel) ⇒ <code>Boolean</code>
    * [.refs(graph, fn)](#module_Falcor.Graph.refs)
      * [~visitorFn(path, ref, graph)](#module_Falcor.Graph.refs..visitorFn)
    * [.relative(root, graph)](#module_Falcor.Graph.relative) ⇒ <code>[JSONGraph](#JSONGraph)</code>
    * [.resolve(root, graph)](#module_Falcor.Graph.resolve) ⇒ <code>[JSONGraph](#JSONGraph)</code>
    * [.rootRef(path, value, props)](#module_Falcor.Graph.rootRef) ⇒ <code>[Reference](#Reference)</code>
    * [.sentinels(graph, fn)](#module_Falcor.Graph.sentinels)
      * [~visitorFn(path, sentinel, graph)](#module_Falcor.Graph.sentinels..visitorFn)
    * [.toObject(graph, [opts])](#module_Falcor.Graph.toObject) ⇒ <code>[JSONGraph](#JSONGraph)</code>
  * [.Path](#module_Falcor.Path)
    * [.relative(root, paths)](#module_Falcor.Path.relative) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>
    * [.resolve(root, paths)](#module_Falcor.Path.resolve) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>

<a name="module_Falcor.Graph"></a>
### Falcor.Graph
**File:** [falcor/graph.js](falcor/graph.js)

**Kind**: static property of <code>[Falcor](#module_Falcor)</code>  
**See**: [https://github.com/Netflix/falcor-json-graph](https://github.com/Netflix/falcor-json-graph)  

* [.Graph](#module_Falcor.Graph)
  * [.set](#module_Falcor.Graph.set) ⇒ <code>Object</code>
  * [.atoms(graph, fn)](#module_Falcor.Graph.atoms)
    * [~visitorFn(path, atom, graph)](#module_Falcor.Graph.atoms..visitorFn)
  * [.fromObject(obj, [opts])](#module_Falcor.Graph.fromObject) ⇒ <code>[JSONGraph](#JSONGraph)</code>
  * [.isAtom(sentinel)](#module_Falcor.Graph.isAtom) ⇒ <code>Boolean</code>
  * [.isError(sentinel)](#module_Falcor.Graph.isError) ⇒ <code>Boolean</code>
  * [.isRef(sentinel)](#module_Falcor.Graph.isRef) ⇒ <code>Boolean</code>
  * [.isRootRef(sentinel)](#module_Falcor.Graph.isRootRef) ⇒ <code>Boolean</code>
  * [.isSentinel(sentinel)](#module_Falcor.Graph.isSentinel) ⇒ <code>Boolean</code>
  * [.refs(graph, fn)](#module_Falcor.Graph.refs)
    * [~visitorFn(path, ref, graph)](#module_Falcor.Graph.refs..visitorFn)
  * [.relative(root, graph)](#module_Falcor.Graph.relative) ⇒ <code>[JSONGraph](#JSONGraph)</code>
  * [.resolve(root, graph)](#module_Falcor.Graph.resolve) ⇒ <code>[JSONGraph](#JSONGraph)</code>
  * [.rootRef(path, value, props)](#module_Falcor.Graph.rootRef) ⇒ <code>[Reference](#Reference)</code>
  * [.sentinels(graph, fn)](#module_Falcor.Graph.sentinels)
    * [~visitorFn(path, sentinel, graph)](#module_Falcor.Graph.sentinels..visitorFn)
  * [.toObject(graph, [opts])](#module_Falcor.Graph.toObject) ⇒ <code>[JSONGraph](#JSONGraph)</code>

<a name="module_Falcor.Graph.set"></a>
#### Graph.set ⇒ <code>Object</code>
**File:** [falcor/graph/set.js](falcor/graph/set.js)

**Kind**: static property of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| source | <code>Object</code> | 
| path | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> | 
| value | <code>\*</code> | 

<a name="module_Falcor.Graph.atoms"></a>
#### Graph.atoms(graph, fn)
**File:** [falcor/graph/atoms.js](falcor/graph/atoms.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| graph | <code>[JSONGraph](#JSONGraph)</code> | 
| fn | <code>Graph.atoms~visitorFn</code> | 

<a name="module_Falcor.Graph.atoms..visitorFn"></a>
##### atoms~visitorFn(path, atom, graph)
**Kind**: inner method of <code>[atoms](#module_Falcor.Graph.atoms)</code>  

| Param | Type |
| --- | --- |
| path | <code>[Path](#Path)</code> | 
| atom | <code>[Atom](#Atom)</code> | 
| graph | <code>[JSONGraph](#JSONGraph)</code> | 

<a name="module_Falcor.Graph.fromObject"></a>
#### Graph.fromObject(obj, [opts]) ⇒ <code>[JSONGraph](#JSONGraph)</code>
Takes a normal javascript object and returns a JSONGraph.

**File:** [falcor/graph/from-object.js](falcor/graph/from-object.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type | Default |
| --- | --- | --- |
| obj | <code>Object</code> |  | 
| [opts] | <code>Object</code> |  | 
| [opts.arrayIsRef] | <code>Boolean</code> | <code>true</code> | 
| [opts.root] | <code>[Path](#Path)</code> | <code>[]</code> | 

<a name="module_Falcor.Graph.isAtom"></a>
#### Graph.isAtom(sentinel) ⇒ <code>Boolean</code>
**File:** [falcor/graph/is-atom.js](falcor/graph/is-atom.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| sentinel | <code>\*</code> | 

<a name="module_Falcor.Graph.isError"></a>
#### Graph.isError(sentinel) ⇒ <code>Boolean</code>
**File:** [falcor/graph/is-error.js](falcor/graph/is-error.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| sentinel | <code>\*</code> | 

<a name="module_Falcor.Graph.isRef"></a>
#### Graph.isRef(sentinel) ⇒ <code>Boolean</code>
**File:** [falcor/graph/is-ref.js](falcor/graph/is-ref.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| sentinel | <code>\*</code> | 

<a name="module_Falcor.Graph.isRootRef"></a>
#### Graph.isRootRef(sentinel) ⇒ <code>Boolean</code>
**File:** [falcor/graph/is-root-ref.js](falcor/graph/is-root-ref.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| sentinel | <code>\*</code> | 

<a name="module_Falcor.Graph.isSentinel"></a>
#### Graph.isSentinel(sentinel) ⇒ <code>Boolean</code>
**File:** [falcor/graph/is-sentinel.js](falcor/graph/is-sentinel.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| sentinel | <code>\*</code> | 

<a name="module_Falcor.Graph.refs"></a>
#### Graph.refs(graph, fn)
**File:** [falcor/graph/refs.js](falcor/graph/refs.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| graph | <code>[JSONGraph](#JSONGraph)</code> | 
| fn | <code>Graph.atoms~visitorFn</code> | 

<a name="module_Falcor.Graph.refs..visitorFn"></a>
##### refs~visitorFn(path, ref, graph)
**Kind**: inner method of <code>[refs](#module_Falcor.Graph.refs)</code>  

| Param | Type |
| --- | --- |
| path | <code>[Path](#Path)</code> | 
| ref | <code>[Reference](#Reference)</code> | 
| graph | <code>[JSONGraph](#JSONGraph)</code> | 

<a name="module_Falcor.Graph.relative"></a>
#### Graph.relative(root, graph) ⇒ <code>[JSONGraph](#JSONGraph)</code>
**File:** [falcor/graph/relative.js](falcor/graph/relative.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| root | <code>[Path](#Path)</code> | 
| graph | <code>[JSONGraph](#JSONGraph)</code> | 

<a name="module_Falcor.Graph.resolve"></a>
#### Graph.resolve(root, graph) ⇒ <code>[JSONGraph](#JSONGraph)</code>
**File:** [falcor/graph/resolve.js](falcor/graph/resolve.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| root | <code>[Path](#Path)</code> | 
| graph | <code>[JSONGraph](#JSONGraph)</code> | 

<a name="module_Falcor.Graph.rootRef"></a>
#### Graph.rootRef(path, value, props) ⇒ <code>[Reference](#Reference)</code>
**File:** [falcor/graph/root-ref.js](falcor/graph/root-ref.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| path | <code>[Path](#Path)</code> | 
| value | <code>[Path](#Path)</code> | 
| props | <code>Object</code> | 

<a name="module_Falcor.Graph.sentinels"></a>
#### Graph.sentinels(graph, fn)
**File:** [falcor/graph/sentinels.js](falcor/graph/sentinels.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| graph | <code>[JSONGraph](#JSONGraph)</code> | 
| fn | <code>Graph.sentinels~visitorFn</code> | 

<a name="module_Falcor.Graph.sentinels..visitorFn"></a>
##### sentinels~visitorFn(path, sentinel, graph)
**Kind**: inner method of <code>[sentinels](#module_Falcor.Graph.sentinels)</code>  

| Param | Type |
| --- | --- |
| path | <code>[Path](#Path)</code> | 
| sentinel | <code>[Sentinel](#Sentinel)</code> | 
| graph | <code>[JSONGraph](#JSONGraph)</code> | 

<a name="module_Falcor.Graph.toObject"></a>
#### Graph.toObject(graph, [opts]) ⇒ <code>[JSONGraph](#JSONGraph)</code>
Takes a JSONGraph and returns a Javascript Object.

**File:** [falcor/graph/to-object.js](falcor/graph/to-object.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| graph | <code>[JSONGraph](#JSONGraph)</code> | 
| [opts] | <code>Object</code> | 

<a name="module_Falcor.Path"></a>
### Falcor.Path
**Kind**: static property of <code>[Falcor](#module_Falcor)</code>  
**See**: [https://github.com/Netflix/falcor-path-utils](https://github.com/Netflix/falcor-path-utils)  

* [.Path](#module_Falcor.Path)
  * [.relative(root, paths)](#module_Falcor.Path.relative) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>
  * [.resolve(root, paths)](#module_Falcor.Path.resolve) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>

<a name="module_Falcor.Path.relative"></a>
#### Path.relative(root, paths) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>
**File:** [falcor/path/relative.js](falcor/path/relative.js)

**Kind**: static method of <code>[Path](#module_Falcor.Path)</code>  

| Param | Type |
| --- | --- |
| root | <code>[Path](#Path)</code> | 
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="module_Falcor.Path.resolve"></a>
#### Path.resolve(root, paths) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>
**File:** [falcor/path/resolve.js](falcor/path/resolve.js)

**Kind**: static method of <code>[Path](#module_Falcor.Path)</code>  

| Param | Type |
| --- | --- |
| root | <code>[Path](#Path)</code> | 
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="CollectionSource"></a>
## CollectionSource ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [CollectionSource](#CollectionSource) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new CollectionSource([collection], [opts])](#new_CollectionSource_new)
  * [.options](#CollectionSource+options)
    * [.indexedPath](#CollectionSource+options.indexedPath)
    * [.keyedPath](#CollectionSource+options.keyedPath)
    * [.lengthPath](#CollectionSource+options.lengthPath)
    * [.addPath](#CollectionSource+options.addPath)
    * [.removePath](#CollectionSource+options.removePath)
  * [.router](#CollectionSource+router)
  * [.routes](#CollectionSource+routes)
  * [.get(paths)](#CollectionSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#CollectionSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#CollectionSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.getLength()](#CollectionSource+getLength) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.getRecordByIndex(paths)](#CollectionSource+getRecordByIndex) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.getRecordProps(paths)](#CollectionSource+getRecordProps) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.setRecordProps(graph)](#CollectionSource+setRecordProps) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.addRecord(path, args, refSuffixes, thisPaths)](#CollectionSource+addRecord) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.removeRecord(path, args, refSuffixes, thisPaths)](#CollectionSource+removeRecord) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>

<a name="new_CollectionSource_new"></a>
### new CollectionSource([collection], [opts])
**file:** [falcor/data-source/collection.js](falcor/data-source/collection.js)


| Param | Type | Default |
| --- | --- | --- |
| [collection] | <code>[Collection](#Collection)</code> |  | 
| [opts] | <code>Object</code> |  | 
| [opts.indexedPath] | <code>[Path](#Path)</code> | <code>[&#x27;byIndex&#x27;]</code> | 
| [opts.keyedPath] | <code>[Path](#Path)</code> | <code>[&#x27;byId&#x27;]</code> | 

<a name="CollectionSource+options"></a>
### collectionSource.options
Default options

**Kind**: instance property of <code>[CollectionSource](#CollectionSource)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 


* [.options](#CollectionSource+options)
  * [.indexedPath](#CollectionSource+options.indexedPath)
  * [.keyedPath](#CollectionSource+options.keyedPath)
  * [.lengthPath](#CollectionSource+options.lengthPath)
  * [.addPath](#CollectionSource+options.addPath)
  * [.removePath](#CollectionSource+options.removePath)

<a name="CollectionSource+options.indexedPath"></a>
#### options.indexedPath
**Kind**: static property of <code>[options](#CollectionSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>[Path](#Path)</code> | 

<a name="CollectionSource+options.keyedPath"></a>
#### options.keyedPath
**Kind**: static property of <code>[options](#CollectionSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>[Path](#Path)</code> | 

<a name="CollectionSource+options.lengthPath"></a>
#### options.lengthPath
**Kind**: static property of <code>[options](#CollectionSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>[Path](#Path)</code> | 

<a name="CollectionSource+options.addPath"></a>
#### options.addPath
**Kind**: static property of <code>[options](#CollectionSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>[Path](#Path)</code> | 

<a name="CollectionSource+options.removePath"></a>
#### options.removePath
**Kind**: static property of <code>[options](#CollectionSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>[Path](#Path)</code> | 

<a name="CollectionSource+router"></a>
### collectionSource.router
**Kind**: instance property of <code>[CollectionSource](#CollectionSource)</code>  
**See**: [http://netflix.github.io/falcor/documentation/router.html](http://netflix.github.io/falcor/documentation/router.html)  
**Properties**

| Type |
| --- |
| <code>external:FalcorRouter</code> | 

<a name="CollectionSource+routes"></a>
### collectionSource.routes
**Kind**: instance property of <code>[CollectionSource](#CollectionSource)</code>  
**Properties**

| Type |
| --- |
| <code>Array.&lt;Object&gt;</code> | 

<a name="CollectionSource+get"></a>
### collectionSource.get(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CollectionSource](#CollectionSource)</code>  
**Implements:** <code>[get](#DataSource+get)</code>  

| Param | Type |
| --- | --- |
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="CollectionSource+set"></a>
### collectionSource.set(envelope) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CollectionSource](#CollectionSource)</code>  
**Implements:** <code>[set](#DataSource+set)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="CollectionSource+call"></a>
### collectionSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CollectionSource](#CollectionSource)</code>  
**Implements:** <code>[call](#DataSource+call)</code>  

| Param | Type |
| --- | --- |
| path | <code>[PathSet](#PathSet)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="CollectionSource+getLength"></a>
### collectionSource.getLength() ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CollectionSource](#CollectionSource)</code>  
<a name="CollectionSource+getRecordByIndex"></a>
### collectionSource.getRecordByIndex(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CollectionSource](#CollectionSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;PathSets&gt;</code> | 

<a name="CollectionSource+getRecordProps"></a>
### collectionSource.getRecordProps(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CollectionSource](#CollectionSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;PathSets&gt;</code> | 

<a name="CollectionSource+setRecordProps"></a>
### collectionSource.setRecordProps(graph) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CollectionSource](#CollectionSource)</code>  

| Param | Type |
| --- | --- |
| graph | <code>[JSONGraph](#JSONGraph)</code> | 

<a name="CollectionSource+addRecord"></a>
### collectionSource.addRecord(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CollectionSource](#CollectionSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>[PathSet](#PathSet)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="CollectionSource+removeRecord"></a>
### collectionSource.removeRecord(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CollectionSource](#CollectionSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>[PathSet](#PathSet)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="CompositeSource"></a>
## CompositeSource ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [CompositeSource](#CompositeSource) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new CompositeSource(...args)](#new_CompositeSource_new)
  * [.sources](#CompositeSource+sources)
  * [.get(paths)](#CompositeSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#CompositeSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#CompositeSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.add(path, source)](#CompositeSource+add) ⇒ <code>[CompositeSource](#CompositeSource)</code>

<a name="new_CompositeSource_new"></a>
### new CompositeSource(...args)
A [DataSource] that allows for composing several different [DataSource]s
together through different [Path]s.

This allows individual [DataSource]s to be constructed, used, and tested in
their own domain. Then later you can compose them into a larger [Graph].

The CompositeSource manages the re-writing of [Path]s and the resulting
[Graph] so it appears that everything comes from a larger [Graph].

Basically, all returned [Path]s/[Graph]s are updated to have any references
relative to their [Path]s in the CompositeSource.

As a result, there was a need to create a new [Falcor] data type to express
when a sub [DataSource] wanted to reference another part of the larger
[Graph]. [RootReference](#RootReference) represents a [Reference] in the
[Graph] that should not be kept local to the underlying [DataSource], but
should be interpreted from the root of the CompositeSource.

**File:** [falcor/data-source/composite.js](falcor/data-source/composite.js)

[Falcor]:      http://netflix.github.io/falcor/doc/DataSource.html                     "Falcor"
[DataSource]:  http://netflix.github.io/falcor/doc/DataSource.html                     "DataSource"
[Path]:        http://netflix.github.io/falcor/doc/global.html#Path                    "Path"
[Graph]:       http://netflix.github.io/falcor/documentation/jsongraph.html            "Graph"
[Reference]:   http://netflix.github.io/falcor/documentation/jsongraph.html#reference  "Reference"


| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;Path, DataSource&gt;</code> | 

<a name="CompositeSource+sources"></a>
### compositeSource.sources
**Kind**: instance property of <code>[CompositeSource](#CompositeSource)</code>  
**Properties**

| Type |
| --- |
| <code>Object.&lt;Path, ProxiedSource&gt;</code> | 

<a name="CompositeSource+get"></a>
### compositeSource.get(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CompositeSource](#CompositeSource)</code>  
**Implements:** <code>[get](#DataSource+get)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;PathSets&gt;</code> | 

<a name="CompositeSource+set"></a>
### compositeSource.set(envelope) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CompositeSource](#CompositeSource)</code>  
**Implements:** <code>[set](#DataSource+set)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="CompositeSource+call"></a>
### compositeSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[CompositeSource](#CompositeSource)</code>  
**Implements:** <code>[call](#DataSource+call)</code>  

| Param | Type |
| --- | --- |
| path | <code>[Path](#Path)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="CompositeSource+add"></a>
### compositeSource.add(path, source) ⇒ <code>[CompositeSource](#CompositeSource)</code>
**Kind**: instance method of <code>[CompositeSource](#CompositeSource)</code>  
**Returns**: <code>[CompositeSource](#CompositeSource)</code> - the CompositeSource instance  

| Param | Type |
| --- | --- |
| path | <code>[Path](#Path)</code> | 
| source | <code>[DataSource](#DataSource)</code> | 

<a name="JSONGraphEnvelopeProxy"></a>
## JSONGraphEnvelopeProxy ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  
**Implements:** <code>JSONGraphEnevelope</code>  

* [JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new JSONGraphEnvelopeProxy([opts])](#new_JSONGraphEnvelopeProxy_new)
  * [.paths](#JSONGraphEnvelopeProxy+paths)
  * [.jsonGraph](#JSONGraphEnvelopeProxy+jsonGraph)
  * [.invalidated](#JSONGraphEnvelopeProxy+invalidated)
  * [.expecting](#JSONGraphEnvelopeProxy+expecting)
  * [.pending](#JSONGraphEnvelopeProxy+pending)
  * [.set(pathOrGraph, [atom])](#JSONGraphEnvelopeProxy+set)
  * [.invalidate(...path)](#JSONGraphEnvelopeProxy+invalidate)
  * [.fulfill(path)](#JSONGraphEnvelopeProxy+fulfill)
  * [.expect(paths)](#JSONGraphEnvelopeProxy+expect)
  * [.relativeFrom(from)](#JSONGraphEnvelopeProxy+relativeFrom) ⇒ <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>
  * [.resolvedFrom(from)](#JSONGraphEnvelopeProxy+resolvedFrom) ⇒ <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>
  * [.merge(other)](#JSONGraphEnvelopeProxy+merge)
  * [.destroy()](#JSONGraphEnvelopeProxy+destroy)
  * [.clone()](#JSONGraphEnvelopeProxy+clone) ⇒ <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>
  * [.valueOf()](#JSONGraphEnvelopeProxy+valueOf) ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>
  * [.finalize()](#JSONGraphEnvelopeProxy+finalize) ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>

<a name="new_JSONGraphEnvelopeProxy_new"></a>
### new JSONGraphEnvelopeProxy([opts])

| Param | Type | Description |
| --- | --- | --- |
| [opts] | <code>Object</code> |  |
| [opts.expect] | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | Paths to expect |
| [opts.paths] | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | A starting set of paths |
| [opts.jsonGraph] | <code>[JSONGraph](#JSONGraph)</code> | A starting JSONGraph |
| [opts.invalidated] | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | A starting set of paths to invalidate |

<a name="JSONGraphEnvelopeProxy+paths"></a>
### jsonGraphEnvelopeProxy.paths
**Kind**: instance property of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
**Properties**

| Type |
| --- |
| <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="JSONGraphEnvelopeProxy+jsonGraph"></a>
### jsonGraphEnvelopeProxy.jsonGraph
**Kind**: instance property of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
**Properties**

| Type |
| --- |
| <code>[JSONGraph](#JSONGraph)</code> | 

<a name="JSONGraphEnvelopeProxy+invalidated"></a>
### jsonGraphEnvelopeProxy.invalidated
**Kind**: instance property of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
**Properties**

| Type |
| --- |
| <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="JSONGraphEnvelopeProxy+expecting"></a>
### jsonGraphEnvelopeProxy.expecting
**Kind**: instance property of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 

<a name="JSONGraphEnvelopeProxy+pending"></a>
### jsonGraphEnvelopeProxy.pending
Get a list of paths this envelope is still expecting to fulfill

**Kind**: instance property of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>[Array.&lt;Path&gt;](#Path)</code> | 

<a name="JSONGraphEnvelopeProxy+set"></a>
### jsonGraphEnvelopeProxy.set(pathOrGraph, [atom])
**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  

| Param | Type |
| --- | --- |
| pathOrGraph | <code>[Path](#Path)</code> &#124; <code>[JSONGraph](#JSONGraph)</code> | 
| [atom] | <code>[Atom](#Atom)</code> | 

<a name="JSONGraphEnvelopeProxy+invalidate"></a>
### jsonGraphEnvelopeProxy.invalidate(...path)
**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  

| Param | Type |
| --- | --- |
| ...path | <code>[Path](#Path)</code> | 

<a name="JSONGraphEnvelopeProxy+fulfill"></a>
### jsonGraphEnvelopeProxy.fulfill(path)
Mark a path as fulfilled and set the given value on our jsonGraph

**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  

| Param | Type |
| --- | --- |
| path | <code>[Path](#Path)</code> | 

<a name="JSONGraphEnvelopeProxy+expect"></a>
### jsonGraphEnvelopeProxy.expect(paths)
Prepare this envelope to expect to fulfill a certain set of paths.

**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  

| Param | Type |
| --- | --- |
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="JSONGraphEnvelopeProxy+relativeFrom"></a>
### jsonGraphEnvelopeProxy.relativeFrom(from) ⇒ <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>
**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
**Returns**: <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code> - A copy  

| Param | Type |
| --- | --- |
| from | <code>[Path](#Path)</code> | 

<a name="JSONGraphEnvelopeProxy+resolvedFrom"></a>
### jsonGraphEnvelopeProxy.resolvedFrom(from) ⇒ <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>
**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
**Returns**: <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code> - A copy  

| Param | Type |
| --- | --- |
| from | <code>[Path](#Path)</code> | 

<a name="JSONGraphEnvelopeProxy+merge"></a>
### jsonGraphEnvelopeProxy.merge(other)
Merge another JSONGraphEnvelope into this one

**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  

| Param | Type |
| --- | --- |
| other | <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code> &#124; <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="JSONGraphEnvelopeProxy+destroy"></a>
### jsonGraphEnvelopeProxy.destroy()
Clear out our data so we do not have any dangling memory.

**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
<a name="JSONGraphEnvelopeProxy+clone"></a>
### jsonGraphEnvelopeProxy.clone() ⇒ <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>
Get a copy of this proxy

**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
<a name="JSONGraphEnvelopeProxy+valueOf"></a>
### jsonGraphEnvelopeProxy.valueOf() ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
<a name="JSONGraphEnvelopeProxy+finalize"></a>
### jsonGraphEnvelopeProxy.finalize() ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[JSONGraphEnvelopeProxy](#JSONGraphEnvelopeProxy)</code>  
<a name="NoCacheSource"></a>
## NoCacheSource ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [NoCacheSource](#NoCacheSource) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new NoCacheSource(opts)](#new_NoCacheSource_new)
  * [.get(paths)](#NoCacheSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#NoCacheSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#NoCacheSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>

<a name="new_NoCacheSource_new"></a>
### new NoCacheSource(opts)
A Falcor DataSource that proxies another data source and sets all returned
atoms to expire immediately.

**file:** [falcor/data-source/no-cache.js](falcor/data-source/no-cache.js)


| Param | Type |
| --- | --- |
| opts | <code>Object</code> | 
| opts.source | <code>[DataSource](#DataSource)</code> | 

<a name="NoCacheSource+get"></a>
### noCacheSource.get(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[NoCacheSource](#NoCacheSource)</code>  
**Implements:** <code>[get](#DataSource+get)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;PathSets&gt;</code> | 

<a name="NoCacheSource+set"></a>
### noCacheSource.set(envelope) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[NoCacheSource](#NoCacheSource)</code>  
**Implements:** <code>[set](#DataSource+set)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="NoCacheSource+call"></a>
### noCacheSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[NoCacheSource](#NoCacheSource)</code>  
**Implements:** <code>[call](#DataSource+call)</code>  

| Param | Type |
| --- | --- |
| path | <code>[PathSet](#PathSet)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="PartitionedSource"></a>
## PartitionedSource ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [PartitionedSource](#PartitionedSource) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new PartitionedSource([opts])](#new_PartitionedSource_new)
  * [.options](#PartitionedSource+options)
    * [.reads](#PartitionedSource+options.reads)
    * [.writes](#PartitionedSource+options.writes)
    * [.partitions](#PartitionedSource+options.partitions)
  * [.get(paths)](#PartitionedSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#PartitionedSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#PartitionedSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>

<a name="new_PartitionedSource_new"></a>
### new PartitionedSource([opts])
A falcor DataSource that optionally reads from and writes to a variety of
'partitions' of other DataSources.

When reading (get) it will try the partitions in the order set by the 'reads'
option. Any paths gone unfilled by the first, will be requested by the
second, and so on. The final graph is a merge of all returned values from
those partitions.

When writing (set/call) it will send the request to all given partitions in
the 'writes' option. Again, returning a merged graph of all values writen.


| Param | Type | Default |
| --- | --- | --- |
| [opts] | <code>Object</code> |  | 
| [opts.reads] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | 
| [opts.writes] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | 
| [opts.partitions] | <code>Object.&lt;String, DataSource&gt;</code> | <code>{}</code> | 

<a name="PartitionedSource+options"></a>
### partitionedSource.options
Default options

**Kind**: instance property of <code>[PartitionedSource](#PartitionedSource)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 


* [.options](#PartitionedSource+options)
  * [.reads](#PartitionedSource+options.reads)
  * [.writes](#PartitionedSource+options.writes)
  * [.partitions](#PartitionedSource+options.partitions)

<a name="PartitionedSource+options.reads"></a>
#### options.reads
**Kind**: static property of <code>[options](#PartitionedSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>Array.&lt;String&gt;</code> | 

<a name="PartitionedSource+options.writes"></a>
#### options.writes
**Kind**: static property of <code>[options](#PartitionedSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>Array.&lt;String&gt;</code> | 

<a name="PartitionedSource+options.partitions"></a>
#### options.partitions
**Kind**: static property of <code>[options](#PartitionedSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>Object.&lt;String, DataSource&gt;</code> | 

<a name="PartitionedSource+get"></a>
### partitionedSource.get(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[PartitionedSource](#PartitionedSource)</code>  
**Implements:** <code>[get](#DataSource+get)</code>  

| Param | Type |
| --- | --- |
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="PartitionedSource+set"></a>
### partitionedSource.set(envelope) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[PartitionedSource](#PartitionedSource)</code>  
**Implements:** <code>[set](#DataSource+set)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="PartitionedSource+call"></a>
### partitionedSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[PartitionedSource](#PartitionedSource)</code>  
**Implements:** <code>[call](#DataSource+call)</code>  

| Param | Type |
| --- | --- |
| path | <code>[PathSet](#PathSet)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="ProxiedSource"></a>
## ProxiedSource ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [ProxiedSource](#ProxiedSource) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new ProxiedSource([opts])](#new_ProxiedSource_new)
  * [.source](#ProxiedSource+source)
  * [.root](#ProxiedSource+root)
  * [.get(paths)](#ProxiedSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#ProxiedSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#ProxiedSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.willGet(paths)](#ProxiedSource+willGet) ⇒ <code>Boolean</code>
  * [.willSet(envelope)](#ProxiedSource+willSet) ⇒ <code>Boolean</code>
  * [.willCall(path)](#ProxiedSource+willCall) ⇒ <code>Boolean</code>
  * [.getRelativeEnvelope(envelope)](#ProxiedSource+getRelativeEnvelope) ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>
  * [.getResolvedEnvelope(envelope)](#ProxiedSource+getResolvedEnvelope) ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>

<a name="new_ProxiedSource_new"></a>
### new ProxiedSource([opts])
A Falcor DataSource that proxies to another source, re-writing the returned
paths, and the paths to the values within the JSONGraph.

**File:** [falcor/data-source/proxied.js](falcor/data-source/proxied.js)


| Param | Type |
| --- | --- |
| [opts] | <code>Object</code> | 
| [opts.source] | <code>[DataSource](#DataSource)</code> | 
| [opts.root] | <code>[Path](#Path)</code> | 

<a name="ProxiedSource+source"></a>
### proxiedSource.source
**Kind**: instance property of <code>[ProxiedSource](#ProxiedSource)</code>  
**Properties**

| Type |
| --- |
| <code>[DataSource](#DataSource)</code> | 

<a name="ProxiedSource+root"></a>
### proxiedSource.root
**Kind**: instance property of <code>[ProxiedSource](#ProxiedSource)</code>  
**Properties**

| Type |
| --- |
| <code>[Path](#Path)</code> | 

<a name="ProxiedSource+get"></a>
### proxiedSource.get(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[ProxiedSource](#ProxiedSource)</code>  
**Implements:** <code>[get](#DataSource+get)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;PathSets&gt;</code> | 

<a name="ProxiedSource+set"></a>
### proxiedSource.set(envelope) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[ProxiedSource](#ProxiedSource)</code>  
**Implements:** <code>[set](#DataSource+set)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="ProxiedSource+call"></a>
### proxiedSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[ProxiedSource](#ProxiedSource)</code>  
**Implements:** <code>[call](#DataSource+call)</code>  

| Param | Type |
| --- | --- |
| path | <code>[PathSet](#PathSet)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="ProxiedSource+willGet"></a>
### proxiedSource.willGet(paths) ⇒ <code>Boolean</code>
Will the given paths be consumed by a get request against this
datasource?

**Kind**: instance method of <code>[ProxiedSource](#ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="ProxiedSource+willSet"></a>
### proxiedSource.willSet(envelope) ⇒ <code>Boolean</code>
Will the given JSONGraphEnvelope be consumed by a set request against
this datasource?

**Kind**: instance method of <code>[ProxiedSource](#ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="ProxiedSource+willCall"></a>
### proxiedSource.willCall(path) ⇒ <code>Boolean</code>
Will the given path be consumed by a call request against this
datasource?

**Kind**: instance method of <code>[ProxiedSource](#ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>[Path](#Path)</code> | 

<a name="ProxiedSource+getRelativeEnvelope"></a>
### proxiedSource.getRelativeEnvelope(envelope) ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>
Strip our leading path from the envelope's path(s) and jsonGraph object.

**Kind**: instance method of <code>[ProxiedSource](#ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="ProxiedSource+getResolvedEnvelope"></a>
### proxiedSource.getResolvedEnvelope(envelope) ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>
Adjust the JSONGraphEnvelope to reflect our leading path information.

**Kind**: instance method of <code>[ProxiedSource](#ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="StorageSource"></a>
## StorageSource ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [StorageSource](#StorageSource) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new StorageSource(opts)](#new_StorageSource_new)
  * [.model](#StorageSource+model)
  * [.source](#StorageSource+source)
  * [.options](#StorageSource+options)
    * [.storageKey](#StorageSource+options.storageKey)
    * [.storage](#StorageSource+options.storage)
    * [.serializer(graph)](#StorageSource+options.serializer) ⇒ <code>String</code>
    * [.deserializer(src)](#StorageSource+options.deserializer) ⇒ <code>[JSONGraph](#JSONGraph)</code>
  * [.get(paths)](#StorageSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#StorageSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#StorageSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.clear()](#StorageSource+clear)
  * [.serialize()](#StorageSource+serialize)
  * [.deserialize()](#StorageSource+deserialize)

<a name="new_StorageSource_new"></a>
### new StorageSource(opts)
**File:** [falcor/data-source/storage.js](falcor/data-source/storage.js)


| Param | Type |
| --- | --- |
| opts | <code>Object</code> | 
| opts.storage | <code>[Storage](#Storage)</code> | 
| opts.storageKey | <code>String</code> | 
| [opts.cache] | <code>Object</code> | 
| [opts.serializer] | <code>function</code> | 
| [opts.deserializer] | <code>function</code> | 

<a name="StorageSource+model"></a>
### storageSource.model
**Kind**: instance property of <code>[StorageSource](#StorageSource)</code>  
**Properties**

| Type |
| --- |
| <code>FalcorFModel</code> | 

<a name="StorageSource+source"></a>
### storageSource.source
**Kind**: instance property of <code>[StorageSource](#StorageSource)</code>  
**Properties**

| Type |
| --- |
| <code>[DataSource](#DataSource)</code> | 

<a name="StorageSource+options"></a>
### storageSource.options
**Kind**: instance property of <code>[StorageSource](#StorageSource)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 


* [.options](#StorageSource+options)
  * [.storageKey](#StorageSource+options.storageKey)
  * [.storage](#StorageSource+options.storage)
  * [.serializer(graph)](#StorageSource+options.serializer) ⇒ <code>String</code>
  * [.deserializer(src)](#StorageSource+options.deserializer) ⇒ <code>[JSONGraph](#JSONGraph)</code>

<a name="StorageSource+options.storageKey"></a>
#### options.storageKey
The key to use when accessing the Storage object to serialize the
graph to.

**Kind**: static property of <code>[options](#StorageSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="StorageSource+options.storage"></a>
#### options.storage
The storage source

**Kind**: static property of <code>[options](#StorageSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>[Storage](#Storage)</code> | 

<a name="StorageSource+options.serializer"></a>
#### options.serializer(graph) ⇒ <code>String</code>
A function to convert a JSONGraph to a String.

**Kind**: static method of <code>[options](#StorageSource+options)</code>  

| Param | Type |
| --- | --- |
| graph | <code>[JSONGraph](#JSONGraph)</code> | 

<a name="StorageSource+options.deserializer"></a>
#### options.deserializer(src) ⇒ <code>[JSONGraph](#JSONGraph)</code>
A function to convert a String to a JSONGraph.

**Kind**: static method of <code>[options](#StorageSource+options)</code>  

| Param | Type |
| --- | --- |
| src | <code>String</code> | 

<a name="StorageSource+get"></a>
### storageSource.get(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[StorageSource](#StorageSource)</code>  
**Implements:** <code>[get](#DataSource+get)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;PathSets&gt;</code> | 

<a name="StorageSource+set"></a>
### storageSource.set(envelope) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[StorageSource](#StorageSource)</code>  
**Implements:** <code>[set](#DataSource+set)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="StorageSource+call"></a>
### storageSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[StorageSource](#StorageSource)</code>  
**Implements:** <code>[call](#DataSource+call)</code>  

| Param | Type |
| --- | --- |
| path | <code>[PathSet](#PathSet)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="StorageSource+clear"></a>
### storageSource.clear()
Clear our storage item

**Kind**: instance method of <code>[StorageSource](#StorageSource)</code>  
<a name="StorageSource+serialize"></a>
### storageSource.serialize()
Write our cache to storage

**Kind**: instance method of <code>[StorageSource](#StorageSource)</code>  
<a name="StorageSource+deserialize"></a>
### storageSource.deserialize()
Get our cache from storage

**Kind**: instance method of <code>[StorageSource](#StorageSource)</code>  
<a name="ProteanClass"></a>
## ProteanClass : <code>function</code>
**Kind**: global class  

* [ProteanClass](#ProteanClass) : <code>function</code>
  * [.superproto](#ProteanClass.superproto) : <code>Object</code>
  * [.extend([subclass], [props], [properties])](#ProteanClass.extend) ⇒ <code>[ProteanClass](#ProteanClass)</code>
  * [.extended(subclass)](#ProteanClass.extended)
  * [.superclass()](#ProteanClass.superclass)

<a name="ProteanClass.superproto"></a>
### ProteanClass.superproto : <code>Object</code>
A reference to this class' superclass prototype

**Kind**: static property of <code>[ProteanClass](#ProteanClass)</code>  
<a name="ProteanClass.extend"></a>
### ProteanClass.extend([subclass], [props], [properties]) ⇒ <code>[ProteanClass](#ProteanClass)</code>
A function to extend this class into another one

**Kind**: static method of <code>[ProteanClass](#ProteanClass)</code>  

| Param | Type |
| --- | --- |
| [subclass] | <code>function</code> | 
| [props] | <code>Object</code> | 
| [properties] | <code>Object</code> | 

<a name="ProteanClass.extended"></a>
### ProteanClass.extended(subclass)
A function that will be called when the class is extended into another

**Kind**: static method of <code>[ProteanClass](#ProteanClass)</code>  

| Param | Type |
| --- | --- |
| subclass | <code>function</code> | 

<a name="ProteanClass.superclass"></a>
### ProteanClass.superclass()
A reference to this class' superclass constructor

**Kind**: static method of <code>[ProteanClass](#ProteanClass)</code>  
<a name="Storage"></a>
## Storage ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  
**Implements:** <code>external:Storage</code>  

* [Storage](#Storage) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new Storage(opts)](#new_Storage_new)
  * [.length](#Storage+length)
  * [.getItem(key)](#Storage+getItem) ⇒ <code>Mixed</code>
  * [.getJSON(key)](#Storage+getJSON) ⇒ <code>null</code> &#124; <code>Object</code>
  * [.setItem(key, value)](#Storage+setItem)
  * [.setJSON(key, value)](#Storage+setJSON)
  * [.removeItem(key)](#Storage+removeItem)
  * [.clear()](#Storage+clear)
  * [.key(idx)](#Storage+key) ⇒ <code>String</code>

<a name="new_Storage_new"></a>
### new Storage(opts)
**File:** [storage/index.js](storage/index.js)


| Param | Type |
| --- | --- |
| opts | <code>Object</code> | 
| opts.store | <code>external:Storage</code> | 
| opts.json | <code>JSON</code> | 

<a name="Storage+length"></a>
### storage.length
**Kind**: instance property of <code>[Storage](#Storage)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Integer</code> | 

<a name="Storage+getItem"></a>
### storage.getItem(key) ⇒ <code>Mixed</code>
**Kind**: instance method of <code>[Storage](#Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="Storage+getJSON"></a>
### storage.getJSON(key) ⇒ <code>null</code> &#124; <code>Object</code>
**Kind**: instance method of <code>[Storage](#Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="Storage+setItem"></a>
### storage.setItem(key, value)
**Kind**: instance method of <code>[Storage](#Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="Storage+setJSON"></a>
### storage.setJSON(key, value)
**Kind**: instance method of <code>[Storage](#Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="Storage+removeItem"></a>
### storage.removeItem(key)
**Kind**: instance method of <code>[Storage](#Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="Storage+clear"></a>
### storage.clear()
**Kind**: instance method of <code>[Storage](#Storage)</code>  
<a name="Storage+key"></a>
### storage.key(idx) ⇒ <code>String</code>
**Kind**: instance method of <code>[Storage](#Storage)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="Store"></a>
## Store ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  
**Implements:** <code>external:Storage</code>  

* [Store](#Store) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new Store()](#new_Store_new)
  * _instance_
    * [.length](#Store+length)
    * [.getItem(key)](#Store+getItem) ⇒ <code>null</code> &#124; <code>String</code>
    * [.setItem(key, value)](#Store+setItem)
    * [.removeItem(key)](#Store+removeItem)
    * [.clear()](#Store+clear)
    * [.key(idx)](#Store+key) ⇒ <code>String</code>
  * _static_
    * [.local](#Store.local) : <code>external:Storage</code>
    * [.memory](#Store.memory) : <code>module:Protean.Store</code>
    * [.session](#Store.session) : <code>external:Storage</code>

<a name="new_Store_new"></a>
### new Store()
**File:** [storage/store/index.js](storage/store/index.js)

<a name="Store+length"></a>
### store.length
**Kind**: instance property of <code>[Store](#Store)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Integer</code> | 

<a name="Store+getItem"></a>
### store.getItem(key) ⇒ <code>null</code> &#124; <code>String</code>
**Kind**: instance method of <code>[Store](#Store)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="Store+setItem"></a>
### store.setItem(key, value)
**Kind**: instance method of <code>[Store](#Store)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="Store+removeItem"></a>
### store.removeItem(key)
**Kind**: instance method of <code>[Store](#Store)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="Store+clear"></a>
### store.clear()
**Kind**: instance method of <code>[Store](#Store)</code>  
<a name="Store+key"></a>
### store.key(idx) ⇒ <code>String</code>
**Kind**: instance method of <code>[Store](#Store)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="Store.local"></a>
### Store.local : <code>external:Storage</code>
**File:** [storage/store/local.js](storage/store/local.js)

**Kind**: static property of <code>[Store](#Store)</code>  
<a name="Store.memory"></a>
### Store.memory : <code>module:Protean.Store</code>
**File:** [storage/store/memory.js](storage/store/memory.js)

**Kind**: static property of <code>[Store](#Store)</code>  
<a name="Store.session"></a>
### Store.session : <code>external:Storage</code>
**File:** [storage/store/session.js](storage/store/session.js)

**Kind**: static property of <code>[Store](#Store)</code>  
<a name="Collection"></a>
## Collection ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  

* [Collection](#Collection) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new Collection([rec])](#new_Collection_new)
  * [.idKey](#Collection+idKey)
  * [.comparator](#Collection+comparator)
  * [.length](#Collection+length)
  * [.records](#Collection+records)
  * [.has(id)](#Collection+has) ⇒ <code>Boolean</code>
  * [.add(obj)](#Collection+add) ⇒ <code>[Record](#Record)</code>
  * [.remove(id)](#Collection+remove) ⇒ <code>[Record](#Record)</code>
  * [.at(idx)](#Collection+at) ⇒ <code>[Record](#Record)</code>
  * [.removeAt(idx)](#Collection+removeAt) ⇒ <code>[Record](#Record)</code>
  * [.get(id)](#Collection+get) ⇒ <code>[Record](#Record)</code>
  * [.indexOf(idOrRecord)](#Collection+indexOf) ⇒ <code>Integer</code>
  * [.clear()](#Collection+clear) ⇒ <code>[Collection](#Collection)</code>
  * [.valueOf()](#Collection+valueOf) ⇒ <code>Array.&lt;Object&gt;</code>
  * [.find(predicate)](#Collection+find) ⇒ <code>[Record](#Record)</code>
  * [.sort([comparator])](#Collection+sort) ⇒ <code>[Collection](#Collection)</code>
  * [.map(iteratee)](#Collection+map) ⇒ <code>[Collection](#Collection)</code>
  * [.each(iteratee)](#Collection+each)
  * [.where(predicate)](#Collection+where) ⇒ <code>[Collection](#Collection)</code>
  * [.by(comparator)](#Collection+by) ⇒ <code>[Collection](#Collection)</code>
  * [.clone()](#Collection+clone) ⇒ <code>[Collection](#Collection)</code>
  * [.cloneDeep()](#Collection+cloneDeep) ⇒ <code>[Collection](#Collection)</code>

<a name="new_Collection_new"></a>
### new Collection([rec])
**File:** [utility/collection.js](utility/collection.js)


| Param | Type |
| --- | --- |
| [rec] | <code>[Record](#Record)</code> &#124; <code>Object</code> | 

<a name="Collection+idKey"></a>
### collection.idKey
The unique identifier key to use for records

**Kind**: instance property of <code>[Collection](#Collection)</code>  
**Default**: <code>&#x27;id&#x27;</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="Collection+comparator"></a>
### collection.comparator
Used to keep the collection ordered when adding items

**Kind**: instance property of <code>[Collection](#Collection)</code>  
**Properties**

| Type |
| --- |
| <code>function</code> | 

<a name="Collection+length"></a>
### collection.length
**Kind**: instance property of <code>[Collection](#Collection)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Integer</code> | 

<a name="Collection+records"></a>
### collection.records
**Kind**: instance property of <code>[Collection](#Collection)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>[Array.&lt;Record&gt;](#Record)</code> | 

<a name="Collection+has"></a>
### collection.has(id) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="Collection+add"></a>
### collection.add(obj) ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  
**Returns**: <code>[Record](#Record)</code> - The record just created  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> &#124; <code>[Record](#Record)</code> | 

<a name="Collection+remove"></a>
### collection.remove(id) ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="Collection+at"></a>
### collection.at(idx) ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="Collection+removeAt"></a>
### collection.removeAt(idx) ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="Collection+get"></a>
### collection.get(id) ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="Collection+indexOf"></a>
### collection.indexOf(idOrRecord) ⇒ <code>Integer</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| idOrRecord | <code>String</code> &#124; <code>[Record](#Record)</code> | 

<a name="Collection+clear"></a>
### collection.clear() ⇒ <code>[Collection](#Collection)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  
<a name="Collection+valueOf"></a>
### collection.valueOf() ⇒ <code>Array.&lt;Object&gt;</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  
<a name="Collection+find"></a>
### collection.find(predicate) ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 

<a name="Collection+sort"></a>
### collection.sort([comparator]) ⇒ <code>[Collection](#Collection)</code>
Mutates the collection to sorted based on the given comparator, or the
one defined on itself.

**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [comparator] | <code>function</code> | <code>this.comparator</code> | 

<a name="Collection+map"></a>
### collection.map(iteratee) ⇒ <code>[Collection](#Collection)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| iteratee | <code>function</code> | 

<a name="Collection+each"></a>
### collection.each(iteratee)
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| iteratee | <code>function</code> | 

<a name="Collection+where"></a>
### collection.where(predicate) ⇒ <code>[Collection](#Collection)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 

<a name="Collection+by"></a>
### collection.by(comparator) ⇒ <code>[Collection](#Collection)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

| Param | Type |
| --- | --- |
| comparator | <code>function</code> | 

<a name="Collection+clone"></a>
### collection.clone() ⇒ <code>[Collection](#Collection)</code>
Returns a copy of the collection with all the records (the records are
not cloned)

**Kind**: instance method of <code>[Collection](#Collection)</code>  
<a name="Collection+cloneDeep"></a>
### collection.cloneDeep() ⇒ <code>[Collection](#Collection)</code>
Returns a Collection with all records cloned.

**Kind**: instance method of <code>[Collection](#Collection)</code>  
<a name="FiniteStateMachine"></a>
## FiniteStateMachine ⇐ <code>[Subject](#Subject)</code>
**Kind**: global class  
**Extends:** <code>[Subject](#Subject)</code>, <code>[ProteanClass](#ProteanClass)</code>  

* [FiniteStateMachine](#FiniteStateMachine) ⇐ <code>[Subject](#Subject)</code>
  * [new FiniteStateMachine([opts])](#new_FiniteStateMachine_new)
  * [.options](#FiniteStateMachine+options)
    * [.initial](#FiniteStateMachine+options.initial)
    * [.current](#FiniteStateMachine+options.current)
    * [.stateless](#FiniteStateMachine+options.stateless)
    * [.states](#FiniteStateMachine+options.states)
  * [.transitions](#FiniteStateMachine+transitions)
  * [.currentState](#FiniteStateMachine+currentState)
  * [.currentInputs](#FiniteStateMachine+currentInputs)
  * [.add(name, transitions)](#FiniteStateMachine+add) ⇒ <code>[FiniteStateMachine](#FiniteStateMachine)</code>
  * [.remove(name)](#FiniteStateMachine+remove) ⇒ <code>[FiniteStateMachine](#FiniteStateMachine)</code>
  * [.has(name)](#FiniteStateMachine+has) ⇒ <code>Boolean</code>
  * [.can(input)](#FiniteStateMachine+can) ⇒ <code>Boolean</code>
  * [.will(input)](#FiniteStateMachine+will) ⇒ <code>String</code> &#124; <code>false</code>
  * [.onNext(input)](#FiniteStateMachine+onNext) ⇒ <code>Boolean</code>
  * [.onError(error)](#FiniteStateMachine+onError)
  * [.onCompleted()](#FiniteStateMachine+onCompleted)
  * [.dispose()](#FiniteStateMachine+dispose)
  * [.input(input)](#FiniteStateMachine+input) ⇒ <code>Boolean</code>
  * [.enter(name)](#FiniteStateMachine+enter) ⇒ <code>Boolean</code>
  * [.transition(input, from, to)](#FiniteStateMachine+transition) ⇒ <code>[FiniteStateMachine](#FiniteStateMachine)</code>
  * [.valueOf()](#FiniteStateMachine+valueOf) ⇒ <code>Object</code>

<a name="new_FiniteStateMachine_new"></a>
### new FiniteStateMachine([opts])
**File:** [utility/fsm.js](utility/fsm.js)

**Throws**:

- <code>Error</code> "ProteanFiniteStateMachine needs an initial state" If no
initial state is given and `stateless` is false.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [opts] | <code>Object</code> |  |  |
| [opts.initial] | <code>String</code> |  | The initial state to begin in |
| [opts.current] | <code>String</code> |  | Alias for initial |
| [opts.states] | <code>Object.&lt;String, Object&gt;</code> | <code>{}</code> | A map of state names to objects that have inputs as keys, and resulting state names as values. |
| [opts.stateless] | <code>Boolean</code> | <code>false</code> | Allow the machine to be in a stateless state. Default false. |

<a name="FiniteStateMachine+options"></a>
### finiteStateMachine.options
Default options

**Kind**: instance property of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 


* [.options](#FiniteStateMachine+options)
  * [.initial](#FiniteStateMachine+options.initial)
  * [.current](#FiniteStateMachine+options.current)
  * [.stateless](#FiniteStateMachine+options.stateless)
  * [.states](#FiniteStateMachine+options.states)

<a name="FiniteStateMachine+options.initial"></a>
#### options.initial
**Kind**: static property of <code>[options](#FiniteStateMachine+options)</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="FiniteStateMachine+options.current"></a>
#### options.current
**Kind**: static property of <code>[options](#FiniteStateMachine+options)</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="FiniteStateMachine+options.stateless"></a>
#### options.stateless
**Kind**: static property of <code>[options](#FiniteStateMachine+options)</code>  
**Properties**

| Type |
| --- |
| <code>Boolean</code> | 

<a name="FiniteStateMachine+options.states"></a>
#### options.states
**Kind**: static property of <code>[options](#FiniteStateMachine+options)</code>  
**Properties**

| Type |
| --- |
| <code>Object.&lt;String, Object&gt;</code> | 

<a name="FiniteStateMachine+transitions"></a>
### finiteStateMachine.transitions
**Kind**: instance property of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  
**Properties**

| Type |
| --- |
| <code>[Subject](#Subject)</code> | 

<a name="FiniteStateMachine+currentState"></a>
### finiteStateMachine.currentState
The current state

**Kind**: instance property of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="FiniteStateMachine+currentInputs"></a>
### finiteStateMachine.currentInputs
Get the currently available inputs

**Kind**: instance property of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Array.&lt;String&gt;</code> | 

<a name="FiniteStateMachine+add"></a>
### finiteStateMachine.add(name, transitions) ⇒ <code>[FiniteStateMachine](#FiniteStateMachine)</code>
Add a state and its available transitions

**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| transitions | <code>Object.&lt;String, String&gt;</code> | 

<a name="FiniteStateMachine+remove"></a>
### finiteStateMachine.remove(name) ⇒ <code>[FiniteStateMachine](#FiniteStateMachine)</code>
Remove a state and its transitions

**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="FiniteStateMachine+has"></a>
### finiteStateMachine.has(name) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="FiniteStateMachine+can"></a>
### finiteStateMachine.can(input) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 

<a name="FiniteStateMachine+will"></a>
### finiteStateMachine.will(input) ⇒ <code>String</code> &#124; <code>false</code>
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  
**Returns**: <code>String</code> &#124; <code>false</code> - the name of the resulting state, or false  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 

<a name="FiniteStateMachine+onNext"></a>
### finiteStateMachine.onNext(input) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 

<a name="FiniteStateMachine+onError"></a>
### finiteStateMachine.onError(error)
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| error | <code>Error</code> | 

<a name="FiniteStateMachine+onCompleted"></a>
### finiteStateMachine.onCompleted()
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  
<a name="FiniteStateMachine+dispose"></a>
### finiteStateMachine.dispose()
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  
<a name="FiniteStateMachine+input"></a>
### finiteStateMachine.input(input) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 

<a name="FiniteStateMachine+enter"></a>
### finiteStateMachine.enter(name) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="FiniteStateMachine+transition"></a>
### finiteStateMachine.transition(input, from, to) ⇒ <code>[FiniteStateMachine](#FiniteStateMachine)</code>
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 
| from | <code>String</code> | 
| to | <code>String</code> | 

<a name="FiniteStateMachine+valueOf"></a>
### finiteStateMachine.valueOf() ⇒ <code>Object</code>
**Kind**: instance method of <code>[FiniteStateMachine](#FiniteStateMachine)</code>  
<a name="LinkedList"></a>
## LinkedList ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  

* [LinkedList](#LinkedList) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new LinkedList([...items])](#new_LinkedList_new)
  * _instance_
    * [.head](#LinkedList+head)
    * [.tail](#LinkedList+tail)
    * [.push(...value)](#LinkedList+push) ⇒ <code>Integer</code>
    * [.pop()](#LinkedList+pop) ⇒ <code>\*</code>
    * [.unshift(...value)](#LinkedList+unshift) ⇒ <code>Integer</code>
    * [.shift()](#LinkedList+shift) ⇒ <code>\*</code>
    * [.nodeAt(idx)](#LinkedList+nodeAt) ⇒ <code>LinkdList.Node</code>
    * [.at(idx)](#LinkedList+at) ⇒ <code>\*</code>
    * [.insert(nodeOrValue, siblingOrIndex)](#LinkedList+insert)
    * [.remove(nodeOrIndex)](#LinkedList+remove)
    * [.reset()](#LinkedList+reset)
    * [.forEach(fn, [scope])](#LinkedList+forEach)
    * [.map(fn, [scope])](#LinkedList+map) ⇒ <code>[LinkedList](#LinkedList)</code>
    * [.filter(fn, [scope])](#LinkedList+filter) ⇒ <code>[LinkedList](#LinkedList)</code>
    * [.reduce(fn, [value], [scope])](#LinkedList+reduce) ⇒ <code>\*</code>
    * [.toArray()](#LinkedList+toArray) ⇒ <code>Array.&lt;\*&gt;</code>
  * _static_
    * [.Node](#LinkedList.Node) ⇐ <code>Object</code>
      * [new Node(data, [prev], [next])](#new_LinkedList.Node_new)
      * [.next](#LinkedList.Node+next)
      * [.prev](#LinkedList.Node+prev)
      * [.data](#LinkedList.Node+data)
      * [.insert(prev, next)](#LinkedList.Node+insert)
      * [.remove()](#LinkedList.Node+remove)

<a name="new_LinkedList_new"></a>
### new LinkedList([...items])

| Param | Type |
| --- | --- |
| [...items] | <code>\*</code> | 

<a name="LinkedList+head"></a>
### linkedList.head
**Kind**: instance property of <code>[LinkedList](#LinkedList)</code>  
**Properties**

| Type |
| --- |
| <code>[Node](#LinkedList.Node)</code> | 

<a name="LinkedList+tail"></a>
### linkedList.tail
**Kind**: instance property of <code>[LinkedList](#LinkedList)</code>  
**Properties**

| Type |
| --- |
| <code>[Node](#LinkedList.Node)</code> | 

<a name="LinkedList+push"></a>
### linkedList.push(...value) ⇒ <code>Integer</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type |
| --- | --- |
| ...value | <code>\*</code> | 

<a name="LinkedList+pop"></a>
### linkedList.pop() ⇒ <code>\*</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  
<a name="LinkedList+unshift"></a>
### linkedList.unshift(...value) ⇒ <code>Integer</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type |
| --- | --- |
| ...value | <code>\*</code> | 

<a name="LinkedList+shift"></a>
### linkedList.shift() ⇒ <code>\*</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  
<a name="LinkedList+nodeAt"></a>
### linkedList.nodeAt(idx) ⇒ <code>LinkdList.Node</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="LinkedList+at"></a>
### linkedList.at(idx) ⇒ <code>\*</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="LinkedList+insert"></a>
### linkedList.insert(nodeOrValue, siblingOrIndex)
Insert a new value (or an existing node) after the given sibling or
index.

**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type |
| --- | --- |
| nodeOrValue | <code>[Node](#LinkedList.Node)</code> &#124; <code>\*</code> | 
| siblingOrIndex | <code>LinkdeList.Node</code> &#124; <code>Integer</code> | 

<a name="LinkedList+remove"></a>
### linkedList.remove(nodeOrIndex)
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type |
| --- | --- |
| nodeOrIndex | <code>[Node](#LinkedList.Node)</code> &#124; <code>Integer</code> | 

<a name="LinkedList+reset"></a>
### linkedList.reset()
Reset the list

**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  
<a name="LinkedList+forEach"></a>
### linkedList.forEach(fn, [scope])
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [scope] | <code>Object</code> | 

<a name="LinkedList+map"></a>
### linkedList.map(fn, [scope]) ⇒ <code>[LinkedList](#LinkedList)</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [scope] | <code>Object</code> | 

<a name="LinkedList+filter"></a>
### linkedList.filter(fn, [scope]) ⇒ <code>[LinkedList](#LinkedList)</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| [scope] | <code>Object</code> | 

<a name="LinkedList+reduce"></a>
### linkedList.reduce(fn, [value], [scope]) ⇒ <code>\*</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| [value] | <code>\*</code> | Initial value |
| [scope] | <code>Object</code> | Scope to apply to the `fn` passed |

<a name="LinkedList+toArray"></a>
### linkedList.toArray() ⇒ <code>Array.&lt;\*&gt;</code>
**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  
<a name="LinkedList.Node"></a>
### LinkedList.Node ⇐ <code>Object</code>
**Kind**: static class of <code>[LinkedList](#LinkedList)</code>  
**Extends:** <code>Object</code>  

  * [.Node](#LinkedList.Node) ⇐ <code>Object</code>
    * [new Node(data, [prev], [next])](#new_LinkedList.Node_new)
    * [.next](#LinkedList.Node+next)
    * [.prev](#LinkedList.Node+prev)
    * [.data](#LinkedList.Node+data)
    * [.insert(prev, next)](#LinkedList.Node+insert)
    * [.remove()](#LinkedList.Node+remove)

<a name="new_LinkedList.Node_new"></a>
#### new Node(data, [prev], [next])

| Param | Type |
| --- | --- |
| data | <code>Mixed</code> | 
| [prev] | <code>[Node](#LinkedList.Node)</code> | 
| [next] | <code>[Node](#LinkedList.Node)</code> | 

<a name="LinkedList.Node+next"></a>
#### node.next
**Kind**: instance property of <code>[Node](#LinkedList.Node)</code>  
**Properties**

| Type |
| --- |
| <code>[Node](#LinkedList.Node)</code> | 

<a name="LinkedList.Node+prev"></a>
#### node.prev
**Kind**: instance property of <code>[Node](#LinkedList.Node)</code>  
**Properties**

| Type |
| --- |
| <code>[Node](#LinkedList.Node)</code> | 

<a name="LinkedList.Node+data"></a>
#### node.data
**Kind**: instance property of <code>[Node](#LinkedList.Node)</code>  
**Properties**

| Type |
| --- |
| <code>\*</code> | 

<a name="LinkedList.Node+insert"></a>
#### node.insert(prev, next)
**Kind**: instance method of <code>[Node](#LinkedList.Node)</code>  

| Param | Type |
| --- | --- |
| prev | <code>[Node](#LinkedList.Node)</code> | 
| next | <code>[Node](#LinkedList.Node)</code> | 

<a name="LinkedList.Node+remove"></a>
#### node.remove()
Remove the given node, nulling out its prev and next pointers

**Kind**: instance method of <code>[Node](#LinkedList.Node)</code>  
<a name="Record"></a>
## Record ⇐ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global class  
**Extends:** <code>[ProteanClass](#ProteanClass)</code>  

* [Record](#Record) ⇐ <code>[ProteanClass](#ProteanClass)</code>
  * [new Record([data])](#new_Record_new)
  * [.length](#Record+length)
  * [.get(key)](#Record+get) ⇒ <code>Mixed</code>
  * [.set(keyOrRecord, [value])](#Record+set) ⇒ <code>[Record](#Record)</code>
  * [.merge(record)](#Record+merge) ⇒ <code>[Record](#Record)</code>
  * [.remove(key)](#Record+remove) ⇒ <code>Mixed</code>
  * [.has(key)](#Record+has) ⇒ <code>Boolean</code>
  * [.clear()](#Record+clear) ⇒ <code>[Record](#Record)</code>
  * [.key(idx)](#Record+key) ⇒ <code>String</code>
  * [.valueOf()](#Record+valueOf) ⇒ <code>Object</code>
  * [.clone([values])](#Record+clone) ⇒ <code>[Record](#Record)</code>

<a name="new_Record_new"></a>
### new Record([data])
**File:** [utility/record.js](utility/record.js)


| Param | Type |
| --- | --- |
| [data] | <code>Object</code> | 

<a name="Record+length"></a>
### record.length
**Kind**: instance property of <code>[Record](#Record)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Integer</code> | 

<a name="Record+get"></a>
### record.get(key) ⇒ <code>Mixed</code>
**Kind**: instance method of <code>[Record](#Record)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="Record+set"></a>
### record.set(keyOrRecord, [value]) ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Record](#Record)</code>  

| Param | Type |
| --- | --- |
| keyOrRecord | <code>String</code> &#124; <code>[Record](#Record)</code> &#124; <code>Object</code> | 
| [value] | <code>Mixed</code> | 

<a name="Record+merge"></a>
### record.merge(record) ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Record](#Record)</code>  

| Param | Type |
| --- | --- |
| record | <code>[Record](#Record)</code> &#124; <code>Object</code> | 

<a name="Record+remove"></a>
### record.remove(key) ⇒ <code>Mixed</code>
**Kind**: instance method of <code>[Record](#Record)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="Record+has"></a>
### record.has(key) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[Record](#Record)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="Record+clear"></a>
### record.clear() ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Record](#Record)</code>  
<a name="Record+key"></a>
### record.key(idx) ⇒ <code>String</code>
**Kind**: instance method of <code>[Record](#Record)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="Record+valueOf"></a>
### record.valueOf() ⇒ <code>Object</code>
**Kind**: instance method of <code>[Record](#Record)</code>  
<a name="Record+clone"></a>
### record.clone([values]) ⇒ <code>[Record](#Record)</code>
**Kind**: instance method of <code>[Record](#Record)</code>  

| Param | Type |
| --- | --- |
| [values] | <code>Object</code> | 

<a name="onNextFunction"></a>
## onNextFunction : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| value | <code>Mixed</code> | 

<a name="onErrorFunction"></a>
## onErrorFunction : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| error | <code>Error</code> | 

<a name="onCompletedFunction"></a>
## onCompletedFunction : <code>function</code>
**Kind**: global typedef  
<a name="Observable"></a>
## Observable
**Kind**: global typedef  
**Implements:** <code>[Observable](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md)</code>  
<a name="Observable+subscribe"></a>
### observable.subscribe(onNextOrObserver, [onError], [onCompleted]) ⇒ <code>[Disposable](#Disposable)</code>
**Kind**: instance method of <code>[Observable](#Observable)</code>  

| Param | Type |
| --- | --- |
| onNextOrObserver | <code>[onNextFunction](#onNextFunction)</code> &#124; <code>[Observer](#Observer)</code> | 
| [onError] | <code>[onErrorFunction](#onErrorFunction)</code> | 
| [onCompleted] | <code>[onCompletedFunction](#onCompletedFunction)</code> | 

<a name="Observer"></a>
## Observer
**Kind**: global typedef  
**Implements:** <code>[Observer](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observer.md)</code>  

* [Observer](#Observer)
  * [.onNext](#Observer+onNext) : <code>[onNextFunction](#onNextFunction)</code>
  * [.onError](#Observer+onError) : <code>[onErrorFunction](#onErrorFunction)</code>
  * [.onCompleted](#Observer+onCompleted) : <code>[onCompletedFunction](#onCompletedFunction)</code>

<a name="Observer+onNext"></a>
### observer.onNext : <code>[onNextFunction](#onNextFunction)</code>
**Kind**: instance property of <code>[Observer](#Observer)</code>  
<a name="Observer+onError"></a>
### observer.onError : <code>[onErrorFunction](#onErrorFunction)</code>
**Kind**: instance property of <code>[Observer](#Observer)</code>  
<a name="Observer+onCompleted"></a>
### observer.onCompleted : <code>[onCompletedFunction](#onCompletedFunction)</code>
**Kind**: instance property of <code>[Observer](#Observer)</code>  
<a name="Disposable"></a>
## Disposable
**Kind**: global typedef  
**Implements:** <code>[Disposable](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/disposables/disposable.md)</code>  
<a name="Disposable+dispose"></a>
### disposable.dispose()
**Kind**: instance method of <code>[Disposable](#Disposable)</code>  
<a name="Subject"></a>
## Subject ⇐ <code>[Observable](#Observable)</code>
**Kind**: global typedef  
**Extends:** <code>[Observable](#Observable)</code>  
**Mixes**: <code>[Observer](#Observer)</code>, <code>[Disposable](#Disposable)</code>  
**See**: [https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md)  
<a name="DataSource"></a>
## DataSource
**Kind**: global typedef  
**Implements:** <code>[DataSource](http://netflix.github.io/falcor/doc/DataSource.html)</code>  

* [DataSource](#DataSource)
  * [.get(paths)](#DataSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#DataSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#DataSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>

<a name="DataSource+get"></a>
### dataSource.get(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[DataSource](#DataSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="DataSource+set"></a>
### dataSource.set(envelope) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[DataSource](#DataSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="DataSource+call"></a>
### dataSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[DataSource](#DataSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>[PathSet](#PathSet)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="Sentinel"></a>
## Sentinel : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| $type | <code>String</code> | 
| value | <code>Mixed</code> | 

<a name="Reference"></a>
## Reference : <code>[Sentinel](#Sentinel)</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| $type | <code>String</code> | <code>&#x27;ref&#x27;</code> | 
| value | <code>[Path](#Path)</code> |  | 

<a name="RootReference"></a>
## RootReference : <code>[Reference](#Reference)</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| $root | <code>Boolean</code> | <code>true</code> | 

<a name="Atom"></a>
## Atom : <code>[Sentinel](#Sentinel)</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#Atom](http://netflix.github.io/falcor/doc/global.html#Atom)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| $type | <code>String</code> | <code>&#x27;atom&#x27;</code> | 
| $expires | <code>Integer</code> |  | 

<a name="JSONEnvelope"></a>
## JSONEnvelope : <code>Object</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#JSONGraph](http://netflix.github.io/falcor/doc/global.html#JSONGraph)  
**Properties**

| Name | Type |
| --- | --- |
| json | <code>Object</code> | 

<a name="JSONGraph"></a>
## JSONGraph : <code>Object</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#JSONGraph](http://netflix.github.io/falcor/doc/global.html#JSONGraph)  
<a name="JSONGraphEnvelope"></a>
## JSONGraphEnvelope : <code>Object</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#JSONGraphEnvelope](http://netflix.github.io/falcor/doc/global.html#JSONGraphEnvelope)  
**Properties**

| Name | Type |
| --- | --- |
| jsonGraph | <code>[JSONGraph](#JSONGraph)</code> | 
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| invalidated | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="Key"></a>
## Key : <code>String</code> &#124; <code>null</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#Key](http://netflix.github.io/falcor/doc/global.html#Key)  
<a name="KeySet"></a>
## KeySet : <code>[Key](#Key)</code> &#124; <code>[Range](#Range)</code> &#124; <code>Array.&lt;(Key\|Range)&gt;</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#KeySet](http://netflix.github.io/falcor/doc/global.html#KeySet)  
<a name="Path"></a>
## Path : <code>[Array.&lt;Key&gt;](#Key)</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#Path](http://netflix.github.io/falcor/doc/global.html#Path)  
<a name="PathSet"></a>
## PathSet : <code>[Array.&lt;KeySet&gt;](#KeySet)</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#PathSet](http://netflix.github.io/falcor/doc/global.html#PathSet)  
<a name="PathValue"></a>
## PathValue : <code>Object</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#PathValue](http://netflix.github.io/falcor/doc/global.html#PathValue)  
**Properties**

| Name | Type |
| --- | --- |
| path | <code>[Path](#Path)</code> | 
| value | <code>\*</code> | 

<a name="Range"></a>
## Range : <code>Object</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#Range](http://netflix.github.io/falcor/doc/global.html#Range)  
**Properties**

| Name | Type |
| --- | --- |
| from | <code>Integer</code> | 
| to | <code>Integer</code> | 
| length | <code>Integer</code> | 




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
