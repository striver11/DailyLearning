import { useState } from "react";
export default function SimpleIncrementDecrement(){

    const [count,setCount]=useState(4)

// function increament(){
//     setCount((count)=>{
//         count+=1;
//     })
// }
// function decrement(){
//     setCount((count)=>{
//         count-=1;
//     })
// }
//the above does work because you wrote a arrow function inside setCount but not returning anything so return type is undefined


function increment(){
    setCount((count)=>{
        return count+1;
    })
}
// function decrement(){
//     setCount((count)=>{
//         return count-1;
//     })
// }
function decrement(){
    setCount((prevCont)=>{
        return prevCont-1;
    })
}

/*
Why does this work? (functional updater)
Each setCount call receives the latest state value at that moment.

React queues the updates, so first update increments from prevCount to prevCount + 1.

Second update also increments from the updated value, effectively adding 2.
*/

// function increment(){
//     setCount(prevCount=>prevCount+1);
//      setCount(prevCount=>prevCount+1);

// }

//this below doesn't work as above the double incremnt does happen with below code but happens with above code
/*Why this doesn’t work? (direct value)
Both calls capture the same count value from the closure (the state when this function was called).

So both setCount calls set the state to the same value: count + 1.

The second call overwrites the first, so you only get a single increment.
*/
// function increment(){
//     setCount(count+1);
//      setCount(count+1);
// }



// function decrement(){
//     setCount(prevCount=>prevCount-1)
// }

    return(
        <>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        </>

    )
}


// or else if you want to do named export you can do like below

// function Header() {
//   return <h1>Header</h1>;
// }

// function Footer() {
//   return <footer>Footer</footer>;
// }

// export { Header, Footer };
