import { User, Zap, Folder, Mail, Code2 } from "lucide-react"
import { SiGithub } from "react-icons/si"
import type { Language } from "../App"


export type AppData = {
    id: string
    icon: React.ElementType
    label: Record<Language, string>
}
export const apps: AppData[] = [
    {id: "about", icon: User, label: {pt:"Sobre mim", en: "About Me"} },
    {id: "skills", icon: Zap, label: {pt:"Habilidades", en: "Skills"} },
    {id: "projects", icon: Folder, label:{pt: "Projetos", en: "Projects"} },
    {id: "contact", icon: Mail, label: {pt:"Contato", en: "Contact"} },
    {id: "Services", icon: Code2, label: {pt: "Serviços", en: "Services"} },
    {id: "github", icon: SiGithub, label: {pt: "Github", en: "Github"}}
]