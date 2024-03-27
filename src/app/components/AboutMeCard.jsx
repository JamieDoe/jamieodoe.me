export default function AboutMeCard({ about, skills }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-secondary p-4 flex flex-col gap-4 w-fit">
      <h2 className="text-3xl font-bold">About Me</h2>
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
        <div className="pr-[100px] text-md font-light">{about.description}</div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">My interests</h3>
        <div className="flex gap-1 flex-wrap">
          {about.interests.map(({ label, icon, color, border }) => {
            return (
              <span
                key={label}
                className={`flex gap-2  font-bold rounded px-[6px] text-sm border ${
                  color ? color : ""
                } ${border ? border : ""}`}
              >
                <span>{icon}</span>
                <p className="text-nowrap">{label}</p>
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">My Skills</h3>
        <div className="flex gap-1 flex-wrap">
          {skills.map(({ label, color, border, i }) => {
            return (
              <span
                key={label}
                className={`flex gap-2  font-bold rounded px-[6px] text-sm border ${
                  color ? color : ""
                } ${border ? border : ""}`}
              >
                <p className="text-nowrap">{label}</p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
