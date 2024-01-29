/* eslint-disable react/no-unescaped-entities */
import { DM_Serif_Text } from "@next/font/google";

const serif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

const Intro = () => {
  return (
    <div className="h-[29.31rem] bg-blue-300 flex flex-col justify-center items-center">
      <div className="flex flex-col lg:mr-8 max-w-lg lg:max-w-[72rem]">
        <h1
          className={`${serif.className} text-white text-5xl leading-[4rem] text-center`}
        >
          Hello! I'm Jay, a former admissions officer and top 20 graduate. You
          might have seen me on Reddit: u/Aggravating_Humor
        </h1>
        <p className="text-white mt-4 px-2 text-center">
          I'm here to guide you through every part of the college application
          process, while allowing you to get to know yourself better along the
          process.
        </p>
      </div>
    </div>
  );
};

export default Intro;
