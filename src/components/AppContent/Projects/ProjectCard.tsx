import type { Language } from "../../../App"
import type { Project } from "../../../data/projects"
import { ExternalLink } from "lucide-react"
import type { LayoutMode } from "../LayoutMode"


type ProjectCardProps = {
    currentLanguage: Language
    project: Project
    onOpenGallery: (project: Project) => void
    layoutMode: LayoutMode
}

export const ProjectCard = ({currentLanguage, project, onOpenGallery, layoutMode}:ProjectCardProps) => {
    const isMobile = layoutMode === "mobile"
    return (
        <div className={`
            rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all select-text
            hover:bg-white/[0.07] hover:border-violet-300/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/10
            ${
                isMobile
                    ? "flex flex-col gap-3 p-3"
                    : "flex flex-row gap-4 p-3"
            }
        `}>
            <div className="relative overflow-hidden rounded-xl group">
                <img
                className={`
                    rounded-xl border border-white/10 bg-linear-to-br from-violet-500/20 via-indigo-500/10 to-white/5 group-hover:scale-105 
                    transition-transform duration-300
                    ${
                        isMobile ? "w-full h-40 object-contain" : "h-36 w-24 shrink-0 object-cover"
                    }
                `}
                src={project.thumbnail} alt={project.id}
                />
                {project.images.length > 0 &&
                    <button 
                    onClick={() => onOpenGallery(project)} 
                    className={`
                        absolute inset-0 flex items-center justify-center bg-black/50 text-xs font-medium text-white transition-opacity
                        ${
                            isMobile 
                                ? "opacity-100 bg-black/30" 
                                : "opacity-0 group-hover:opacity-100"
                        }
                    `}>
                        {currentLanguage === "pt" ? "Ver galeria" : "View gallery"}
                    </button>
                }
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-between gap-3 ">
                <div className={`
                    flex gap-2
                    ${isMobile ? "flex-col" : "flex-row justify-between"}
                `}>
                    <h2 className="text-base font-semibold text-white/90">
                        {project.title[currentLanguage]}
                    </h2>
                    <div className={`
                        flex gap-2
                        ${
                            isMobile ? "flex-wrap" : "flex-row justify-end"
                        }
                    `}>
                        <a 
                        target="_blank" 
                        href={project.githubUrl} 
                        rel="noreferrer"
                        className={`
                            flex gap-1 items-center font-medium text-white/60 bg-white/5 border border-white/10 rounded-full 
                            hover:bg-violet-500/20 hover:border-violet-400/30 hover:text-violet-100 transition-all
                            ${
                                isMobile ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-1.5 text-xs"
                            }
                        `}>
                            <ExternalLink size={12}/>
                            Github
                        </a>
                        <a 
                        target="_blank" 
                        href={project.demoUrl} 
                        rel="noreferrer"
                        className={`
                            flex gap-1 items-center font-medium text-white/60 bg-white/5 border border-white/10 rounded-full 
                            hover:bg-violet-500/20 hover:border-violet-400/30 hover:text-violet-100 transition-all
                            ${
                                isMobile ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-1.5 text-xs"
                            }
                        `}>
                            <ExternalLink size={12}/>
                            Demo
                        </a>
                        {project.videoDemoUrl && 
                            <a 
                            target="_blank" 
                            href={project.videoDemoUrl} 
                            rel="noreferrer"
                            className={`
                                flex gap-1 items-center font-medium text-white/60 bg-white/5 border border-white/10 rounded-full 
                                hover:bg-violet-500/20 hover:border-violet-400/30 hover:text-violet-100 transition-all
                                ${
                                    isMobile ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-1.5 text-xs"
                                }
                            `}>
                                <ExternalLink size={12}/>
                                Vídeo
                            </a>
                        }
                    </div>
                </div>
                <p className={`
                    text-sm text-white/65 leading-relaxed
                    ${
                        isMobile ? "line-clamp-none" : " line-clamp-3"
                    }
                `}>
                    {project.description[currentLanguage]}
                </p>
                <div className="flex flex-row flex-wrap gap-1.5 ">
                    {project.tags.map((tag, index) => (
                        <div key={index} 
                        className={`
                        rounded-full border border-white/10 bg-white/8 text-white/65
                        ${
                            isMobile 
                                ? "text-[10px] px-2 py-0.5"
                                : "text-[11px] px-2.5 py-1"
                        }
                        `} >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}