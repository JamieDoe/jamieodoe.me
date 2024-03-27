import Image from "next/image";
import Link from "next/link";

import { otherProjectsData } from "../site-data/otherProjectsData.json";

export default function OtherProjectsCard({ otherProjects }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-secondary p-4 flex flex-col gap-4 min-w-fit h-full">
      <h2 className="text-3xl font-bold">Other Projects</h2>
      {otherProjectsData.map(({ label, href, image, description }) => {
        return (
          <Link
            href={href}
            className="bg-secondary rounded-md overflow-hidden relative"
            target="_blank"
            key={href}
          >
            <div className="w-full b-background rounded-md overflow-hidden h-[80px] opacity-30">
              <Image
                className="w-full h-full object-cover"
                width={1000}
                height={200}
                src={image.url}
                alt={image.alt}
              />
            </div>
            <div className="p-4 flex flex-col gap-1 absolute top-0 left-0">
              <h3 className="text-xl font-semibold">{label}</h3>
              {description && (
                <p className="text-sm font-light">{description}</p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
