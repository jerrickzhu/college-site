"use client";
import Image from "next/image";
import Link from "next/link";
import Emblem from "../../../public/emblem.svg";
import { Poppins } from "@next/font/google";
import { LINKS } from "@/app/constants/constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="relative flex items-center justify-between container-max z-30 py-6 border-b border-blue-300 px-16">
      <Link href="/" className="shrink-0">
        <Image src={Emblem} alt="logo" width={233} height={55} />
      </Link>
      <ul className="hidden space-x-20 h-full lg:flex">
        {LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`${poppins.className} text-blue-300 hover:font-bold transition-all cursor-pointer`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <button onClick={handleToggleMenu} className="lg:hidden">
        {showMobileMenu ? (
          <AiOutlineClose size={25} />
        ) : (
          <AiOutlineMenu size={25} />
        )}
      </button>
      {showMobileMenu && (
        <div className="absolute top-full right-0 bg-white border-2 border-blue-300 lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={`${poppins.className} text-blue-300 hover:font-bold transition-all cursor-pointer py-2 px-4`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
