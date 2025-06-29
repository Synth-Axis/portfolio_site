"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Artallis - Conservatório d'Artes de Loures",
    description:
      "The website of a music Conservatory in Lisbon, dedicated to teaching and musical events feautring a dynamic event calendar",
    link: "https://github.com/Synth-Axis/Artallis_Website/tree/main/Artallis_Website",
    color: "text-rose-500",
    image: "/images/artallis.jpg", // put your image path here
    imageClass: "max-h-60 rotate-5",
  },
  {
    title: "Hospital Veterinário de Guimarães",
    description:
      "Project for an animal hospital built on top of React and .NET Core. Full frontend and Backend integration with appointment scheduling and patient/owner management.",
    link: "https://github.com/Synth-Axis/Hospital_Veterinario_Guimaraes",
    color: "text-indigo-500",
    image: "/images/hvg.jpg",
    imageClass: "", // placeholder or actual image
  },

  {
    title: "Campaign Manager - CRM and Email Automation",
    description:
      "Professional project for editing and sending emails with client database and slick tracking, reporting and statitics.",
    link: "https://github.com/Synth-Axis/campaignmanager",
    color: "text-rose-500",
    image: "/images/campaign-manager.jpg", // put your image path here
    imageClass: "max-h-60 rotate-5",
  },
  {
    title: "Game-Hub - Frontend for GameHub API",
    description:
      "A frontend solo project for a video game library with many filtered options using React and custom hooks with Axios for API calls.",
    link: "https://github.com/Synth-Axis/game-hub",
    color: "text-emerald-500",
    image: "/images/game-hub-react.jpg",
    imageClass: "", // placeholder or actual image
  },
  {
    title: "WoW Daily - Frontend Certification Project",
    description:
      "Solo project for my guild. News and Guild information about World of Warcraft. Carrousel with timer, tab system and component usage for clean code.",
    link: "https://github.com/Synth-Axis/projeto_frontend_flag_SG/tree/main/warcraft_daily",
    color: "text-indigo-500",
    image: "/images/wow-daily.jpg",
    imageClass: "rotate-4 ", // placeholder or actual image
  },
  {
    title: "Game-Hub - Backend Certification Project",
    description:
      "Full PHP shop with frontend generation and CRM, API and SQL DB. CRM for admin management and recover password with token generation.",
    link: "https://github.com/Synth-Axis/backend_project_FLAG",
    color: "text-rose-500",
    image: "/images/gamehub-bkend.jpg", // put your image path here
    imageClass: "",
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-40 flex items-start justify-center text-neutral-100 bg-gradient-to-br from-black/70 via-zinc-800 to-red-600">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="max-w-5xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mb-16 text-center"
        >
          My Projects
        </motion.h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-16 flex flex-col sm:flex-row items-center bg-neutral-900 rounded-2xl shadow-xl p-8"
          >
            {/* Left side text */}
            <div className="sm:w-1/2">
              <h3 className={`text-3xl font-bold ${project.color}`}>
                {project.title}
              </h3>
              <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className={`mt-6 inline-block ${project.color} font-medium hover:underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub &rarr;
              </a>
            </div>

            {/* Right side image */}
            <motion.div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
              <motion.img
                src={project.image}
                alt={`${project.title} screenshot`}
                className={`max-w-full h-full rounded-lg shadow-lg transform ${project.imageClass} transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:z-20 group-hover:shadow-2xl`}
                style={{ objectFit: "cover" }}
                whileHover={{
                  scale: 1.2,
                  rotateY: 8,
                  rotateX: 1,
                  zIndex: 19,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
