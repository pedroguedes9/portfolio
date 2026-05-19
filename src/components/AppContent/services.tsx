import type { Language } from "../../App"
import { services } from "../../data/services"

type ServicesProps = {
    currentLanguage: Language
}

export const Services = ({currentLanguage}:ServicesProps) => {
    return (
        <div className="h-full w-full max-w-5xl mx-auto p-6 flex flex-col justify-center gap-6 select-text">
            <div className="flex flex-col items-center text-center gap-2">
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                    {currentLanguage === "pt" ? "Meus serviços" : "My services"}
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-white/65">
                    {currentLanguage === "pt"
                    ? "Soluções web para negócios que precisam de presença digital moderna, funcional e bem estruturada."
                    : "Web solutions for businesses that need a modern, functional, and well-structured digital presence."
                    }
                </p>
            </div>
            <div className="grid grid-cols-2 last:col-span-2 gap-4 p-5 content-center">
                {services.map(service => {
                    const Icon = service.icon
                    return (
                        <div className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 min-h-375 hover:bg-white/7 hover:border-violet-300/25 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10 transition-all" key={service.id}>
                            <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-violet-500/10 border border-violet-300/20 text-violet-200 group-hover:bg-violet-500/20 group-hover:border-violet-300/40 transition-all">
                                <Icon size={20}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-base font-semibold text-white/90">{service.title[currentLanguage]}</h2>
                                <p className="text-sm leading-relaxed text-white/60">{service.description[currentLanguage]}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}