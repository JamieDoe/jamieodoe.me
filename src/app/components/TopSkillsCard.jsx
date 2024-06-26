export default function TopSkillsCard({ categories, skills }) {
  return (
    <div className="rounded-lg overflow-hidden bg-secondary p-4 flex flex-col gap-2">
      <h2 className="text-2xl sm:text-3xl  font-bold">Top Skills</h2>
      <div className="flex gap-[6px] flex-wrap">
        {skills.map(({ label, category }) => {
          return categories.map(({ type, styling }) => {
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
  );
}
