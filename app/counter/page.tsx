'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
    </div>
  );
}
