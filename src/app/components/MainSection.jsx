import { portfolioData } from "../site-data/portfolioData";
import { statisticsData } from "../site-data/statisticsData.json";
import { aboutMeData, interestCategories } from "../site-data/aboutMeData.json";
import { profileData, skillCategories } from "../site-data/profileData.json";
import AboutMeCard from "./AboutMeCard";
import PortfolioCard from "./PortfolioCard";
import StatisticsCard from "./StatisticsCard";
import TitleCard from "./TitleCard";
import OtherProjectsCard from "./OtherProjectCard";

export default function MainSection() {
  return (
    <section className="flex flex-col gap-[12px]">
      <TitleCard />
      <PortfolioCard portfolios={portfolioData} />
      <div className="main_grid">
        <div className="main_grid_left">
          <StatisticsCard statistics={statisticsData} />
          <OtherProjectsCard />
        </div>
        <AboutMeCard
          about={aboutMeData}
          skillCategories={skillCategories}
          interestCategories={interestCategories}
          skills={profileData.topSkills}
        />
      </div>
    </section>
  );
}
