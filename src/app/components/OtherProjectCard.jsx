import Image from "next/image";
import Link from "next/link";

import { otherProjectsData } from "../site-data/otherProjectsData.json";

export default function OtherProjectsCard({ otherProjects }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-secondary p-4 flex flex-col gap-4 min-w-fit h-full ">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold duration-300 ">
          Other Projects
        </h2>
        <div className="flex flex-col gap-2 md:flex-row 2xl:flex-col">
          {otherProjectsData.map(({ label, href, image, description }) => {
            return (
              <Link
                href={href}
                className="bg-secondary rounded-md overflow-hidden relative"
                target="_blank"
                key={href}
              >
                <div className="w-full b-background rounded-md overflow-hidden max-h-[75px] opacity-30">
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
      </div>
    </div>
  );
}
