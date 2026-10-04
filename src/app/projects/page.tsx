import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="shell page-content">
      <div className="page-heading">
        <p className="eyebrow">The portfolio / 06 projects</p>
        <h1>
          Built with care.
          <br />
          <span className="accent">Made to work.</span>
        </h1>
        <p>
          A selection of websites, platforms, and tools. From music education to
          game discovery, each one started with a problem worth solving.
        </p>
      </div>
      <div className="project-grid all-projects">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
      <div className="page-bottom">
        <p>Got a project that needs a thoughtful developer?</p>
        <Link href="/contact" className="text-link">
          Let&apos;s talk
          <ArrowUpRight size={19} />
        </Link>
      </div>
    </div>
  );
}
