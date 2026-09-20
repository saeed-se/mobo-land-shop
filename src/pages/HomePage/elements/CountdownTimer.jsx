import React, { useState, useEffect } from "react";
import TimerBox from "./TimerBox";

const CountdownTimer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endDate) - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center text-lg mt-2">
      <TimerBox digit={timeLeft.seconds} />
      <span className="font-dana-DemiBold text-lg">:</span>
      <TimerBox digit={timeLeft.minutes} />
      <span className="font-dana-DemiBold text-lg">:</span>
      <TimerBox digit={timeLeft.hours} />
      <span className="font-dana-DemiBold text-lg">:</span>
      <TimerBox digit={timeLeft.days} />
    </div>
  );
};

export default CountdownTimer;
