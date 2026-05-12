
import type { Language } from "../../../App"
import { translations } from "../../../data/translations"

type AboutMeProps = {
    currentLanguage: Language
    isMaximized: boolean
}

export const AboutMe = ({currentLanguage, isMaximized}:AboutMeProps) => {
    const firstParagraph = translations[currentLanguage].appWindow.about.firstParagraph
    const secondParagraph = translations[currentLanguage].appWindow.about.secondParagraph

    return (
        <div className={`grid grid-cols-[1fr_1.5fr] h-full select-text transition-all duration-500 ease-in-out mx-auto items-start
            ${isMaximized ? "max-w-6xl gap-8 p-10 pt-[17vh]" : "max-w-full gap-9 p-5 pt-4 pb-0"}`}>
            <section className={`flex flex-col items-center transition-all duration-500 ease-in-out 
                ${isMaximized ? "pt-0" : "pt-8"}`}>
                <img 
                src="/images/minha-foto.webp" 
                alt="foto-pedro-guedes" 
                className={`rounded-full object-cover border-2 border-white/20 shadow-lg shadow-violet-500/20 ring-4 ring-white/5 transition-all duration-500 ease-in-out
                    ${isMaximized ? "h-60 w-60" : "h-40 w-40"}`} 
                />
                <h2 className={`mt-4 font-semibold text-white/90 ${isMaximized ? 'text-2xl' : 'text-xl' } transition-all duration-500`}>Pedro Chaves Guedes</h2>
                <p className={` text-violet-200/80 ${isMaximized ? 'text-base' : 'text-sm'} transition-all duration-500`}>{translations[currentLanguage].appWindow.about.role}</p>
                <div className="flex flex-row flex-wrap justify-center gap-2 mt-3">
                    <div className={`rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/75`}
                    >React</div>
                    <div className={`rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/75`}
                    >TypeScript</div>
                    <div className={`rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/75`}
                    >Python</div>
                </div>
                <a
                href="/curriculo.pdf" 
                download="Pedro_Guedes_Curriculo.pdf"
                className={`mt-4 font-medium text-white/90 
                    bg-violet-600/10 border border-violet-500/40 rounded-lg 
                    shadow-md shadow-transparent hover:shadow-violet-500/30 hover:bg-violet-600/30 hover:border-violet-400/20 hover:-translate-y-1
                    transition-all duration-300 ease-in-out
                    ${isMaximized ? 'py-2 px-10 text-[17px]' : 'py-2 px-8 text-[15px]'}
                    `}>
                    Baixar currículo
                </a>
            </section>
            <section className={`flex flex-col gap-3 max-w-125 transition-all duration-500 ease-in-out
                ${isMaximized ? 'pt-0' : 'pt-4'}`}>
                <p className={`font-semibold text-white/90 ${isMaximized ? 'text-3xl' : 'text-xl'} transition-all duration-500`}>
                    {currentLanguage === "pt" ? "Olá!" : "Hello!"}
                </p>
                <p className={`max-w-125 leading-relaxed text-white/80 ${isMaximized ? 'text-[17px]' : 'text-[15px]'} transition-all duration-500`}>
                    {firstParagraph.map(part => (
                        part.highlight ? <span className="font-medium text-violet-400">{part.text}</span> : part.text
                    ))}
                </p>
                <p className={`max-w-125 leading-relaxed text-white/75 ${isMaximized ? 'text-[17px]' : 'text-[15px]'} transition-all duration-500`}>
                    {secondParagraph.map(part => (
                        part.text
                    ))}
                </p>
            </section>
        </div>
    )
}