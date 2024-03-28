"use client";

import Clock from "react-live-clock";

export default function TitleCard() {
  return (
    <div className="rounded-t-2xl rounded-b-lg bg-secondary overflow-hidden px-8 gap-4 py-4 flex flex-col lg:flex-row lg:justify-between lg:items-center ">
      <h2 className="text-2xl sm:text-3xl  font-bold">
        I&apos;m Frontend React/Javascript Developer 👨‍💻
      </h2>
      <span className="flex gap-4 text-xl font-bold">
        <p>My time: </p>
        <Clock format={"HH:mm"} ticking={true} />
      </span>
    </div>
  );
}
