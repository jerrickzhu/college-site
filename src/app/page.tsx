/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Splash from "./HomeComponents/Splash";
import Intro from "./HomeComponents/Intro";
import Carousel from "./HomeComponents/Carousel";
import OurServices from "./HomeComponents/OurServices";
import HearMore from "./components/HearMore";

export default function Home() {
  return (
    <>
      <Splash />
      <Intro />
      <Carousel />
      <OurServices />
      <HearMore text={"Want to hear more from us?"} />
    </>
  );
}
