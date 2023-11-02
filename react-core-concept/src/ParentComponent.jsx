import { useState } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ChildComponent1 count={count} setCount={setCount} />
      <ChildComponent2 count={count} setCount={setCount} />
    </div>
  );
}

function ChildComponent1({ count, setCount }) {
  return (
    <div>
      <p>Count in ChildComponent1: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function ChildComponent2({ count, setCount }) {
  return (
    <div>
      <p>Count in ChildComponent2: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

