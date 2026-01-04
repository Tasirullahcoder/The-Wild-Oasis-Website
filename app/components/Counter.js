"use client";
import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <h1>there are total user {users.length} </h1>
    </div>
  );
}

export default Counter;
