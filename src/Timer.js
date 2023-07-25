import React, { useState, useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(timer);
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  const handleInputChange = (event, setter) => {
    const { value } = event.target;
    setter(parseInt(value, 10));
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        value={hours}
        onChange={(event) => handleInputChange(event, setHours)}
      />
      :
      <input
        type="number"
        min="0"
        max="59"
        value={minutes}
        onChange={(event) => handleInputChange(event, setMinutes)}
      />
      :
      <input
        type="number"
        min="0"
        max="59"
        value={seconds}
        onChange={(event) => handleInputChange(event, setSeconds)}
      />
      <div>
        Time remaining: {formatTime(hours)}:{formatTime(minutes)}:
        {formatTime(seconds)}
      </div>
    </div>
  );
};

export default Timer;
