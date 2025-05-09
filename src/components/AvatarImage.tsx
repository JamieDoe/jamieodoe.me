import Image from "next/image";

export function AvatarImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex items-center justify-center rounded-full p-2 bg-gradient-to-b from-orange-400 to-orange-600 shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full"
      />
    </div>
  );
}
