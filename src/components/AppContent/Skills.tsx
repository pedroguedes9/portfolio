import type { Language } from "../../App"
import { skills } from "../../data/skills"
import { 
    MonitorSmartphone, 
    Terminal, 
    Database, 
    Settings, 
    Lightbulb, 
    GraduationCap  
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

type SkillsProps = {
    currentLanguage: Language
}

const categoryIcons: Record<string, React.ElementType> = {
    "front-end": MonitorSmartphone,
    "back-end": Terminal,
    "database": Database,
    "tools": Settings,
    "concepts": Lightbulb,
    "deepening": GraduationCap
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

export const Skills = ({currentLanguage}: SkillsProps) => {
    return (
        <div className="flex-1 grid grid-cols-2 gap-3 p-5 content-center justify-start items-center">
            {skills.map(category => {
                const Icon = categoryIcons[category.id]
                return (
                    <section className={`flex flex-col gap-2 p-4 min-h-27.5 max-w-5xl shadow-md bg-white/5 border  rounded-2xl  backdrop-blur-sm hover:border-violet-300/25 hover:bg-white/7 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ${category.id === "deepening" ? 'border-dashed border-indigo-500/6' : 'border-white/10'}`} key={category.id}>
                        <h2 className="flex items-center justify-center gap-2 text-sm font-semibold text-center uppercase tracking-wide text-white/90">
                            {Icon && <Icon size={16} className="text-violet-400"/>}
                            {category.title[currentLanguage]}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {category.items[currentLanguage].map(item => {
                                const TagIcon = tagIcons[item.toLowerCase()]
                                return (
                                    <div className="flex flex-row justify-center items-center gap-0.5 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/75 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/10 hover:bg-violet-400/10 hover:text-white transition-all duration-300" key={item}>
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