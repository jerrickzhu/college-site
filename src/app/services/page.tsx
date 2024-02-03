/* eslint-disable react/no-unescaped-entities */
import { DM_Serif_Text, Poppins } from "@next/font/google";
import Image from "next/image";
import ServicePackages from "./components/ServicePackages";
import HowWeWillWork from "./components/HowWeWillWork";
import HearMore from "../components/HearMore";

const serif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Services = () => {
  return (
    <>
      <div className="h-auto flex flex-col px-20 py-10">
        <ServicePackages font={[serif, poppins]} />
        <HowWeWillWork font={[serif, poppins]} />
      </div>
      <HearMore text={`Want to work together?`} />
    </>
  );
};

export default Services;
