import { useState } from "react";

function Display(props) {
  const { count } = props;

  return <div>{count}</div>;
}

function Button(props) {
  const { children, type = "button", ...restProps } = props;

  return (
    <button type={type} {...restProps}>
      {children}
    </button>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <Display count={count} />
      <div style={{ display: "flex", gap: 8 }}>
        <Button onClick={increase} aria-label="plus">
          +
        </Button>
        <Button onClick={decrease} aria-label="minus">
          -
        </Button>
        <Button onClick={reset}>reset</Button>
      </div>
    </div>
  );
}
