import type { Language } from "../../../App"
import type { Project } from "../../../data/projects"
import { ExternalLink } from "lucide-react"


type ProjectCardProps = {
    currentLanguage: Language
    project: Project
}

export const ProjectCard = ({currentLanguage, project}:ProjectCardProps) => {
    return (
        <div className="flex flex-row gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all select-text hover:bg-white/7 hover:border-violet-300/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/10">
            <img 
            className="h-36 w-24 rounded-xl object-cover border border-white/10 bg-linear-to-br from-violet-500/20 via-indigo-500/10 to-white/5" 
            src={project.thumbnail} alt={project.id} />
            <div className="flex-1 min-w-0 flex flex-col justify-between gap-2 ">
                <div className="flex flex-row justify-between">
                    <h2 className="text-base font-semibold text-white/90">
                        {project.title[currentLanguage]}
                    </h2>
                    <div className="flex flex-row justify-end gap-3">
                        <a target="_blank" href={project.githubUrl} className=" flex gap-1 items-center text-xs font-medium text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-violet-500/20 hover:border-violet-400/30 hover:text-violet-100 transition-all">
                            <ExternalLink size={12}/>
                            Github
                        </a>
                        <a target="_blank" href={project.demoUrl} className="flex gap-1 items-center text-xs font-medium text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-violet-500/20 hover:border-violet-400/30 hover:text-violet-100 transition-all">
                            <ExternalLink size={12}/>
                            Demo
                        </a>
                        {project.videoDemoUrl && 
                            <a target="_blank" href={project.videoDemoUrl} className="flex gap-1 items-center text-xs font-medium text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-violet-500/20 hover:border-violet-400/30 hover:text-violet-100 transition-all">
                                <ExternalLink size={12}/>
                                Vídeo
                            </a>
                        }
                    </div>
                </div>
                <p className="text-sm text-white/65 leading-relaxed line-clamp-3">
                    {project.description[currentLanguage]}
                </p>
                <div className="flex flex-row flex-wrap gap-1.5 ">
                    {project.tags.map(tag => (
                        <div className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[11px] text-white/65" >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}