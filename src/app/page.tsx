import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { BrandIcon } from "@/components/BrandIcon";
import { projects } from "@/lib/projects";
import { profile } from "@/lib/profile";

const stack = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    category: "Backend & databases",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Java", icon: "java" },
      { name: "Spring", icon: "spring" },
      { name: "PHP", icon: "php" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "AWS", icon: "aws" },
    ],
  },
  {
    category: "Testing, quality & DevOps",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Jest", icon: "jest" },
      { name: "Postman", icon: "postman" },
      { name: "SonarQube", icon: "sonarqube" },
      { name: "Jira", icon: "jira" },
      { name: "Confluence", icon: "confluence" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Developer. Problem solver. Gamer.
          </p>
          <h1>
            Code.
            <br />
            With <span className="accent">purpose.</span>
          </h1>
          <p className="hero-subtitle">Where code meets finance & gaming.</p>
          <p className="hero-description">
            I&apos;m Sergio, a full-stack developer with a banker&apos;s mindset
            and a gamer&apos;s heart. I turn complex ideas into thoughtful
            digital experiences.
          </p>
          <div className="button-row">
            <Link href="/projects" className="button button-primary">
              Explore my work
              <ArrowUpRight size={19} />
            </Link>
            <Link href="/contact" className="button button-outline">
              Let&apos;s talk
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-note">
            <span className="tiny-line" /> Build. Learn. Optimize. Repeat.
          </div>
        </div>
        <div className="hero-showcase">
          <div className="showcase-topline">
            <span className="mono">A LITTLE OF WHAT I BUILD</span>
            <Code2 size={19} />
          </div>
          <Link href="/projects#artallis" className="showcase-window">
            <div className="window-bar">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>artallis · web experience</span>
              <ArrowUpRight size={15} />
            </div>
            <div className="showcase-image">
              <Image
                src="/images/artallis.jpg"
                alt="Artallis music conservatory website"
                fill
                priority
                sizes="(max-width: 760px) 90vw, 45vw"
              />
            </div>
            <div className="showcase-caption">
              <div>
                <span className="eyebrow">Culture meets code</span>
                <h2>Artallis</h2>
              </div>
              <span className="round-arrow">
                <ArrowUpRight size={23} />
              </span>
            </div>
          </Link>
          <div className="showcase-bottom">
            <span>
              <span className="status-dot" /> From interface to database
            </span>
            <span className="mono">&lt;/&gt;</span>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#selected-work" className="scroll-link">
            <ArrowDown size={16} /> Scroll to explore
          </a>
          <span>WEB / FRONTEND / BACKEND / MOBILE</span>
        </div>
      </section>

      <section className="work-section section shell" id="selected-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>
              Ideas made <span className="muted">real.</span>
            </h2>
          </div>
          <Link href="/projects" className="text-link">
            All projects
            <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="project-grid">
          {[projects[0], projects[2], projects[3]].map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="about-preview section shell" id="about-me-section">
        <div>
          <p className="eyebrow">02 / The person behind the code</p>
          <h2>
            A banker&apos;s mindset.
            <br />A builder&apos;s curiosity.
            <br />
            <span className="accent">A gamer&apos;s heart.</span>
          </h2>
        </div>
        <div className="about-preview-copy">
          <p>
            From banking to building for the web, I&apos;ve always been drawn to
            making things work better. Every challenge is a chance to rethink,
            rebuild, and optimize.
          </p>
          <p>
            Today, I bring that same drive to full-stack development: creating
            CRMs, connecting systems, and building clean interfaces with React,
            Next.js, and PHP.
          </p>
          <Link href="/about" className="text-link">
            More about me
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>

      <section className="stack-section section shell" id="tech-stack">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Tools of the trade</p>
            <h2>
              My everyday <span className="muted">toolkit.</span>
            </h2>
          </div>
          <a
            href={profile.github}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandIcon name="github" size={17} /> Find me on GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="stack-groups">
          {stack.map((group) => (
            <section
              className="stack-group"
              key={group.category}
              aria-label={group.category}
            >
              <h3 className="stack-group-heading">{group.category}</h3>
              <ul className="stack-grid">
                {group.items.map((item) => (
                  <li className="stack-item" key={item.name}>
                    <Image
                      src={`/tech-icons/${item.icon}.svg`}
                      alt=""
                      width={30}
                      height={30}
                      className={
                        item.icon === "github" ? "stack-icon-light" : undefined
                      }
                    />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="contact-banner shell">
        <p className="eyebrow">Have something in mind?</p>
        <div>
          <h2>
            Let&apos;s build
            <br />
            <span className="accent">something good.</span>
          </h2>
          <Link href="/contact" className="button button-primary">
            Start a conversation
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
