#Index

**Classes**

* [class: ProteanFiniteStateMachine](#ProteanFiniteStateMachine)
  * [new ProteanFiniteStateMachine([opts])](#new_ProteanFiniteStateMachine)
  * [ProteanFiniteStateMachine.State](#ProteanFiniteStateMachine.State)
  * [proteanFiniteStateMachine.current](#ProteanFiniteStateMachine#current)
  * [proteanFiniteStateMachine.triggers](#ProteanFiniteStateMachine#triggers)
  * [proteanFiniteStateMachine.add(name, opts)](#ProteanFiniteStateMachine#add)
  * [proteanFiniteStateMachine.remove(name)](#ProteanFiniteStateMachine#remove)
  * [proteanFiniteStateMachine.has(name)](#ProteanFiniteStateMachine#has)
  * [proteanFiniteStateMachine.get(name)](#ProteanFiniteStateMachine#get)
  * [proteanFiniteStateMachine.trigger(trigger)](#ProteanFiniteStateMachine#trigger)
  * [proteanFiniteStateMachine.next(name)](#ProteanFiniteStateMachine#next)
  * [proteanFiniteStateMachine.enter(name)](#ProteanFiniteStateMachine#enter)
  * [proteanFiniteStateMachine.valueOf()](#ProteanFiniteStateMachine#valueOf)
  * [type: ProteanFiniteStateMachine~Transition](#ProteanFiniteStateMachine..Transition)
* [class: ProteanFiniteState](#ProteanFiniteState)
  * [new ProteanFiniteState([name], opts)](#new_ProteanFiniteState)
  * [proteanFiniteState.name](#ProteanFiniteState#name)
  * [proteanFiniteState.triggers](#ProteanFiniteState#triggers)
  * [proteanFiniteState.can(trigger)](#ProteanFiniteState#can)
  * [proteanFiniteState.state(trigger)](#ProteanFiniteState#state)
  * [proteanFiniteState.add(trigger, state)](#ProteanFiniteState#add)
  * [proteanFiniteState.remove(trigger)](#ProteanFiniteState#remove)
  * [proteanFiniteState.removeState(state)](#ProteanFiniteState#removeState)
  * [proteanFiniteState.destroy()](#ProteanFiniteState#destroy)
  * [type: ProteanFiniteState~StateOptions](#ProteanFiniteState..StateOptions)
 
<a name="ProteanFiniteStateMachine"></a>
#class: ProteanFiniteStateMachine
**Extends**: `external:ProteanSubject`  
**Members**

* [class: ProteanFiniteStateMachine](#ProteanFiniteStateMachine)
  * [new ProteanFiniteStateMachine([opts])](#new_ProteanFiniteStateMachine)
  * [ProteanFiniteStateMachine.State](#ProteanFiniteStateMachine.State)
  * [proteanFiniteStateMachine.current](#ProteanFiniteStateMachine#current)
  * [proteanFiniteStateMachine.triggers](#ProteanFiniteStateMachine#triggers)
  * [proteanFiniteStateMachine.add(name, opts)](#ProteanFiniteStateMachine#add)
  * [proteanFiniteStateMachine.remove(name)](#ProteanFiniteStateMachine#remove)
  * [proteanFiniteStateMachine.has(name)](#ProteanFiniteStateMachine#has)
  * [proteanFiniteStateMachine.get(name)](#ProteanFiniteStateMachine#get)
  * [proteanFiniteStateMachine.trigger(trigger)](#ProteanFiniteStateMachine#trigger)
  * [proteanFiniteStateMachine.next(name)](#ProteanFiniteStateMachine#next)
  * [proteanFiniteStateMachine.enter(name)](#ProteanFiniteStateMachine#enter)
  * [proteanFiniteStateMachine.valueOf()](#ProteanFiniteStateMachine#valueOf)
  * [type: ProteanFiniteStateMachine~Transition](#ProteanFiniteStateMachine..Transition)

<a name="new_ProteanFiniteStateMachine"></a>
##new ProteanFiniteStateMachine([opts])
A finite state machine Rx.Subject.

Takes in `trigger` strings and then will change state based on the current
state.

Emits `FiniteStateMachine~Transition` objects.

**Params**

- \[opts\] `Object`  
  - \[initial\] `String`  
  - \[states={}\] `Object.<String, ProteanFiniteState~StateOptions>`  
  - \[stateless=false\] `Boolean` - Allow the machine to be in a
stateless state. Default false.  

**Extends**: `external:ProteanSubject`  
**Type**: `Error`  
<a name="ProteanFiniteStateMachine.State"></a>
##ProteanFiniteStateMachine.State
**Type**: [ProteanFiniteState](#ProteanFiniteState)  
<a name="ProteanFiniteStateMachine#current"></a>
##proteanFiniteStateMachine.current
The current state object

<a name="ProteanFiniteStateMachine#triggers"></a>
##proteanFiniteStateMachine.triggers
Get the currently available triggers

**Read only**: true  
<a name="ProteanFiniteStateMachine#add"></a>
##proteanFiniteStateMachine.add(name, opts)
**Params**

- name `String`  
- opts <code>[StateOptions](#ProteanFiniteState..StateOptions)</code>  

**Returns**: [ProteanFiniteStateMachine](#ProteanFiniteStateMachine) - the current instance  
<a name="ProteanFiniteStateMachine#remove"></a>
##proteanFiniteStateMachine.remove(name)
Remove the named state unless the state is the current one.

**Params**

- name `String`  

**Returns**: [ProteanFiniteStateMachine](#ProteanFiniteStateMachine) - the current instance  
<a name="ProteanFiniteStateMachine#has"></a>
##proteanFiniteStateMachine.has(name)
**Params**

- name `String`  

**Returns**: `Boolean`  
<a name="ProteanFiniteStateMachine#get"></a>
##proteanFiniteStateMachine.get(name)
**Params**

- name `String`  

**Returns**: [ProteanFiniteState](#ProteanFiniteState)  
<a name="ProteanFiniteStateMachine#trigger"></a>
##proteanFiniteStateMachine.trigger(trigger)
Call a trigger action and apply the appropriate transition and update the
the current state.

**Params**

- trigger `String`  

**Returns**: [ProteanFiniteStateMachine](#ProteanFiniteStateMachine) - the current instance  
<a name="ProteanFiniteStateMachine#next"></a>
##proteanFiniteStateMachine.next(name)
**Params**

- name `String`  

<a name="ProteanFiniteStateMachine#enter"></a>
##proteanFiniteStateMachine.enter(name)
Enter the named state

**Params**

- name `String`  

**Returns**: [ProteanFiniteStateMachine](#ProteanFiniteStateMachine) - the current instance  
<a name="ProteanFiniteStateMachine#valueOf"></a>
##proteanFiniteStateMachine.valueOf()
Returns the current object-value of the state-machine

<a name="ProteanFiniteStateMachine..Transition"></a>
##type: ProteanFiniteStateMachine~Transition
**Scope**: inner typedef of [ProteanFiniteStateMachine](#ProteanFiniteStateMachine)  
**Type**: `Object`  
<a name="ProteanFiniteState"></a>
#class: ProteanFiniteState
**Members**

* [class: ProteanFiniteState](#ProteanFiniteState)
  * [new ProteanFiniteState([name], opts)](#new_ProteanFiniteState)
  * [proteanFiniteState.name](#ProteanFiniteState#name)
  * [proteanFiniteState.triggers](#ProteanFiniteState#triggers)
  * [proteanFiniteState.can(trigger)](#ProteanFiniteState#can)
  * [proteanFiniteState.state(trigger)](#ProteanFiniteState#state)
  * [proteanFiniteState.add(trigger, state)](#ProteanFiniteState#add)
  * [proteanFiniteState.remove(trigger)](#ProteanFiniteState#remove)
  * [proteanFiniteState.removeState(state)](#ProteanFiniteState#removeState)
  * [proteanFiniteState.destroy()](#ProteanFiniteState#destroy)
  * [type: ProteanFiniteState~StateOptions](#ProteanFiniteState..StateOptions)

<a name="new_ProteanFiniteState"></a>
##new ProteanFiniteState([name], opts)
**Params**

- \[name\] `String`  
- opts <code>[StateOptions](#ProteanFiniteState..StateOptions)</code>  

<a name="ProteanFiniteState#name"></a>
##proteanFiniteState.name
<a name="ProteanFiniteState#triggers"></a>
##proteanFiniteState.triggers
**Read only**: true  
<a name="ProteanFiniteState#can"></a>
##proteanFiniteState.can(trigger)
**Params**

- trigger `String`  

**Returns**: `Boolean`  
<a name="ProteanFiniteState#state"></a>
##proteanFiniteState.state(trigger)
Retrieve the state for the given trigger

**Params**

- trigger `String`  

**Returns**: `String`  
<a name="ProteanFiniteState#add"></a>
##proteanFiniteState.add(trigger, state)
**Params**

- trigger `String`  
- state `String`  

**Returns**: `FiniteState` - the current instance  
<a name="ProteanFiniteState#remove"></a>
##proteanFiniteState.remove(trigger)
**Params**

- trigger `String`  

**Returns**: `FiniteState` - the current instance  
<a name="ProteanFiniteState#removeState"></a>
##proteanFiniteState.removeState(state)
Remove all triggers with the given state

**Params**

- state `String`  

**Returns**: `FiniteState` - the current instance  
<a name="ProteanFiniteState#destroy"></a>
##proteanFiniteState.destroy()
<a name="ProteanFiniteState..StateOptions"></a>
##type: ProteanFiniteState~StateOptions
**Scope**: inner typedef of [ProteanFiniteState](#ProteanFiniteState)  
**Type**: `Object`  
