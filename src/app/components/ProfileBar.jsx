import Image from "next/image";

import { profileData } from "../site-data/profileData.json";

export default function ProfileBar() {
  return (
    <section className="rounded-3xl overflow-hidden bg-slate-300">
      <div className="flex flex-col gap-8">
        <div className="relative">
          <div className="h-40">
            <Image
              className="h-full w-full object-cover"
              src={profileData.profileBanner.url}
              width={1000}
              height={200}
              alt={profileData.profileBanner.alt}
            />
          </div>
          <div className="w-28 h-28 rounded-full overflow-hidden absolute top-[65%] left-1/2 -translate-x-1/2">
            <Image
              src={profileData.profilePicture.url}
              className="w-full h-full object-cover"
              height={112}
              width={112}
              alt=""
            />
          </div>
        </div>
        {profileData.openToWork && (
          <div className="px-4">
            <span className="bg-green-700 py-1 px-2 text-xs rounded">
              Open to work
            </span>
          </div>
        )}
      </div>
      <div>
        <h1>{profileData.name}</h1>
      </div>
    </section>
  );
}
