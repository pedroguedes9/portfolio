import { Battery, Signal, WifiIcon } from "lucide-react"
import type { Language } from "../../App"

type StatusBarProps = {
    currentLanguage: Language
    onLanguageChange: (lang: Language) => void
}

export const StatusBar = ({currentLanguage, onLanguageChange}:StatusBarProps) => {
    return (
        <div className="flex items-center justify-between absolute top-0 left-0 w-full h-10 px-5 z-50 text-white/90 text-xs">
            <div className="text-base">
                13:14
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-28 h-6 rounded-full bg-black/70 border border-white/10"></div>
            <div className="flex items-center gap-1.5">
                <WifiIcon size={20}/>
                <Signal size={20}/>
                <Battery size={20}/>
            </div>
        </div>
    )
}