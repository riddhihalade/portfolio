import { cn } from "@/lib/utils";
// import { SpotLight } from "@react-three/drei";
import { Spotlight } from "./Spotlight";

import {
  IconBrandNodejs,
  IconBrandPython,
  IconRobot,
  IconDatabase,
  IconDeviceDesktopAnalytics,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconFileTypeHtml
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Machine Learning",
      description:
        "Pytorch, TensorFlow, Scikit-Learn, NumPy, Pandas, ML Algorithms",
      icon: <IconTerminal2 />,
    },
    
    {
      title: "Data Analysis & Visualization (EDA)",
      description:
        "SQL, Tableau, Power BI Data Modelling, Predictive Analysis",
      icon: <IconDeviceDesktopAnalytics />,
    },
    {
      title: "GANs & LLMs",
      description:
        "Prompt Engineering, LLM fine-tuning, LangChain, Ollama, Open AI, Gemini",
      icon: <IconRobot />,
    },
    {
      title: "Frontend Dev",
      description: "Next.js, React.js, Tailwind CSS, JavaScript, TypeScript",
      icon: <IconFileTypeHtml />,
    },
    
    {
        title: "NLP & Computer Vision ",
        description:
          "OpenCV, Spacy, GPT, BERT, Hugging Face Transformers",
        icon: <IconBrandPython />,
      },
    {
      title: "Data Engineering",
      description:
        "MySQL, SQLite,  Design & Query Optimization",
      icon: <IconDatabase />,
    },
    {
        title: "Programming",
        description:
          "Java, Python, DSA, Problem Solving, Version Control",
        icon: <IconHelp />,
      },
      {
        title: "Backend ",
        description: "Node.js, FastAPI, Flask",
        icon: <IconBrandNodejs />,
      },
     
  ];
  return (
    <div id="skills">

    <div className=" my-15">
      <Spotlight className="left-220 top-800 h-[90vh] w-[50vw]" fill="blue" />
      <div className="flex justify-center">
      <h1 className="text-4xl  font-bold text-white mt-10 pt-20  items-center">Technical Skills</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      {/* <Spotlight className="left-300 top-800 h-[90vh] w-[50vw]" fill="blue" /> */}

    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-600 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-600 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
