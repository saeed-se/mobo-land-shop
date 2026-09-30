import TimerBox from "./TimerBox";

import useCountdown from "@/Hooks/useCountdown";

const CountdownTimer = ({ endDate }) => {
  const timeLeft = useCountdown(endDate);

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="mt-2 flex items-center justify-center text-lg">
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
