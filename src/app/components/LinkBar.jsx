import LinkTile from "./LinkTile";

import { linkData } from "../site-data/linkData.json";

export default function LinkBar() {
  const linkContainerClass =
    "flex flex-row rounded-lg overflow-hidden bg-secondary justify-center items-center gap-1 p-4 1360:flex-col";
  return (
    <div className="rounded-xl overflow-hidden flex flex-row justify-between 1360:flex-col">
      <div className={linkContainerClass}>
        {linkData.topLinks.map(({ link, icon, target, resume }) => (
          <LinkTile
            key={link}
            href={link}
            icon={icon}
            target={target}
            resume={resume}
          />
        ))}
      </div>
      <div className={linkContainerClass}>
        {linkData.bottomLinks.map(({ link, icon, target }) => (
          <LinkTile key={link} href={link} icon={icon} target={target} />
        ))}
      </div>
    </div>
  );
}
