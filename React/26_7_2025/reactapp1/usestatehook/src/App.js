import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>State and setState in Class Components</h1>
        <ol>
          <li>
           1. The State is a build-in object in React class components.
            In the state object,
            we store property values that belong to the Components 
          </li>
          <li>
            2.When the components changes the components re-renders
          </li>
          <li>
            3.We use the setState() method to change the state object in the CLass Component
          </li>
        </ol>

        <div>
            <h1 style={{textAlign:"center"}}> useState Hook in Functional Components</h1>
            <ol>
              <li>
                1.Question: Only class Components has in-built state object then
                how to define state variables in functional components
              </li>
              <li>
                2.The useState is a Hook(function) that allows you to have state
                variables in functional components.
              </li>
              <li>
                3.To use hooks ,first we should import the useState hooks from react.
                The useState is a function which takes one argument and
                 returns a current state and fucntion that lets you update it
              </li>
            </ol>
        </div>
</div>




  );
}

export default App;
