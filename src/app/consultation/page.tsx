/* eslint-disable react/no-unescaped-entities */
"use client";
import { DM_Serif_Text, Poppins } from "@next/font/google";
import { useForm, ValidationError } from "@formspree/react";

const serif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Consultation = () => {
  const [state, handleSubmit, reset] = useForm("mleqgzpl");

  return (
    <>
      <div className="pt-20 px-10">
        <h1 className={`${serif.className} text-blue-300 text-5xl`}>
          Contact Jay
        </h1>
        <h1 className={`${poppins.className} mt-3`}>
          After submission, I'll get back to you within 3 days so we can chat a
          little more about your goals and how I can help you. If you're not an
          incoming high school senior, still feel free contact me! I'd love to
          help in any capacity. Looking forward to chatting soon!
        </h1>
      </div>

      <form
        className={`${poppins.className} py-7 px-20`}
        onSubmit={handleSubmit}
      >
        <div className="mt-5 flex flex-col md:flex-row md:justify-start md:items-center md:gap-20">
          <div className="flex-grow md:w-[300px]">
            <label>First Name</label>
            <input
              required
              name="firstName"
              type="text"
              placeholder=" Your first name"
              className="border pl-2 border-blue-300 rounded-lg w-full h-[3rem]"
            />
          </div>
          <div className="flex-grow md:w-[300px] mt-4 md:mt-0">
            <label>Last Name</label>
            <input
              required
              name="lastName"
              type="text"
              placeholder=" Your last name"
              className="border pl-2 border-blue-300 rounded-lg w-full h-[3rem]"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col md:flex-row md:justify-start md:items-center md:gap-20">
          <div className="flex-grow md:w-[300px]">
            <label>Student Email Address</label>
            <input
              required
              name="studentEmail"
              type="email"
              placeholder=" Your student email"
              className="border pl-2 border-blue-300 rounded-lg w-full h-[3rem]"
            ></input>
          </div>

          <div className="flex-grow md:w-[300px]">
            <label>Parent Email Address</label>
            <input
              required
              name="parentEmail"
              type="email"
              placeholder=" Your parent email"
              className="border pl-2 border-blue-300 rounded-lg w-full h-[3rem]"
            ></input>
          </div>
        </div>

        <div className="mt-5 flex flex-col md:flex-row md:justify-start md:items-center md:gap-20">
          <div className="flex-grow md:w-[300px]">
            <label>High School Graduation Year</label>
            <input
              required
              name="gradYear"
              type="number"
              placeholder=" Your high school graduation year"
              className="border pl-2 border-blue-300 rounded-lg w-full h-[3rem]"
            ></input>
          </div>

          <div className="flex-grow md:w-[300px]">
            <label>GPA and Test Scores if applicable</label>
            <input
              name="gpaScore"
              type="text"
              placeholder=" GPA and Test Scores if applicable"
              className="border pl-2 border-blue-300 rounded-lg w-full h-[3rem]"
            ></input>
          </div>
        </div>

        <div className="mt-5 h-auto">
          <div>
            <label>Comments?</label>
            <textarea
              name="comments"
              placeholder=" Any comments or questions?"
              className="border pl-2 border-blue-300 rounded-lg w-full h-[10rem] resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={reset}
          disabled={state.submitting}
          className="mt-5 w-[10rem] h-[3rem] text-white bg-blue-300 rounded-full"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Consultation;
