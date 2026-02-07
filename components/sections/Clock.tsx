import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const IPMATCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-04T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[130px] sm:max-w-[180px] md:max-w-[200px] mx-auto sm:mx-0">
      <div className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded sm:rounded-lg shadow-lg p-1 sm:p-2.5 backdrop-blur-sm border border-purple-300/20">
        {/* Header */}
        <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-0.5 sm:mb-1.5">
          <Clock className="text-white w-2 h-2 sm:w-3 sm:h-3" />
          <p className="text-white text-[6.5px] sm:text-[9px] font-bold tracking-tight">
            IPMAT 2026
          </p>
        </div>

        {/* Timer Grid */}
        <div className="grid grid-cols-4 gap-[2px] sm:gap-1">
          {/* Days */}
          <div className="bg-white/20 backdrop-blur-sm rounded-sm sm:rounded px-[2px] py-[3px] sm:px-1 sm:py-1.5 text-center">
            <div className="text-white text-[6px] sm:text-sm font-black leading-none">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-white/90 text-[5px] sm:text-[7px] font-bold uppercase mt-[2px] sm:mt-0.5 tracking-tighter">
              D
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white/20 backdrop-blur-sm rounded-sm sm:rounded px-[2px] py-[3px] sm:px-1 sm:py-1.5 text-center">
            <div className="text-white text-[6px] sm:text-sm font-black leading-none">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-white/90 text-[5px] sm:text-[7px] font-bold uppercase mt-[2px] sm:mt-0.5 tracking-tighter">
              H
            </div>
          </div>

          {/* Minutes */}
          <div className="bg-white/20 backdrop-blur-sm rounded-sm sm:rounded px-[2px] py-[3px] sm:px-1 sm:py-1.5 text-center">
            <div className="text-white text-[6px] sm:text-sm font-black leading-none">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-white/90 text-[5px] sm:text-[7px] font-bold uppercase mt-[2px] sm:mt-0.5 tracking-tighter">
              M
            </div>
          </div>

          {/* Seconds */}
          <div className="bg-white/20 backdrop-blur-sm rounded-sm sm:rounded px-[2px] py-[3px] sm:px-1 sm:py-1.5 text-center">
            <div className="text-white text-[6px] sm:text-sm font-black leading-none">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-white/90 text-[5px] sm:text-[7px] font-bold uppercase mt-[2px] sm:mt-0.5 tracking-tighter">
              S
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-white/95 text-[6px] sm:text-[8px] text-center mt-0.5 sm:mt-1 font-semibold">
          May 4, 2026
        </p>
      </div>
    </div>
  );
};

export default IPMATCountdownTimer;