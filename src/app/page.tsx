"use client";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const MotionLink = motion(Link);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10 w-full h-full top-0 left-0">
        <ParticlesBackground />
      </div>
      {/* hero section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center w-full min-h-screen py-50 bg-gradient-to-r text-white from-black/10 via-zinc-900 to-red-900/60"
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-bold tracking-tight"
          animate={{
            y: [0, -9, 0],
            scale: [1, 1.05, 1],
            transition: {
              duration: 1.2,
              ease: "easeInOut",
            },
          }}
        >
          I Build Products Where <br />
          <span className="bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
            Code meets Finance and Gaming
          </span>
        </motion.h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Full-stack dev with an &quot;ahead of the curve&quot; mindset. <br />
          Web, Frontend, Backend, Fullstack & Mobile — I build &apos;em! <br />I
          turn logic into leverage.
        </p>

        <p className="mt-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
          Build, trade, optimize, repeat. <br />
          Help your team succeed.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <MotionLink
            href="/projects"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-xl rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <span className="absolute inset-0 rounded-2xl border-[3px] border-transparent pointer-events-none animate-borderMagic"></span>
          </MotionLink>
        </div>

        {/* Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-40 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() =>
            document
              .getElementById("about-me-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            className="w-16 h-16 text-white/70 hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* about me section */}
      <motion.div
        id="about-me-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-40 text-center max-w-4xl mx-auto h-full scroll-mt-24"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
          <span className=" bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 text-white">
          I&apos;m Web developer with a passion for full-stack development and
          gaming. Currently building
          <strong> CRM&apos;s</strong>, and developing my skill in{" "}
          <strong>Next.js</strong> — blending code, finance, gaming and clean
          design.
        </p>

        <MotionLink
          whileTap={{ scale: 0.9 }}
          href="/about"
          className="inline-block bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm rounded-xl px-5 py-2 transition"
        >
          More About Me
        </MotionLink>
      </motion.div>

      {/* projects preview section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-7xl mx-auto h-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-600 via-white/70  to-red-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className="bg-white/10 border border-white/50 backdrop-blur rounded-lg p-6 hover:shadow-2xl hover:border-red-500/50
              transition-shadow h-full mx-4 md:m-0"
            >
              <div className="h-1 w-10 bg-gradient-to-r from-red-600 to-red-400 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
                Artallis
              </h3>
              <p className="text-white/80 mb-4">
                The website of a music Conservatory in Lisbon, dedicated to
                teaching and musical events
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  React.js
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  CSS3 / SaSS
                </span>
              </div>
              <MotionLink
                whileTap={{ scale: 0.9 }}
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600"
              >
                View Projects
              </MotionLink>
            </div>
          </motion.div>
          {/* Project 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className="bg-white/10 border border-white/50 backdrop-blur rounded-lg p-6 hover:shadow-2xl hover:border-red-500/50
 transition-shadow h-full mx-4 md:m-0"
            >
              <div className="h-1 w-10 bg-gradient-to-r from-red-600 to-red-400 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
                Game-Hub
              </h3>
              <p className="text-white/80 mb-4">
                A frontend solo project for a video game library with many
                filtered options
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  React.js
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  CSS 3
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  Chakra UI
                </span>
              </div>
              <MotionLink
                whileTap={{ scale: 0.9 }}
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600"
              >
                View Project
              </MotionLink>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className="bg-white/10 border border-white/50 backdrop-blur rounded-lg p-6 hover:shadow-2xl hover:border-red-500/50
 transition-shadow h-full mx-4 md:m-0"
            >
              <div className="h-1 w-10 bg-gradient-to-r from-red-600 to-red-400 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
                WoW Daily
              </h3>
              <p className="text-white/80 mb-4">
                Solo project for my guil. News and Guild information about World
                of Warcraft.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  React.js
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  JavaScript
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  MongoDB
                </span>
              </div>
              <MotionLink
                whileTap={{ scale: 0.9 }}
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600"
              >
                View Project
              </MotionLink>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-7xl mx-auto h-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project 4 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className="bg-white/10 border border-white/50 backdrop-blur rounded-lg p-6 hover:shadow-2xl hover:border-red-500/50
              transition-shadow h-full mx-4 md:m-0"
            >
              <div className="h-1 w-10 bg-gradient-to-r from-red-600 to-red-400 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
                Game-Hub
              </h3>
              <p className="text-white/80 mb-4">
                Full PHP shop with frontend generation and CRM, API and SQL DB.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  PHP
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  Bootstrap
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  MySQL
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  RestAPI
                </span>
              </div>
              <MotionLink
                whileTap={{ scale: 0.9 }}
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600"
              >
                View Projects
              </MotionLink>
            </div>
          </motion.div>
          {/* Project 5 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className="bg-white/10 border border-white/50 backdrop-blur rounded-lg p-6 hover:shadow-2xl hover:border-red-500/50
 transition-shadow h-full mx-4 md:m-0"
            >
              <div className="h-1 w-10 bg-gradient-to-r from-red-600 to-red-400 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
                Campaign Manager
              </h3>
              <p className="text-white/80 mb-4">
                Professional project for editing and sending emails with client
                database and slick tracking.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  PHP
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  MySQL
                </span>
              </div>
              <MotionLink
                whileTap={{ scale: 0.9 }}
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600"
              >
                View Project
              </MotionLink>
            </div>
          </motion.div>
          {/* Project 5 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className="bg-white/10 border border-white/50 backdrop-blur rounded-lg p-6 hover:shadow-2xl hover:border-red-500/50
 transition-shadow h-full mx-4 md:m-0"
            >
              <div className="h-1 w-10 bg-gradient-to-r from-red-600 to-red-400 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
                Hospital Veterinário de Guimarães
              </h3>
              <p className="text-white/80 mb-4">
                Built on top of React and .NET Core. Appointment scheduling and
                patient/owner management. Core.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="bg-red-600/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  .Net Core
                </span>
              </div>
              <MotionLink
                whileTap={{ scale: 0.9 }}
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600"
              >
                View Project
              </MotionLink>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* tech stack section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 py-10 mb-20 text-center max-w-3xl mx-auto w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-white">
          {/* Tech 1 */}
          <motion.div
            whileHover={{ y: 2, scale: 0.9 }}
            className="flex flex-col items-center text-center"
          >
            <Image
              src="/tech-icons/html5.svg"
              alt="Python"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">HTML5</span>
          </motion.div>

          {/* Tech 7 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/css3.svg"
              alt="CSS3"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">CSS 3</span>
          </div>

          {/* Tech 7 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/bootstrap.svg"
              alt="Bootstrap"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">Bootstrap</span>
          </div>

          {/* Tech 7 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/tailwindcss.svg"
              alt="Tailwind CSS"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">Tailwind CSS</span>
          </div>

          {/* Tech 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/javascript.svg"
              alt="JavaScript"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">JavaScript</span>
          </div>

          {/* Tech 3 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/react.svg"
              alt="React"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">React</span>
          </div>

          {/* Tech 6 */}
          <div className="flex flex-col  text-white items-center text-center">
            <div className="w-20 h-20 p-2 rounded-xl flex items-center justify-center">
              <Image
                src="/tech-icons/nextjs.svg"
                alt="Next.js"
                width={16}
                height={16}
                className="w-12 h-12"
              />
            </div>
            <span className="font-semibold text-lg">Next.js</span>
          </div>

          {/* Tech 8 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/php.svg"
              alt="PHP"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">PHP</span>
          </div>

          {/* Tech 8 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/mysql.svg"
              alt="MySQL"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">MySQL</span>
          </div>

          {/* Tech 8 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/mongo.svg"
              alt="MongoDB"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">MongoDB</span>
          </div>

          {/* Tech 8 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/git.svg"
              alt="Git"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">Git</span>
          </div>

          {/* Tech 8 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/tech-icons/figma.svg"
              alt="Figma"
              width={16}
              height={16}
              className="w-16 h-16 mb-4"
            />
            <span className="font-semibold text-lg">Figma</span>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
