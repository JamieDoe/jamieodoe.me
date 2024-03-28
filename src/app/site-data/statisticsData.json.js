import getGithubStats from "../utils/getGithubStats";

const stats = getGithubStats();

console.log(stats);

export const statisticsData = [
  {
    name: "Javascript",
    value: 65,
    color: "#1ebbcd",
    labelStyle: "bg-[#1ebbcd]",
  },
  { name: "HTML", value: 25, color: "#f4b60a", labelStyle: "bg-[#f4b60a]" },
  { name: "AstroJs", value: 10, color: "#a2c114", labelStyle: "bg-[#a2c114]" },
];
