import { useState } from "react"
import type { Language } from "../../App"
import { contact } from "../../data/contact"
import { ExternalLink } from "lucide-react"

export type ContactProps = {
    currentLanguage: Language
    isMaximized: boolean
}

export const Contact = ({currentLanguage, isMaximized}:ContactProps) => {
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const handleCopy = async (id: string, value: string) => {
        try {
            await navigator.clipboard.writeText(value)

            setCopiedId(id)

            setTimeout(() => {
                setCopiedId(prev => prev === id ? null : prev)
            }, 1500)
        } catch {
            console.error("Não foi possível copiar")  
        }
    } 

    return (
        <div className={`
            flex h-full select-text mx-auto transition-all duration-400ms ease-in-out
            ${isMaximized 
            ? "max-w-6xl w-full flex-row items-center gap-10 p-10 justify-between" 
            : "max-w-4xl w-full flex-col justify-center gap-4 py-0 px-4 -mt-10"
            }
        `}>
            <section className={`
                flex flex-col gap-5 transition-all duration-400ms ease-in-out
                ${isMaximized ? "w-1/2 items-start text-left" : "w-full items-center text-center"}
            `}>
                <div className={`flex flex-col transition-all duration-400ms ease-in-out gap-3 ${isMaximized ? "items-start" : "items-center" }`}>
                    <h2 className={`font-semibold tracking-tight text-white transition-all duration-400ms ease-in-out ${isMaximized ? "text-4xl" : "text-3xl"}`}
                    >{currentLanguage === "pt"
                    ? "Entre em contato"
                    : "Let's talk"}
                    </h2>
                    <p className={`text-sm leading-relaxed text-white/70 transition-all duration-400ms ease-in-out ${isMaximized ? "max-w-md" : "max-w-2xl"}`}
                        >{currentLanguage === "pt"
                    ? "Estou aberto a oportunidades, projetos freelancer e conexões na área de desenvolvimento web."
                    : "I'm open to opportunities, freelance projects, and connections in web development."}
                    </p>
                </div>

                <a 
                href="/curriculo.pdf" 
                download="Pedro_Guedes_Curriculo.pdf"
                className={`font-medium text-white/90 
                    bg-violet-600/10 border border-violet-500/40 rounded-lg 
                    shadow-md shadow-transparent hover:shadow-violet-500/30 hover:bg-violet-600/30 hover:border-violet-400/20 hover:-translate-y-1
                    transition-all duration-400ms ease-in-out cursor-pointer w-fit 
                    ${isMaximized ? 'py-2 px-10 text-[17px] ' : 'py-2 px-8 text-[15px] absolute bottom-2'}
                    `}>
                    Baixar currículo
                </a>
            </section>

            <section className={`
                transition-all duration-400ms ease-in-out flex flex-wrap justify-center
                ${isMaximized ? "w-1/2 flex-col gap-4" : "w-full flex-row gap-3"}
            `}>
                {
                    contact.map(contact => {
                        const Icon = contact.icon
                        return (
                            <article 
                            key={contact.id} 
                            className={`flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 
                            hover:bg-white/7 hover:border-violet-300/25 hover:-translate-y-0.5 hover:shadow-lg 
                            hover:shadow-violet-500/10 transition-all duration-300 backdrop-blur-sm 
                            ${isMaximized ? "w-full" : "w-[calc(50%-0.5rem)]"}
                            `} >
                                <div className="flex items-center gap-3">
                                    <span className="h-10 w-10 rounded-xl bg-violet-500/10 border border-violet-300/20 text-violet-200 flex items-center justify-center">
                                        <Icon size={18}/>
                                    </span>
                                    <p className="text-sm font-semibold text-white/90">
                                        {contact.label}
                                    </p>
                                </div>

                                <p className="text-white/75 text-sm leading-relaxed">{contact.description[currentLanguage]}</p>
                                
                                
                                <button
                                type="button"
                                onClick={() => handleCopy(contact.id, contact.href)}
                                title={currentLanguage === "pt" 
                                    ? (copiedId === contact.id ? "Copiado!" : "Copiar")
                                    : (copiedId === contact.id ? "Copied!" : "Copy")
                                }
                                aria-label={currentLanguage === "pt" 
                                    ? (copiedId === contact.id ? "Copiado!" : "Copiar")
                                    : (copiedId === contact.id ? "Copied!" : "Copy")
                                }
                                className={`text-sm font-medium w-fit text-violet-200/80 hover:text-violet-100 transition-all relative flex flex-row gap-1 flex-wrap items-center cursor-pointer`}
                                >
                                    <span>{contact.href}</span>
                                    {copiedId === contact.id && (
                                        <span className=" text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-md  animate-in fade-in slide-in-from-left-2 duration-200">
                                            {currentLanguage === "pt" ? "Copiado!" : "Copied!"}
                                        </span> 
                                    )}
                                </button>

                                <a
                                href={contact.id === "email" ? `mailto:${contact.href}` : contact.href }
                                target={contact.id === "email" ? undefined : "_blank"}
                                rel={contact.id === "email" ? undefined : "noopener noreferrer"}
                                className="shrink-0 rounded-lg border border-white/10 bg-white/6 p-1.5 text-white/60 
                                hover:text-violet-100 hover:border-violet-300/30 hover:bg-violet-500/10 transition-all 
                                cursor-pointer absolute top-1 right-1"
                                >
                                    <ExternalLink size={14}/>
                                </a>

                            </article>
                        )
                    })
                }
            </section>
        </div>
    )
}