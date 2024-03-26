export default function ExperienceCard({ experiences }) {
  return (
    <div className="rounded-lg overflow-hidden  p-4 flex flex-col">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="flex flex-col gap-2 mt-[6px]">
        {experiences.map(({ company, position, duration, skills }) => {
          return (
            <div key={company}>
              <h3 className="font-semibold text-xl">{company}</h3>
              <span>
                <p className="font-semibold text-md text-ellipsis line-clamp-1">
                  {position}
                </p>
                <p className="text-xs">{duration}</p>
              </span>
              <div className="flex gap-1 mt-2">
                {skills.map((skill) => {
                  return (
                    <span
                      key={skill}
                      className="bg-green-700 py-[2px] px-3 text-[10px] rounded"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
