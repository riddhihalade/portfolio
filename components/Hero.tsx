import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
  return (
    
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[90vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        {/* <Spotlight className="left-80 top-28 h-[90vh] w-[50vw]" fill="blue" /> */}
      </div>


      <div className="flex justify-center relative my-20 z-10">
  <div className="w-full max-w-[90vw] md:max-w-2xl lg:max-w-[40vw] flex flex-col items-center justify-center overflow-hidden">
    
    <TextGenerateEffect
      words="Hii! I&apos;m Riddhi Halade,"
      className="text-center text-[12vw] sm:text-2xl md:text-5xl lg:text-4xl mb-4 mt-3"
    />

    <p className="text-center tracking-wide mb-3 text-xs md:text-lg lg:text-2xl">
      Skilled Software Developer with Experience in Data Science and Frontend Development.
    </p>

    <p className=" text-xs md:text-sm lg:text-base text-center text-blue-100 w-full max-w-[75vw] md:max-w-[60vw] lg:max-w-[50vw]">
      I enjoy using machine learning and automation to create efficient, user-friendly, and well-designed applications.
    </p> 
  
          {/* <a href="">
            <MagicButton
              title=""
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
          <div className="flex flex-col items-center mt-16">
        


      </div>
        </div>
      </div>
      <div>
        <WavyBackground className="max-w-4xl mx-auto pb-10">
      
        </WavyBackground>
      </div>

    </div>
  );
};

export default Hero;
