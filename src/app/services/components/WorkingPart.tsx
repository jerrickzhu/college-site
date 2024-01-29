/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

type WorkingPartProps = {
  text: string;
  src: string;
  alt: string;
};

const WorkingPart = ({ text, src, alt }: WorkingPartProps) => {
  return (
    <div className="mt-6 flex flex-row gap-7 items-center">
      <Image src={src} alt={alt} width={43} height={44.5} />
      <div className="bg-blue-100 p-5">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WorkingPart;
