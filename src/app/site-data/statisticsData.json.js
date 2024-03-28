import getGithubStats from "../utils/getGithubStats";

const stats = getGithubStats();

console.log(stats);

export const statisticsData = [
  {
    name: "Javascript",
    value: 65,
    color: "#14747f",
    labelStyle: "bg-[#14747f]",
  },
  { name: "HTML", value: 25, color: "#ae8105", labelStyle: "bg-[#ae8105]" },
  { name: "AstroJs", value: 10, color: "#6c8302", labelStyle: "bg-[#6c8302]" },
];
