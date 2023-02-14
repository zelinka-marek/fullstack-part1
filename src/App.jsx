const dateFormatter = new Intl.DateTimeFormat("en", {
  timeStyle: "short",
  dateStyle: "long",
});

function Hello(props) {
  const { name, age } = props;
  const now = new Date();

  return (
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      <p style={{ margin: 0 }}>
        Hello {name}, you are {age} years old!
      </p>
      <p style={{ margin: 0 }}>
        Currently, it is{" "}
        <time dateTime={now.toISOString()}>{dateFormatter.format(now)}</time>
      </p>
    </div>
  );
}

export function App() {
  const person3 = {
    name: "Peter",
    age: 10,
  };

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Marek" age={26} />
      <Hello name="George" age={26 + 10} />
      <Hello name={person3.name} age={person3.age} />
    </>
  );
}
