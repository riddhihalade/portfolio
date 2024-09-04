import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "../data/index";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-86">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      <div className="flex flex-col items-center px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:max-w-[45vw] text-center">
            Let&apos;s get in touch!
        </h1>
        <p className="text-gray-200 text-sm md:text-base my-5 text-center">
          {/* Add your content here if needed */}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-16 h-16 md:w-20 md:h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <img
                  src={info.img}
                  alt="icon"
                  width={24}
                  height={24}
                  className="md:w-7 md:h-7"
                />
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
        <p className="text-sm md:text-base font-light text-gray-400 text-center mt-10">
          Copyright © 2024 Riddhi Halade
        </p>
      </div>
      <p className="uppercase text-base ">Portfolio Made with Next JS</p>
    </footer>
  );
};

export default Footer;
