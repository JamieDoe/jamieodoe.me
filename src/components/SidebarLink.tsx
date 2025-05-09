import Link from "next/link";
import { cn } from "@/lib/utils";

export function SidebarLink({
  url,
  text,
  icon,
}: {
  url: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={url}
      className={cn(
        "flex items-center  gap-2 p-2 text-lg font-semibold rounded-md transition-colors duration-200 ease-in-out hover:bg-orange-600/10 hover:text-orange-600"
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
