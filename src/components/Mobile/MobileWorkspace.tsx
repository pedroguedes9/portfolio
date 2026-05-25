import { useState } from "react"
import type { Language } from "../../App"
import { apps } from "../../data/apps"
import { RenderAppContent } from "../AppContent/renderAppContent"
import { StatusBar } from "./StatusBar"
import Wallpaper from "../Wallpaper"
import { AppGrid } from "./AppGrid"
import { MobileAppScreen } from "./MobileAppScreen"


type MobileWorkspaceProps = {
    currentLanguage: Language
    onLanguageChange: (lang: Language) => void
}

export const MobileWorkspace = ({currentLanguage, onLanguageChange}:MobileWorkspaceProps) => {
    const [activeApp, setActiveApp] = useState<string | null>(null)
    const currentApp = apps.find(app => app.id === activeApp)
    return (
        <div className="relative flex flex-col justify-center items-center h-screen w-full overflow-hidden">
            <StatusBar/>
            <Wallpaper currentLanguage={currentLanguage} name="Pedro Guedes" layoutMode="mobile"/>
            <AppGrid currentLanguage={currentLanguage} onOpen={setActiveApp} />
            {
                activeApp && 
                <MobileAppScreen 
                title={currentApp ? currentApp.label[currentLanguage] : activeApp}
                currentLanguage={currentLanguage}
                onClose={() => setActiveApp(null)}
                >
                    <RenderAppContent
                    currentLanguage={currentLanguage}
                    layoutMode="mobile"
                    activeApp={activeApp}
                    />
                </MobileAppScreen>
            }
        </div>
    )
}