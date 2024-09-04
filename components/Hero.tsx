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
        <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[40vw] flex flex-col items-center justify-center overflow-hidden">
          
          
          <TextGenerateEffect
            words="Hii! I&apos;m Riddhi Halade,"
            className="text-center text-[500px] md:text-5xl lg:text-4xl mb-7 mt-3"
          />

          <p className="text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-2xl">
          Skilled Software Developer with Expertise in Data Science and Frontend Development.
          </p>

          <p className=" tracking-widest text-xs text-center text-blue-100 max-w-80">
          I enjoy leveraging machine learning and automation to create efficient, user-friendly, and well-designed applications
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
