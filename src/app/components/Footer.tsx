import React from "react";
import EmblemWhite from "../../../public/EmblemWhite.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex px-16 justify-between items-center bg-blue-300 w-full h-40 bottom-0">
      <Link href="/">
        <Image src={EmblemWhite} alt="logo" />
      </Link>
      <div className="flex gap-2">
        <Link href="https://www.reddit.com/user/Aggravating_Humor">
          <Image src="/Reddit.svg" alt="reddit" width={54} height={52} />
        </Link>
        <Link href="/consultation">
          <Image src="/Mail.svg" alt="mail" width={52} height={52} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
