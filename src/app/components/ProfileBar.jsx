import Image from "next/image";

import { profileData } from "../site-data/profileData.json";
import ProfileCard from "./ProfileCard";
import TopSkillsCard from "./TopSkillsCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import Divider from "./Divider";

export default function ProfileBar() {
  return (
    <>
      <section className="flex flex-col gap-3">
        <ProfileCard profileData={profileData} />
        <TopSkillsCard skills={profileData.topSkills} />
        <ExperienceCard experiences={profileData.experience} />
        <EducationCard education={profileData.education} />
      </section>
    </>
  );
}
