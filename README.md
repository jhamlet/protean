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
## Protean

* [Protean](#module_Protean)
  * _static_
    * [.Storage](#module_Protean.Storage)
      * [new Storage(opts)](#new_module_Protean.Storage_new)
      * _instance_
        * [.length](#module_Protean.Storage+length)
        * [.getItem(key)](#module_Protean.Storage+getItem) ⇒ <code>Mixed</code>
        * [.getJSON(key)](#module_Protean.Storage+getJSON) ⇒ <code>null</code> &#124; <code>Object</code>
        * [.setItem(key, value)](#module_Protean.Storage+setItem)
        * [.setJSON(key, value)](#module_Protean.Storage+setJSON)
        * [.removeItem(key)](#module_Protean.Storage+removeItem)
        * [.clear()](#module_Protean.Storage+clear)
        * [.key(idx)](#module_Protean.Storage+key) ⇒ <code>String</code>
      * _static_
        * [.Local](#module_Protean.Storage.Local) ⇐ <code>[Storage](#module_Protean.Storage)</code>
          * [.length](#module_Protean.Storage+length)
          * [.getItem(key)](#module_Protean.Storage+getItem) ⇒ <code>Mixed</code>
          * [.getJSON(key)](#module_Protean.Storage+getJSON) ⇒ <code>null</code> &#124; <code>Object</code>
          * [.setItem(key, value)](#module_Protean.Storage+setItem)
          * [.setJSON(key, value)](#module_Protean.Storage+setJSON)
          * [.removeItem(key)](#module_Protean.Storage+removeItem)
          * [.clear()](#module_Protean.Storage+clear)
          * [.key(idx)](#module_Protean.Storage+key) ⇒ <code>String</code>
        * [.Memory](#module_Protean.Storage.Memory) ⇐ <code>Storage</code>
        * [.Session](#module_Protean.Storage.Session) ⇐ <code>Storage</code>
    * [.Collection](#module_Protean.Collection)
      * [new Collection([rec])](#new_module_Protean.Collection_new)
      * [.idKey](#module_Protean.Collection+idKey)
      * [.comparator](#module_Protean.Collection+comparator)
      * [.length](#module_Protean.Collection+length)
      * [.records](#module_Protean.Collection+records)
      * [.has(id)](#module_Protean.Collection+has) ⇒ <code>Boolean</code>
      * [.add(obj)](#module_Protean.Collection+add) ⇒ <code>Collection</code>
      * [.remove(id)](#module_Protean.Collection+remove) ⇒ <code>Record</code>
      * [.at(idx)](#module_Protean.Collection+at) ⇒ <code>Record</code>
      * [.removeAt(idx)](#module_Protean.Collection+removeAt) ⇒ <code>Record</code>
      * [.get(id)](#module_Protean.Collection+get) ⇒ <code>Record</code>
      * [.indexOf(idOrRecord)](#module_Protean.Collection+indexOf) ⇒ <code>Integer</code>
      * [.clear()](#module_Protean.Collection+clear) ⇒ <code>Collection</code>
      * [.valueOf()](#module_Protean.Collection+valueOf) ⇒ <code>Array.&lt;Object&gt;</code>
      * [.find(predicate)](#module_Protean.Collection+find) ⇒ <code>Record</code>
      * [.sort([comparator])](#module_Protean.Collection+sort) ⇒ <code>Collection</code>
      * [.map(iteratee)](#module_Protean.Collection+map) ⇒ <code>Collection</code>
      * [.each(iteratee)](#module_Protean.Collection+each)
      * [.where(predicate)](#module_Protean.Collection+where) ⇒ <code>Collection</code>
      * [.by(comparator)](#module_Protean.Collection+by) ⇒ <code>Collection</code>
      * [.clone()](#module_Protean.Collection+clone) ⇒ <code>Collection</code>
      * [.cloneDeep()](#module_Protean.Collection+cloneDeep) ⇒ <code>Collection</code>
    * [.FiniteStateMachine](#module_Protean.FiniteStateMachine) ⇐ <code>external:Rx.Observable</code>
      * [new FiniteStateMachine([opts])](#new_module_Protean.FiniteStateMachine_new)
      * [.options](#module_Protean.FiniteStateMachine+options)
        * [.initial](#module_Protean.FiniteStateMachine+options.initial)
        * [.current](#module_Protean.FiniteStateMachine+options.current)
        * [.stateless](#module_Protean.FiniteStateMachine+options.stateless)
        * [.states](#module_Protean.FiniteStateMachine+options.states)
      * [.transitions](#module_Protean.FiniteStateMachine+transitions)
      * [.currentState](#module_Protean.FiniteStateMachine+currentState)
      * [.currentInputs](#module_Protean.FiniteStateMachine+currentInputs)
      * [.add(name, transitions)](#module_Protean.FiniteStateMachine+add) ⇒ <code>FiniteStateMachine</code>
      * [.remove(name)](#module_Protean.FiniteStateMachine+remove) ⇒ <code>FiniteStateMachine</code>
      * [.has(name)](#module_Protean.FiniteStateMachine+has) ⇒ <code>Boolean</code>
      * [.can(input)](#module_Protean.FiniteStateMachine+can) ⇒ <code>Boolean</code>
      * [.will(input)](#module_Protean.FiniteStateMachine+will) ⇒ <code>String</code> &#124; <code>false</code>
      * [.onNext(input)](#module_Protean.FiniteStateMachine+onNext) ⇒ <code>Boolean</code>
      * [.onError(error)](#module_Protean.FiniteStateMachine+onError)
      * [.onCompleted()](#module_Protean.FiniteStateMachine+onCompleted)
      * [.dispose()](#module_Protean.FiniteStateMachine+dispose)
      * [.input(input)](#module_Protean.FiniteStateMachine+input) ⇒ <code>Boolean</code>
      * [.enter(name)](#module_Protean.FiniteStateMachine+enter) ⇒ <code>Boolean</code>
      * [.transition(input, from, to)](#module_Protean.FiniteStateMachine+transition) ⇒ <code>FiniteStateMachine</code>
      * [.valueOf()](#module_Protean.FiniteStateMachine+valueOf) ⇒ <code>Object</code>
    * [.Record](#module_Protean.Record)
      * [new Record([data])](#new_module_Protean.Record_new)
      * [.length](#module_Protean.Record+length)
      * [.get(key)](#module_Protean.Record+get) ⇒ <code>Mixed</code>
      * [.set(keyOrRecord, [value])](#module_Protean.Record+set) ⇒ <code>Record</code>
      * [.merge(record)](#module_Protean.Record+merge) ⇒ <code>Record</code>
      * [.remove(key)](#module_Protean.Record+remove) ⇒ <code>Mixed</code>
      * [.has(key)](#module_Protean.Record+has) ⇒ <code>Boolean</code>
      * [.clear()](#module_Protean.Record+clear) ⇒ <code>Record</code>
      * [.key(idx)](#module_Protean.Record+key) ⇒ <code>String</code>
      * [.valueOf()](#module_Protean.Record+valueOf) ⇒ <code>Object</code>
      * [.clone([values])](#module_Protean.Record+clone) ⇒ <code>Record</code>
    * [.falcor](#module_Protean.falcor)
      * [.CollectionSource](#module_Protean.falcor.CollectionSource)
        * [new CollectionSource(collection, [path])](#new_module_Protean.falcor.CollectionSource_new)
        * [.router](#module_Protean.falcor.CollectionSource+router)
        * [.routes](#module_Protean.falcor.CollectionSource+routes)
        * [.get(paths)](#module_Protean.falcor.CollectionSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.set(envelope)](#module_Protean.falcor.CollectionSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.CollectionSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.getLength()](#module_Protean.falcor.CollectionSource+getLength) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.getRecordByIndex(paths)](#module_Protean.falcor.CollectionSource+getRecordByIndex) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.getRecordProps(paths)](#module_Protean.falcor.CollectionSource+getRecordProps) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.CompositeSource](#module_Protean.falcor.CompositeSource)
        * [new CompositeSource(...datasources)](#new_module_Protean.falcor.CompositeSource_new)
        * [.get(paths)](#module_Protean.falcor.CompositeSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.set(envelope)](#module_Protean.falcor.CompositeSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.CompositeSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.add(path, source)](#module_Protean.falcor.CompositeSource+add) ⇒ <code>CompositeSource</code>
        * [.getDataSourceWrapper(path)](#module_Protean.falcor.CompositeSource+getDataSourceWrapper) ⇒ <code>external:falcor.DataSource</code>
        * [.getDataSources(paths)](#module_Protean.falcor.CompositeSource+getDataSources) ⇒ <code>external:Rx.Observable.&lt;Object&gt;</code>
        * [.getPathsToDataSources(envelope)](#module_Protean.falcor.CompositeSource+getPathsToDataSources)
      * [.LocalDataSource](#module_Protean.falcor.LocalDataSource) ⇐ <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>
        * [new LocalDataSource()](#new_module_Protean.falcor.LocalDataSource_new)
        * [.model](#module_Protean.falcor.StorageDataSource+model)
        * [.source](#module_Protean.falcor.StorageDataSource+source)
        * [.options](#module_Protean.falcor.StorageDataSource+options)
        * [.get(paths)](#module_Protean.falcor.StorageDataSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.set(envelope)](#module_Protean.falcor.StorageDataSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.StorageDataSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.clear()](#module_Protean.falcor.StorageDataSource+clear)
        * [.serialize()](#module_Protean.falcor.StorageDataSource+serialize)
        * [.deserialize()](#module_Protean.falcor.StorageDataSource+deserialize)
      * [.NoCacheSource](#module_Protean.falcor.NoCacheSource)
        * [new NoCacheSource(source)](#new_module_Protean.falcor.NoCacheSource_new)
        * [.get(paths)](#module_Protean.falcor.NoCacheSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.set(envelope)](#module_Protean.falcor.NoCacheSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.NoCacheSource+call) ⇒ <code>externa:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.ProxiedSource](#module_Protean.falcor.ProxiedSource)
        * [new ProxiedSource([opts])](#new_module_Protean.falcor.ProxiedSource_new)
        * [.get(paths)](#module_Protean.falcor.ProxiedSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.set(envelope)](#module_Protean.falcor.ProxiedSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.ProxiedSource+call) ⇒ <code>externa:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.stripPaths(paths)](#module_Protean.falcor.ProxiedSource+stripPaths) ⇒ <code>external:falcor.PathSets</code>
        * [.stripGraph(graph)](#module_Protean.falcor.ProxiedSource+stripGraph) ⇒ <code>external:falcor.JSONGraph</code>
        * [.stripEnvelope(envelope)](#module_Protean.falcor.ProxiedSource+stripEnvelope) ⇒ <code>external:falcor.JSONGraphEnvelope</code>
        * [.adjustPaths(paths)](#module_Protean.falcor.ProxiedSource+adjustPaths) ⇒ <code>external:falcor.PathSets</code>
        * [.adjustGraph(graph)](#module_Protean.falcor.ProxiedSource+adjustGraph) ⇒ <code>external:falcor.JSONGraph</code>
        * [.adjustEnvelope(envelope)](#module_Protean.falcor.ProxiedSource+adjustEnvelope) ⇒ <code>external:falcor.JSONGraphEnvelope</code>
      * [.SessionDataSource](#module_Protean.falcor.SessionDataSource) ⇐ <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>
        * [new SessionDataSource()](#new_module_Protean.falcor.SessionDataSource_new)
        * [.model](#module_Protean.falcor.StorageDataSource+model)
        * [.source](#module_Protean.falcor.StorageDataSource+source)
        * [.options](#module_Protean.falcor.StorageDataSource+options)
        * [.get(paths)](#module_Protean.falcor.StorageDataSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.set(envelope)](#module_Protean.falcor.StorageDataSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.StorageDataSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.clear()](#module_Protean.falcor.StorageDataSource+clear)
        * [.serialize()](#module_Protean.falcor.StorageDataSource+serialize)
        * [.deserialize()](#module_Protean.falcor.StorageDataSource+deserialize)
      * [.StorageDataSource](#module_Protean.falcor.StorageDataSource)
        * [new StorageDataSource(opts)](#new_module_Protean.falcor.StorageDataSource_new)
        * [.model](#module_Protean.falcor.StorageDataSource+model)
        * [.source](#module_Protean.falcor.StorageDataSource+source)
        * [.options](#module_Protean.falcor.StorageDataSource+options)
          * [.storageKey](#module_Protean.falcor.StorageDataSource+options.storageKey)
          * [.storage](#module_Protean.falcor.StorageDataSource+options.storage)
        * [.get(paths)](#module_Protean.falcor.StorageDataSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.set(envelope)](#module_Protean.falcor.StorageDataSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.StorageDataSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
        * [.clear()](#module_Protean.falcor.StorageDataSource+clear)
        * [.serialize()](#module_Protean.falcor.StorageDataSource+serialize)
        * [.deserialize()](#module_Protean.falcor.StorageDataSource+deserialize)
    * [.Store](#module_Protean.Store)
      * _instance_
        * [.length](#module_Protean.Store+length)
        * [.getItem(key)](#module_Protean.Store+getItem) ⇒ <code>null</code> &#124; <code>String</code>
        * [.setItem(key, value)](#module_Protean.Store+setItem)
        * [.removeItem(key)](#module_Protean.Store+removeItem)
        * [.clear()](#module_Protean.Store+clear)
        * [.key(idx)](#module_Protean.Store+key) ⇒ <code>String</code>
      * _static_
        * [.local](#module_Protean.Store.local) : <code>external:Storage</code>
        * [.memory](#module_Protean.Store.memory) : <code>[Store](#module_Protean.Store)</code>
        * [.session](#module_Protean.Store.session) : <code>external:Storage</code>
    * [.classify([subclass], props, [properties])](#module_Protean.classify) ⇒ <code>[Class](#module_Protean..Class)</code>
    * [.inherit(superclass, [subclass], [props], [properties])](#module_Protean.inherit) ⇒ <code>[Class](#module_Protean..Class)</code>
    * [.instantiate(fn, [args])](#module_Protean.instantiate) ⇒ <code>Object</code>
    * [.augment(...obj)](#module_Protean.augment) ⇒ <code>Object</code>
    * [.traverse(obj, visitor, [post])](#module_Protean.traverse)
    * [.enmap(...args)](#module_Protean.enmap) ⇒ <code>Object</code>
    * [.enumerate()](#module_Protean.enumerate) ⇒ <code>Object</code>
    * [.guid()](#module_Protean.guid) ⇒ <code>String</code>
  * _inner_
    * [~ClassExtend](#module_Protean..ClassExtend) ⇒ <code>[Class](#module_Protean..Class)</code>
    * [~ClassExtended](#module_Protean..ClassExtended) : <code>function</code>
    * [~Class](#module_Protean..Class) : <code>function</code>

<a name="module_Protean.Storage"></a>
### Protean.Storage
**Kind**: static class of <code>[Protean](#module_Protean)</code>  
**Implements:** <code>external:Storage</code>  

  * [.Storage](#module_Protean.Storage)
    * [new Storage(opts)](#new_module_Protean.Storage_new)
    * _instance_
      * [.length](#module_Protean.Storage+length)
      * [.getItem(key)](#module_Protean.Storage+getItem) ⇒ <code>Mixed</code>
      * [.getJSON(key)](#module_Protean.Storage+getJSON) ⇒ <code>null</code> &#124; <code>Object</code>
      * [.setItem(key, value)](#module_Protean.Storage+setItem)
      * [.setJSON(key, value)](#module_Protean.Storage+setJSON)
      * [.removeItem(key)](#module_Protean.Storage+removeItem)
      * [.clear()](#module_Protean.Storage+clear)
      * [.key(idx)](#module_Protean.Storage+key) ⇒ <code>String</code>
    * _static_
      * [.Local](#module_Protean.Storage.Local) ⇐ <code>[Storage](#module_Protean.Storage)</code>
        * [.length](#module_Protean.Storage+length)
        * [.getItem(key)](#module_Protean.Storage+getItem) ⇒ <code>Mixed</code>
        * [.getJSON(key)](#module_Protean.Storage+getJSON) ⇒ <code>null</code> &#124; <code>Object</code>
        * [.setItem(key, value)](#module_Protean.Storage+setItem)
        * [.setJSON(key, value)](#module_Protean.Storage+setJSON)
        * [.removeItem(key)](#module_Protean.Storage+removeItem)
        * [.clear()](#module_Protean.Storage+clear)
        * [.key(idx)](#module_Protean.Storage+key) ⇒ <code>String</code>
      * [.Memory](#module_Protean.Storage.Memory) ⇐ <code>Storage</code>
      * [.Session](#module_Protean.Storage.Session) ⇐ <code>Storage</code>

<a name="new_module_Protean.Storage_new"></a>
#### new Storage(opts)

| Param | Type |
| --- | --- |
| opts | <code>Object</code> | 
| opts.store | <code>external:Storage</code> | 
| opts.json | <code>JSON</code> | 

<a name="module_Protean.Storage+length"></a>
#### storage.length
**Kind**: instance property of <code>[Storage](#module_Protean.Storage)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Integer</code> | 

<a name="module_Protean.Storage+getItem"></a>
#### storage.getItem(key) ⇒ <code>Mixed</code>
**Kind**: instance method of <code>[Storage](#module_Protean.Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Storage+getJSON"></a>
#### storage.getJSON(key) ⇒ <code>null</code> &#124; <code>Object</code>
**Kind**: instance method of <code>[Storage](#module_Protean.Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Storage+setItem"></a>
#### storage.setItem(key, value)
**Kind**: instance method of <code>[Storage](#module_Protean.Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="module_Protean.Storage+setJSON"></a>
#### storage.setJSON(key, value)
**Kind**: instance method of <code>[Storage](#module_Protean.Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="module_Protean.Storage+removeItem"></a>
#### storage.removeItem(key)
**Kind**: instance method of <code>[Storage](#module_Protean.Storage)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Storage+clear"></a>
#### storage.clear()
**Kind**: instance method of <code>[Storage](#module_Protean.Storage)</code>  
<a name="module_Protean.Storage+key"></a>
#### storage.key(idx) ⇒ <code>String</code>
**Kind**: instance method of <code>[Storage](#module_Protean.Storage)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="module_Protean.Storage.Local"></a>
#### Storage.Local ⇐ <code>[Storage](#module_Protean.Storage)</code>
**Kind**: static class of <code>[Storage](#module_Protean.Storage)</code>  
**Extends:** <code>[Storage](#module_Protean.Storage)</code>  

  * [.Local](#module_Protean.Storage.Local) ⇐ <code>[Storage](#module_Protean.Storage)</code>
    * [.length](#module_Protean.Storage+length)
    * [.getItem(key)](#module_Protean.Storage+getItem) ⇒ <code>Mixed</code>
    * [.getJSON(key)](#module_Protean.Storage+getJSON) ⇒ <code>null</code> &#124; <code>Object</code>
    * [.setItem(key, value)](#module_Protean.Storage+setItem)
    * [.setJSON(key, value)](#module_Protean.Storage+setJSON)
    * [.removeItem(key)](#module_Protean.Storage+removeItem)
    * [.clear()](#module_Protean.Storage+clear)
    * [.key(idx)](#module_Protean.Storage+key) ⇒ <code>String</code>

<a name="module_Protean.Storage+length"></a>
##### local.length
**Kind**: instance property of <code>[Local](#module_Protean.Storage.Local)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Integer</code> | 

<a name="module_Protean.Storage+getItem"></a>
##### local.getItem(key) ⇒ <code>Mixed</code>
**Kind**: instance method of <code>[Local](#module_Protean.Storage.Local)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Storage+getJSON"></a>
##### local.getJSON(key) ⇒ <code>null</code> &#124; <code>Object</code>
**Kind**: instance method of <code>[Local](#module_Protean.Storage.Local)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Storage+setItem"></a>
##### local.setItem(key, value)
**Kind**: instance method of <code>[Local](#module_Protean.Storage.Local)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="module_Protean.Storage+setJSON"></a>
##### local.setJSON(key, value)
**Kind**: instance method of <code>[Local](#module_Protean.Storage.Local)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="module_Protean.Storage+removeItem"></a>
##### local.removeItem(key)
**Kind**: instance method of <code>[Local](#module_Protean.Storage.Local)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Storage+clear"></a>
##### local.clear()
**Kind**: instance method of <code>[Local](#module_Protean.Storage.Local)</code>  
<a name="module_Protean.Storage+key"></a>
##### local.key(idx) ⇒ <code>String</code>
**Kind**: instance method of <code>[Local](#module_Protean.Storage.Local)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="module_Protean.Storage.Memory"></a>
#### Storage.Memory ⇐ <code>Storage</code>
**Kind**: static class of <code>[Storage](#module_Protean.Storage)</code>  
**Extends:** <code>Storage</code>  
<a name="module_Protean.Storage.Session"></a>
#### Storage.Session ⇐ <code>Storage</code>
**Kind**: static class of <code>[Storage](#module_Protean.Storage)</code>  
**Extends:** <code>Storage</code>  
<a name="module_Protean.Collection"></a>
### Protean.Collection
**Kind**: static class of <code>[Protean](#module_Protean)</code>  

  * [.Collection](#module_Protean.Collection)
    * [new Collection([rec])](#new_module_Protean.Collection_new)
    * [.idKey](#module_Protean.Collection+idKey)
    * [.comparator](#module_Protean.Collection+comparator)
    * [.length](#module_Protean.Collection+length)
    * [.records](#module_Protean.Collection+records)
    * [.has(id)](#module_Protean.Collection+has) ⇒ <code>Boolean</code>
    * [.add(obj)](#module_Protean.Collection+add) ⇒ <code>Collection</code>
    * [.remove(id)](#module_Protean.Collection+remove) ⇒ <code>Record</code>
    * [.at(idx)](#module_Protean.Collection+at) ⇒ <code>Record</code>
    * [.removeAt(idx)](#module_Protean.Collection+removeAt) ⇒ <code>Record</code>
    * [.get(id)](#module_Protean.Collection+get) ⇒ <code>Record</code>
    * [.indexOf(idOrRecord)](#module_Protean.Collection+indexOf) ⇒ <code>Integer</code>
    * [.clear()](#module_Protean.Collection+clear) ⇒ <code>Collection</code>
    * [.valueOf()](#module_Protean.Collection+valueOf) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.find(predicate)](#module_Protean.Collection+find) ⇒ <code>Record</code>
    * [.sort([comparator])](#module_Protean.Collection+sort) ⇒ <code>Collection</code>
    * [.map(iteratee)](#module_Protean.Collection+map) ⇒ <code>Collection</code>
    * [.each(iteratee)](#module_Protean.Collection+each)
    * [.where(predicate)](#module_Protean.Collection+where) ⇒ <code>Collection</code>
    * [.by(comparator)](#module_Protean.Collection+by) ⇒ <code>Collection</code>
    * [.clone()](#module_Protean.Collection+clone) ⇒ <code>Collection</code>
    * [.cloneDeep()](#module_Protean.Collection+cloneDeep) ⇒ <code>Collection</code>

<a name="new_module_Protean.Collection_new"></a>
#### new Collection([rec])

| Param | Type |
| --- | --- |
| [rec] | <code>Record</code> &#124; <code>Object</code> | 

<a name="module_Protean.Collection+idKey"></a>
#### collection.idKey
The unique identifier key to use for records

**Kind**: instance property of <code>[Collection](#module_Protean.Collection)</code>  
**Default**: <code>&#x27;id&#x27;</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="module_Protean.Collection+comparator"></a>
#### collection.comparator
Used to keep the collection ordered when adding items

**Kind**: instance property of <code>[Collection](#module_Protean.Collection)</code>  
**Properties**

| Type |
| --- |
| <code>function</code> | 

<a name="module_Protean.Collection+length"></a>
#### collection.length
**Kind**: instance property of <code>[Collection](#module_Protean.Collection)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Integer</code> | 

<a name="module_Protean.Collection+records"></a>
#### collection.records
**Kind**: instance property of <code>[Collection](#module_Protean.Collection)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Array.&lt;Record&gt;</code> | 

<a name="module_Protean.Collection+has"></a>
#### collection.has(id) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="module_Protean.Collection+add"></a>
#### collection.add(obj) ⇒ <code>Collection</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> &#124; <code>Record</code> | 

<a name="module_Protean.Collection+remove"></a>
#### collection.remove(id) ⇒ <code>Record</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="module_Protean.Collection+at"></a>
#### collection.at(idx) ⇒ <code>Record</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="module_Protean.Collection+removeAt"></a>
#### collection.removeAt(idx) ⇒ <code>Record</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="module_Protean.Collection+get"></a>
#### collection.get(id) ⇒ <code>Record</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="module_Protean.Collection+indexOf"></a>
#### collection.indexOf(idOrRecord) ⇒ <code>Integer</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| idOrRecord | <code>String</code> &#124; <code>Record</code> | 

<a name="module_Protean.Collection+clear"></a>
#### collection.clear() ⇒ <code>Collection</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  
<a name="module_Protean.Collection+valueOf"></a>
#### collection.valueOf() ⇒ <code>Array.&lt;Object&gt;</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  
<a name="module_Protean.Collection+find"></a>
#### collection.find(predicate) ⇒ <code>Record</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 

<a name="module_Protean.Collection+sort"></a>
#### collection.sort([comparator]) ⇒ <code>Collection</code>
Mutates the collection to sorted based on the given comparator, or the
one defined on itself.

**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [comparator] | <code>function</code> | <code>this.comparator</code> | 

<a name="module_Protean.Collection+map"></a>
#### collection.map(iteratee) ⇒ <code>Collection</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| iteratee | <code>function</code> | 

<a name="module_Protean.Collection+each"></a>
#### collection.each(iteratee)
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| iteratee | <code>function</code> | 

<a name="module_Protean.Collection+where"></a>
#### collection.where(predicate) ⇒ <code>Collection</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 

<a name="module_Protean.Collection+by"></a>
#### collection.by(comparator) ⇒ <code>Collection</code>
**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  

| Param | Type |
| --- | --- |
| comparator | <code>function</code> | 

<a name="module_Protean.Collection+clone"></a>
#### collection.clone() ⇒ <code>Collection</code>
Returns a copy of the collection with all the records (the records are
not cloned)

**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  
<a name="module_Protean.Collection+cloneDeep"></a>
#### collection.cloneDeep() ⇒ <code>Collection</code>
Returns a Collection with all records cloned.

**Kind**: instance method of <code>[Collection](#module_Protean.Collection)</code>  
<a name="module_Protean.FiniteStateMachine"></a>
### Protean.FiniteStateMachine ⇐ <code>external:Rx.Observable</code>
**Kind**: static class of <code>[Protean](#module_Protean)</code>  
**Extends:** <code>external:Rx.Observable</code>  
**Mixes**: <code>external:Rx.Observer</code>  

  * [.FiniteStateMachine](#module_Protean.FiniteStateMachine) ⇐ <code>external:Rx.Observable</code>
    * [new FiniteStateMachine([opts])](#new_module_Protean.FiniteStateMachine_new)
    * [.options](#module_Protean.FiniteStateMachine+options)
      * [.initial](#module_Protean.FiniteStateMachine+options.initial)
      * [.current](#module_Protean.FiniteStateMachine+options.current)
      * [.stateless](#module_Protean.FiniteStateMachine+options.stateless)
      * [.states](#module_Protean.FiniteStateMachine+options.states)
    * [.transitions](#module_Protean.FiniteStateMachine+transitions)
    * [.currentState](#module_Protean.FiniteStateMachine+currentState)
    * [.currentInputs](#module_Protean.FiniteStateMachine+currentInputs)
    * [.add(name, transitions)](#module_Protean.FiniteStateMachine+add) ⇒ <code>FiniteStateMachine</code>
    * [.remove(name)](#module_Protean.FiniteStateMachine+remove) ⇒ <code>FiniteStateMachine</code>
    * [.has(name)](#module_Protean.FiniteStateMachine+has) ⇒ <code>Boolean</code>
    * [.can(input)](#module_Protean.FiniteStateMachine+can) ⇒ <code>Boolean</code>
    * [.will(input)](#module_Protean.FiniteStateMachine+will) ⇒ <code>String</code> &#124; <code>false</code>
    * [.onNext(input)](#module_Protean.FiniteStateMachine+onNext) ⇒ <code>Boolean</code>
    * [.onError(error)](#module_Protean.FiniteStateMachine+onError)
    * [.onCompleted()](#module_Protean.FiniteStateMachine+onCompleted)
    * [.dispose()](#module_Protean.FiniteStateMachine+dispose)
    * [.input(input)](#module_Protean.FiniteStateMachine+input) ⇒ <code>Boolean</code>
    * [.enter(name)](#module_Protean.FiniteStateMachine+enter) ⇒ <code>Boolean</code>
    * [.transition(input, from, to)](#module_Protean.FiniteStateMachine+transition) ⇒ <code>FiniteStateMachine</code>
    * [.valueOf()](#module_Protean.FiniteStateMachine+valueOf) ⇒ <code>Object</code>

<a name="new_module_Protean.FiniteStateMachine_new"></a>
#### new FiniteStateMachine([opts])
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

<a name="module_Protean.FiniteStateMachine+options"></a>
#### finiteStateMachine.options
Default options

**Kind**: instance property of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 


* [.options](#module_Protean.FiniteStateMachine+options)
  * [.initial](#module_Protean.FiniteStateMachine+options.initial)
  * [.current](#module_Protean.FiniteStateMachine+options.current)
  * [.stateless](#module_Protean.FiniteStateMachine+options.stateless)
  * [.states](#module_Protean.FiniteStateMachine+options.states)

<a name="module_Protean.FiniteStateMachine+options.initial"></a>
##### options.initial
**Kind**: static property of <code>[options](#module_Protean.FiniteStateMachine+options)</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+options.current"></a>
##### options.current
**Kind**: static property of <code>[options](#module_Protean.FiniteStateMachine+options)</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+options.stateless"></a>
##### options.stateless
**Kind**: static property of <code>[options](#module_Protean.FiniteStateMachine+options)</code>  
**Properties**

| Type |
| --- |
| <code>Boolean</code> | 

<a name="module_Protean.FiniteStateMachine+options.states"></a>
##### options.states
**Kind**: static property of <code>[options](#module_Protean.FiniteStateMachine+options)</code>  
**Properties**

| Type |
| --- |
| <code>Object.&lt;String, Object&gt;</code> | 

<a name="module_Protean.FiniteStateMachine+transitions"></a>
#### finiteStateMachine.transitions
**Kind**: instance property of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  
**Properties**

| Type |
| --- |
| <code>external:Rx.ReplaySubject</code> | 

<a name="module_Protean.FiniteStateMachine+currentState"></a>
#### finiteStateMachine.currentState
The current state

**Kind**: instance property of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+currentInputs"></a>
#### finiteStateMachine.currentInputs
Get the currently available inputs

**Kind**: instance property of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Array.&lt;String&gt;</code> | 

<a name="module_Protean.FiniteStateMachine+add"></a>
#### finiteStateMachine.add(name, transitions) ⇒ <code>FiniteStateMachine</code>
Add a state and its available transitions

**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| transitions | <code>Object.&lt;String, String&gt;</code> | 

<a name="module_Protean.FiniteStateMachine+remove"></a>
#### finiteStateMachine.remove(name) ⇒ <code>FiniteStateMachine</code>
Remove a state and its transitions

**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+has"></a>
#### finiteStateMachine.has(name) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+can"></a>
#### finiteStateMachine.can(input) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+will"></a>
#### finiteStateMachine.will(input) ⇒ <code>String</code> &#124; <code>false</code>
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  
**Returns**: <code>String</code> &#124; <code>false</code> - the name of the resulting state, or false  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+onNext"></a>
#### finiteStateMachine.onNext(input) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+onError"></a>
#### finiteStateMachine.onError(error)
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| error | <code>Error</code> | 

<a name="module_Protean.FiniteStateMachine+onCompleted"></a>
#### finiteStateMachine.onCompleted()
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  
<a name="module_Protean.FiniteStateMachine+dispose"></a>
#### finiteStateMachine.dispose()
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  
<a name="module_Protean.FiniteStateMachine+input"></a>
#### finiteStateMachine.input(input) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+enter"></a>
#### finiteStateMachine.enter(name) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+transition"></a>
#### finiteStateMachine.transition(input, from, to) ⇒ <code>FiniteStateMachine</code>
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 
| from | <code>String</code> | 
| to | <code>String</code> | 

<a name="module_Protean.FiniteStateMachine+valueOf"></a>
#### finiteStateMachine.valueOf() ⇒ <code>Object</code>
**Kind**: instance method of <code>[FiniteStateMachine](#module_Protean.FiniteStateMachine)</code>  
<a name="module_Protean.Record"></a>
### Protean.Record
**Kind**: static class of <code>[Protean](#module_Protean)</code>  

  * [.Record](#module_Protean.Record)
    * [new Record([data])](#new_module_Protean.Record_new)
    * [.length](#module_Protean.Record+length)
    * [.get(key)](#module_Protean.Record+get) ⇒ <code>Mixed</code>
    * [.set(keyOrRecord, [value])](#module_Protean.Record+set) ⇒ <code>Record</code>
    * [.merge(record)](#module_Protean.Record+merge) ⇒ <code>Record</code>
    * [.remove(key)](#module_Protean.Record+remove) ⇒ <code>Mixed</code>
    * [.has(key)](#module_Protean.Record+has) ⇒ <code>Boolean</code>
    * [.clear()](#module_Protean.Record+clear) ⇒ <code>Record</code>
    * [.key(idx)](#module_Protean.Record+key) ⇒ <code>String</code>
    * [.valueOf()](#module_Protean.Record+valueOf) ⇒ <code>Object</code>
    * [.clone([values])](#module_Protean.Record+clone) ⇒ <code>Record</code>

<a name="new_module_Protean.Record_new"></a>
#### new Record([data])

| Param | Type |
| --- | --- |
| [data] | <code>Object</code> | 

<a name="module_Protean.Record+length"></a>
#### record.length
**Kind**: instance property of <code>[Record](#module_Protean.Record)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Integer</code> | 

<a name="module_Protean.Record+get"></a>
#### record.get(key) ⇒ <code>Mixed</code>
**Kind**: instance method of <code>[Record](#module_Protean.Record)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Record+set"></a>
#### record.set(keyOrRecord, [value]) ⇒ <code>Record</code>
**Kind**: instance method of <code>[Record](#module_Protean.Record)</code>  

| Param | Type |
| --- | --- |
| keyOrRecord | <code>String</code> &#124; <code>Record</code> &#124; <code>Object</code> | 
| [value] | <code>Mixed</code> | 

<a name="module_Protean.Record+merge"></a>
#### record.merge(record) ⇒ <code>Record</code>
**Kind**: instance method of <code>[Record](#module_Protean.Record)</code>  

| Param | Type |
| --- | --- |
| record | <code>Record</code> &#124; <code>Object</code> | 

<a name="module_Protean.Record+remove"></a>
#### record.remove(key) ⇒ <code>Mixed</code>
**Kind**: instance method of <code>[Record](#module_Protean.Record)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Record+has"></a>
#### record.has(key) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[Record](#module_Protean.Record)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Record+clear"></a>
#### record.clear() ⇒ <code>Record</code>
**Kind**: instance method of <code>[Record](#module_Protean.Record)</code>  
<a name="module_Protean.Record+key"></a>
#### record.key(idx) ⇒ <code>String</code>
**Kind**: instance method of <code>[Record](#module_Protean.Record)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="module_Protean.Record+valueOf"></a>
#### record.valueOf() ⇒ <code>Object</code>
**Kind**: instance method of <code>[Record](#module_Protean.Record)</code>  
<a name="module_Protean.Record+clone"></a>
#### record.clone([values]) ⇒ <code>Record</code>
**Kind**: instance method of <code>[Record](#module_Protean.Record)</code>  

| Param | Type |
| --- | --- |
| [values] | <code>Object</code> | 

<a name="module_Protean.falcor"></a>
### Protean.falcor
**Kind**: static property of <code>[Protean](#module_Protean)</code>  

  * [.falcor](#module_Protean.falcor)
    * [.CollectionSource](#module_Protean.falcor.CollectionSource)
      * [new CollectionSource(collection, [path])](#new_module_Protean.falcor.CollectionSource_new)
      * [.router](#module_Protean.falcor.CollectionSource+router)
      * [.routes](#module_Protean.falcor.CollectionSource+routes)
      * [.get(paths)](#module_Protean.falcor.CollectionSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.set(envelope)](#module_Protean.falcor.CollectionSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.CollectionSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.getLength()](#module_Protean.falcor.CollectionSource+getLength) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.getRecordByIndex(paths)](#module_Protean.falcor.CollectionSource+getRecordByIndex) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.getRecordProps(paths)](#module_Protean.falcor.CollectionSource+getRecordProps) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
    * [.CompositeSource](#module_Protean.falcor.CompositeSource)
      * [new CompositeSource(...datasources)](#new_module_Protean.falcor.CompositeSource_new)
      * [.get(paths)](#module_Protean.falcor.CompositeSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.set(envelope)](#module_Protean.falcor.CompositeSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.CompositeSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.add(path, source)](#module_Protean.falcor.CompositeSource+add) ⇒ <code>CompositeSource</code>
      * [.getDataSourceWrapper(path)](#module_Protean.falcor.CompositeSource+getDataSourceWrapper) ⇒ <code>external:falcor.DataSource</code>
      * [.getDataSources(paths)](#module_Protean.falcor.CompositeSource+getDataSources) ⇒ <code>external:Rx.Observable.&lt;Object&gt;</code>
      * [.getPathsToDataSources(envelope)](#module_Protean.falcor.CompositeSource+getPathsToDataSources)
    * [.LocalDataSource](#module_Protean.falcor.LocalDataSource) ⇐ <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>
      * [new LocalDataSource()](#new_module_Protean.falcor.LocalDataSource_new)
      * [.model](#module_Protean.falcor.StorageDataSource+model)
      * [.source](#module_Protean.falcor.StorageDataSource+source)
      * [.options](#module_Protean.falcor.StorageDataSource+options)
      * [.get(paths)](#module_Protean.falcor.StorageDataSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.set(envelope)](#module_Protean.falcor.StorageDataSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.StorageDataSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.clear()](#module_Protean.falcor.StorageDataSource+clear)
      * [.serialize()](#module_Protean.falcor.StorageDataSource+serialize)
      * [.deserialize()](#module_Protean.falcor.StorageDataSource+deserialize)
    * [.NoCacheSource](#module_Protean.falcor.NoCacheSource)
      * [new NoCacheSource(source)](#new_module_Protean.falcor.NoCacheSource_new)
      * [.get(paths)](#module_Protean.falcor.NoCacheSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.set(envelope)](#module_Protean.falcor.NoCacheSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.NoCacheSource+call) ⇒ <code>externa:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
    * [.ProxiedSource](#module_Protean.falcor.ProxiedSource)
      * [new ProxiedSource([opts])](#new_module_Protean.falcor.ProxiedSource_new)
      * [.get(paths)](#module_Protean.falcor.ProxiedSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.set(envelope)](#module_Protean.falcor.ProxiedSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.ProxiedSource+call) ⇒ <code>externa:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.stripPaths(paths)](#module_Protean.falcor.ProxiedSource+stripPaths) ⇒ <code>external:falcor.PathSets</code>
      * [.stripGraph(graph)](#module_Protean.falcor.ProxiedSource+stripGraph) ⇒ <code>external:falcor.JSONGraph</code>
      * [.stripEnvelope(envelope)](#module_Protean.falcor.ProxiedSource+stripEnvelope) ⇒ <code>external:falcor.JSONGraphEnvelope</code>
      * [.adjustPaths(paths)](#module_Protean.falcor.ProxiedSource+adjustPaths) ⇒ <code>external:falcor.PathSets</code>
      * [.adjustGraph(graph)](#module_Protean.falcor.ProxiedSource+adjustGraph) ⇒ <code>external:falcor.JSONGraph</code>
      * [.adjustEnvelope(envelope)](#module_Protean.falcor.ProxiedSource+adjustEnvelope) ⇒ <code>external:falcor.JSONGraphEnvelope</code>
    * [.SessionDataSource](#module_Protean.falcor.SessionDataSource) ⇐ <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>
      * [new SessionDataSource()](#new_module_Protean.falcor.SessionDataSource_new)
      * [.model](#module_Protean.falcor.StorageDataSource+model)
      * [.source](#module_Protean.falcor.StorageDataSource+source)
      * [.options](#module_Protean.falcor.StorageDataSource+options)
      * [.get(paths)](#module_Protean.falcor.StorageDataSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.set(envelope)](#module_Protean.falcor.StorageDataSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.StorageDataSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.clear()](#module_Protean.falcor.StorageDataSource+clear)
      * [.serialize()](#module_Protean.falcor.StorageDataSource+serialize)
      * [.deserialize()](#module_Protean.falcor.StorageDataSource+deserialize)
    * [.StorageDataSource](#module_Protean.falcor.StorageDataSource)
      * [new StorageDataSource(opts)](#new_module_Protean.falcor.StorageDataSource_new)
      * [.model](#module_Protean.falcor.StorageDataSource+model)
      * [.source](#module_Protean.falcor.StorageDataSource+source)
      * [.options](#module_Protean.falcor.StorageDataSource+options)
        * [.storageKey](#module_Protean.falcor.StorageDataSource+options.storageKey)
        * [.storage](#module_Protean.falcor.StorageDataSource+options.storage)
      * [.get(paths)](#module_Protean.falcor.StorageDataSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.set(envelope)](#module_Protean.falcor.StorageDataSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.StorageDataSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
      * [.clear()](#module_Protean.falcor.StorageDataSource+clear)
      * [.serialize()](#module_Protean.falcor.StorageDataSource+serialize)
      * [.deserialize()](#module_Protean.falcor.StorageDataSource+deserialize)

<a name="module_Protean.falcor.CollectionSource"></a>
#### falcor.CollectionSource
**Kind**: static class of <code>[falcor](#module_Protean.falcor)</code>  
**Implements:** <code>external:falcor.DataSource</code>  

* [.CollectionSource](#module_Protean.falcor.CollectionSource)
  * [new CollectionSource(collection, [path])](#new_module_Protean.falcor.CollectionSource_new)
  * [.router](#module_Protean.falcor.CollectionSource+router)
  * [.routes](#module_Protean.falcor.CollectionSource+routes)
  * [.get(paths)](#module_Protean.falcor.CollectionSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.set(envelope)](#module_Protean.falcor.CollectionSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.CollectionSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.getLength()](#module_Protean.falcor.CollectionSource+getLength) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.getRecordByIndex(paths)](#module_Protean.falcor.CollectionSource+getRecordByIndex) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.getRecordProps(paths)](#module_Protean.falcor.CollectionSource+getRecordProps) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>

<a name="new_module_Protean.falcor.CollectionSource_new"></a>
##### new CollectionSource(collection, [path])
**file:** protean/falcor/data-source/collection.js


| Param | Type |
| --- | --- |
| collection | <code>[Collection](#module_Protean.Collection)</code> | 
| [path] | <code>Array</code> | 

<a name="module_Protean.falcor.CollectionSource+router"></a>
##### collectionSource.router
**Kind**: instance property of <code>[CollectionSource](#module_Protean.falcor.CollectionSource)</code>  
**Properties**

| Type |
| --- |
| <code>external:falcor.Router</code> | 

<a name="module_Protean.falcor.CollectionSource+routes"></a>
##### collectionSource.routes
**Kind**: instance property of <code>[CollectionSource](#module_Protean.falcor.CollectionSource)</code>  
**Properties**

| Type |
| --- |
| <code>Array.&lt;Object&gt;</code> | 

<a name="module_Protean.falcor.CollectionSource+get"></a>
##### collectionSource.get(paths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[CollectionSource](#module_Protean.falcor.CollectionSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;external:falcor.PathSets&gt;</code> | 

<a name="module_Protean.falcor.CollectionSource+set"></a>
##### collectionSource.set(envelope) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[CollectionSource](#module_Protean.falcor.CollectionSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.CollectionSource+call"></a>
##### collectionSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[CollectionSource](#module_Protean.falcor.CollectionSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>external:falcor.PathSet</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 
| thisPaths | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 

<a name="module_Protean.falcor.CollectionSource+getLength"></a>
##### collectionSource.getLength() ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[CollectionSource](#module_Protean.falcor.CollectionSource)</code>  
<a name="module_Protean.falcor.CollectionSource+getRecordByIndex"></a>
##### collectionSource.getRecordByIndex(paths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[CollectionSource](#module_Protean.falcor.CollectionSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;external:falcor.PathSets&gt;</code> | 

<a name="module_Protean.falcor.CollectionSource+getRecordProps"></a>
##### collectionSource.getRecordProps(paths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[CollectionSource](#module_Protean.falcor.CollectionSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;external:falcor.PathSets&gt;</code> | 

<a name="module_Protean.falcor.CompositeSource"></a>
#### falcor.CompositeSource
**Kind**: static class of <code>[falcor](#module_Protean.falcor)</code>  
**Implements:** <code>external:falcor.DataSource</code>  

* [.CompositeSource](#module_Protean.falcor.CompositeSource)
  * [new CompositeSource(...datasources)](#new_module_Protean.falcor.CompositeSource_new)
  * [.get(paths)](#module_Protean.falcor.CompositeSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.set(envelope)](#module_Protean.falcor.CompositeSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.CompositeSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.add(path, source)](#module_Protean.falcor.CompositeSource+add) ⇒ <code>CompositeSource</code>
  * [.getDataSourceWrapper(path)](#module_Protean.falcor.CompositeSource+getDataSourceWrapper) ⇒ <code>external:falcor.DataSource</code>
  * [.getDataSources(paths)](#module_Protean.falcor.CompositeSource+getDataSources) ⇒ <code>external:Rx.Observable.&lt;Object&gt;</code>
  * [.getPathsToDataSources(envelope)](#module_Protean.falcor.CompositeSource+getPathsToDataSources)

<a name="new_module_Protean.falcor.CompositeSource_new"></a>
##### new CompositeSource(...datasources)
**file:** protean/falcor/data-source/composite.js


| Param | Type |
| --- | --- |
| ...datasources | <code>external:falcor.DataSource</code> | 

<a name="module_Protean.falcor.CompositeSource+get"></a>
##### compositeSource.get(paths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[CompositeSource](#module_Protean.falcor.CompositeSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;external:falcor.PathSets&gt;</code> | 

<a name="module_Protean.falcor.CompositeSource+set"></a>
##### compositeSource.set(envelope) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[CompositeSource](#module_Protean.falcor.CompositeSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.CompositeSource+call"></a>
##### compositeSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[CompositeSource](#module_Protean.falcor.CompositeSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>external:falcor.PathSet</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 
| thisPaths | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 

<a name="module_Protean.falcor.CompositeSource+add"></a>
##### compositeSource.add(path, source) ⇒ <code>CompositeSource</code>
**Kind**: instance method of <code>[CompositeSource](#module_Protean.falcor.CompositeSource)</code>  
**Returns**: <code>CompositeSource</code> - the CompositeSource instance  

| Param | Type |
| --- | --- |
| path | <code>external:falcor.Path</code> | 
| source | <code>external:falcor.DataSource</code> | 

<a name="module_Protean.falcor.CompositeSource+getDataSourceWrapper"></a>
##### compositeSource.getDataSourceWrapper(path) ⇒ <code>external:falcor.DataSource</code>
**Kind**: instance method of <code>[CompositeSource](#module_Protean.falcor.CompositeSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>external:falcor.Path</code> | 

<a name="module_Protean.falcor.CompositeSource+getDataSources"></a>
##### compositeSource.getDataSources(paths) ⇒ <code>external:Rx.Observable.&lt;Object&gt;</code>
**Kind**: instance method of <code>[CompositeSource](#module_Protean.falcor.CompositeSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>external:falcor.PathSets</code> | 

<a name="module_Protean.falcor.CompositeSource+getPathsToDataSources"></a>
##### compositeSource.getPathsToDataSources(envelope)
**Kind**: instance method of <code>[CompositeSource](#module_Protean.falcor.CompositeSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.LocalDataSource"></a>
#### falcor.LocalDataSource ⇐ <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>
**Kind**: static class of <code>[falcor](#module_Protean.falcor)</code>  
**Extends:** <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  

* [.LocalDataSource](#module_Protean.falcor.LocalDataSource) ⇐ <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>
  * [new LocalDataSource()](#new_module_Protean.falcor.LocalDataSource_new)
  * [.model](#module_Protean.falcor.StorageDataSource+model)
  * [.source](#module_Protean.falcor.StorageDataSource+source)
  * [.options](#module_Protean.falcor.StorageDataSource+options)
  * [.get(paths)](#module_Protean.falcor.StorageDataSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.set(envelope)](#module_Protean.falcor.StorageDataSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.StorageDataSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.clear()](#module_Protean.falcor.StorageDataSource+clear)
  * [.serialize()](#module_Protean.falcor.StorageDataSource+serialize)
  * [.deserialize()](#module_Protean.falcor.StorageDataSource+deserialize)

<a name="new_module_Protean.falcor.LocalDataSource_new"></a>
##### new LocalDataSource()
**file:** protean/falcor/data-source/local.js

<a name="module_Protean.falcor.StorageDataSource+model"></a>
##### localDataSource.model
**Kind**: instance property of <code>[LocalDataSource](#module_Protean.falcor.LocalDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>external:falcor.Model</code> | 

<a name="module_Protean.falcor.StorageDataSource+source"></a>
##### localDataSource.source
**Kind**: instance property of <code>[LocalDataSource](#module_Protean.falcor.LocalDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>external:faclor.DataSource</code> | 

<a name="module_Protean.falcor.StorageDataSource+options"></a>
##### localDataSource.options
**Kind**: instance property of <code>[LocalDataSource](#module_Protean.falcor.LocalDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 

<a name="module_Protean.falcor.StorageDataSource+get"></a>
##### localDataSource.get(paths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[LocalDataSource](#module_Protean.falcor.LocalDataSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;external:falcor.PathSets&gt;</code> | 

<a name="module_Protean.falcor.StorageDataSource+set"></a>
##### localDataSource.set(envelope) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[LocalDataSource](#module_Protean.falcor.LocalDataSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.StorageDataSource+call"></a>
##### localDataSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[LocalDataSource](#module_Protean.falcor.LocalDataSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>external:falcor.PathSet</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 
| thisPaths | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 

<a name="module_Protean.falcor.StorageDataSource+clear"></a>
##### localDataSource.clear()
Clear our storage item

**Kind**: instance method of <code>[LocalDataSource](#module_Protean.falcor.LocalDataSource)</code>  
<a name="module_Protean.falcor.StorageDataSource+serialize"></a>
##### localDataSource.serialize()
Write our cache to storage

**Kind**: instance method of <code>[LocalDataSource](#module_Protean.falcor.LocalDataSource)</code>  
<a name="module_Protean.falcor.StorageDataSource+deserialize"></a>
##### localDataSource.deserialize()
Get our cache from storage

**Kind**: instance method of <code>[LocalDataSource](#module_Protean.falcor.LocalDataSource)</code>  
<a name="module_Protean.falcor.NoCacheSource"></a>
#### falcor.NoCacheSource
**Kind**: static class of <code>[falcor](#module_Protean.falcor)</code>  
**Implements:** <code>external:falcor.DataSource</code>  

* [.NoCacheSource](#module_Protean.falcor.NoCacheSource)
  * [new NoCacheSource(source)](#new_module_Protean.falcor.NoCacheSource_new)
  * [.get(paths)](#module_Protean.falcor.NoCacheSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.set(envelope)](#module_Protean.falcor.NoCacheSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.NoCacheSource+call) ⇒ <code>externa:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>

<a name="new_module_Protean.falcor.NoCacheSource_new"></a>
##### new NoCacheSource(source)
A Falcor DataSource that proxies another data source and sets all returned
atoms to expire immediately.

**file:** protean/falcor/data-source/no-cache.js


| Param | Type |
| --- | --- |
| source | <code>external:falcor.DataSource</code> | 

<a name="module_Protean.falcor.NoCacheSource+get"></a>
##### noCacheSource.get(paths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[NoCacheSource](#module_Protean.falcor.NoCacheSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;external:falcor.PathSets&gt;</code> | 

<a name="module_Protean.falcor.NoCacheSource+set"></a>
##### noCacheSource.set(envelope) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[NoCacheSource](#module_Protean.falcor.NoCacheSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.NoCacheSource+call"></a>
##### noCacheSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>externa:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[NoCacheSource](#module_Protean.falcor.NoCacheSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>external:falcor.PathSet</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 
| thisPaths | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 

<a name="module_Protean.falcor.ProxiedSource"></a>
#### falcor.ProxiedSource
**Kind**: static class of <code>[falcor](#module_Protean.falcor)</code>  
**Implements:** <code>external:falcor.DataSource</code>  

* [.ProxiedSource](#module_Protean.falcor.ProxiedSource)
  * [new ProxiedSource([opts])](#new_module_Protean.falcor.ProxiedSource_new)
  * [.get(paths)](#module_Protean.falcor.ProxiedSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.set(envelope)](#module_Protean.falcor.ProxiedSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.ProxiedSource+call) ⇒ <code>externa:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.stripPaths(paths)](#module_Protean.falcor.ProxiedSource+stripPaths) ⇒ <code>external:falcor.PathSets</code>
  * [.stripGraph(graph)](#module_Protean.falcor.ProxiedSource+stripGraph) ⇒ <code>external:falcor.JSONGraph</code>
  * [.stripEnvelope(envelope)](#module_Protean.falcor.ProxiedSource+stripEnvelope) ⇒ <code>external:falcor.JSONGraphEnvelope</code>
  * [.adjustPaths(paths)](#module_Protean.falcor.ProxiedSource+adjustPaths) ⇒ <code>external:falcor.PathSets</code>
  * [.adjustGraph(graph)](#module_Protean.falcor.ProxiedSource+adjustGraph) ⇒ <code>external:falcor.JSONGraph</code>
  * [.adjustEnvelope(envelope)](#module_Protean.falcor.ProxiedSource+adjustEnvelope) ⇒ <code>external:falcor.JSONGraphEnvelope</code>

<a name="new_module_Protean.falcor.ProxiedSource_new"></a>
##### new ProxiedSource([opts])
A Falcor DataSource that proxies to another source, re-writing returned paths
and values.

**file:** protean/falcor/data-source/proxied.js


| Param | Type | Description |
| --- | --- | --- |
| [opts] | <code>Object</code> |  |
| [opts.source] | <code>external:falcor.DataSource</code> |  |
| [opts.root] | <code>external:falcor.Path</code> |  |
| [opts.rootKey] | <code>String</code> | The 'fake' path key that denotes a path that should start at the conceptual root. i.e: do not strip or adjust, just drop the root key. |
| [opts.preGet] | <code>function</code> |  |
| [opts.preSet] | <code>function</code> |  |
| [opts.preCall] | <code>function</code> |  |
| [opts.postGet] | <code>function</code> |  |
| [opts.postSet] | <code>function</code> |  |
| [opts.postCall] | <code>function</code> |  |

<a name="module_Protean.falcor.ProxiedSource+get"></a>
##### proxiedSource.get(paths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[ProxiedSource](#module_Protean.falcor.ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;external:falcor.PathSets&gt;</code> | 

<a name="module_Protean.falcor.ProxiedSource+set"></a>
##### proxiedSource.set(envelope) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[ProxiedSource](#module_Protean.falcor.ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.ProxiedSource+call"></a>
##### proxiedSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>externa:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[ProxiedSource](#module_Protean.falcor.ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>external:falcor.PathSet</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 
| thisPaths | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 

<a name="module_Protean.falcor.ProxiedSource+stripPaths"></a>
##### proxiedSource.stripPaths(paths) ⇒ <code>external:falcor.PathSets</code>
Strip our leading path from the path(s) given.

**Kind**: instance method of <code>[ProxiedSource](#module_Protean.falcor.ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>external:falcor.PathSets</code> | 

<a name="module_Protean.falcor.ProxiedSource+stripGraph"></a>
##### proxiedSource.stripGraph(graph) ⇒ <code>external:falcor.JSONGraph</code>
**Kind**: instance method of <code>[ProxiedSource](#module_Protean.falcor.ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| graph | <code>external:falcor.JSONGraph</code> | 

<a name="module_Protean.falcor.ProxiedSource+stripEnvelope"></a>
##### proxiedSource.stripEnvelope(envelope) ⇒ <code>external:falcor.JSONGraphEnvelope</code>
Strip our leading path from the envelope's path(s) and jsonGraph object.

**Kind**: instance method of <code>[ProxiedSource](#module_Protean.falcor.ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.ProxiedSource+adjustPaths"></a>
##### proxiedSource.adjustPaths(paths) ⇒ <code>external:falcor.PathSets</code>
Adjust the given paths with our leading path information.

**Kind**: instance method of <code>[ProxiedSource](#module_Protean.falcor.ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>external:falcor.PathSets</code> | 

<a name="module_Protean.falcor.ProxiedSource+adjustGraph"></a>
##### proxiedSource.adjustGraph(graph) ⇒ <code>external:falcor.JSONGraph</code>
Update the graph to reflect our root path and update any reference values

**Kind**: instance method of <code>[ProxiedSource](#module_Protean.falcor.ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| graph | <code>external:falcor.JSONGraph</code> | 

<a name="module_Protean.falcor.ProxiedSource+adjustEnvelope"></a>
##### proxiedSource.adjustEnvelope(envelope) ⇒ <code>external:falcor.JSONGraphEnvelope</code>
Adjust the JSONGraphEnvelope to reflect our leading path information.

**Kind**: instance method of <code>[ProxiedSource](#module_Protean.falcor.ProxiedSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.SessionDataSource"></a>
#### falcor.SessionDataSource ⇐ <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>
**Kind**: static class of <code>[falcor](#module_Protean.falcor)</code>  
**Extends:** <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  

* [.SessionDataSource](#module_Protean.falcor.SessionDataSource) ⇐ <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>
  * [new SessionDataSource()](#new_module_Protean.falcor.SessionDataSource_new)
  * [.model](#module_Protean.falcor.StorageDataSource+model)
  * [.source](#module_Protean.falcor.StorageDataSource+source)
  * [.options](#module_Protean.falcor.StorageDataSource+options)
  * [.get(paths)](#module_Protean.falcor.StorageDataSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.set(envelope)](#module_Protean.falcor.StorageDataSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.StorageDataSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.clear()](#module_Protean.falcor.StorageDataSource+clear)
  * [.serialize()](#module_Protean.falcor.StorageDataSource+serialize)
  * [.deserialize()](#module_Protean.falcor.StorageDataSource+deserialize)

<a name="new_module_Protean.falcor.SessionDataSource_new"></a>
##### new SessionDataSource()
**file:** protean/falcor/data-source/session.js

<a name="module_Protean.falcor.StorageDataSource+model"></a>
##### sessionDataSource.model
**Kind**: instance property of <code>[SessionDataSource](#module_Protean.falcor.SessionDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>external:falcor.Model</code> | 

<a name="module_Protean.falcor.StorageDataSource+source"></a>
##### sessionDataSource.source
**Kind**: instance property of <code>[SessionDataSource](#module_Protean.falcor.SessionDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>external:faclor.DataSource</code> | 

<a name="module_Protean.falcor.StorageDataSource+options"></a>
##### sessionDataSource.options
**Kind**: instance property of <code>[SessionDataSource](#module_Protean.falcor.SessionDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 

<a name="module_Protean.falcor.StorageDataSource+get"></a>
##### sessionDataSource.get(paths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[SessionDataSource](#module_Protean.falcor.SessionDataSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;external:falcor.PathSets&gt;</code> | 

<a name="module_Protean.falcor.StorageDataSource+set"></a>
##### sessionDataSource.set(envelope) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[SessionDataSource](#module_Protean.falcor.SessionDataSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.StorageDataSource+call"></a>
##### sessionDataSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[SessionDataSource](#module_Protean.falcor.SessionDataSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>external:falcor.PathSet</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 
| thisPaths | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 

<a name="module_Protean.falcor.StorageDataSource+clear"></a>
##### sessionDataSource.clear()
Clear our storage item

**Kind**: instance method of <code>[SessionDataSource](#module_Protean.falcor.SessionDataSource)</code>  
<a name="module_Protean.falcor.StorageDataSource+serialize"></a>
##### sessionDataSource.serialize()
Write our cache to storage

**Kind**: instance method of <code>[SessionDataSource](#module_Protean.falcor.SessionDataSource)</code>  
<a name="module_Protean.falcor.StorageDataSource+deserialize"></a>
##### sessionDataSource.deserialize()
Get our cache from storage

**Kind**: instance method of <code>[SessionDataSource](#module_Protean.falcor.SessionDataSource)</code>  
<a name="module_Protean.falcor.StorageDataSource"></a>
#### falcor.StorageDataSource
**Kind**: static class of <code>[falcor](#module_Protean.falcor)</code>  
**Implements:** <code>external:falcor.DataSource</code>  

* [.StorageDataSource](#module_Protean.falcor.StorageDataSource)
  * [new StorageDataSource(opts)](#new_module_Protean.falcor.StorageDataSource_new)
  * [.model](#module_Protean.falcor.StorageDataSource+model)
  * [.source](#module_Protean.falcor.StorageDataSource+source)
  * [.options](#module_Protean.falcor.StorageDataSource+options)
    * [.storageKey](#module_Protean.falcor.StorageDataSource+options.storageKey)
    * [.storage](#module_Protean.falcor.StorageDataSource+options.storage)
  * [.get(paths)](#module_Protean.falcor.StorageDataSource+get) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.set(envelope)](#module_Protean.falcor.StorageDataSource+set) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.call(path, args, refSuffixes, thisPaths)](#module_Protean.falcor.StorageDataSource+call) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
  * [.clear()](#module_Protean.falcor.StorageDataSource+clear)
  * [.serialize()](#module_Protean.falcor.StorageDataSource+serialize)
  * [.deserialize()](#module_Protean.falcor.StorageDataSource+deserialize)

<a name="new_module_Protean.falcor.StorageDataSource_new"></a>
##### new StorageDataSource(opts)
**file:** protean/falcor/data-source/storage.js


| Param | Type |
| --- | --- |
| opts | <code>Object</code> | 
| [opts.cache] | <code>Object</code> | 
| [opts.storage] | <code>external:Storage</code> | 
| opts.storageKey | <code>String</code> | 

<a name="module_Protean.falcor.StorageDataSource+model"></a>
##### storageDataSource.model
**Kind**: instance property of <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>external:falcor.Model</code> | 

<a name="module_Protean.falcor.StorageDataSource+source"></a>
##### storageDataSource.source
**Kind**: instance property of <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>external:faclor.DataSource</code> | 

<a name="module_Protean.falcor.StorageDataSource+options"></a>
##### storageDataSource.options
**Kind**: instance property of <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  
**Properties**

| Type |
| --- |
| <code>Object</code> | 


* [.options](#module_Protean.falcor.StorageDataSource+options)
  * [.storageKey](#module_Protean.falcor.StorageDataSource+options.storageKey)
  * [.storage](#module_Protean.falcor.StorageDataSource+options.storage)

<a name="module_Protean.falcor.StorageDataSource+options.storageKey"></a>
###### options.storageKey
**Kind**: static property of <code>[options](#module_Protean.falcor.StorageDataSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>String</code> | 

<a name="module_Protean.falcor.StorageDataSource+options.storage"></a>
###### options.storage
**Kind**: static property of <code>[options](#module_Protean.falcor.StorageDataSource+options)</code>  
**Properties**

| Type |
| --- |
| <code>external:Storage</code> | 

<a name="module_Protean.falcor.StorageDataSource+get"></a>
##### storageDataSource.get(paths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  

| Param | Type |
| --- | --- |
| paths | <code>Array.&lt;external:falcor.PathSets&gt;</code> | 

<a name="module_Protean.falcor.StorageDataSource+set"></a>
##### storageDataSource.set(envelope) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  

| Param | Type |
| --- | --- |
| envelope | <code>external:falcor.JSONGraphEnvelope</code> | 

<a name="module_Protean.falcor.StorageDataSource+call"></a>
##### storageDataSource.call(path, args, refSuffixes, thisPaths) ⇒ <code>external:Rx.Observable.&lt;external:falcor.JSONGraphEnvelope&gt;</code>
**Kind**: instance method of <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  

| Param | Type |
| --- | --- |
| path | <code>external:falcor.PathSet</code> | 
| args | <code>Array.&lt;Mixed&gt;</code> | 
| refSuffixes | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 
| thisPaths | <code>Array.&lt;external:falcor.PathSet&gt;</code> | 

<a name="module_Protean.falcor.StorageDataSource+clear"></a>
##### storageDataSource.clear()
Clear our storage item

**Kind**: instance method of <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  
<a name="module_Protean.falcor.StorageDataSource+serialize"></a>
##### storageDataSource.serialize()
Write our cache to storage

**Kind**: instance method of <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  
<a name="module_Protean.falcor.StorageDataSource+deserialize"></a>
##### storageDataSource.deserialize()
Get our cache from storage

**Kind**: instance method of <code>[StorageDataSource](#module_Protean.falcor.StorageDataSource)</code>  
<a name="module_Protean.Store"></a>
### Protean.Store
**Kind**: static property of <code>[Protean](#module_Protean)</code>  
**Implements:** <code>external:Storage</code>  

  * [.Store](#module_Protean.Store)
    * _instance_
      * [.length](#module_Protean.Store+length)
      * [.getItem(key)](#module_Protean.Store+getItem) ⇒ <code>null</code> &#124; <code>String</code>
      * [.setItem(key, value)](#module_Protean.Store+setItem)
      * [.removeItem(key)](#module_Protean.Store+removeItem)
      * [.clear()](#module_Protean.Store+clear)
      * [.key(idx)](#module_Protean.Store+key) ⇒ <code>String</code>
    * _static_
      * [.local](#module_Protean.Store.local) : <code>external:Storage</code>
      * [.memory](#module_Protean.Store.memory) : <code>[Store](#module_Protean.Store)</code>
      * [.session](#module_Protean.Store.session) : <code>external:Storage</code>

<a name="module_Protean.Store+length"></a>
#### store.length
**Kind**: instance property of <code>[Store](#module_Protean.Store)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Integer</code> | 

<a name="module_Protean.Store+getItem"></a>
#### store.getItem(key) ⇒ <code>null</code> &#124; <code>String</code>
**Kind**: instance method of <code>[Store](#module_Protean.Store)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Store+setItem"></a>
#### store.setItem(key, value)
**Kind**: instance method of <code>[Store](#module_Protean.Store)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>String</code> | 

<a name="module_Protean.Store+removeItem"></a>
#### store.removeItem(key)
**Kind**: instance method of <code>[Store](#module_Protean.Store)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="module_Protean.Store+clear"></a>
#### store.clear()
**Kind**: instance method of <code>[Store](#module_Protean.Store)</code>  
<a name="module_Protean.Store+key"></a>
#### store.key(idx) ⇒ <code>String</code>
**Kind**: instance method of <code>[Store](#module_Protean.Store)</code>  

| Param | Type |
| --- | --- |
| idx | <code>Integer</code> | 

<a name="module_Protean.Store.local"></a>
#### Store.local : <code>external:Storage</code>
**Kind**: static property of <code>[Store](#module_Protean.Store)</code>  
<a name="module_Protean.Store.memory"></a>
#### Store.memory : <code>[Store](#module_Protean.Store)</code>
**Kind**: static property of <code>[Store](#module_Protean.Store)</code>  
<a name="module_Protean.Store.session"></a>
#### Store.session : <code>external:Storage</code>
**Kind**: static property of <code>[Store](#module_Protean.Store)</code>  
<a name="module_Protean.classify"></a>
### Protean.classify([subclass], props, [properties]) ⇒ <code>[Class](#module_Protean..Class)</code>
Create a constructor function passing in it's prototype methods.

**file**: protean/function/classify

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [subclass] | <code>function</code> | The subclass constructor function. |
| props | <code>Object</code> | Bare properties for the constructor's prototype. |
| [properties] | <code>Object</code> | Object.defineProperty property definitions. |

<a name="module_Protean.inherit"></a>
### Protean.inherit(superclass, [subclass], [props], [properties]) ⇒ <code>[Class](#module_Protean..Class)</code>
Create a constructor function that inherits properties and methods from the
given super constructor.

**file**: protean/function/inherit

**Kind**: static method of <code>[Protean](#module_Protean)</code>  
**Returns**: <code>[Class](#module_Protean..Class)</code> - The constructor function.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| superclass | <code>function</code> |  | The function to inherit from. |
| [subclass] | <code>function</code> | <code>Function</code> | The Subclass constructor function. If omitted, and a `constructor` property is not defined in `props`, defaults to a function that calls the superclass' constructor function. |
| [props] | <code>Object</code> |  | Bare properties to initialize the prototype with. |
| [properties] | <code>Object</code> | <code>{}</code> | Object.defineProperty property definitions. |

<a name="module_Protean.instantiate"></a>
### Protean.instantiate(fn, [args]) ⇒ <code>Object</code>
Create a new object and then apply the constructor function with the arguments.

**file**: protean/function/instantiate

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

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| ...obj | <code>Object</code> | 

<a name="module_Protean.traverse"></a>
### Protean.traverse(obj, visitor, [post])
**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type | Default |
| --- | --- | --- |
| obj | <code>Object</code> |  | 
| visitor | <code>function</code> |  | 
| [post] | <code>Boolean</code> | <code>false</code> | 

<a name="module_Protean.enmap"></a>
### Protean.enmap(...args) ⇒ <code>Object</code>
Takes a list of alternating key/values and returns an object.

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| ...args | <code>Mixed</code> | 

<a name="module_Protean.enumerate"></a>
### Protean.enumerate() ⇒ <code>Object</code>
Takes an argument list of strings and returns an object with those keys, and their
values being the index of that key plus one.

**Kind**: static method of <code>[Protean](#module_Protean)</code>  

| Type |
| --- |
| <code>String</code> | 

<a name="module_Protean.guid"></a>
### Protean.guid() ⇒ <code>String</code>
Fast GUID generator, RFC4122 version 4 compliant.

**Kind**: static method of <code>[Protean](#module_Protean)</code>  
**See**: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136  
**Author:** Jeff Ward (jcward.com).  
**License**: MIT license  
<a name="module_Protean..ClassExtend"></a>
### Protean~ClassExtend ⇒ <code>[Class](#module_Protean..Class)</code>
**Kind**: inner typedef of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| [subclass] | <code>function</code> | 
| [props] | <code>Object</code> | 
| [properties] | <code>Object</code> | 

<a name="module_Protean..ClassExtended"></a>
### Protean~ClassExtended : <code>function</code>
**Kind**: inner typedef of <code>[Protean](#module_Protean)</code>  

| Param | Type |
| --- | --- |
| subclass | <code>function</code> | 

<a name="module_Protean..Class"></a>
### Protean~Class : <code>function</code>
**Kind**: inner typedef of <code>[Protean](#module_Protean)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| extend | <code>[ClassExtend](#module_Protean..ClassExtend)</code> | A function to extend this class into another one |
| extended | <code>[ClassExtended](#module_Protean..ClassExtended)</code> | A function that will be called when the class is extended into another |
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
