import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlipText } from "@/components/FlipText";

import { homePage } from "@/lib/site-data/home-page.json";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

function generateAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      {/* Hero */}
      <div className="flex md:min-h-dvh flex-col gap-6 md:justify-center px-4 py-32 md:px-16 lg:py-12 duration-200 ease-in-out">
        <Badge className="text-orange-600 bg-background border-2 border-orange-600 ">
          {homePage.badge}
        </Badge>
        <h1
          className="text-6xl font-bold"
          id={generateAnchor(homePage.title.text)}
        >
          {homePage.title.text}{" "}
          <FlipText textOptions={homePage.title.options} />
        </h1>
        <h2 className="text-2xl font-semibold leading-snug max-w-4xl">
          {homePage.subtitle}
        </h2>
        <div className="flex flex-wrap gap-2">
          {homePage.topSkills.map((skill) => (
            <Badge
              key={skill}
              className="text-orange-600 bg-background border-2 border-orange-600 hover-animation hover:scale-105"
            >
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          {homePage.ctas.map((cta) => (
            <Link
              key={cta.text}
              href={cta.url}
              download={cta.downloadable}
              target={cta.downloadable ? undefined : "_blank"}
              rel={cta.downloadable ? undefined : "noopener noreferrer"}
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                cta.downloadable
                  ? "bg-orange-600 text-white hover:bg-orange-600 hover:text-white"
                  : "text-orange-600 bg-background hover:bg-primary/5 hover:text-orange-600",
                "font-semibold  border-2 border-orange-600 hover-animation"
              )}
            >
              <cta.icon />
              {cta.text}
              <span className="sr-only">{cta.text}</span>
            </Link>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          {homePage.socialLinks.map((link) => (
            <TooltipProvider key={link.name}>
              <Tooltip>
                <TooltipTrigger className="group">
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        size: "icon",
                      }),
                      "shadow-md border-2 border-orange-600 text-orange-600 bg-background hover:bg-orange-600 hover:text-white transition-colors duration-200 ease-in-out"
                    )}
                  >
                    <link.icon
                      size={16}
                      className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-200 ease-in-out"
                    />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{link.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      <Separator />

      {/* Education */}
      <div className="flex flex-col gap-8 px-4 py-16 md:px-16 lg:py-12">
        <div className="flex flex-col gap-2 mb-4">
          <h2
            className="text-3xl font-bold"
            id={generateAnchor(homePage.education.title)}
          >
            {homePage.education.title}
          </h2>
          <Separator className="bg-gradient-to-r from-orange-600 to-transparent h-fit" />
        </div>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {homePage.education.items.map((item) => (
            <Card key={item.field} className="hover-animation">
              <CardHeader>
                <CardTitle className="text-2xl">{item.institution}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <MapPin size={16} />
                  {item.location}
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardTitle>{item.field}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar size={16} />
                  {item.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4 rounded-md bg-orange-50 p-8">
                  <CardTitle className="text-lg">
                    {item.courseInformation.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {item.courseInformation.modules.map((area) => (
                      <Badge
                        key={area.name}
                        className="text-orange-600 bg-background border-2 border-orange-600 hover-animation hover:scale-105"
                      >
                        {area.name}
                        <area.icon />
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Experience */}
      <div className="flex flex-col gap-4 px-4 py-16 md:px-16 lg:py-12">
        <h2
          className="text-3xl font-bold"
          id={generateAnchor(homePage.experience.title)}
        >
          {homePage.experience.title}
        </h2>
        <Separator className="bg-gradient-to-r from-orange-700 via-orange-500 to-transparent h-fit mb-8" />
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {homePage.experience.items.map((item) => (
            <Card key={item.title} className="hover-animation">
              <CardHeader>
                <Link
                  href={item.logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  {item.logo.src ? (
                    <Image
                      src={item.logo.src}
                      alt={item.logo.alt}
                      width={item.logo.width}
                      height={item.logo.height}
                    />
                  ) : (
                    <CardTitle className="text-3xl">{item.company}</CardTitle>
                  )}
                </Link>
                <CardTitle className="sr-only">{item.company}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <MapPin size={16} />
                  {item.location}
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar size={16} />
                  {item.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-4 rounded-md bg-orange-50 p-8">
                  {item.projects.map(({ name, description }) => (
                    <li
                      key={description}
                      className="list-item gap-2 ml-4 max-w-3xl"
                    >
                      <CardTitle>{name}:</CardTitle>
                      <CardDescription className="text-primary/70 text-md">
                        {description}
                      </CardDescription>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Projects */}
      <div className="flex flex-col gap-4 px-4 py-16 md:px-16 lg:py-12">
        <h2
          className="text-3xl font-bold"
          id={generateAnchor(homePage.projects.title)}
        >
          {homePage.projects.title}
        </h2>
        <Separator className="bg-gradient-to-r from-orange-700 via-orange-500 to-transparent h-fit mb-8" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {homePage.projects.items.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Card
                key={item.name}
                className="pt-0 overflow-hidden h-full hover-animation"
              >
                <Image
                  src={item.thumbnail.src}
                  alt={item.thumbnail.alt}
                  width={item.thumbnail.width}
                  height={item.thumbnail.height}
                  className="object-cover border-b-2"
                />
                <div className="flex flex-col justify-between gap-6 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl pb-4">{item.name}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((tech) => (
                        <Badge
                          key={tech}
                          className="text-orange-600 bg-background border-2 border-orange-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold ">
                      {item.description}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Separator />

      {/* Skills */}
      <div className="flex flex-col gap-4 px-4 py-16 md:px-16 lg:py-12">
        <h2
          className="text-3xl font-bold"
          id={generateAnchor(homePage.skills.title)}
        >
          {homePage.skills.title}
        </h2>
        <Separator className="bg-gradient-to-r from-orange-700 via-orange-500 to-transparent h-fit mb-8" />
        <Card className="flex flex-col gap-4">
          <CardContent className="flex flex-wrap gap-4">
            {homePage.skills.items.map((skill) => (
              <Badge
                key={skill.name}
                className={cn(
                  "border-2 hover-animation hover:scale-105",
                  skill.category === "programming"
                    ? "border-red-500 bg-red-50 text-red-500"
                    : skill.category === "design"
                    ? "border-blue-500 bg-blue-50 text-blue-500"
                    : skill.category === "database"
                    ? "border-green-500 bg-green-50 text-green-500"
                    : skill.category === "tools"
                    ? "border-yellow-500 bg-yellow-50 text-yellow-500"
                    : skill.category === "cloud"
                )}
              >
                <skill.icon size={16} />
                {skill.name}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Languages */}
      <div className="flex flex-col gap-4 px-4 py-16 md:px-16 lg:py-12">
        <h2
          className="text-3xl font-bold"
          id={generateAnchor(homePage.languages.title)}
        >
          {homePage.languages.title}
        </h2>
        <Separator className="bg-gradient-to-r from-orange-700 via-orange-500 to-transparent h-fit mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {homePage.languages.items.map((language) => (
            <Card key={language.name} className="w-fit group hover-animation">
              <CardHeader className="flex flex-row justify-between gap-2">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Image
                    src={language.flag.src}
                    alt={language.flag.alt}
                    width={language.flag.width}
                    height={language.flag.height}
                    className="group-hover:scale-120 transition-transform duration-200"
                  />
                  {language.name}
                </CardTitle>
                <Badge className="text-orange-600 bg-background border-2 border-orange-600">
                  {language.level}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold rounded-md bg-orange-50 p-8">
                  {language.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="flex flex-col gap-4 px-4 py-16 md:px-16 lg:py-12">
        <h2
          className="text-3xl font-bold"
          id={generateAnchor(homePage.interests.title)}
        >
          {homePage.interests.title}
        </h2>
        <Separator className="bg-gradient-to-r from-orange-700 via-orange-500 to-transparent h-fit mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {homePage.interests.items.map((interest) => (
            <Card key={interest.name} className="w-fit group hover-animation">
              <CardHeader className="flex flex-row justify-between gap-2">
                <CardTitle className="text-lg">{interest.name}</CardTitle>
                <interest.icon className="text-orange-600 group-hover:-rotate-12 group-hover:scale-105 transition-transform duration-200" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold rounded-md bg-orange-50 p-8">
                  {interest.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
