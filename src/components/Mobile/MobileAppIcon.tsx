import type { Language } from "../../App"
import { ExternalLink } from "lucide-react"

type MobileAppIconProps = {
    id: string,
    icon: React.ElementType,
    label: string
    onOpen: (id: string) => void
    currentLanguage: Language
}

export const MobileAppIcon = ({id, icon: Icon, label, onOpen, currentLanguage}:MobileAppIconProps) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <button
            type="button" 
            onClick={() => onOpen(id)}
            aria-label={label}
            title={label}
            lang={currentLanguage}
            className="flex flex-col justify-center items-center size-16 rounded-2xl bg-linear-to-b from-white/16 to-white/6 border-white/10 
                shadow-lg shadow-black/20 backdrop-blur-sm relative overflow-hidden transition-all active:scale-95 active:brightness-110
                " 
            id={id}>
                <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/7 to-transparent"></div>
                <Icon size={34}/>
            </button>
            <p className="text-xs text-white/90 text-center leading-tight max-w-20 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]" lang={currentLanguage}>
                {
                    id === "github" ? (
                        <span className="flex items-start justify-center gap-0.5">
                            {label}
                            <ExternalLink size={10} />
                        </span>
                    ) : (
                        label
                    )
                }
            </p>
        </div>
    )
}
