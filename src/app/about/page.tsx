import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Gamepad2,
  Landmark,
  Download,
} from "lucide-react";
import { profile } from "@/lib/profile";

export default function AboutPage() {
  return (
    <div className="shell page-content">
      <div className="page-heading">
        <p className="eyebrow">A little about me</p>
        <h1>
          Curious by nature.
          <br />
          <span className="accent">Developer by choice.</span>
        </h1>
        <p>
          I&apos;m Sergio Garcia. A full-stack web developer with a
          banker&apos;s mindset and a gamer&apos;s heart.
        </p>
      </div>
      <div className="about-layout">
        <div className="about-story">
          <h2>
            Always looking for
            <br />a better way.
          </h2>
          <p>
            With a solid background in banking, I&apos;ve always chased
            innovation: from digitizing physical archives to rethinking legacy
            access systems. Every challenge was a chance to rethink, rebuild,
            and optimize.
          </p>
          <p>
            That same drive brought me to web development, where I work across
            frontend and backend technologies. Today, I build digital
            experiences with React and Next.js on the client side, and PHP on
            the server side.
          </p>
          <p>
            My toolkit includes JavaScript, TypeScript, SQL, Git, and Figma. My
            approach is straightforward: understand the problem, build with
            purpose, and keep improving.
          </p>
          <div className="button-row">
            <Link href="/projects" className="button button-primary">
              See my work
              <ArrowUpRight size={18} />
            </Link>
            <a href={profile.resume} download className="button button-outline">
              Download resume
              <Download size={17} />
            </a>
          </div>
        </div>
        <div className="perspective-list">
          <article>
            <span className="perspective-icon">
              <Landmark size={23} />
            </span>
            <span className="eyebrow">01 / Finance</span>
            <h3>A banker&apos;s mindset</h3>
            <p>
              Analytical thinking, attention to detail, and an understanding of
              the business behind the product.
            </p>
          </article>
          <article>
            <span className="perspective-icon">
              <Code2 size={23} />
            </span>
            <span className="eyebrow">02 / Development</span>
            <h3>A builder&apos;s curiosity</h3>
            <p>
              Connecting interfaces, systems, and data to turn complex problems
              into useful experiences.
            </p>
          </article>
          <article>
            <span className="perspective-icon">
              <Gamepad2 size={23} />
            </span>
            <span className="eyebrow">03 / Gaming</span>
            <h3>A gamer&apos;s heart</h3>
            <p>
              A love for exploration, strategy, and the small details that make
              an experience feel great.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
