import { useRef, useState } from "react"
import DesktopWallpaper from "./DesktopWallpaper"
import { Dock } from "./Dock"
import { TopBar } from "./TopBar"
import AppWindow from "../AppWindow/AppWindow"
import { apps } from "../../data/apps"
import { AnimatePresence } from "motion/react"
import type { Language } from "../../App"
import { AboutMe } from "../AppWindow/content/AboutMe"


export type WindowState = {
    id: string 
    isMinimized: boolean
    position: {
        x: number
        y: number
    }
} | null
type DesktopWorkspace = {
    currentLanguage: Language
    onLanguageChange: (lang:Language) => void
}
export const DesktopWorkspace = ({currentLanguage, onLanguageChange}:DesktopWorkspace) => {
    const [windowState, setWindowState] = useState<WindowState>(null)
    
    const containerRef = useRef<HTMLDivElement | null>(null)
    const dockIconRefs = useRef<Record<string, HTMLDivElement | null>>({})
    const [minimizeRequestId, setMinimizeRequestId] = useState(0)
    const [isMaximized, setIsMaximized] = useState(false)

    const registerDockIcon = (id: string, element: HTMLDivElement | null) => {
        dockIconRefs.current[id] = element
    }

    const currentApp = apps.find(app => app.id === windowState?.id)

    const handleOpenApp = (id:string) => {
        if (windowState?.id === id && !windowState.isMinimized){
            setMinimizeRequestId(prev => prev + 1)
        }
        if (windowState?.id === id && windowState.isMinimized) {
            setWindowState(prev => {
                if (!prev) return null

                return {
                ...prev,
                isMinimized: false
                }
            })
            return
        }
        setWindowState({
            id,
            isMinimized: false,
            position:{x: 0 , y: 0}
        })
    }

    const getDockIconCenter = (id:string) => {
        const iconElement = dockIconRefs.current[id]
        if (!iconElement) return null

        const rect = iconElement.getBoundingClientRect()

        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        }
    }

    const handleMinimize = (position: {x:number, y:number}) => {
        setWindowState(prevState => {
            if (!prevState) return null
            return {
                ...prevState,
                isMinimized: true,
                position: {
                    x:position.x,
                    y:position.y
                }
            }
        })
        setMinimizeRequestId(0)
    }

    const handlePositionChange = (position: {x:number, y:number}) => {
        setWindowState(prevState => {
            if (!prevState) return null
            return {
                ...prevState,
                position: {
                    x:position.x,
                    y:position.y
                }
            }
        })
    }

    const renderAppContent = () => {
        switch (windowState?.id) {
            case "about":
                return <AboutMe currentLanguage={currentLanguage} isMaximized={isMaximized}></AboutMe>
            default:
                return null;
        }
    }

    return (
        <div className="relative flex flex-col justify-center items-center h-screen w-full overflow-hidden" ref={containerRef}>
            <TopBar currentLanguage={currentLanguage} onLanguageChange={onLanguageChange}/>
            <DesktopWallpaper name="Pedro Guedes" currentLanguage={currentLanguage} />
            <AnimatePresence>
                {windowState && !windowState.isMinimized && 
                    <AppWindow 
                    key={windowState?.id}
                    title={currentApp ? currentApp.label[currentLanguage] : windowState?.id} 
                    onClose={() => {setWindowState(null)}} 
                    containerRef={containerRef}
                    onMinimize={handleMinimize}
                    initialPosition={windowState.position}
                    onPositionChange={handlePositionChange}
                    getMinimizeTarget={() => getDockIconCenter(windowState.id)}
                    minimizeRequestId={minimizeRequestId}
                    currentLanguage={currentLanguage}
                    isMaximized={isMaximized}
                    onMaximizeChange={setIsMaximized}
                    >
                        {renderAppContent()}
                    </AppWindow>
                }
            </AnimatePresence>
            <Dock 
            currentLanguage={currentLanguage} 
            onOpenApp={handleOpenApp} 
            windowState={windowState ?? null}
            registerDockIcon={registerDockIcon}
            />
        </div>
    )
}