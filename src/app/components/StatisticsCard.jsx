"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PieChart } from "./PieChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatisticsCard({ statistics }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-secondary p-4 flex h-fit flex-col gap-4">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        Most used languages
      </h2>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col sm:flex-row gap-4 items-center px-6">
          <PieChart
            height={150}
            width={150}
            data={statistics}
            å
            className="cursor-pointer border"
          />
          <div>
            <ul className="flex flex-col gap-2">
              {statistics.map(({ name, value, labelStyle }) => {
                return (
                  <li
                    key={name}
                    className="flex items-center gap-2 font-semibold "
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
    </div>
  );
}
