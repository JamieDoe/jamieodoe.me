"use client";

// import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FlipText({
  textOptions,
  classname,
}: {
  textOptions: string[];
  classname?: string;
}) {
  // const [currentOptionIndex, setCurrentOptionIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentOptionIndex((prevIndex) => {
  //       const nextIndex = prevIndex + 1;
  //       if (nextIndex >= textOptions.length) {
  //         clearInterval(interval);
  //         return 0; // Reset to the first option
  //       }
  //       return nextIndex;
  //     });
  //   }, 3000); // Change every 3 seconds

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [textOptions]);

  return (
    <span className={cn("text-orange-600", classname)}>
      {/* {textOptions[currentOptionIndex]} */}
      {textOptions[0]}
    </span>
  );
}
