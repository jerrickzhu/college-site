import Image from "next/image";

type ArrowProps = {
  arrowDirection: string;
};

const Arrow = ({ arrowDirection }: ArrowProps) => {
  return <Image src={arrowDirection} alt="" width={23} height={44} />;
};

export default Arrow;
