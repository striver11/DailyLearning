import React, { useState } from 'react';

// Custom hook for counter logic if needed in multiple components
function useCounter(initialValue) {
  const [count, setCount] = useState(() => initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return [count, increment, decrement];
}

function Counter2() {
  const [count, increment, decrement] = useCounter(4);
  const [theme, setTheme] = useState('blue');

  function handleIncrement() {
    increment();
    setTheme('red');
  }

  function handleDecrement() {
    decrement();
    setTheme('blue');
  }

  return (
    <div>
      <button
        onClick={handleDecrement}
        aria-label="Decrement count"
        disabled={count <= 0}
      >
        -
      </button>
      <span aria-live="polite">{count}</span>
      <button
        onClick={handleIncrement}
        aria-label="Increment count"
      >
        +
      </button>
      <div>Theme: {theme}</div>
    </div>
  );
}

export default Counter2;
