import { DM_Serif_Text } from "@next/font/google";
import Button from "./Button";

type HearMoreProps = {
  text: string;
};
const serif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

const HearMore = ({ text }: HearMoreProps) => {
  return (
    <div className="bg-blue-200 h-56 flex flex-col shadow-md justify-center items-center">
      <h1 className={`${serif.className} text-4xl text-blue-300`}>{text}</h1>
      <Button
        text={"TELL US ABOUT YOURSELF!"}
        buttonColor={"bg-white"}
        textColor={"text-blue-300"}
        width={"w-[23.6rem]"}
        margin={"mt-4"}
        hrefLocation={"/consultation"}
        textSize={"text-xl"}
        padding={"p-[1.5rem]"}
      />
    </div>
  );
};

export default HearMore;
