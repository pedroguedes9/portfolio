import type { Language } from "../../App"
import { apps } from "../../data/apps"
import { AppIcon } from "../AppIcon"
import type { WindowState } from "./DesktopWorkspace"

type dockProps = {
    currentLanguage: Language
    onOpenApp: (id:string) => void
    windowState: WindowState
    registerDockIcon: (id:string, element:HTMLDivElement | null) => void
}

export const Dock = ({currentLanguage, onOpenApp, windowState, registerDockIcon}: dockProps) => {

    return (
        <div className="w-fit px-7 h-26 bg-[rgba(255,255,255,0.08)] backdrop-blur-xl rounded-2xl border border-[rgba(255,255,255,0.05)] shadow-md  absolute bottom-5 overflow-hidden">
            <div className=" rounded-2xl bg-linear-to-b from-white/7 via-white/3 to-transparent absolute inset-0 pointer-events-none"></div>
            <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/6 via-white/2 to-transparent pointer-events-none"></div>
            <div className="relative w-fit z-10 h-full flex items-center justify-center gap-7 overflow-visible">
                {apps.map(app => {
                    let status: "idle" | "minimized" | "open" = "idle"
                    if (!windowState || windowState?.id !== app.id) {
                        status = "idle"                
                    }
                    else if (windowState?.id === app.id && !windowState.isMinimized) {
                        status = "open"
                    }
                    else {
                        status = "minimized"
                    }
                    return (
                        <AppIcon
                        key={app.id}
                        id={app.id}
                        icon={app.icon}
                        label={app.label[currentLanguage]}
                        onOpen={onOpenApp}
                        status={status}
                        appIconRef={(element) => registerDockIcon(app.id, element)}
                        currentLanguage={currentLanguage}
                        />
                    )
                })}
            </div>
        </div>
    )
}