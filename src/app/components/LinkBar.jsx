import LinkTile from "./LinkTile";

import { linkData } from "../site-data/linkData.json";

export default function LinkBar() {
  return (
    <div className="rounded-xl overflow-hidden py-10 link_grid">
      <div className="flex flex-col">
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
      <div className="flex flex-col">
        {linkData.bottomLinks.map(({ link, icon, target }) => (
          <LinkTile key={link} href={link} icon={icon} target={target} />
        ))}
      </div>
    </div>
  );
}
