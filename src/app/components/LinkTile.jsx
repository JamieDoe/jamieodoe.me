import Link from "next/link";

export default function LinkTile({ href, icon, target, resume }) {
  return (
    <Link
      className="w-[40px] h-[40px]"
      href={href}
      target={target}
      download={resume ? href : null}
    >
      {icon}
    </Link>
  );
}
