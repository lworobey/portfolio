import { Project } from "@/data/projects";
import Image from "next/image";
import { ExternalLinkIcon } from "@/components/Icon";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex gap-4">
        <div className="flex-shrink-0 relative w-[544px] h-[236px]">
          {project.image && (
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="w-[544px] h-[236px] flex flex-col justify-between">
          <div>
            <h3 className="text-[clamp(14px,2vw,20px)] font-bold mb-2 truncate">{project.title}</h3>
            <p className="text-[clamp(10px,1.5vw,14px)] mb-2 leading-tight">{project.summary}</p>
            <div className="mb-2">
              <span className="text-[clamp(10px,1.5vw,14px)] font-semibold block">Stacks:</span>
              <ul className="text-[clamp(9px,1.2vw,12px)]">
                {project.stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            {project.links.repo && (
              <a href={project.links.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm">
                Repo <ExternalLinkIcon className="size-4" />
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm">
                Demo <ExternalLinkIcon className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
