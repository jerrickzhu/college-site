import { Poppins } from "@next/font/google";
import Image from "next/image";

type CardProps = {
  image: string;
  name: string;
  school: string;
  praise: string;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Card = ({ image, name, school, praise }: CardProps) => {
  return (
    <div className="hidden lg:flex shadow-md z-10 border border-blue-300 rounded-2xl lg:max-w-[19.81rem] lg:h-[26.75rem] flex-col items-center justify-center overflow-hidden">
      <Image src={image} alt={school} width={162} height={157} />
      <div className="mt-4 px-4">
        <h1 className={poppins.className}>{`${name}, ${school}`}</h1>
        <h1>{praise}</h1>
      </div>
    </div>
  );
};

export default Card;
