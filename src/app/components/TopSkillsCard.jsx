export default function TopSkillsCard({ skills }) {
  return (
    <div className="rounded-lg overflow-hidden bg-secondary p-4 flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Top Skills</h2>
      <div className="flex gap-[6px] flex-wrap">
        {skills.map((skill) => {
          return (
            <span className="bg-blue-300 px-2 rounded-[4px]" key={skill}>
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}
