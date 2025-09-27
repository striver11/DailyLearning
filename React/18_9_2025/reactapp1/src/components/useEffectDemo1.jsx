import {useState} from 'react'

export const Counter= ()=>{
    const [count,setCount]= useState(4)

    function increment(){
        setCount(count=>count+1)
        setCount(count=>count+1)
    }

    function decrement(){
        setCount(count=>count-1)
         setCount(count=>count-1)

    }

    return(
        <>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        
        
        </>
    )

}