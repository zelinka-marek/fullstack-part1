import { useState } from "react";
import { Counter } from "./components/counter";
import { Hello } from "./components/hello";

export function App() {
  const person3 = { name: "Peter", age: 10 };
  const [count, setCount] = useState(0);

  setTimeout(() => setCount((count) => count + 1), 1000);

  return (
    <>
      <h2>Greetings</h2>
      <Hello name="Marek" age={26} />
      <Hello name="George" age={26 + 10} />
      <Hello name={person3.name} age={person3.age} />
      <hr />
      <h2>Counter</h2>
      <Counter count={count} />
    </>
  );
}
