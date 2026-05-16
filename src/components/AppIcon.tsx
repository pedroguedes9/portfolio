import type { Language } from "../App"


type Props = {
    id: string,
    icon: React.ElementType,
    label: string
    onOpen: (id:string) => void
    status: "open" | "minimized" | "idle"
    appIconRef?: (element: HTMLDivElement | null) => void
    currentLanguage: Language
}

const statusStyles = {
    open: "scale-110 border-violet-400/50 shadow-lg shadow-violet-500/20",
    minimized: "opacity-90 border-b border-white/20",
    idle: "hover:scale-105"
}
const dotStyles = {
    open: "bg-violet-400",
    minimized: "bg-white/30",
    idle: "hidden"
}

export const AppIcon = ({id, icon:Icon, label, onOpen, status, appIconRef, currentLanguage}: Props) => {
    
    const currentStatusStyle = statusStyles[status]
    const currentDotStyles = dotStyles[status]
    return (
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer" ref={appIconRef}>
            <button onClick={() => {
                onOpen(id)
            }}
            className={`group size-20 flex flex-col items-center justify-center bg-linear-to-b from-white/8 cursor-pointer
            to-white/2 rounded-2xl border-t border-white/10 relative overflow-hidden focus-visible:outline
            focus-visible:outline-violet-300/50 hover:border-violet-300/30 hover:scale-105 transition-all duration-300
            ${currentStatusStyle}
            will-change-transform transform-gpu backface-hidden
            `}
            id={id}>
                <div className='opacity-0 bg-linear-to-b from-violet-400/18 via-indigo-500/8 to-transparent pointer-events-none absolute inset-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/4 to-transparent pointer-events-none'></div>
                <div className='z-10 flex flex-col justify-center items-center'>
                    <Icon size={46}></Icon>
                    <p className='text-xs text-white/70 antialiased' lang={currentLanguage}>{label}</p>
                </div>
            </button>
            <div className={`h-1.5 w-1.5 rounded-full ${currentDotStyles}`} ></div>
        </div>
        
    )
}