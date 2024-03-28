"use client";

import Clock from "react-live-clock";
import { FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

export default function TitleCard() {
  return (
    <div className="rounded-t-2xl rounded-b-lg bg-secondary overflow-hidden px-8 gap-4 py-4 flex flex-col lg:flex-row lg:justify-between lg:items-center ">
      <h2 className="text-lg sm:text-3xl font-bold duration-300">
        I&apos;m Frontend React/Javascript Developer 👨‍💻
      </h2>
      <div className="flex flex-col ">
        <span className="flex gap-2 items-center font-semibold">
          <Link href="/jamie-doe-resume.pdf" target="_blank" download={true}>
            Download my CV{" "}
          </Link>
          <FaHandPointRight className="hidden 1360:flex" />
        </span>

        <span className="flex gap-4 text-md font-bold">
          <p>My time: </p>
          <Clock format={"HH:mm"} ticking={true} />
        </span>
      </div>
    </div>
  );
}
