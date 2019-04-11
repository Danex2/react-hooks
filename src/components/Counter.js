import React, { useState, useEffect } from "react";

function Counter() {
  const [count, increment] = useState(0);
  const [timer, countdown] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (timer <= 29) {
      var inter = setInterval(function() {
        // only works properly if i count up instead of down?
        countdown(timer => timer + 1);
      }, 1000);
    }
    if (timer === 30) {
      setDisabled(true);
    }
    return () => clearInterval(inter);
  }, [timer, disabled]);

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <h3>{`The current count is ${count}`}</h3>
      <button disabled={disabled} onClick={() => increment(count => count + 1)}>
        Increment
      </button>
      <h4>How many clicks can you get in 30 seconds?</h4>
    </div>
  );
}

export default Counter;
