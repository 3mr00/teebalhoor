"use client";
import React, { useState, useEffect } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import { useTranslations } from "next-intl";

const CountDown = () => {
  const t = useTranslations();

  const endTime = new Date("2025-01-25T21:00:00Z").getTime(); // when i need local time
  const [progress, setProgress] = useState(100); // Start with full progress

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = endTime - now;

      if (remainingTime <= 0) {
        setProgress(0);
        clearInterval(interval);
      } else {
        const percentage =
          (remainingTime / (endTime - new Date().getTime())) * 100;
        setProgress(percentage);
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="flex  flex-col justify-center items-center bg-background mt-1 rounded-b-lg py-5">
      <div className="mb-2 text-center text-lg font-bold">
        {t("HomePage.hurryUp")}
        <span className="rounded-md bg-gray-200 px-2 font-bold mx-2">5</span>
        {t("HomePage.store")}
      </div>
      <div>
        <div className="mt-4 relative ">
          <div className="bg-gray-300 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-1000"
              style={{
                width: `${progress}%`,
                backgroundColor: progress < 20 ? "red" : "green",
              }}
            />
          </div>
          {/* <p className="absolute right-0 top-0 text-xs text-gray-600">
            {Math.round(progress)}%
          </p> */}
        </div>
        <div dir="LTR" className="border border-gray-400 rounded-md p-4">
          <FlipCountdown
            hideYear
            hideMonth
            hideDay
            theme="dark"
            size="small"
            titlePosition="bottom"
            endAtZero
            endAt={endTime}
            hourTitle={t("HomePage.hour")}
            minuteTitle={t("HomePage.minute")}
            secondTitle={t("HomePage.second")}
          />
        </div>
      </div>
    </div>
  );
};

export default CountDown;
