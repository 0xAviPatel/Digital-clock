import React, { useState } from "react";

const CurrentTime = () => {
  let date = new Date();

  let hour = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const [time, setTime] = useState(hour);

  const changeTime = () => {
    const newTime = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    setTime(newTime);
  };

  setInterval(() => {
    changeTime();
  }, 1000);

  return (
    <div>
      <h2>{time}</h2>
      <button onClick={changeTime}>Set Current Time</button>
      {console.log(time)}
    </div>
  );
};

export default CurrentTime;
