export default function AboutMeCard({
  about,
  skillCategories,
  interestCategories,
  skills,
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-secondary p-4 w-full h-full">
      <div className="max-w-[768px] flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl  font-bold">About Me</h2>
        <div className="flex flex-col gap-1">
          <span>
            <h3 className="flex gap-2 items-center font-light">
              Full name:{" "}
              <span className="text-lg font-semibold">{about.fullName}</span>
            </h3>
            <h3 className="flex gap-2 items-center font-light">
              Age: <span className="text-lg font-semibold">{about.age}</span>
            </h3>
          </span>
          <div className="text-md font-light md:pr-[100px]">
            {about.description}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">My Skills</h3>
          <div className="flex gap-1 flex-wrap">
            {skills.map(({ label, category }) => {
              return skillCategories.map(({ type, styling }) => {
                if (type !== category) {
                  return null;
                }
                return (
                  <span
                    key={label}
                    className={`flex gap-2  font-bold rounded px-[6px] text-sm border ${styling.background} ${styling.border}`}
                  >
                    <p className="text-nowrap">{label}</p>
                  </span>
                );
              });
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">My interests</h3>
          <div className="flex gap-1 flex-wrap">
            {about.interests.map(({ label, icon, category }) => {
              return interestCategories.map(({ type, styling }) => {
                if (type !== category) {
                  return null;
                }
                return (
                  <span
                    key={label}
                    className={`flex gap-2 font-bold rounded px-[6px] text-sm border ${styling.background} ${styling.border}`}
                  >
                    <span>{icon}</span>
                    <p className="text-nowrap">{label}</p>
                  </span>
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
