import type { Language } from "../../App"

type MobileAppScreenProps = {
    title: string
    onClose: () => void
    currentLanguage: Language
    children?: React.ReactNode
}


export const MobileAppScreen = ({title, onClose, children, currentLanguage}:MobileAppScreenProps) => {
    return (
        <div className="flex flex-col absolute inset-0 z-40 pt-10 bg-slate-950/90 backdrop-blur-xs text-white">
            <header className="relative flex justify-center items-center border-b border-white/10 px-4 h-14 shrink-0">
                <button className="absolute left-4 text-sm text-violet-200 bg-white/6 rounded-full border border-white/10 p-1.5 active:bg-white/2 " onClick={onClose} title={currentLanguage === "pt" ? "Voltar" : "Back"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                </button>
                <h2 className="text-lg font-semibold text-white/90">
                    {title}
                </h2>
            </header>
            <main className="flex-1 min-h-0 overflow-y-auto px-4 py-5">
                {children}
            </main>
        </div>
    )
}