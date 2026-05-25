import { Battery, Signal, WifiIcon } from "lucide-react"
import { useEffect, useState } from "react"
import type { Language } from "../../App"

type StatusBarProps = {
    currentLanguage: Language
}

export const StatusBar = ({currentLanguage}:StatusBarProps) => {
    const [hourTime, setHourTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setHourTime(new Date())
        }, 60000)
        return () => clearInterval(timer)
    }, [])

    const formattedHour = hourTime.toLocaleString(currentLanguage === "pt" ? "pt-br" : "en-US", {
        hour: "2-digit",
        minute: "2-digit"
    })

    return (
        <div className="flex items-center justify-between absolute top-0 left-0 w-full h-10 px-5 z-50 text-white/95 text-xs">
            <div className="text-[15px] font-semibold tracking-tight tabular-nums pl-1" lang={currentLanguage}>
                {formattedHour}
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
