import { useState } from "react"
import { projects, type Project } from "../../../data/projects"
import type { Language } from "../../../App"
import { ProjectCard } from "./ProjectCard"
import { SiGithub } from "react-icons/si"
import { GalleryModal } from "./GalleryModal"
import { AnimatePresence } from "motion/react"
import type { LayoutMode } from "../LayoutMode"

type Filter = {
    id: FilterId, label: {pt: string, en: string } 
}
type FilterId = "all" | "featured" | "front-end" | "full-stack"

type ProjectsContentProps = {
    currentLanguage: Language
    layoutMode: LayoutMode
}

const filters: Filter[] = [
    {id: "all", label: {pt: "Todos", en: "All"} },
    {id: "featured", label: {pt: "Destaques", en: "Featured"} },
    {id: "front-end", label: {pt: "Front-End", en: "Front-end"} },
    {id: "full-stack", label: {pt: "Full-Stack", en: "Full-Stack"} },
]


export const ProjectsContent = ({currentLanguage, layoutMode}:ProjectsContentProps) => {
    const [activeFilter, setActiveFilter] = useState<FilterId>("all")
    const [selectedImages, setSelectedImages] = useState<Project | null>(null)
    const isMobile = layoutMode === "mobile"

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
        <div className={`
            relative flex flex-col w-full gap-4
            ${
                isMobile
                    ? "min-h-full pb-6"
                    : "flex-1 h-full max-w-6xl p-5 overflow-hidden"
            }
        `}>
            <section className={`
                flex gap-3
                ${
                    isMobile 
                        ? "flex-col items-stretch" 
                        : "flex-row justify-center items-center"
                }
            `}> 
                <div className={`
                    flex gap-2 justify-center
                    ${
                        isMobile
                            ? "overflow-x-auto flex-nowrap py-1"
                            : "flex-wrap shrink-0"
                    }
                `}>
                    {filters.map(filter => {
                        const isActive = activeFilter === filter.id
                        return (
                            <button
                            onClick={() => setActiveFilter(filter.id)}
                            className={
                                `shadow-lg px-4 py-1.5 text-sm rounded-full cursor-pointer whitespace-nowrap
                                ${
                                    isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-1.5 text-sm"
                                }
                                ${isActive
                                    ? 'bg-violet-400/20 border border-violet-300/30 text-white shadow-violet-500/10 scale-103 hover:brightness-110 hover:border-violet-300/50'
                                    : 'bg-white/6 border border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white'
                                }
                                transition-all duration-300`}
                            key={filter.id}
                            lang={currentLanguage}
                            >
                                {filter.label[currentLanguage]}
                            </button>
                        )
                    })}
                </div>
                <a 
                href="https://github.com/pedroguedes9"
                target="_blank"
                rel="noreferrer"
                className={`
                    flex justify-center items-center gap-1 backdrop-blur-none bg-black/40 border border-white/10 text-white/80 px-5 
                    rounded-full hover:bg-black/60 hover:text-white transition-all shadow-lg hover:border-white/20 pointer-events-auto
                    ${
                        isMobile ? "text-xs py-2.5" : "py-2 text-sm"
                    }
                    `}
                lang={currentLanguage}
                >
                        <SiGithub size={12}/>
                        { currentLanguage === "pt" ? "Ver todos os projetos no github" : "View all projects on GitHub"}
                </a>    
            </section>
            <section className={`
                flex-1 overflow-y-auto flex flex-col gap-2 p-1
                ${
                    isMobile ? "overflow-visible p-0" : "flex-1 overflow-y-auto"
                }
            `}>
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} currentLanguage={currentLanguage} project={project} onOpenGallery={setSelectedImages} layoutMode={layoutMode}/>
                ))}
            </section>
            <AnimatePresence>
                {selectedImages &&
                    <GalleryModal project={selectedImages} onClose={() => setSelectedImages(null)} currentLanguage={currentLanguage} layoutMode={layoutMode}/>
                }
            </AnimatePresence>
        </div>
    )
}
