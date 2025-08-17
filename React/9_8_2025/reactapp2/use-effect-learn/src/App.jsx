import React from 'react'
import { useState } from 'react'

import './App.css'
import { startTransition } from 'react'
import { StateDefinition } from './components/StateDefinition'
import FCvsCC from './components/FCvsCC'
import SimpleIncrementDecrement from './components/SimpleIncrementDecrement'
import {UseState2waysPassingState}from './components/UseState2waysPassingState'
function App() {

  {/* 
//   if(true){
//     useState()
//   }
// useState()
This is wrong way of the doing 
1.Put all hooks unconditionally at the top level of your function component
(At the top level of your component.)
2.In the same order every time your component renders.
3.Never inside conditionals, loops, or nested functions.
Error you will get if you do like above :React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render.
Wrong way:
if (someCondition) {
  const [value, setValue] = useState(""); // ❌ hook inside if
}
Right way:
const [value, setValue] = useState(""); // always called

if (someCondition) {
  // use `value` or `setValue` conditionally
}
 */}

const [count,setCount]=useState(4)
//  4-- it is the default state where our counter start
//  useState() hook is going to return array with 2 values , first is current state at every single iteration of the render fucntion  and second things is function which is going to update our current state
//  count-- current state
//  setCount -- 

function increment(){
  // setState(()=>{
  //   count+=1
  // })
}

function decrement(){
  // setState(()=>{
  //   count-=1
  // })
}

  return (
    <>
    {/* <StateDefinition/> */}
    {/* <FCvsCC/> */}
    {/* <SimpleIncrementDecrement/> */}
    <UseState2waysPassingState/>

      {/* <div>
        <button onClick={decrement}>-</button>
        <span>0</span>
        <button onClick={increment}>+</button>
      </div> */}
    </>
  )
}

export default App
