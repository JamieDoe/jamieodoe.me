import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function EducationCard({ education }) {
  return (
    <div className="rounded-t-lg rounded-b-2xl overflow-hidden  p-4 flex flex-col gap-2">
      <h2 className="text-3xl font-bold">Education</h2>
      <div className="flex flex-col gap-2">
        {education.map(({ institution, courseName, grade, linkToCourse }) => {
          return (
            <div
              className="flex justify-between items-center"
              key={linkToCourse}
            >
              <span className="flex flex-col">
                <h3 className="font-semibold text-lg">{institution}</h3>
                <p className="text-sm font-light">
                  <span className="font-medium">{grade}</span> - {courseName}
                </p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
