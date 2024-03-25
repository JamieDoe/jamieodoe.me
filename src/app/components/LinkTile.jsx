import Link from "next/link";

import { linkData } from "../site-data/linkData.json";

export default function LinkTile() {
  return (
    <>
      {linkData.map(({ link, icon }) => {
        return (
          <Link href={link} target="_blank" key={link}>
            {icon}
          </Link>
        );
      })}
    </>
  );
}
