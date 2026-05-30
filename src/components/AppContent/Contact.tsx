import { useState } from "react"
import type { Language } from "../../App"
import { contact } from "../../data/contact"
import { ExternalLink } from "lucide-react"
import type { LayoutMode } from "./LayoutMode"

export type ContactProps = {
    currentLanguage: Language
    layoutMode: LayoutMode
}

export const Contact = ({currentLanguage, layoutMode}:ContactProps) => {
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const isMobile = layoutMode === "mobile"
    const isDesktopMaximized = layoutMode === "desktop-maximized"

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
            flex select-text mx-auto transition-all duration-400ms ease-in-out
            ${
                isMobile 
                    ? "flex min-h-full w-full flex-col gap-6 pb-6"
                    : isDesktopMaximized
                        ? "flex h-full max-w-6xl w-full flex-row items-center justify-between gap-10 p-10"
                        : "flex h-full max-w-6xl w-full flex-col gap-4 px-4 pt-4"
            }
            }
        `}>
            <section className={`
                flex flex-col gap-4 transition-all duration-400ms ease-in-out
                ${
                    isMobile
                        ? "w-full items-center text-center gap-4"
                        : isDesktopMaximized
                            ? "w-1/2 items-start text-left gap-5"
                            : "w-full items-center text-center gap-5 "
                }
            `}>
                <div className={`flex flex-col transition-all duration-400ms ease-in-out gap-3 ${layoutMode === "desktop-maximized" ? "items-start" : "items-center" }`}>
                    <h2 className={`
                        font-semibold tracking-tight text-white transition-all duration-400ms ease-in-out 
                        ${
                            isMobile
                                ? "text-2xl"
                                : isDesktopMaximized
                                    ? "text-4xl"
                                    : "text-3xl"
                        }
                    `}
                    lang={currentLanguage}
                    >
                        {currentLanguage === "pt"
                            ? "Entre em contato"
                            : "Let's talk"}
                    </h2>
                    <p className={`
                    text-sm leading-relaxed text-white/70 transition-all duration-400ms ease-in-out 
                    ${
                        isMobile
                            ? "max-w-sm text-sm"
                            : isDesktopMaximized
                                ? "max-w-md text-sm"
                                : "max-w-2xl text-sm"
                    }
                    `}
                    lang={currentLanguage}
                        >{currentLanguage === "pt"
                            ? "Estou aberto a oportunidades, projetos freelancer e conexões na área de desenvolvimento web."
                            : "I'm open to opportunities, freelance projects, and connections in web development."}
                    </p>
                </div>

                <a 
                href="/curriculo.pdf" 
                download="Pedro_Chaves_Guedes_Curriculo.pdf"
                className={`
                    font-medium text-white/90 bg-violet-600/10 border border-violet-500/40 rounded-lg
                    shadow-md shadow-transparent hover:shadow-violet-500/30 hover:bg-violet-600/30 hover:border-violet-400/20
                    transition-all duration-400ms ease-in-out cursor-pointer
                    ${
                        isMobile
                            ? "w-full max-w-xs py-2.5 text-center text-sm"
                            : isDesktopMaximized
                                ? "w-fit py-2 px-10 text-[17px] absolute bottom-2"
                                : "w-fit py-2 px-8 text-[15px] absolute bottom-2"
                    }
                    `}
                    lang={currentLanguage}>
                    {currentLanguage === "pt" ? "Baixar currículo" : "Download resume"}
                </a>
            </section>

            <section className={`
                transition-all duration-400ms ease-in-out flex
                ${
                    isMobile 
                        ? "w-full flex-col gap-3"
                        : isDesktopMaximized
                            ? "w-1/2 flex-col gap-4"
                            : "w-full flex-row flex-wrap justify-center gap-3"
                }
            `}>
                {
                    contact.map(contact => {
                        const Icon = contact.icon
                        return (
                            <article 
                            key={contact.id} 
                            className={`
                                relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4
                                hover:bg-white/[0.07] hover:border-violet-300/25 hover:-translate-y-0.5 hover:shadow-lg
                                hover:shadow-violet-500/10 transition-all duration-300 backdrop-blur-sm
                                ${
                                    isMobile
                                        ? "w-full"
                                        : isDesktopMaximized
                                            ? "w-full"
                                            : "w-[calc(50%-0.5rem)]"
                                }
                            `} >
                                <div className="flex items-center gap-3">
                                    <span className="h-10 w-10 rounded-xl bg-violet-500/10 border border-violet-300/20 text-violet-200 flex items-center justify-center">
                                        <Icon size={18}/>
                                    </span>
                                    <p className="text-sm font-semibold text-white/90" lang={currentLanguage}>
                                        {contact.label}
                                    </p>
                                </div>

                                <p className="text-white/75 text-sm leading-relaxed" lang={currentLanguage}>{contact.description[currentLanguage]}</p>
                                
                                
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
                                className={`
                                    text-sm font-medium w-fit text-violet-200/80 hover:text-violet-100 transition-all
                                    relative flex flex-row gap-1 flex-wrap items-center cursor-pointer
                                    ${isMobile ? "break-all text-left" : ""}
                                `}
                                lang={currentLanguage}
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
                                aria-label={currentLanguage === "pt" ? `Abrir ${contact.label}` : `Open ${contact.label}`}
                                title={currentLanguage === "pt" ? `Abrir ${contact.label}` : `Open ${contact.label}`}
                                lang={currentLanguage}
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
