"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-40 flex items-start justify-center text-neutral-100 bg-gradient-to-br from-black/70 via-zinc-800 to-red-600">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl "
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Who the hell is Alexandre G.?
        </h2>
        <h3 className="text-xl sm:text-2xl font-bold mb-6">
          I&apos;m a Fullstack Web Developer with a Banker&apos;s Mindset & a
          Gamer&apos;s Heart
        </h3>
        <p className="mb-6 text-lg text-muted-foreground">Agile thinker.</p>
        <p className="mb-6 text-lg text-muted-foreground">
          <span className="text-red-500 font-medium">Problem-solver. </span>Tech
          enthusiast. With a solid background in banking, I&apos;ve always
          chased innovation—from digitizing physical archives to rebranding
          legacy access systems.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          Every challenge was a chance to rethink, rebuild and optimize. That
          same drive led me to the world of web development, where I&apos;ve
          dived deep into both{" "}
          <span className="text-red-500 font-medium">
            frontend and backend technologies
          </span>
          . Today, I build seamless digital experiences using{" "}
          <span className="text-red-500 font-semibold">React / Next</span> on
          the client side and{" "}
          <span className="text-red-500 font-semibold">PHP</span> on the server
          side.
        </p>
        {/* <span className="text-red-500 font-medium">
          finance, tech, and design
        </span> */}

        <p className="mb-6 text-lg text-muted-foreground">
          My stack includes{" "}
          <span className="text-red-500 font-semibold">
            React/Next, JS/TS, PHP, SQL, Git, Figma
          </span>{" "}
          for design - and a passion for clean UI.
        </p>
      </motion.section>
    </main>
  );
}
