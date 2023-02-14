const dateFormatter = new Intl.DateTimeFormat("en", {
  timeStyle: "short",
  dateStyle: "long",
});

const getBornYear = (age) => new Date().getFullYear() - age;

export function Hello(props) {
  const { name, age } = props;
  const today = new Date();

  return (
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      <div>
        Hello {name}, you are {age} years old!
      </div>
      <div>You were born in {getBornYear(age)}.</div>
      <div>
        Currently, it is{" "}
        <time dateTime={today.toISOString()}>
          {dateFormatter.format(today)}
        </time>
      </div>
    </div>
  );
}
