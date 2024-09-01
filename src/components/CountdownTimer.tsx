import { useEffect, useState } from "react";

interface CountdownTimerProps {
  format: string;
  timeInSeconds: number;
  onTimerFinish: () => void;
  style: object;
}

function CountdownTimer({
  format,
  timeInSeconds,
  onTimerFinish,
  style,
}: CountdownTimerProps) {
  const [time, setTime] = useState(timeInSeconds);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          onTimerFinish();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = () => {
    if (!format) {
      return time;
    }

    if (format === "mm:ss") {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    }
  };

  return <div style={style}>{formatTime()}</div>;
}

export default CountdownTimer;
