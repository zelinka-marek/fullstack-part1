const dateFormatter = new Intl.DateTimeFormat("en", {
  timeStyle: "short",
  dateStyle: "long",
});

function Hello() {
  const now = new Date();

  return (
    <div>
      <p>Hello world, it is {dateFormatter.format(now)}</p>
    </div>
  );
}

export function App() {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}
