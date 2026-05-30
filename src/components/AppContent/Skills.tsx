import type { Language } from "../../App"
import { skills } from "../../data/skills"
import { 
    MonitorSmartphone, 
    Terminal, 
    Database, 
    Settings, 
    Lightbulb, 
    GraduationCap,  
    UsersRound
} from "lucide-react"
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiHtml5,
    SiCss,
    SiPython,
    SiFlask,
    SiSqlite,
    SiGit,
    SiGithub,
    SiNpm,
    SiVite
} from "react-icons/si"
import type { LayoutMode } from "./LayoutMode"

type SkillsProps = {
    currentLanguage: Language
    layoutMode: LayoutMode
}

const categoryIcons: Record<string, React.ElementType> = {
    "front-end": MonitorSmartphone,
    "back-end": Terminal,
    "database": Database,
    "tools": Settings,
    "concepts": Lightbulb,
    "deepening": GraduationCap,
    "softSkills": UsersRound
}

const tagIcons: Record<string, React.ElementType> = {
    "react": SiReact,
    "typescript": SiTypescript,
    "javascript": SiJavascript,
    "tailwind": SiTailwindcss,
    "bootstrap": SiBootstrap,
    "html": SiHtml5,
    "css": SiCss,
    "python": SiPython,
    "flask": SiFlask,
    "sqlite": SiSqlite,
    "git": SiGit,
    "github": SiGithub,
    "npm": SiNpm,
    "vite": SiVite,
}

export const Skills = ({currentLanguage, layoutMode}: SkillsProps) => {
    const isMobile = layoutMode === "mobile"
    const isDesktopMaximized = layoutMode === "desktop-maximized"
    
    return (
        <div className={`
            w-full select-text transition-all duration-500 ease-in-out
            ${
                isMobile 
                    ? "flex flex-col gap-3 px-1 pb-6"
                    : isDesktopMaximized 
                        ? "grid grid-cols-3 gap-4 p-8 content-center max-w-6xl mx-auto"
                        : "grid grid-cols-2 gap-3 px-5 py-4 content-center max-w-6xl"
            }
        `}>
            {skills.map(category => {
                const Icon = categoryIcons[category.id]
                return (
                    <section className={`
                    flex flex-col gap-2 rounded-2xl border bg-white/5 shadow-md backdrop-blur-sm
                    hover:border-violet-300/25 hover:bg-white/7 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300
                    ${category.id === "deepening" 
                        ? 'border-dashed border-indigo-500/20 bg-white/5 hover:border-indigo-400/40 hover:bg-indigo-500/5' 
                        : category.id === "softSkills"
                            ? 'border-dotted border-violet-400/30 bg-white/5 hover:border-violet-400/50 hover:bg-violet-500/5'
                            : 'border-white/10 bg-white/5 hover:border-violet-300/25 hover:bg-white/7'
                    }
                    ${
                        isMobile
                            ? "p-4 min-h-25"
                            : isDesktopMaximized
                                ? "p-5 min-h-33.75 last:col-span-3"
                                : "p-4 min-h-27.5 last:col-span-2"
                    }
                    `} 
                    key={category.id}>
                        <h2 className={`
                            flex items-center justify-center gap-2 font-semibold text-center uppercase tracking-wide text-white/90
                            ${
                                isMobile ? "text-xs" : "text-sm"
                            }
                        `}
                        lang={currentLanguage}>
                            {Icon && <Icon size={16} className="text-violet-400"/>}
                            {category.title[currentLanguage]}
                        </h2>
                        <div className={`
                            flex flex-wrap justify-center 
                            ${isMobile ? "gap-1.5" : "gap-2"}
                        `}>
                            {category.items[currentLanguage].map(item => {
                                const TagIcon = tagIcons[item.toLowerCase()]
                                return (
                                    <div className={`
                                        flex flex-row justify-center items-center gap-1 rounded-full border border-white/10 bg-white/8 
                                        text-white/75 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/10 hover:bg-violet-400/10 
                                        hover:text-white transition-all duration-300
                                        ${isMobile ? "px-2.5 py-1 text-[11px]" : "px-3 py-1 text-xs"}
                                    `}
                                    lang={currentLanguage}
                                    key={item}>
                                        {TagIcon && <TagIcon size={12}/>}
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
