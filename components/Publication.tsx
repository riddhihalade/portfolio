import { CardSpotlight } from "@/components/ui/card-spotlight";
import { publications } from "@/data";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "./ui/Spotlight";

interface PublicationProps {
  title: string;
  link: string;
  description: string;
  conference: string;
}

export function Publication({
  title,
  link,
  description,
  conference,
}: PublicationProps) {
  return (
    <CardSpotlight className="h-72 w-full sm:w-80 md:w-96 flex flex-col items-center text-center">
      <p className="text-xl md:text-2xl font-bold relative z-20 mt-2 text-white">
        {conference}
      </p>
      <div className="text-neutral-200 text-lg md:text-xl mt-4 mb-7 relative z-20">
        <a
          href={link}
          className="text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm md:text-lg  text-center mx-auto">
        {description}
      </p>
    </CardSpotlight>
  );
}

export function PublicationsList() {
  return (
    <section id="publications">
      <Spotlight className=" bottom-60 -left-10  h-screen"
          fill="blue"/>
          <Spotlight className=" bottom-60 -right-8  h-screen"
          fill="white"/>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white p-5 md:p-19 py-10 md:py-15 text-center">
          Project Publications
        </h1>
        <p className="text-sm md:text-base text-gray-400 m-2 text-center">
          Hover the Cards and preview the publication links.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
          {publications.map((pub, index) => (
            <Publication
              key={index}
              title={pub.title}
              link={pub.link}
              description={pub.description}
              conference={pub.conference}
            />
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
