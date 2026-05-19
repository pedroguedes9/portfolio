import { useEffect, useState } from "react"
import type { Language } from "../../App"
import { translations } from "../../data/translations"
import { WifiIcon, Battery, Search } from "lucide-react"

type TopBarProps = {
    currentLanguage: Language
    onLanguageChange: (lang: Language) => void
}

export const TopBar = ({currentLanguage, onLanguageChange}:TopBarProps) => {
    const [dateTime, setDateTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date())
        }, 60000)
        return () => clearInterval(timer)
    }, [])

    const formattedDate = dateTime.toLocaleString(currentLanguage === 'pt' ? 'pt-br' : 'en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    }) 

    return (
        <div className="bg-[rgba(10,10,20,0.4)] h-10 w-full px-5 flex flex-flow justify-between items-center absolute top-0 border-b border-[rgba(255,255,255,0.05)] z-40">
            <div className="flex flex-row justify-center gap-5">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-70 text-white">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"/>
                </svg>
                <h4 className="text-[#E5E7EB]">Pedro Guedes</h4>
            </div>
            <div className="flex flex-row justify-center gap-5">
                <button 
                onClick={() => {onLanguageChange(
                    currentLanguage === "pt" ? "en" : "pt"
                )}} 
                className="text-[#E5E7EB] cursor-pointer" lang={currentLanguage}>
                    {translations[currentLanguage].topbar.languageButton}
                </button>
                <WifiIcon/>
                <Search/>
                <Battery/>
                <h4 className="text-[#E5E7EB] capitalize">
                    {formattedDate.replace(/\./g, '')}
                </h4>
            </div>
        </div>
    )
}