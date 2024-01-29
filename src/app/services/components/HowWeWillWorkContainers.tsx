/* eslint-disable react/no-unescaped-entities */
import { NextFont } from "@next/font";
import WorkingPart from "./WorkingPart";
import { ReactComponentElement } from "react";

interface WorkingPart {
  key: number;
  text: string;
  src: string;
  alt: string;
}

type HowWeWillWorkContainersProps = {
  font: NextFont[];
  typeOfContainer: string;
  workingParts: WorkingPart[];
  text: string;
};
const HowWeWillWorkContainers = ({
  font,
  typeOfContainer,
  workingParts,
  text,
}: HowWeWillWorkContainersProps) => {
  return (
    <div className={`p-8 border border-blue-300 rounded-md min-w-[30rem]`}>
      <h1 className={`${font[1].className} text-blue-300 text-2xl`}>
        {typeOfContainer}
      </h1>
      <p className={`${font[1].className} mt-4`}>{text}</p>
      <div className="flex flex-col flex-grow">
        {workingParts.map((data) => (
          <WorkingPart
            key={data.key}
            text={data.text}
            src={data.src}
            alt={data.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default HowWeWillWorkContainers;
