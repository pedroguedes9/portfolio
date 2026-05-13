import { useState } from "react"
import { projects } from "../../../data/projects"
import type { Language } from "../../../App"
import { ProjectCard } from "./ProjectCard"

type Filter = {
    id: FilterId, label: {pt: string, en: string } 
}
type FilterId = "all" | "featured" | "front-end" | "full-stack"

type ProjectsContentProps = {
    currentLanguage: Language
}

const filters: Filter[] = [
    {id: "all", label: {pt: "Todos", en: "All"} },
    {id: "featured", label: {pt: "Destaques", en: "Featured"} },
    {id: "front-end", label: {pt: "Front-End", en: "Front-end"} },
    {id: "full-stack", label: {pt: "Full-Stack", en: "Full-Stack"} },
]


export const ProjectsContent = ({currentLanguage}:ProjectsContentProps) => {
    const [activeFilter, setActiveFilter] = useState<FilterId>("all")

    const filteredProjects = projects.filter(project => {
        if (activeFilter === "all") {
            return true
        }
        if (activeFilter === "featured") {
            return project.featured === true
        }
        return project.category === activeFilter
    })

    return (
        <div className="flex-1 flex flex-col p-5 gap-4 overflow-hidden">
            <section className="flex gap-2 flex-wrap shrink-0">
                {filters.map(filter => {
                    const isActive = activeFilter === filter.id
                    return (
                        <button 
                        onClick={() => setActiveFilter(filter.id)} 
                        className={`shadow-lg px-4 py-1.5 text-sm rounded-full cursor-pointer 
                        ${isActive 
                            ? 'bg-violet-400/20 border border-violet-300/30 text-white shadow-violet-500/10 scale-103 hover:brightness-110 hover:border-violet-300/50' 
                            : 'bg-white/6 border border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white'
                        }
                        transition-all duration-300`}
                        key={filter.id}
                        >
                            {filter.label[currentLanguage]}
                        </button>
                    )
                })}
            </section>
            <section className="flex-1 overflow-x-auto flex flex-col gap-2">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} currentLanguage={currentLanguage} project={project}/>
                ))}
            </section>
        </div>
    )
}