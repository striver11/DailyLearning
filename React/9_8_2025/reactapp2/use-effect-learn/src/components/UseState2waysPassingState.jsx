import { useState } from "react";

function mulitiRender(){
    console.log("multiple time render out side useState but passed as fucntion in use")
}
function UseState2waysPassingState(){

    const [count,setCount]=useState(()=>{
        console.log("one time rendering in side useState as function")
        return 0
    });
    // const [prev,setUpdate]=useState(()=>{
    //     console.log("one time rendering in side useState as function")
    // })
    
    // const [post,setPupdate]=useState()

    const increment=()=>{
        setCount(prevCount=>prevCount+1)
    }

    const decrement=()=>{
        setCount(prevCount=>prevCount-1)
    }
    
    return(

        <>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        </>
    )
}

export {UseState2waysPassingState}