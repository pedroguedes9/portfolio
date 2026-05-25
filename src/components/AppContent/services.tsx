import type { Language } from "../../App"
import { services } from "../../data/services"
import type { LayoutMode } from "./LayoutMode"

type ServicesProps = {
    currentLanguage: Language
    layoutMode: LayoutMode
}

export const Services = ({currentLanguage, layoutMode}:ServicesProps) => {
    const isMobile = layoutMode === "mobile"
    const isDesktopMaximized = layoutMode === "desktop-maximized"
    return (
        <div className={`
            w-full mx-auto select-text transition-all duration-500
            ${
                isMobile
                    ? "min-h-full flex flex-col gap-5 pb-6"
                    : isDesktopMaximized
                        ? "h-full max-w-6xl p-10 flex flex-col gap-6"
                        : "h-full max-w-5xl p-6 flex flex-col gap-4"
            }
        `}>
            <div className="flex flex-col items-center text-center gap-2">
                <h2 className={`
                    font-semibold tracking-tight text-white
                    ${
                        isMobile
                            ? "text-2xl" 
                            : "text-3xl"
                    }
                `}
                lang={currentLanguage}>
                    {currentLanguage === "pt" ? "Meus serviços" : "My services"}
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-white/65" lang={currentLanguage}>
                    {currentLanguage === "pt"
                    ? "Soluções web para negócios que precisam de presença digital moderna, funcional e bem estruturada."
                    : "Web solutions for businesses that need a modern, functional, and well-structured digital presence."
                    }
                </p>
            </div>
            <div className={`
                grid content-center
                ${
                    isMobile 
                        ? "grid-cols-1 gap-3"
                        : isDesktopMaximized
                            ? "grid-cols-3 gap-4"
                            : "grid-cols-2 gap-4 p-5"
                }
            `}>
                {services.map(service => {
                    const Icon = service.icon
                    return (
                        <div className={`
                            group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5
                            backdrop-blur-xs hover:bg-white/[0.07] hover:border-violet-300/25
                            hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10
                            transition-all duration-300
                            ${!isMobile && !isDesktopMaximized ? "last:col-span-2" : ""}
                            ${
                                isMobile 
                                    ? "p-4 min-h-fit"
                                    : "p-5 min-h-37.5"
                            }
                        `} 
                        key={service.id}>
                            <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-violet-500/10 border border-violet-300/20 text-violet-200 group-hover:bg-violet-500/20 group-hover:border-violet-300/40 transition-all">
                                <Icon size={20}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-base font-semibold text-white/90" lang={currentLanguage}>{service.title[currentLanguage]}</h2>
                                <p className="text-sm leading-relaxed text-white/60" lang={currentLanguage}>{service.description[currentLanguage]}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services
