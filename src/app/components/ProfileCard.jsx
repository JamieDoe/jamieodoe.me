import ProfileBanner from "./ProfileBanner";

export default function ProfileCard({ profileData }) {
  return (
    <div className="rounded-t-2xl rounded-b-lg bg-secondary overflow-hidden">
      <ProfileBanner profileData={profileData} />
      <div className="p-4">
        <h1 className="text-3xl font-bold">{profileData.name}</h1>
        <span className="font-light">
          <h2 className="font-semibold">{profileData.position}</h2>
          <h3 className="font-light">{profileData.location}</h3>
        </span>
      </div>
    </div>
  );
}
