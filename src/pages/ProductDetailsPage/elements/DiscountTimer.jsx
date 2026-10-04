const DiscountTimer = ({ className = "", timeLeft }) => {
  return (
    <div className={`md:mb-5 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-gray/80 px-3 py-1 font-dana-DemiBold text-sm max-xs:text-xs text-white">
          موبو آف
        </span>

        <div className="flex items-center gap-1 font-dana-DemiBold *:text-gray/80 text-lg max-xs:text-base">
          <span>{String(timeLeft?.seconds).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(timeLeft?.minutes).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(timeLeft?.hours).padStart(2, "0")}</span>
          <span>:</span>
          <span>{timeLeft?.days}</span>
        </div>
      </div>

      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-full rounded-full bg-primary" />
      </div>
    </div>
  );
};

export default DiscountTimer;
