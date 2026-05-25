import { useState } from "react"
import type { Language } from "../../App"
import { apps } from "../../data/apps"
import { RenderAppContent } from "../AppContent/RenderAppContent.tsx"
import { StatusBar } from "./StatusBar"
import Wallpaper from "../Wallpaper"
import { AppGrid } from "./AppGrid"
import { MobileAppScreen } from "./MobileAppScreen"
import { AnimatePresence } from "motion/react"


type MobileWorkspaceProps = {
    currentLanguage: Language
    onLanguageChange: (lang: Language) => void
}

export const MobileWorkspace = ({currentLanguage, onLanguageChange}:MobileWorkspaceProps) => {
    const [activeApp, setActiveApp] = useState<string | null>(null)
    const currentApp = apps.find(app => app.id === activeApp)

    const handleOpenApp = (id: string) => {
        if (id === "github") {
            window.open("https://github.com/pedroguedes9", "_blank", "noopener,noreferrer")
            return
        }
        if (id === "language") {
            onLanguageChange(
                currentLanguage === "pt" ? "en" : "pt"
            )
            return
        }

        setActiveApp(id)
    }

    return (
        <div className="relative flex flex-col justify-center items-center h-screen w-full overflow-hidden">
            <StatusBar currentLanguage={currentLanguage} />
            <Wallpaper currentLanguage={currentLanguage} name="Pedro Guedes" layoutMode="mobile"/>
            <AppGrid currentLanguage={currentLanguage} onOpen={handleOpenApp} />
            <AnimatePresence>
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
            </AnimatePresence>
        </div>
    )
}