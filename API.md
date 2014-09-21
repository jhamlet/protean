#Index

**Classes**

* [class: ProteanFiniteStateMachine](#ProteanFiniteStateMachine)
  * [new ProteanFiniteStateMachine([opts])](#new_ProteanFiniteStateMachine)
  * [ProteanFiniteStateMachine.State](#ProteanFiniteStateMachine.State)
  * [proteanFiniteStateMachine.current](#ProteanFiniteStateMachine#current)
  * [proteanFiniteStateMachine.actions](#ProteanFiniteStateMachine#actions)
  * [proteanFiniteStateMachine.add(state, [opts])](#ProteanFiniteStateMachine#add)
  * [proteanFiniteStateMachine.remove(state)](#ProteanFiniteStateMachine#remove)
  * [proteanFiniteStateMachine.has(state)](#ProteanFiniteStateMachine#has)
  * [proteanFiniteStateMachine.can(action)](#ProteanFiniteStateMachine#can)
  * [proteanFiniteStateMachine.get(state)](#ProteanFiniteStateMachine#get)
  * [proteanFiniteStateMachine.trigger(action)](#ProteanFiniteStateMachine#trigger)
  * [proteanFiniteStateMachine.enter(state)](#ProteanFiniteStateMachine#enter)
  * [proteanFiniteStateMachine.valueOf()](#ProteanFiniteStateMachine#valueOf)
  * [proteanFiniteStateMachine.destroy()](#ProteanFiniteStateMachine#destroy)
  * [type: ProteanFiniteStateMachine~Transition](#ProteanFiniteStateMachine..Transition)
* [class: ProteanFiniteState](#ProteanFiniteState)
  * [new ProteanFiniteState([name], opts)](#new_ProteanFiniteState)
  * [proteanFiniteState.name](#ProteanFiniteState#name)
  * [proteanFiniteState.actions](#ProteanFiniteState#actions)
  * [proteanFiniteState.can(action)](#ProteanFiniteState#can)
  * [proteanFiniteState.state(action)](#ProteanFiniteState#state)
  * [proteanFiniteState.add(action, state)](#ProteanFiniteState#add)
  * [proteanFiniteState.remove(action)](#ProteanFiniteState#remove)
  * [proteanFiniteState.removeState(state)](#ProteanFiniteState#removeState)
  * [proteanFiniteState.destroy()](#ProteanFiniteState#destroy)
  * [proteanFiniteState.valueOf()](#ProteanFiniteState#valueOf)
  * [type: ProteanFiniteState~StateOptions](#ProteanFiniteState..StateOptions)
 
<a name="ProteanFiniteStateMachine"></a>
#class: ProteanFiniteStateMachine
**Extends**: `external:ProteanSubject`  
**Members**

* [class: ProteanFiniteStateMachine](#ProteanFiniteStateMachine)
  * [new ProteanFiniteStateMachine([opts])](#new_ProteanFiniteStateMachine)
  * [ProteanFiniteStateMachine.State](#ProteanFiniteStateMachine.State)
  * [proteanFiniteStateMachine.current](#ProteanFiniteStateMachine#current)
  * [proteanFiniteStateMachine.actions](#ProteanFiniteStateMachine#actions)
  * [proteanFiniteStateMachine.add(state, [opts])](#ProteanFiniteStateMachine#add)
  * [proteanFiniteStateMachine.remove(state)](#ProteanFiniteStateMachine#remove)
  * [proteanFiniteStateMachine.has(state)](#ProteanFiniteStateMachine#has)
  * [proteanFiniteStateMachine.can(action)](#ProteanFiniteStateMachine#can)
  * [proteanFiniteStateMachine.get(state)](#ProteanFiniteStateMachine#get)
  * [proteanFiniteStateMachine.trigger(action)](#ProteanFiniteStateMachine#trigger)
  * [proteanFiniteStateMachine.enter(state)](#ProteanFiniteStateMachine#enter)
  * [proteanFiniteStateMachine.valueOf()](#ProteanFiniteStateMachine#valueOf)
  * [proteanFiniteStateMachine.destroy()](#ProteanFiniteStateMachine#destroy)
  * [type: ProteanFiniteStateMachine~Transition](#ProteanFiniteStateMachine..Transition)

<a name="new_ProteanFiniteStateMachine"></a>
##new ProteanFiniteStateMachine([opts])
A finite state machine Rx.Subject.

Takes in `action` strings and then will change state based on the current
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

<a name="ProteanFiniteStateMachine#actions"></a>
##proteanFiniteStateMachine.actions
Get the currently available actions

**Read only**: true  
<a name="ProteanFiniteStateMachine#add"></a>
##proteanFiniteStateMachine.add(state, [opts])
**Params**

- state <code>[ProteanFiniteState](#ProteanFiniteState)</code> | `String`  
- \[opts\] <code>[StateOptions](#ProteanFiniteState..StateOptions)</code>  

**Returns**: `Boolean`  
<a name="ProteanFiniteStateMachine#remove"></a>
##proteanFiniteStateMachine.remove(state)
Remove the named state unless the state is the current one.

**Params**

- state <code>[ProteanFiniteState](#ProteanFiniteState)</code> | `String`  

**Returns**: `Boolean`  
<a name="ProteanFiniteStateMachine#has"></a>
##proteanFiniteStateMachine.has(state)
**Params**

- state `String`  

**Returns**: `Boolean`  
<a name="ProteanFiniteStateMachine#can"></a>
##proteanFiniteStateMachine.can(action)
**Params**

- action `String`  

**Returns**: `Boolean`  
<a name="ProteanFiniteStateMachine#get"></a>
##proteanFiniteStateMachine.get(state)
**Params**

- state `String`  

**Returns**: [ProteanFiniteState](#ProteanFiniteState)  
<a name="ProteanFiniteStateMachine#trigger"></a>
##proteanFiniteStateMachine.trigger(action)
Call an action and apply the appropriate transition and update the
current state.

**Params**

- action `String`  

<a name="ProteanFiniteStateMachine#enter"></a>
##proteanFiniteStateMachine.enter(state)
Enter the named state

**Params**

- state `String`  

**Returns**: `Boolean` - whether or not the state was entered  
<a name="ProteanFiniteStateMachine#valueOf"></a>
##proteanFiniteStateMachine.valueOf()
Returns the current object-value of the state-machine

**Returns**: `Object`  
<a name="ProteanFiniteStateMachine#destroy"></a>
##proteanFiniteStateMachine.destroy()
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
  * [proteanFiniteState.actions](#ProteanFiniteState#actions)
  * [proteanFiniteState.can(action)](#ProteanFiniteState#can)
  * [proteanFiniteState.state(action)](#ProteanFiniteState#state)
  * [proteanFiniteState.add(action, state)](#ProteanFiniteState#add)
  * [proteanFiniteState.remove(action)](#ProteanFiniteState#remove)
  * [proteanFiniteState.removeState(state)](#ProteanFiniteState#removeState)
  * [proteanFiniteState.destroy()](#ProteanFiniteState#destroy)
  * [proteanFiniteState.valueOf()](#ProteanFiniteState#valueOf)
  * [type: ProteanFiniteState~StateOptions](#ProteanFiniteState..StateOptions)

<a name="new_ProteanFiniteState"></a>
##new ProteanFiniteState([name], opts)
**Params**

- \[name\] `String`  
- opts <code>[StateOptions](#ProteanFiniteState..StateOptions)</code>  

<a name="ProteanFiniteState#name"></a>
##proteanFiniteState.name
<a name="ProteanFiniteState#actions"></a>
##proteanFiniteState.actions
**Read only**: true  
<a name="ProteanFiniteState#can"></a>
##proteanFiniteState.can(action)
**Params**

- action `String`  

**Returns**: `Boolean`  
<a name="ProteanFiniteState#state"></a>
##proteanFiniteState.state(action)
Retrieve the state for the given action

**Params**

- action `String`  

**Returns**: `String`  
<a name="ProteanFiniteState#add"></a>
##proteanFiniteState.add(action, state)
**Params**

- action `String`  
- state `String`  

**Returns**: `Boolean`  
<a name="ProteanFiniteState#remove"></a>
##proteanFiniteState.remove(action)
**Params**

- action `String`  

**Returns**: `Boolean`  
<a name="ProteanFiniteState#removeState"></a>
##proteanFiniteState.removeState(state)
Remove all actions with the given state

**Params**

- state `String`  

**Returns**: `Boolean`  
<a name="ProteanFiniteState#destroy"></a>
##proteanFiniteState.destroy()
<a name="ProteanFiniteState#valueOf"></a>
##proteanFiniteState.valueOf()
**Returns**: `Object`  
<a name="ProteanFiniteState..StateOptions"></a>
##type: ProteanFiniteState~StateOptions
**Scope**: inner typedef of [ProteanFiniteState](#ProteanFiniteState)  
**Type**: `Object`  
