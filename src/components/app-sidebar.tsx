import * as React from "react";
import {
  BicepsFlexed,
  Code,
  GraduationCap,
  NotebookText,
  Earth,
  Heart,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarLink } from "./SidebarLink";

import { AvatarImage } from "./AvatarImage";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Education",
      url: "#education",
      icon: <GraduationCap size={16} />,
    },
    {
      title: "Experience",
      url: "#experience",
      icon: <NotebookText size={16} />,
    },
    {
      title: "Projects",
      url: "#projects",
      icon: <Code size={16} />,
    },
    {
      title: "Skills",
      url: "#skills",
      icon: <BicepsFlexed size={16} />,
    },
    {
      title: "Languages",
      url: "#languages",
      icon: <Earth size={16} />,
    },

    {
      title: "Interests",
      url: "#interests",
      icon: <Heart size={16} />,
    },

    // {
    //   title: "Contact",
    //   url: "#contact",
    //   icon: <ArrowBigDown size={16} />,
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="justify-center">
        <div className="flex items-center justify-center mb-4">
          <AvatarImage
            src="/images/Jamie_Doe_Pic.webp"
            alt="Jamie Doe"
            width={144}
            height={144}
          />
        </div>
        <SidebarGroup className="flex flex-col gap-4">
          {data.navMain.map((item) => (
            <SidebarLink
              key={item.title}
              url={item.url}
              text={item.title}
              icon={item.icon}
            />
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
