/* eslint-disable react/no-unescaped-entities */
import { NextFont } from "@next/font";

type ServicePackagesProps = {
  font: NextFont[];
};

const ServicePackages = ({ font }: ServicePackagesProps) => {
  return (
    <div className="mb-4 flex flex-col items-center">
      <h1 className={`${font[0].className} text-blue-300 text-5xl mb-6`}>
        Our Services
      </h1>
      <h2 className={`${font[1].className} text-blue-300 text-3xl mb-6`}>
        Full Package Consulting
      </h2>
      <p className={`${font[1].className}`}>
        At every step of the process, from college lists to letters of
        acceptance, I provide you guidance all throughout. After working in top
        20 universities, reading thousands of applications, and pitching
        students in numerous committees, I use my experience to help you craft
        an application that taps into your unique intellectual vitality and
        personality. I'm with you every step of the way, talking you through the
        process and helping you learn more about yourself so you can write
        honestly and emphatically that will catch any admissions officer's eye.
      </p>
      <div className="flex justify-center">
        <div>
          <ul
            className={`${font[1].className} flex flex-col items-center list-disc my-5 border border-blue-300 rounded-md p-8`}
          >
            <h1 className="text-2xl">What this package includes: </h1>
            <li>Up to 9 college applications</li>
            <li>
              Early meeting with you and your parents to explain the state of
              college admissions
            </li>
            <li>College Selection Guide</li>
            <li>Application Brainstorming Sessions</li>
            <li>Weekly hour-long 1:1 meetings</li>
            <li>Extracurricular brainstorming to help you stand out more</li>
            <li>Unlimited messages and questions on Discord and/or email</li>
            <li>Essay Revisions</li>
            <li>Complete Application Review</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePackages;
