import { portfolioData } from "../site-data/portfolioData";
import PortfolioCard from "./PortfolioCard";

export default function MainSection() {
  return (
    <section className="">
      <PortfolioCard portfolios={portfolioData} />
    </section>
  );
}
