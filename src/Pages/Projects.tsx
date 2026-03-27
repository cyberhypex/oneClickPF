import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import Screen from "../Components/Screen";

const projects = [
  {
    title: 'Linkalyze',
    description: 'A minimal URL shortener built with Spring Boot and MySQL. Includes analytics, authentication, and link management.',
    livelink: 'https://extraordinary-stroopwafel-b89de5.netlify.app/',
    techstack: ['Spring Boot','Spring Security','Docker','Neon DB', 'MySQL', 'JWT', 'React', 'TailwindCSS']
  },
  {
    title: 'Valorant-Accessories',
    description: `Are you a newbie wanting to know how Valorant works or what it is?? Don't you worry, I got you.
Presenting Valorant-Accessories, your one stop solution to learn about Valorant.`,
    livelink: 'https://valorant-accessories-frontend.vercel.app/',
    techstack: ['Springboot','RestTemplate','Spring','ReactJS','TailwindCSS3','Docker']
  },
  {
    title:'Ceaser-Cipher',
    description:'A sleek and modern React.js frontend to encrypt and decrypt messages using the Caesar Cipher technique.',
    livelink:'https://lucent-bubblegum-9def40.netlify.app/',
    techstack:['Springboot','Core Java','Algorithms','ReactJS','TailwindCSS3','Docker']
  },
  {
    title: 'timeStack',
    description: 'A clean and intuitive productivity tracker that helps users log activities and visualize time usage.',
    livelink: 'https://clinquant-otter-ee944c.netlify.app/',
    techstack: ['MongoDB', 'Express.js', 'ReactJS', 'Node.js']
  },
  {
    title:'contestHub',
    description:'A sleek app that aggregates coding contests from Codeforces, CodeChef, and LeetCode.',
    livelink:'https://scintillating-torrone-d4e441.netlify.app/',
    techstack:['ReactJS','TailwindCSS3']
  }
];

export default function Projects() {
  const radius = 260;
  const rotate = 10;
  const isMobile = window.innerWidth < 640;

  return (
    <Screen>
        <div className="mt-20 sm:mt-28 mb-20">
  {isMobile ? (
    
   
    <div className="flex flex-col gap-6 items-center w-full px-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tech={project.techstack}
          live={project.livelink}
        />
      ))}
    </div>

  ) : (

    
    <div className="relative w-[600px] h-[600px]">
      {projects.map((project, index) => {
        const angle = (index / projects.length) * (2 * Math.PI);
        const radius = 280;

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.techstack}
              live={project.livelink}
            />
          </div>
        );
      })}
    </div>
    

  )}
  </div>
</Screen>
  );
}