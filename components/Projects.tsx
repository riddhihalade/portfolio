"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function MLCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (

    <div className=" w-80% h-full mt-4 py-20" id="projects">
      <div className="flex flex-col justify-center items-center">

      <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-white font-sans">
         Projects{" "}
      </h2>
      <div className="flex justify-end">
        <p className="  pt-4  text-base text-gray-300">
          Swipe the cards and click them for Project links & details.
        </p>
        </div>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

interface MLContentProps {
  title: string;
  src1: string; // First image source
  src2: string;
  tech: string;
  skills: string;
  description: string;
  customContent?: React.ReactNode; 
}

// MLContent Component
const MLContent: React.FC<MLContentProps> = ({
  title,
  src1,
  src2,
  tech,
  skills,
  description,
  customContent,
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-xl font-sans max-w-3xl mx-auto">
        
        <p className="  text-justify text-xl text-blue-200 font-bold">{tech}</p>
        <p className=" pb-8 text-justify text-xl text-blue-100 font-bold">{skills}</p>

        <Image
          src={src1}
          alt={title}
          height={800} // Adjust as needed
          width={600} // Adjust as needed
          className="w-full max-w-lg mx-auto  rounded-lg"
        />
        <br />
        <span className="text-base font-medium	font-sans"  dangerouslySetInnerHTML={{ __html: description }} />{" "}
      </p>
      <br/>
      {customContent ? (
        customContent
      ) : (
        <Image
          src={src2}
          alt={title}
          height={800}
          width={600}
          className="w-full max-w-lg mx-auto rounded-lg"
        />
      )}
    </div>
  );
};

// Data Array
const data = [
  {
    title: "DubWiz | Transformer driven Video Dubbing",
    category:
      "Developed a video dubbing website with React.js and Flask, cutting manual processing by 60%. Integrated OpenAI Whisper, MBart for translation, and Silero with Wave2Lip for 90% accurate lip-sync.",
    src: "/assets/dubwiz5.png",
    description: ``,
    href: "https://github.com/riddhihalade/DubWiz",
    label: "Project Link",
    content: (
      <MLContent
        title="DubWiz "
        tech="TechStack: Flask, OpenAI Whisper, HuggingFace MBart, Silero, Wave2Lip, React.js"
        skills="Skills: NLP, Speech Synthesis, Fullstack development, Computer Vision"
        src1="/assets/dubwiz4.png"
        src2="/assets/dubwiz3.png"
        description={`
          <style>
    ol {list-style-type: circle;}
        </style>
          <p>
  The website features a user-friendly interface for easy dubbing, real-time previews of dubbed videos, and seamless integration with various video formats to enhance the dubbing workflow.<br><br>
  Users can upload their videos through the intuitive UI to start the dubbing and translation process. After processing, users can download the output files, including translated subtitles in multiple languages and the dubbed video with synchronized audio.<br><br>
  The key technologies used are:<br><br>
</p>

<ol>
  <li><strong>Audio-to-Text:</strong> OpenAI Whisper</li>
  <li><strong>Multilingual Translation:</strong> Hugging Face MBart</li>
  <li><strong>Lip-sync and Audio Conversion:</strong> Silero, Wave2Lip</li>
</ol>

    `}
      />
    ),
  },
  {
    title: "Blinkit-Metrics | Sales & Delivery Analytics",
    category:
      "Developed a Power BI dashboard for Blinkit, analyzing over 50,000 records and improving decision-making by 40%. Utilized SQL, web scraping, and API integration for scalable data collection.",
    src: "/assets/blinkit.png",
    href: "https://github.com/riddhihalade/blinkit-data-analysis",
    label: "Project Link",
    description: "",
    content: (
      <MLContent
        title="."
        tech="Tech Stack: PowerBI, SQL, Pandas, Beautiful Soup "
        skills="Skills: EDA, Data modeling, Business Intelligence, Web Scraping"
        src1="/assets/blinkit.png"
        src2="/assets/blinkit2.png"
        description={`
        <ul>
        <li><strong>Dashboard Creation:</strong> Developed a Power BI dashboard analyzing over 50,000 sales records, improving decision-making efficiency by 40%.</li>
        <li><strong>Automated Data Collection:</strong> Used web scraping and public API to cut data gathering time by 70%.</li>
        <li><strong>SQL Database Design:</strong> Created a SQL database for efficient data storage and management.</li>
        <li><strong>Optimized Data Processing:</strong> Utilized <code>pandas</code> for efficient data processing and accuracy.</li>
        <br>
    </ul>

    <ul>
        <li><strong>Key Metrics:</strong>
        <br/><br/>
            <ul>
                <li><strong>Total Sales:</strong> $1.20M</li>
                <li><strong>Average Sales:</strong> $141.00</li>
                <li><strong>Number of Items:</strong> 8,523</li>
            </ul>
        </li>
        <br>
        <li><strong>Sales by Item Type:</strong> Bar chart of items sold per product category.</li>
        <li><strong>Outlet Establishment:</strong> Line chart showing sales growth from 2010 to 2020.</li>
        <li><strong>Sales by Outlet Size:</strong> Pie chart of sales distribution by outlet size (Medium, Small, High).</li>
        <li><strong>Sales by Outlet Location:</strong> Bar chart of sales performance across different tiers (Tier 1, Tier 2, Tier 3).</li>
        <li><strong>Outlet Type Performance:</strong> Table with metrics for each outlet type, including ratings, average sales, number of items, and total sales.</li>
    </ul>
<br/>
    <p>This dashboard provides a comprehensive view of Blinkit's sales and delivery analytics, including product performance, outlet characteristics, and sales trends.</p>`}
      />
    ),
  },
  {
    title: "DataGuru | Llama 3 powered SQL Agent",
    category:
      "Implemented an automated SQL query optimization system using Llama 3 and CrewAI to translate natural language queries into optimized SQL code, resulting in a 50% reduction in manual effort.",
    src: "/assets/sqlagent1.png",
    href: "https://github.com/riddhihalade/sql_agent",
    label: "Project Link",
    description: "",
    content: (
      <MLContent
        title="."
        tech="TechStack : Llama 3, CrewAI, SQLite3, Pandas"
        skills="Skills: LLM finetunning, Database Optimization, SQL"
        src1="/assets/sqlchat.png"
        src2="/assets/sqlagent.png"
        description="<style>
    ul {
        list-style-type: circle;
    }
</style>
        <p>Designed to automate data analysis, this project utilises Llama 3 and CrewAI to simplify working with SQL databases. The system automatically generates queries, retrieves relevant data, and processes it, significantly reducing the manual effort typically required for data analysis tasks.</p>
<br/>

<ul>
    <li><strong>Data Management:</strong> Load any datasets into a SQLite database, where data is accessed and queried as part of the pipeline.</li>
    <li><strong>Agent-Based Architecture:</strong> Managed multiple AI agents with CrewAI, each specializing in optimized data retrieval and analysis tasks.</li>
    <li><strong>LLM Integration:</strong> Integrated Llama 3 for natural language query analysis, with logging mechanisms for transparency and accuracy.</li>
    <li><strong>Automated Workflow:</strong> The entire process, from data extraction to report generation, is fully automated, ensuring coherence and precision in the output.</li>
</ul>"
      />
    ),
  },
  {
    title: "SmartSelect | Automated ML Pipeline",
    category:
      "This Streamlit app simplifies ML with CSV uploads for dataset reviews and model recommendations with 90% accuracy. It uses PyCaret to automate model selection, cutting comparison time by 50%.",
    src: "/assets/autoML.png",
    label: "Project Link",
    href: "https://automated-machine-learning-pipeline-itb9trstsiv5univfckcyq.streamlit.app/",
    description: "",
    content: (
      <MLContent
        title=""
        tech="Tech Stack: PyCaret, Pandas Profiling, Plotly, NumPy, Streamlit(UI)"
        skills="Skills: Automation, Machine Learning "
        src1="/assets/model1.png"
        src2="/assets/dataset1.png"
        description="<style>
    ul {
        list-style-type: circle;
    }
</style>


<p>This Streamlit app simplifies the machine learning process by allowing users to upload any CSV file to receive a dataset review, data profiling report, get recommendations for the best-performing models, and download the selected model. Thus, optimize model performance without deep technical expertise.</p>
<br/>
<ul>
    <li><strong>Automated Model Comparison:</strong> PyCaret automates the comparison and selection of models, improving prediction accuracy and reducing model selection time by 50%. </li>
    <br>
    <li><strong>Data Profiling:</strong> Pandas Profiling generates a comprehensive report on data quality and distribution, helping users understand and prepare their dataset effectively.</li>
    <br>
    <li><strong>Data Visualization:</strong> Plotly offers interactive visualizations, allowing users to explore their data through various charts and plots for better insights and decision-making.</li>
    <br>
    <li><strong>Real-Time Insights:</strong> Provides immediate feedback on data and model performance, facilitating quick adjustments and improvements.</li>
</ul>

"
      />
    ),
  },
  {
    title: "ImageSense | Image Captioning API",
    category:
      "Developed an API using Hugging Face Transformers and FastAPI with 90% accurate captions & rapid image processing, containerized with Docker for faster deployment.",
    src: "/assets/imagesense.png",
    href: "https://github.com/riddhihalade/ImageSense",
    label: "Project Link",
    description: "",
    content: (
      <MLContent
        title=""
        tech="TechStack: FAST API, PyTorch, Encoder-Decoder Models, Python"
        skills="Skills: Computer vision, API development, Model fine-tuning,"
        src1="/assets/imageapi.png"
        src2="/assets/caption.png"
        description={`
          <style>
    ol {
        list-style-type: circle;
    }
</style>
<p>This API uses advanced transformer models to deliver accurate and human-like captions for images, making it ideal for applications requiring automated image descriptions.</p>
<br>
<p>In testing, achieved promising results on the MSCOCO dataset with a BLEU score of 0.35 and a METEOR score of 0.28, indicating strong potential for real-world application.
Created comprehensive documentation detailing API endpoints and use cases, demonstrating strong technical communication skills and attention to detail.</p>
<br>
<ol>
    <li><strong>Automated Image Captioning:</strong> Upload images to receive descriptive captions generated by a HuggingFace Vision Encoder-Decoder model implemented in PyTorch.</li>
    <li><strong>Simple Integration:</strong> Easy-to-use endpoints allow quick integration into various applications.</li>
    <li><strong>Robust Performance:</strong> The Vision Encoder-Decoder model encodes image features using a CNN and decodes them into natural language captions with a transformer-based decoder, ensuring over 90% accuracy across diverse images.</li>
</ol>
<br>
<p>Below is a demonstration of the ImageSense API:</p>
<p>When Uploaded this image,</p>
<a href="path-to-your-image.jpg" target="_blank">
    <img src="/assets/boat.jpeg" alt="Uploaded Image" style="max-width: 80%; height: auto; border: 1px solid #ccc; border-radius: 8px;">
</a>
<p><strong>Generated Caption:</strong> "a sailboat in the middle of the body of water."</p>
`}
      />
    ),
  },
 
];
