import { useState } from "react"
import type { Language } from "../../App"
import { apps } from "../../data/apps"
import { RenderAppContent } from "../AppContent/renderAppContent"
import { StatusBar } from "./StatusBar"
import Wallpaper from "../Wallpaper"


type MobileWorkspaceProps = {
    currentLanguage: Language
    onLanguageChange: (lang: Language) => void
}

export const MobileWorkspace = ({currentLanguage, onLanguageChange}:MobileWorkspaceProps) => {
    const [activeApp, setActiveApp] = useState<string | null>()
    return (
        <div className="relative flex flex-col justify-center items-center h-screen w-full overflow-hidden">
            <StatusBar onLanguageChange={onLanguageChange} currentLanguage={currentLanguage} />
            <Wallpaper currentLanguage={currentLanguage} name="Pedro Guedes" layoutMode="mobile"/>
        </div>
    )
}