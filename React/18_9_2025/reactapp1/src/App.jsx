// App.jsx
import "./App.css";
import { Counter } from "./components/useEffectDemo1";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/Fallback";

function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={() => {
          // optional: reset state if needed
        }}
      >
        <Counter />
      </ErrorBoundary>
    </>
  );
}

export default App;
