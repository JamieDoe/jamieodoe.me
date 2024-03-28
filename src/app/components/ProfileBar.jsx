import { profileData } from "../site-data/profileData.json";
import ProfileCard from "./ProfileCard";
import TopSkillsCard from "./TopSkillsCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";

export default function ProfileBar() {
  return (
    <>
      <section className="flex flex-col gap-3">
        <ProfileCard profileData={profileData} />
        <TopSkillsCard skills={profileData.topSkills.slice(0, 6)} />
        <ExperienceCard experiences={profileData.experience} />
        <EducationCard education={profileData.education} />
      </section>
    </>
  );
}
