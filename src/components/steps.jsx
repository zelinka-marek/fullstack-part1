import { useState } from "react";
import { Button } from "./button";

export function Steps() {
  const [clicks, setClicks] = useState([]);
  const leftClicks = clicks.filter((click) => click === "L").length;
  const rightClicks = clicks.filter((click) => click === "R").length;

  const handleLeftClick = () => {
    setClicks((clicks) => clicks.concat("L"));
  };

  const handleRightClick = () => {
    setClicks((clicks) => clicks.concat("R"));
  };

  return (
    <div>
      <div>
        {leftClicks}
        <Button onClick={handleLeftClick} aria-label="Left">
          L
        </Button>
        <Button onClick={handleRightClick} aria-label="Right">
          R
        </Button>
        {rightClicks}
      </div>
      <p>{clicks.join(" ")}</p>
    </div>
  );
}
