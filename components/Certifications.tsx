import { certificates } from "@/data";
import Image from "next/image"; 
import { IconCertificate } from '@tabler/icons-react';

interface CertificationProps {
  title: string;
  link: string;
}

export function Certifications({ title, link }: CertificationProps) {
  return (
      <div className="flex text-neutral-200 text-lg md:text-2xl mt-4 mb-7 relative z-20">
        <IconCertificate className="mr-2 text-blue-300 size={52}" />
        <a
          href={link}
          className="text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
  );
}

export function CertificationSec() {
  return (
    <section id="certification">
      <div className="flex flex-col items-center my-10">
        <h1 className="text-lg md:text-4xl font-bold text-white my-16 p-10 md:p-19  md:py-25 text-center">
          CERTIFICATIONS
        </h1>
       
        {/* Main container to hold image and certifications */}
        <div className="flex flex-col items-center space-y-6">
          {/* Image above certifications */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/image.png" // Update the path to your local image
              alt="Certification Image"
              height={350} // Adjust as needed
              width={400} // Adjust as needed
              className="w-full max-w-lg mx-auto rounded-lg"
            />
          </div>
          {/* Certifications listed below the image */}
          <div className="flex flex-col space-y-4">
            {certificates.map((pub, index) => (
              <Certifications
                key={index}
                title={pub.title}
                link={pub.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
