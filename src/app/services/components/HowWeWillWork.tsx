/* eslint-disable react/no-unescaped-entities */
import { NextFont } from "@next/font";
import Image from "next/image";
import HowWeWillWorkContainers from "./HowWeWillWorkContainers";
import {
  workingPartsIntrospection,
  workingPartsEssayRevisions,
  workingPartsApplicationReview,
} from "@/app/constants/constants";

type HowWeWillWorkProps = {
  font: NextFont[];
};

const HowWeWillWork = ({ font }: HowWeWillWorkProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1
        className={`${font[0].className} text-blue-300 text-5xl mb-4 leading-10`}
      >
        How We'll Work Together
      </h1>
      <p className={`${font[1].className} leading-6`}>
        During my time in an Ivy League admissions office, the biggest question
        I always have when reading was, "Did this student really present
        themselves well in this application?" The answer was often no,
        especially after denying so many students. One of the biggest problems
        is that students often cannot reveal who they are and their own
        intellectual heart very well in applications. So, one of the biggest
        things I focus on with students is introspection. Who are you? Why do
        you love learning? What do you love learning about? We'll use those
        fundamental questions to start bridging the gap between you and the
        colleges you want to go to. But before that, we'll get you and your
        family familiar with the landscape of college admissions. After that, we
        have three stage process to getting you to the end: Introspection and
        Mentorship, Essay Revisions, and Application Review.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center mb-4 flex-grow">
        <HowWeWillWorkContainers
          typeOfContainer={"Introspection and Mentorship"}
          text={`Right from the beginning, we'll be there for you. And the way we start
          is perhaps unconventional to some, but absolutely necessary:`}
          font={font}
          workingParts={workingPartsIntrospection}
        />
        <div className="mb-8"></div>
        <HowWeWillWorkContainers
          font={font}
          typeOfContainer={"Essay Revisions"}
          workingParts={workingPartsEssayRevisions}
          text={
            "People often think writing is the most time-consuming part. In my opinion, it's thinking about what to write that takes more time. But using every method we have so far, you'll finally be able to write. Remember, colleges want real people—with real intellectual heart and quality of character. That's what we'll be doing here."
          }
        />
        <div className="mb-8"></div>
        <HowWeWillWorkContainers
          font={font}
          typeOfContainer={"Application Review"}
          workingParts={workingPartsApplicationReview}
          text={
            "As a former admissions officer at two highly selectively schools, I'll provide a holistic end-to-end review of your entire application using my training and experience."
          }
        />
      </div>
    </div>
  );
};

export default HowWeWillWork;
