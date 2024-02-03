import { DM_Serif_Text, Poppins } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const serif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const OurServices = () => {
  return (
    <div className="px-20 mb-20">
      <h1 className={`${serif.className} text-5xl text-blue-300 mb-6`}>
        Our Services
      </h1>
      <Link href="/services">
        <div className="border border-blue-300 rounded-3xl overflow-hidden">
          <div className="flex flex-row">
            <div className="flex">
              <Image
                src="/ApplicationWriting.svg"
                alt="app-service"
                width={516}
                height={392}
                className="rounded-3xl hidden md:flex"
              />
            </div>
            <div className="flex flex-col justify-center flex-grow p-4">
              <h1 className={`${poppins.className} text-3xl text-center mb-2`}>
                Full Package Consulting
              </h1>
              <p className="text-center">
                Check out our full package consulting, where we help you
                end-to-end, up to 9 college applications.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OurServices;
