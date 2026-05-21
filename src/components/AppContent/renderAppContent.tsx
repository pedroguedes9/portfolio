import type { Language } from "../../App"
import type { WindowState } from "../Desktop/DesktopWorkspace"
import { AboutMe } from "./AboutMe"
import { Contact } from "./Contact"
import type { LayoutMode } from "./LayoutMode"
import { ProjectsContent } from "./Projects/ProjectsContent"
import Services from "./Services"
import { Skills } from "./Skills"

type RenderAppContentProps = {
    windowState?: WindowState
    currentLanguage: Language
    layoutMode: LayoutMode
    activeApp?: string | null
}

export const RenderAppContent = ({windowState, currentLanguage, layoutMode, activeApp}:RenderAppContentProps) => {
    switch (windowState?.id || activeApp) {
        case "about":
            return <AboutMe currentLanguage={currentLanguage} layoutMode={layoutMode}/>
        case "skills":
            return <Skills currentLanguage={currentLanguage}/>
        case "projects":
            return <ProjectsContent currentLanguage={currentLanguage}/>
        case "contact":
            return <Contact currentLanguage={currentLanguage} layoutMode={layoutMode}/>
        case "services":
            return <Services currentLanguage={currentLanguage} />
        default:
            return null;
    }
}