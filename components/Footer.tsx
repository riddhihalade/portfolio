import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import {socialMedia} from "../data/index"

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-86">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-80"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl pt-10 lg:max-w-[45vw]">Let's get in touch!</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        </p>
        <div className="flex items-center justify-center gap-4 mb-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <img src={info.img} alt="icons" width={28} height={28} />
              </a>
            </div>
          ))}
        </div>
        <a href="mailto:riddhihalade1@gmail.com">
          <MagicButton
            title="Mail me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        
        <p className="md:text-base text-sm md:font-normal my-10 font-light text-left">
          Copyright © 2024 Riddhi Halade
        </p>

      </div>


      
    </footer>
  );
};

export default Footer;
