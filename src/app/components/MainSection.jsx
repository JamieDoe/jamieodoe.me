import { portfolioData } from "../site-data/portfolioData";
import { statisticsData } from "../site-data/statisticsData.json";
import PortfolioCard from "./PortfolioCard";
import StatisticsCard from "./StatisticsCard";
import TitleCard from "./TitleCard";

export default function MainSection() {
  return (
    <section className="px-14 flex flex-col gap-[12px]">
      <TitleCard />
      <PortfolioCard portfolios={portfolioData} />
      <StatisticsCard statistics={statisticsData} />
    </section>
  );
}
