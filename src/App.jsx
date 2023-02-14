const dateFormatter = new Intl.DateTimeFormat("en", {
  timeStyle: "short",
  dateStyle: "long",
});

export function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  return (
    <div>
      <p>Hello world, it is {dateFormatter.format(now)}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
}
