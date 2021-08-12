import React, { useState } from 'react';

interface CounterProps {
  title: string;
  init?: number;
}

export default function Counter({ title, init }: CounterProps) {
  const [count, setCount] = useState<number>(init || 0);

  function handleIncrement() {
    setCount((value) => value + 1);
  }

  return (
    <div data-testid="counter">
      <h3 data-testid="counter-title">{title}</h3>
      <h1 data-testid="counter-value">{count}</h1>
      <button data-testid="counter-increment" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}
