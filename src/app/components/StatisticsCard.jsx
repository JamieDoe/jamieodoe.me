"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PieChart } from "./PieChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatisticsCard({ statistics }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-secondary p-4 flex flex-col gap-4 w-fit ">
      <h2 className="text-xl font-semibold">Most used languages</h2>
      <div className="flex gap-4 items-center px-6">
        <PieChart
          height={150}
          width={150}
          data={statistics}
          className="cursor-pointer"
        />
        <div>
          <ul className="flex flex-col gap-2">
            {statistics.map(({ name, value, labelStyle }) => {
              return (
                <li
                  key={name}
                  className="flex items-center gap-2 font-semibold"
                >
                  <span className={`h-2 w-2 ${labelStyle}`}></span>
                  {name} <span className="font-light">- {value} %</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
