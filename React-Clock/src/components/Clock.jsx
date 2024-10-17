import { useEffect } from "react";
import { useState } from "react";

export default function Clock() {
  const myDate = new Date();
  const day = myDate.toLocaleString(undefined, { weekday: "long" });

  const [currentTime, setCurrentTime] = useState(
    myDate.toLocaleTimeString([], {
      hour12: false,
    })
  );
  
  const formattedDate = myDate
    .toLocaleDateString(undefined, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const newTime = now.toLocaleTimeString([], { hour12: false });
      setCurrentTime(newTime);
    };
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="clock">
      <h2>Simple Clock</h2>
      <div id="day">
        <strong>Day</strong> : {day}
      </div>

      <div id="date">
        <strong>Date</strong> : {formattedDate}
      </div>

      <div id="time">
        {" "}
        <strong>Time</strong> : {currentTime}
      </div>
    </section>
  );
}
