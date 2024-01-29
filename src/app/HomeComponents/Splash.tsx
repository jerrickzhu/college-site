/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import SplashImage from "../../../public/SplashImage.svg";
import Button from "../components/Button";
import { DM_Serif_Text } from "@next/font/google";

const serif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

const Splash = () => {
  return (
    <div className="flex items-center justify-around py-20 px-16">
      <div className="flex flex-col items-center max-w-lg lg:mr-8">
        <h1
          className={`${serif.className} leading-[3.5rem] lg:w-[35rem] text-5xl text-blue-300`}
        >
          Dreaming of getting into a top college? Let's make it a reality.
        </h1>
        <p className="lg:w-[36rem] mt-3 leading-[1.5rem] text-[#272727]">
          Drawing from the experience of reading 5,000+ apps at two top 20
          universities, one public school and one Ivy League, I strive to use
          what I've learned to help you craft a stand-out application.
        </p>

        <Button
          hrefLocation="/services"
          padding="p-[1.5rem]"
          textSize="text-xl"
          margin="mt-4"
          text="Learn about our services"
          buttonColor="bg-blue-300"
          textColor="text-white"
          width="w-[23.6rem]"
        />
      </div>
      <div className="hidden lg:flex">
        <Image src={SplashImage} alt="splash" />
      </div>
    </div>
  );
};

export default Splash;
