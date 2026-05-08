import type { Language } from "../../App"
import { translations } from "../../data/translations"


type TopBarProps = {
    currentLanguage: Language
    onLanguageChange: (lang: Language) => void
}

export const TopBar = ({currentLanguage, onLanguageChange}:TopBarProps) => {
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
                className="text-[#E5E7EB" lang={currentLanguage}>
                    {translations[currentLanguage].topbar.languageButton}
                </button>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-70 text-white">
                    <path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725M6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-70 text-white">
                    <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-70 text-white">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5a.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m1 3v4m3-4v4m3-4v4m3-4v4"/>
                </svg>
                <h4 className="text-[#E5E7EB">Ter. 03 de Mai. 16:10</h4>
            </div>
        </div>
    )
}