export function StateDefinition(){

  const stateInFC = `
import { useState } from "react";
export default function Counter() {
const [count, setCount] = useState(0); // count is the state

return (
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
);
} 
`;

const stateInCC=`
 import React, { Component } from "react";
class Counter extends Component {
state = { count: 0 }; // state in class

render() {
    return (
    <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Click Me
        </button>
    </div>
    );
}
}
`

        return(
            <>
            <h1>State Definition</h1>
            <h3>In React, state is:A built-in object that stores dynamic, 
            changeable data for a component and tells React
                "if this data changes, re-render me".</h3>
                <div>
                    <h5> 1️⃣ Key Points about State</h5>
                    <p>
                        
                        Private to the component — other components can’t directly modify it.

                        Reactive — if it changes, React re-renders the component to update the UI.

                        Mutable through special functions — in functional components via setState function from useState, in class components via this.setState.

                        Stores any type of data — strings, numbers, arrays, objects, booleans, even other components.
                    </p>

                    <h5> 2️⃣ Why Do We Need State?</h5>
                    <p>                   
                    Without state, your components would be static — showing the same UI forever.
                    State lets your app:

                    Respond to user input (e.g., clicks, typing).

                    Track UI state (e.g., open/closed menus, form data).

                    Store data fetched from APIs.

                    Update parts of the UI without refreshing the page.</p>
               
               <h5>3️⃣ Example in Functional Component</h5>
               <p>
                
               </p>
                 <pre
                    style={{
                        backgroundColor: "black",
                        padding: "10px",
                        borderRadius: "5px",
                        overflowX: "auto",
                        textAlign: "left",       // 👈 Ensure left alignment
                        margin: 0,               // Remove default margins
                        whiteSpace: "pre-wrap",  // Preserve newlines & wrap long lines
                        fontFamily: "monospace", // Code font
                    }}
                    >
                    <code>{stateInFC}</code>
                </pre>
                <p>
                    {/*
                     import { useState } from "react";
                    export default function Counter() {
                    const [count, setCount] = useState(0); // count is the state

                    return (
                        <div>
                        <p>You clicked {count} times</p>
                        <button onClick={() => setCount(count + 1)}>Click Me</button>
                        </div>
                    );
                    }
                     */}
                </p>
               <p>
                count → state value.
                setCount → function to change state.
                When you click the button, count changes → React re-renders the 
               </p>
               
               <h5>4️⃣ Example in Class Component</h5>
                 <pre
                    style={{
                        backgroundColor: "black",
                        padding: "10px",
                        borderRadius: "5px",
                        overflowX: "auto",
                        textAlign: "left",       // 👈 Ensure left alignment
                        margin: 0,               // Remove default margins
                        whiteSpace: "pre-wrap",  // Preserve newlines & wrap long lines
                        fontFamily: "monospace", // Code font
                    }}
                    >
                    <code>{stateInCC}</code>
                </pre>

               <p>
               {/* 
                import React, { Component } from "react";

                class Counter extends Component {
                state = { count: 0 }; // state in class

                render() {
                    return (
                    <div>
                        <p>You clicked {this.state.count} times</p>
                        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                        Click Me
                        </button>
                    </div>
                    );
                }
                } */}

               </p>
               <h5>5️⃣ State vs Props</h5>
               <p>
                | Feature                        | **Props**                                                  | **State**                                            |
| ------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------- |
| **Definition**                 | Inputs to a component, passed from parent.                 | Internal data managed by the component itself.       |
| **Mutability**                 | Immutable — cannot be modified by the receiving component. | Mutable (through `setState` or `useState` setter).   |
| **Who Controls It?**           | Parent component.                                          | The component itself.                                |
| **Purpose**                    | Pass data/config to a component.                           | Store and manage dynamic data.                       |
| **Triggers Re-render?**        | Yes, if parent sends new props.                            | Yes, when updated.                                   |
| **Can be defaulted?**          | Yes, via `defaultProps` or destructuring defaults.         | Yes, via initial value in `useState` or constructor. |
| **Shared Between Components?** | Yes, by passing down via props.                            | Not directly; needs props or global state to share.  |

               </p>

                </div>


            
            </>
        )
}