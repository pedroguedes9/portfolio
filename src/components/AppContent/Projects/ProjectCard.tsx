import type { Language } from "../../../App"
import type { Project } from "../../../data/projects"

type ProjectCardProps = {
    currentLanguage: Language
    project: Project
}

export const ProjectCard = ({currentLanguage, project}:ProjectCardProps) => {
    return (
        <div className="flex flex-col gap-3">
            {project.title[currentLanguage]}
            {project.description[currentLanguage]}
            {project.tags}
            {project.githubUrl}
            {project.demoUrl}
        </div>
    )
}