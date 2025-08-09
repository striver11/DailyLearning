export const useStateDefinition=()=>{

    return(
        <>
        
        <h3>why does useState introduced</h3>
        <p>Before React 16.8, functional components had no state — you had to use class components.
Then React introduced Hooks, and useState was the first and most important one.</p>
         
         <h1>Once question what is the use of functional componets over class components</h1>
         <h1>1️⃣ What useState Does</h1>
         <p>
            useState is a React Hook that lets you add state to functional components.

            Think of it as:

            Stores a value for the component.

            Returns that value and a function to update it.

            Triggers re-render when the value changes.
         </p>
        <h1>2️⃣ Basic Syntax</h1>
         <p>

            const [state, setState] = useState(initialValue);
            state → Current state value.

            setState → Function to update state.

            initialValue → The value used on first render.
         </p>

         <h1>3️⃣ Detailed TypeScript Signature</h1>
         <p>
            {/* 
            (alias) useState<number>(
            initialState: number | (() => number)
            ): [number, React.Dispatch<React.SetStateAction<number>>] 
            */}
            Let’s decode it piece by piece:

            {/* a) <number>
            This is a generic type you can specify for useState.

            Example: useState<number>(0) → The state will always be a number.

            b) initialState: number | (() => number)
            The parameter initialState can be:

            A number directly → useState(0)

            A function that returns a number → useState(() => expensiveCalculation())

            This is called lazy initialization — the function runs only once (on mount).

            c) Return Type: [number, React.Dispatch<React.SetStateAction<number>>]
            This means:

            The hook returns a tuple (array with fixed types and order):

            number → Current state value.

            React.Dispatch<React.SetStateAction<number>> → The updater function. */}

         </p>

         <h1>4️⃣ What is React.Dispatch</h1>
         <p>

                        {/* 
            4️⃣ What is React.Dispatch<React.SetStateAction<number>>?
            This is just TypeScript’s way of describing the state update function:

            ts
            Copy
            Edit
            type SetStateAction<S> = S | ((prevState: S) => S);
            Meaning:

            You can pass a new value directly:

            js
            Copy
            Edit
            setCount(5); // new value
            Or pass a function that gets the previous state:

            js
            Copy
            Edit
            setCount(prev => prev + 1); // calculated from old value */}
         </p>

         <h1>5️⃣ Example</h1>
         <p>
            {/* 
            import React, { useState } from "react";

            export default function Counter() {
            const [count, setCount] = useState<number>(0);

            const increment = () => setCount(prev => prev + 1);

            return (
                <div>
                <p>Count: {count}</p>
                <button onClick={increment}>+1</button>
                <button onClick={() => setCount(0)}>Reset</button>
                </div>
            );
            } 
             */}

         </p>
         </>
         
    )
}