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
<dt><a href="#CollectionSource">CollectionSource</a></dt>
<dd></dd>
<dt><a href="#CompositeSource">CompositeSource</a></dt>
<dd></dd>
<dt><a href="#NoCacheSource">NoCacheSource</a></dt>
<dd></dd>
<dt><a href="#ProxiedSource">ProxiedSource</a></dt>
<dd></dd>
<dt><a href="#StorageDataSource">StorageDataSource</a></dt>
<dd></dd>
<dt><a href="#Storage">Storage</a></dt>
<dd></dd>
<dt><a href="#Store">Store</a></dt>
<dd></dd>
<dt><a href="#Collection">Collection</a></dt>
<dd></dd>
<dt><a href="#FiniteStateMachine">FiniteStateMachine</a> ⇐ <code><a href="#Subject">Subject</a></code></dt>
<dd></dd>
<dt><a href="#Record">Record</a></dt>
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
<dt><a href="#Atom">Atom</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#JSONEnvelope">JSONEnvelope</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#JSONGraph">JSONGraph</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#JSONGraphEnvelope">JSONGraphEnvelope</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FalcorModel">FalcorModel</a></dt>
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
<dt><a href="#ProteanClassExtend">ProteanClassExtend</a> ⇒ <code><a href="#ProteanClass">ProteanClass</a></code></dt>
<dd></dd>
<dt><a href="#ProteanClassExtended">ProteanClassExtended</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#ProteanClass">ProteanClass</a> : <code>function</code></dt>
<dd></dd>
</dl>
<a name="module_Protean"></a>
## Protean

* [Protean](#module_Protean)
  * [.classnames(arg)](#module_Protean.classnames) ⇒ <code>String</code>
  * [.classify([subclass], props, [properties])](#module_Protean.classify) ⇒ <code>[ProteanClass](#ProteanClass)</code>
  * [.inherit(superclass, [subclass], [props], [properties])](#module_Protean.inherit) ⇒ <code>[ProteanClass](#ProteanClass)</code>
  * [.instantiate(fn, [args])](#module_Protean.instantiate) ⇒ <code>Object</code>
  * [.augment(...obj)](#module_Protean.augment) ⇒ <code>Object</code>
  * [.traverse(obj, visitor, [post])](#module_Protean.traverse)
    * _static_
      * [.SKIP](#module_Protean.traverse.SKIP) : <code>String</code>
      * [.CONTINUE](#module_Protean.traverse.CONTINUE) : <code>String</code>
      * [.BREAK](#module_Protean.traverse.BREAK) : <code>String</code>
    * _inner_
      * [~visitorFn(path, value, context)](#module_Protean.traverse..visitorFn) ⇒ <code>undefined</code> &#124; <code>String</code>
  * [.enmap(...args)](#module_Protean.enmap) ⇒ <code>Object</code>
  * [.enumerate()](#module_Protean.enumerate) ⇒ <code>Object</code>
  * [.guid()](#module_Protean.guid) ⇒ <code>String</code>
  * [.mergeExports(receiver, supplier)](#module_Protean.mergeExports) ⇒ <code>Object</code>

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

<a name="module_Protean.enmap"></a>
### Protean.enmap(...args) ⇒ <code>Object</code>
Takes a list of alternating key/values and returns an object.

**File:** [utility/enmap.js](utility/enmap.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| ...args | <code>Mixed</code> | 

<a name="module_Protean.enumerate"></a>
### Protean.enumerate() ⇒ <code>Object</code>
Takes an argument list of strings and returns an object with those keys, and their
values being the index of that key plus one.

**File:** [utility/enumerate.js](utility/enumerate.js)

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Type |
| --- |
| <code>String</code> | 

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
  * [.Graph](#module_Falcor.Graph) ⇐ <code>[FalcorJSONGraph](https://github.com/Netflix/falcor-json-graph)</code>
    * [.set](#module_Falcor.Graph.set) ⇒ <code>Object</code>
    * [.atoms(graph, fn)](#module_Falcor.Graph.atoms)
      * [~visitorFn(path, atom, graph)](#module_Falcor.Graph.atoms..visitorFn)
    * [.mergeEnvelope(receiver, supplier)](#module_Falcor.Graph.mergeEnvelope) ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>
    * [.relative(root, graph)](#module_Falcor.Graph.relative) ⇒ <code>[JSONGraph](#JSONGraph)</code>
    * [.resolve(root, graph, [opts])](#module_Falcor.Graph.resolve) ⇒ <code>[JSONGraph](#JSONGraph)</code>
  * [.Path](#module_Falcor.Path) ⇐ <code>[FalcorPathUtils](https://github.com/Netflix/falcor-path-utils)</code>
    * [.relative(root, paths)](#module_Falcor.Path.relative) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>
    * [.resolve(root, paths, [opts])](#module_Falcor.Path.resolve) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>
  * [.Syntax](#module_Falcor.Syntax) ⇐ <code>[FalcorPathSyntax](https://github.com/Netflix/falcor-path-syntax)</code>
    * [.rootKey](#module_Falcor.Syntax.rootKey)

<a name="module_Falcor.Graph"></a>
### Falcor.Graph ⇐ <code>[FalcorJSONGraph](https://github.com/Netflix/falcor-json-graph)</code>
**File:** [falcor/graph.js](falcor/graph.js)

**Kind**: static property of <code>[Falcor](#module_Falcor)</code>  
**Extends:** <code>[FalcorJSONGraph](https://github.com/Netflix/falcor-json-graph)</code>  

* [.Graph](#module_Falcor.Graph) ⇐ <code>[FalcorJSONGraph](https://github.com/Netflix/falcor-json-graph)</code>
  * [.set](#module_Falcor.Graph.set) ⇒ <code>Object</code>
  * [.atoms(graph, fn)](#module_Falcor.Graph.atoms)
    * [~visitorFn(path, atom, graph)](#module_Falcor.Graph.atoms..visitorFn)
  * [.mergeEnvelope(receiver, supplier)](#module_Falcor.Graph.mergeEnvelope) ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>
  * [.relative(root, graph)](#module_Falcor.Graph.relative) ⇒ <code>[JSONGraph](#JSONGraph)</code>
  * [.resolve(root, graph, [opts])](#module_Falcor.Graph.resolve) ⇒ <code>[JSONGraph](#JSONGraph)</code>

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

<a name="module_Falcor.Graph.mergeEnvelope"></a>
#### Graph.mergeEnvelope(receiver, supplier) ⇒ <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code>
**File:** [falcor/graph/merge.js](falcor/graph/merge.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| receiver | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 
| supplier | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="module_Falcor.Graph.relative"></a>
#### Graph.relative(root, graph) ⇒ <code>[JSONGraph](#JSONGraph)</code>
**File:** [falcor/graph/relative.js](falcor/graph/relative.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type |
| --- | --- |
| root | <code>[Path](#Path)</code> | 
| graph | <code>[JSONGraph](#JSONGraph)</code> | 

<a name="module_Falcor.Graph.resolve"></a>
#### Graph.resolve(root, graph, [opts]) ⇒ <code>[JSONGraph](#JSONGraph)</code>
**File:** [falcor/graph/resolve.js](falcor/graph/resolve.js)

**Kind**: static method of <code>[Graph](#module_Falcor.Graph)</code>  

| Param | Type | Default |
| --- | --- | --- |
| root | <code>[Path](#Path)</code> |  | 
| graph | <code>[JSONGraph](#JSONGraph)</code> |  | 
| [opts] | <code>Object</code> |  | 
| [opts.rootKey] | <code>String</code> | <code>&#x27;{/}&#x27;</code> | 

<a name="module_Falcor.Path"></a>
### Falcor.Path ⇐ <code>[FalcorPathUtils](https://github.com/Netflix/falcor-path-utils)</code>
**Kind**: static property of <code>[Falcor](#module_Falcor)</code>  
**Extends:** <code>[FalcorPathUtils](https://github.com/Netflix/falcor-path-utils)</code>  

* [.Path](#module_Falcor.Path) ⇐ <code>[FalcorPathUtils](https://github.com/Netflix/falcor-path-utils)</code>
  * [.relative(root, paths)](#module_Falcor.Path.relative) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>
  * [.resolve(root, paths, [opts])](#module_Falcor.Path.resolve) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>

<a name="module_Falcor.Path.relative"></a>
#### Path.relative(root, paths) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>
**File:** [falcor/path/relative.js](falcor/path/relative.js)

**Kind**: static method of <code>[Path](#module_Falcor.Path)</code>  

| Param | Type |
| --- | --- |
| root | <code>[Path](#Path)</code> | 
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="module_Falcor.Path.resolve"></a>
#### Path.resolve(root, paths, [opts]) ⇒ <code>[Array.&lt;PathSet&gt;](#PathSet)</code>
**File:** [falcor/path/resolve.js](falcor/path/resolve.js)

**Kind**: static method of <code>[Path](#module_Falcor.Path)</code>  

| Param | Type | Default |
| --- | --- | --- |
| root | <code>[Path](#Path)</code> |  | 
| paths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> |  | 
| [opts] | <code>Object</code> |  | 
| [opts.rootKey] | <code>String</code> | <code>&#x27;{/}&#x27;</code> | 

<a name="module_Falcor.Syntax"></a>
### Falcor.Syntax ⇐ <code>[FalcorPathSyntax](https://github.com/Netflix/falcor-path-syntax)</code>
**Kind**: static property of <code>[Falcor](#module_Falcor)</code>  
**Extends:** <code>[FalcorPathSyntax](https://github.com/Netflix/falcor-path-syntax)</code>  
<a name="module_Falcor.Syntax.rootKey"></a>
#### Syntax.rootKey
**Kind**: static property of <code>[Syntax](#module_Falcor.Syntax)</code>  
**Default**: <code>&#x27;{/}&#x27;</code>  
**Read only**: true  
<a name="CollectionSource"></a>
## CollectionSource
**Kind**: global class  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [CollectionSource](#CollectionSource)
  * [new CollectionSource(collection, [path])](#new_CollectionSource_new)
  * [.router](#CollectionSource+router)
  * [.routes](#CollectionSource+routes)
  * [.get(paths)](#CollectionSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#CollectionSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#CollectionSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.getLength()](#CollectionSource+getLength) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.getRecordByIndex(paths)](#CollectionSource+getRecordByIndex) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.getRecordProps(paths)](#CollectionSource+getRecordProps) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>

<a name="new_CollectionSource_new"></a>
### new CollectionSource(collection, [path])
**file:** [falcor/data-source/collection.js](falcor/data-source/collection.js)


| Param | Type |
| --- | --- |
| collection | <code>[Collection](#Collection)</code> | 
| [path] | <code>Array</code> | 

<a name="CollectionSource+router"></a>
### collectionSource.router
**Kind**: instance property of <code>[CollectionSource](#CollectionSource)</code>  
**Properties**

| Type |
| --- |
| <code>FalcorRouter</code> | 

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

<a name="CompositeSource"></a>
## CompositeSource
**Kind**: global class  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [CompositeSource](#CompositeSource)
  * [new CompositeSource(...args)](#new_CompositeSource_new)
  * [.sources](#CompositeSource+sources)
  * [.get(paths)](#CompositeSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#CompositeSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#CompositeSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.add(path, source)](#CompositeSource+add) ⇒ <code>[CompositeSource](#CompositeSource)</code>

<a name="new_CompositeSource_new"></a>
### new CompositeSource(...args)
**File:** [falcor/data-source/composite.js](falcor/data-source/composite.js)


| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;Path, DataSource&gt;</code> | 

<a name="CompositeSource+sources"></a>
### compositeSource.sources
**Kind**: instance property of <code>[CompositeSource](#CompositeSource)</code>  
**Properties**

| Type |
| --- |
| <code>Object.&lt;Path, CompositeSoure~SourceWrapper&gt;</code> | 

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

<a name="NoCacheSource"></a>
## NoCacheSource
**Kind**: global class  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [NoCacheSource](#NoCacheSource)
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

<a name="ProxiedSource"></a>
## ProxiedSource
**Kind**: global class  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [ProxiedSource](#ProxiedSource)
  * [new ProxiedSource([opts])](#new_ProxiedSource_new)
  * [.source](#ProxiedSource+source)
  * [.root](#ProxiedSource+root)
  * [.rootKey](#ProxiedSource+rootKey)
  * [.preGet](#ProxiedSource+preGet)
  * [.postGet](#ProxiedSource+postGet)
  * [.preSet](#ProxiedSource+preSet)
  * [.postSet](#ProxiedSource+postSet)
  * [.preCall](#ProxiedSource+preCall)
  * [.postCall](#ProxiedSource+postCall)
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
paths, and the paths to the atom values within the JSONGraph.

**File:** [falcor/data-source/proxied.js](falcor/data-source/proxied.js)


| Param | Type | Description |
| --- | --- | --- |
| [opts] | <code>Object</code> |  |
| [opts.source] | <code>[DataSource](#DataSource)</code> |  |
| [opts.root] | <code>[Path](#Path)</code> |  |
| [opts.rootKey] | <code>String</code> | The 'fake' path key that denotes a path that should start at the conceptual root. i.e: do not strip or adjust, just drop the root key. |
| [opts.preGet] | <code>function</code> |  |
| [opts.preSet] | <code>function</code> |  |
| [opts.preCall] | <code>function</code> |  |
| [opts.postGet] | <code>function</code> |  |
| [opts.postSet] | <code>function</code> |  |
| [opts.postCall] | <code>function</code> |  |

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

<a name="ProxiedSource+rootKey"></a>
### proxiedSource.rootKey
**Kind**: instance property of <code>[ProxiedSource](#ProxiedSource)</code>  
**Default**: <code>&#x27;{/}&#x27;</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="ProxiedSource+preGet"></a>
### proxiedSource.preGet
**Kind**: instance property of <code>[ProxiedSource](#ProxiedSource)</code>  
**Properties**

| Type |
| --- |
| <code>function</code> | 

<a name="ProxiedSource+postGet"></a>
### proxiedSource.postGet
**Kind**: instance property of <code>[ProxiedSource](#ProxiedSource)</code>  
**Properties**

| Type |
| --- |
| <code>function</code> | 

<a name="ProxiedSource+preSet"></a>
### proxiedSource.preSet
**Kind**: instance property of <code>[ProxiedSource](#ProxiedSource)</code>  
**Properties**

| Type |
| --- |
| <code>function</code> | 

<a name="ProxiedSource+postSet"></a>
### proxiedSource.postSet
**Kind**: instance property of <code>[ProxiedSource](#ProxiedSource)</code>  
**Properties**

| Type |
| --- |
| <code>function</code> | 

<a name="ProxiedSource+preCall"></a>
### proxiedSource.preCall
**Kind**: instance property of <code>[ProxiedSource](#ProxiedSource)</code>  
**Properties**

| Type |
| --- |
| <code>function</code> | 

<a name="ProxiedSource+postCall"></a>
### proxiedSource.postCall
**Kind**: instance property of <code>[ProxiedSource](#ProxiedSource)</code>  
**Properties**

| Type |
| --- |
| <code>function</code> | 

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

<a name="StorageDataSource"></a>
## StorageDataSource
**Kind**: global class  
**Implements:** <code>[DataSource](#DataSource)</code>  

* [StorageDataSource](#StorageDataSource)
  * [new StorageDataSource(opts)](#new_StorageDataSource_new)
  * [.model](#StorageDataSource+model)
  * [.source](#StorageDataSource+source)
  * [.options](#StorageDataSource+options)
    * [.storageKey](#StorageDataSource+options.storageKey)
    * [.storage](#StorageDataSource+options.storage)
  * [.get(paths)](#StorageDataSource+get) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.set(envelope)](#StorageDataSource+set) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.call(path, args, refSuffixes, thisPaths)](#StorageDataSource+call) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
  * [.clear()](#StorageDataSource+clear)
  * [.serialize()](#StorageDataSource+serialize)
  * [.deserialize()](#StorageDataSource+deserialize)

<a name="new_StorageDataSource_new"></a>
### new StorageDataSource(opts)
**file:** [falcor/data-source/storage.js](falcor/data-source/storage.js)


| Param | Type |
| --- | --- |
| opts | <code>Object</code> | 
| [opts.cache] | <code>Object</code> | 
| [opts.storage] | <code>[Storage](#Storage)</code> | 
| opts.storageKey | <code>String</code> | 

<a name="StorageDataSource+model"></a>
### storageDataSource.model
**Kind**: instance property of <code>[StorageDataSource](#StorageDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>FalcorFModel</code> | 

<a name="StorageDataSource+source"></a>
### storageDataSource.source
**Kind**: instance property of <code>[StorageDataSource](#StorageDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>[DataSource](#DataSource)</code> | 

<a name="StorageDataSource+options"></a>
### storageDataSource.options
**Kind**: instance property of <code>[StorageDataSource](#StorageDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 


* [.options](#StorageDataSource+options)
  * [.storageKey](#StorageDataSource+options.storageKey)
  * [.storage](#StorageDataSource+options.storage)

<a name="StorageDataSource+options.storageKey"></a>
#### options.storageKey
**Kind**: static property of <code>[options](#StorageDataSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="StorageDataSource+options.storage"></a>
#### options.storage
**Kind**: static property of <code>[options](#StorageDataSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>external:Storage</code> | 

<a name="StorageDataSource+get"></a>
### storageDataSource.get(paths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[StorageDataSource](#StorageDataSource)</code>  
**Implements:** <code>[get](#DataSource+get)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;PathSets&gt;</code> | 

<a name="StorageDataSource+set"></a>
### storageDataSource.set(envelope) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[StorageDataSource](#StorageDataSource)</code>  
**Implements:** <code>[set](#DataSource+set)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>[JSONGraphEnvelope](#JSONGraphEnvelope)</code> | 

<a name="StorageDataSource+call"></a>
### storageDataSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>[Observable.&lt;JSONGraphEnvelope&gt;](#JSONGraphEnvelope)</code>
**Kind**: instance method of <code>[StorageDataSource](#StorageDataSource)</code>  
**Implements:** <code>[call](#DataSource+call)</code>  

| Param | Type |
| --- | --- |
| path | <code>[PathSet](#PathSet)</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 
| thisPaths | <code>[Array.&lt;PathSet&gt;](#PathSet)</code> | 

<a name="StorageDataSource+clear"></a>
### storageDataSource.clear()
Clear our storage item

**Kind**: instance method of <code>[StorageDataSource](#StorageDataSource)</code>  
<a name="StorageDataSource+serialize"></a>
### storageDataSource.serialize()
Write our cache to storage

**Kind**: instance method of <code>[StorageDataSource](#StorageDataSource)</code>  
<a name="StorageDataSource+deserialize"></a>
### storageDataSource.deserialize()
Get our cache from storage

**Kind**: instance method of <code>[StorageDataSource](#StorageDataSource)</code>  
<a name="Storage"></a>
## Storage
**Kind**: global class  
**Implements:** <code>external:Storage</code>  

* [Storage](#Storage)
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
## Store
**Kind**: global class  
**Implements:** <code>external:Storage</code>  

* [Store](#Store)
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
## Collection
**Kind**: global class  

* [Collection](#Collection)
  * [new Collection([rec])](#new_Collection_new)
  * [.idKey](#Collection+idKey)
  * [.comparator](#Collection+comparator)
  * [.length](#Collection+length)
  * [.records](#Collection+records)
  * [.has(id)](#Collection+has) ⇒ <code>Boolean</code>
  * [.add(obj)](#Collection+add) ⇒ <code>[Collection](#Collection)</code>
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
### collection.add(obj) ⇒ <code>[Collection](#Collection)</code>
**Kind**: instance method of <code>[Collection](#Collection)</code>  

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
<a name="Record"></a>
## Record
**Kind**: global class  

* [Record](#Record)
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
**Implements:** <code>[Observable]({@link })</code>  
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
**Implements:** <code>[Observer]({@link })</code>  

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
**Implements:** <code>[Disposable]({@link })</code>  
<a name="Disposable+dispose"></a>
### disposable.dispose()
**Kind**: instance method of <code>[Disposable](#Disposable)</code>  
<a name="Subject"></a>
## Subject ⇐ <code>[Observable](#Observable)</code>
**Kind**: global typedef  
**Extends:** <code>[Observable](#Observable)</code>  
**Mixes**: <code>[Observer](#Observer)</code>, <code>[Disposable](#Disposable)</code>  
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

<a name="Atom"></a>
## Atom : <code>Object</code>
**Kind**: global typedef  
**See**: [http://netflix.github.io/falcor/doc/global.html#Atom](http://netflix.github.io/falcor/doc/global.html#Atom)  
**Properties**

| Name | Type |
| --- | --- |
| $type | <code>String</code> | 
| value | <code>Mixed</code> | 
| $expires | <code>Integer</code> | 

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

<a name="FalcorModel"></a>
## FalcorModel
**Kind**: global typedef  
**Implements:** <code>[FalcorModel](http://netflix.github.io/falcor/doc/Model.html)</code>  
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
| path | <code>[PathSet](#PathSet)</code> | 
| value | <code>Mixed</code> | 

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

<a name="ProteanClassExtend"></a>
## ProteanClassExtend ⇒ <code>[ProteanClass](#ProteanClass)</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| [subclass] | <code>function</code> | 
| [props] | <code>Object</code> | 
| [properties] | <code>Object</code> | 

<a name="ProteanClassExtended"></a>
## ProteanClassExtended : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| subclass | <code>function</code> | 

<a name="ProteanClass"></a>
## ProteanClass : <code>function</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| extend | <code>[ProteanClassExtend](#ProteanClassExtend)</code> | A function to extend this class into another one |
| extended | <code>[ProteanClassExtended](#ProteanClassExtended)</code> | A function that will be called when the class is extended into another |
| superclass | <code>function</code> | A reference to this class' superclass constructor |
| superproto | <code>Object</code> | A reference to this class' superclass prototype |




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
