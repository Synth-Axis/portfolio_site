import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="project-card" id={project.slug}>
      <a
        className="project-image-link"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Explore ${project.title} on GitHub (opens in a new tab)`}
      >
        <div className="project-image">
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            sizes="(max-width: 500px) 100vw, (max-width: 760px) 50vw, 33vw"
          />
          <span className="project-image-arrow">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </a>
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.title}
          <ArrowUpRight size={19} />
        </a>
      </h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
