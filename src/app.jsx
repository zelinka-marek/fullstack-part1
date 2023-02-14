import { Counter } from "./components/counter";
import { Hello } from "./components/hello";
import { Steps } from "./components/steps";

export function App() {
  const person3 = { name: "Peter", age: 10 };

  return (
    <>
      <h2>Greetings</h2>
      <Hello name="Marek" age={26} />
      <Hello name="George" age={26 + 10} />
      <Hello name={person3.name} age={person3.age} />
      <hr />
      <h2>Counter</h2>
      <Counter />
      <hr />
      <h2>Steps</h2>
      <Steps />
    </>
  );
}
