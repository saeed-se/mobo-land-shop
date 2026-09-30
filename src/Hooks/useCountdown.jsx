import { useEffect, useState } from "react";

import { calculateTimeLeft } from "@/services/timeLeft";

const useCountdown = (endDate) => {
  const [timeLeft, setTimeLeft] = useState(() =>
    endDate ? calculateTimeLeft(endDate) : null,
  );

  useEffect(() => {
    if (!endDate) {
      setTimeLeft(null);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return timeLeft;
};

export default useCountdown;
