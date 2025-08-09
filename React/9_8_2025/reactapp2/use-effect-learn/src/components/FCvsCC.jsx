function FCvsCC(){

    return(
        <>
        <h1>1️⃣ Overview</h1>
        <p>
            | Type                      | Definition                                                                         |
| ------------------------- | ---------------------------------------------------------------------------------- |
| **Functional Components** | Plain JavaScript functions that return JSX.                                        |
| **Class Components**      | ES6 classes that extend `React.Component` and return JSX from a `render()` method. |

        </p>

        <h2>2️⃣ Functional Components</h2>
        <p>
            Definition
            A function that:Starts with a capital letter (React requirement).
            Returns JSX.
            Can use Hooks (like useState, useEffect).
        </p>
        <p>
            Features:

            Simpler syntax.

            Use React Hooks for state, lifecycle, refs, etc.

            Easier to read and maintain.

            No this keyword (less confusion).
        </p>

        <h2>3️⃣ Class Components  </h2>
        <p>
            Definition
            An ES6 class that:

            Extends React.Component (or PureComponent).

            Has a render() method to return JSX.

            Manages state with this.state and updates it with this.setState().
        </p>

        <p>Features:

        Uses lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount).

        Uses this keyword to access props and state.

        More verbose code compared to functions.</p>

        <h2>4️⃣ State Management Differences</h2>
        <p>
{/*             
            | Feature       | Functional Component            | Class Component                       |
| ------------- | ------------------------------- | ------------------------------------- |
| Initial State | `useState(initialValue)`        | `this.state = { ... }` in constructor |
| Update State  | Setter function from `useState` | `this.setState(updates)`              |
| Access State  | Direct variable (e.g., `count`) | `this.state.count`                    | */}

        </p>
        <h2>5️⃣ Lifecycle Differences</h2>
        <p>
{/*             
            | Lifecycle Stage | Functional Component               | Class Component          |
| --------------- | ---------------------------------- | ------------------------ |
| On Mount        | `useEffect(() => { ... }, [])`     | `componentDidMount()`    |
| On Update       | `useEffect(() => { ... }, [deps])` | `componentDidUpdate()`   |
| On Unmount      | Cleanup in `useEffect` return      | `componentWillUnmount()` | */}

        </p>
        <h2>6️⃣ Performance</h2>

        <p>
            Functional Components: Often faster in modern React because of optimizations and hooks.

Class Components: Slightly heavier because of this binding and lifecycle overhead.
        </p>
        <h2>7️⃣ Pros & Cons</h2>
        <p>
            Functional Components
            ✅ Shorter, cleaner code
            ✅ Easier to test
            ✅ Hooks make them powerful
            ❌ Older codebases may not use them

            Class Components
            ✅ Still supported in React
            ✅ Explicit lifecycle methods
            ❌ More verbose
            ❌ Requires this (can cause confusion)
        </p>
        <h2>8️⃣ Which Should You Use?</h2>
        <p>For new projects → Prefer functional components with hooks (modern React standard).

For existing class-based projects → Use class components to stay consistent, or gradually refactor.</p>
       
       <h2>9️⃣ Side-by-Side Example</h2>
        
       <p>
        Functional:
        {/* 
        function Greeting({ name }) {
             return <h1>Hello, {name}</h1>;
            } 
        */}

       </p>
       <p>
            Class:
        {/* 
        class Greeting extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}</h1>;
            }
            } 
        */}

       </p>



       <p>
        1. Definitions
        Functional Components
        Simple JavaScript functions.

        Take props as arguments.

        Return JSX directly.

        State and side effects handled via React Hooks (useState, useEffect, etc.).

        Introduced as stateless in older React versions, but since React 16.8 they can manage state too.
            </p>
        <p>

            {/*
             function Greeting({ name }) {
            const [count, setCount] = React.useState(0);

            return (
                <div>
                <h1>Hello {name}</h1>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click</button>
                </div>
            );
            } 
             */}

        </p>
        <p>
            Class Components
            1.ES6 classes extending React.Component or React.PureComponent.

            2.Manage state using this.state and update it using this.setState().

            3.Lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount) handle side effects.

            4.More verbose and require this binding for event handlers (unless using arrow functions).
         </p>
         <p>

                {/* 
                class Greeting extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = { count: 0 };
                    }

                    render() {
                        return (
                        <div>
                            <h1>Hello {this.props.name}</h1>
                            <p>You clicked {this.state.count} times</p>
                            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                            Click
                            </button>
                        </div>
                        );
                    }
                    }
                     */}

         </p>

         <p>

            2. State Handling
{/*             
            | Aspect              | Functional Component                  | Class Component                              |
| ------------------- | ------------------------------------- | -------------------------------------------- |
| **Initialization**  | `useState(initialValue)`              | `this.state = { key: value }` in constructor |
| **Update**          | State setter function from `useState` | `this.setState({ key: newValue })`           |
| **Async Nature**    | State updates are batched and async   | Same — updates may be batched and async      |
| **Multiple States** | Multiple `useState` calls             | All state values in a single object          | */}

         </p>
         <h3>3. Side Effects</h3>
         <p>
            | Functional                                                | Class                                                                                         |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `useEffect()` handles mount, update, cleanup in one place | Separate lifecycle methods: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` |

         </p>
       <p>
        Example in functional:

        {/* 
        useEffect(() => {
        console.log("Mounted or updated");
        return () => console.log("Cleanup");
        }, []); */}

        Equivalent in class:

        {/*
         componentDidMount() {
        console.log("Mounted");
        }
        componentWillUnmount() {
        console.log("Cleanup");
        } */}
       </p>

       <h3>4. Props Handling</h3>
       <p>Both receive props — difference is access method:
{/* 
        Functional: function MyComp({ title }) { ... } */}

        Class: this.props.title</p>
        <h3>5. Performance</h3>
        <p>Functional components were historically faster (no lifecycle overhead), but React’s reconciliation optimizations have made both equally performant in most cases.

            Hooks allow avoiding unnecessary renders via React.memo.</p>
        
        <h3>6. Advantages & Disadvantages</h3>
        <p>
            Functional Components ✅
            Shorter, cleaner syntax

            Easier to read/test

            No this binding headaches

            Hooks enable powerful composition

            Encouraged in modern React

            Class Components ⚠️
            Verbose syntax

            this confusion

            Must split lifecycle logic across multiple methods

            Still needed for error boundaries (until React 18 introduces hooks for this)
        </p>
        
        </>

    )
}

export default FCvsCC;