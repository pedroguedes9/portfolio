
import type { Language } from "../../App"
import { translations } from "../../data/translations"
import type { LayoutMode } from "./LayoutMode"

type AboutMeProps = {
    currentLanguage: Language
    layoutMode: LayoutMode
}

export const AboutMe = ({currentLanguage, layoutMode}:AboutMeProps) => {
    const firstParagraph = translations[currentLanguage].appWindow.about.firstParagraph
    const secondParagraph = translations[currentLanguage].appWindow.about.secondParagraph
    const isMobile = layoutMode === "mobile"
    const isDesktopMaximized = layoutMode === "desktop-maximized"
    
    const resumeButton = (
        <a
        href="/curriculo.pdf" 
        download="Pedro_Guedes_Curriculo.pdf"
        className={`
            font-medium text-white/90 bg-violet-600/10 border border-violet-500/40 rounded-lg
            shadow-md shadow-transparent hover:shadow-violet-500/30 hover:bg-violet-600/30 hover:border-violet-400/20
            transition-all duration-300 ease-in-out
            ${
                isMobile 
                    ? "w-full max-w-xs mt-1 py-2.5 text-sm text-center "
                    : isDesktopMaximized
                        ? "py-2 px-10 text-[17px] mt-4"
                        : "py-2 px-8 text-[15px] mt-4"
            }
        `}
        lang={currentLanguage}>
            {currentLanguage === "pt" ? "Baixar currículo" : "Download resume"}
        </a>
    )

    return (
        <div className={
            `select-text transition-all duration-500 ease-in-out mx-auto
            ${
                isMobile
                    ? "flex flex-col items-center gap-6 px-4 pb-8 min-h-full w-full"
                    : isDesktopMaximized 
                        ? "grid grid-cols-[1fr_1.5fr] h-full max-w-6xl gap-8 p-10 pt-[17vh] items-start"
                        : "grid grid-cols-[1fr_1.5fr] h-full max-w-full gap-9 p-5 pt-4 pb-0 items-start"
            }
            `}>
            <section className={
                `relative flex flex-col items-center transition-all duration-500 ease-in-out 
                ${
                    isMobile 
                        ? "pt-0 text-center"
                        : isDesktopMaximized 
                            ? "pt-0"
                            : "pt-8"
                }
                `
            }>
                <img 
                src="/images/minha-foto.webp" 
                alt="foto-pedro-guedes" 
                className={
                    `rounded-full object-cover border-2 border-white/20 shadow-lg shadow-violet-500/20 ring-4 ring-white/5 transition-all duration-500 ease-in-out
                    ${
                        isMobile 
                            ? "h-28 w-28"
                            : isDesktopMaximized
                                ? "h-60 w-60"
                                : "h-40 w-40"
                    }
                `} 
                />
                <h2 className={`
                    mt-4 font-semibold text-white/90  transition-all duration-500  
                    ${
                        isMobile
                            ? "text-lg text-center"
                            : isDesktopMaximized   
                                ? "text-2xl"
                                : "text-xl"
                    }
                `}>
                    Pedro Chaves Guedes
                </h2>
                <p className={
                    ` text-violet-200/80 transition-all duration-500
                    ${
                        isMobile 
                            ? "text-sm text-center"
                            : isDesktopMaximized   
                                ? "text-base"
                                : "text-sm"
                    }
                `}
                lang={currentLanguage}>
                    {translations[currentLanguage].appWindow.about.role}
                </p>
                <div className={`
                    flex flex-row flex-wrap justify-center gap-2 mt-3
                    ${isMobile ? "max-w-xs" : ""}
                `}>
                    <div className={`
                    rounded-full border border-white/10 bg-white/8 text-white/75
                    ${
                        isMobile 
                            ? "px-2.5 py-1 text-[11px]"
                            : "px-3 py-1 text-xs"
                    }
                    `}
                    >
                        React
                    </div>
                    <div className={`
                    rounded-full border border-white/10 bg-white/8 text-white/75
                    ${
                        isMobile 
                            ? "px-2.5 py-1 text-[11px]"
                            : "px-3 py-1 text-xs"
                    }
                    `}
                    >
                        TypeScript
                    </div>
                    <div className={`
                    rounded-full border border-white/10 bg-white/8 text-white/75
                    ${
                        isMobile 
                            ? "px-2.5 py-1 text-[11px]"
                            : "px-3 py-1 text-xs"
                    }
                    `}
                    >
                        Python
                    </div>
                </div>
                {!isMobile && resumeButton}
            </section>
            <section className={
                `flex flex-col gap-3 max-w-125 transition-all duration-500 ease-in-out
                ${
                    isMobile
                        ? "items-center text-center max-w-full pt-0"
                        : isDesktopMaximized
                            ? "max-w-125 pt-0"
                            : "max-w-120 pt-4"
                }`
            }>
                <p className={
                    `font-semibold text-white/90 transition-all duration-500
                    ${
                        isMobile
                            ? "text-2xl"
                            : isDesktopMaximized
                                ? "text-3xl"
                                : "text-xl"
                    } 
                `}
                lang={currentLanguage}>
                    {currentLanguage === "pt" ? "Olá!" : "Hello!"}
                </p>
                <p className={`
                    leading-relaxed text-white/80 transition-all duration-500
                    ${
                        isMobile
                            ? "text-sm max-w-full"
                            : isDesktopMaximized
                                ? "text-[17px] max-w-125"
                                : "text-[15px] max-w-125"
                    } 
                `}
                lang={currentLanguage}>
                    {firstParagraph.map((part, index) => (
                        part.highlight
                            ? <span key={`about-first-${index}`} className="font-medium text-violet-400">{part.text}</span>
                            : <span key={`about-first-${index}`}>{part.text}</span>
                    ))}
                </p>
                <p className={`
                    leading-relaxed text-white/80 transition-all duration-500
                    ${
                        isMobile
                            ? "text-sm max-w-full"
                            : isDesktopMaximized
                                ? "text-[17px] max-w-125"
                                : "text-[15px] max-w-125"
                    } 
                `}
                lang={currentLanguage}>
                    {secondParagraph.map((part, index) => (
                        <span key={`about-second-${index}`}>{part.text}</span>
                    ))}
                </p>
                {isMobile && resumeButton}
            </section>
        </div>
    )
}
