import Link from "next/link";

type ButtonProps = {
  text: string;
  buttonColor: string;
  textColor: string;
  width: string;
  margin: string;
  hrefLocation: string;
  textSize: string;
  padding: string;
};

const Button = ({
  text,
  buttonColor,
  textColor,
  width,
  margin,
  textSize,
  hrefLocation,
  padding,
}: ButtonProps) => {
  return (
    <Link href={hrefLocation}>
      <button
        className={`${margin} ${padding} ${width} ${textSize} ${buttonColor} ${textColor} rounded-full`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
