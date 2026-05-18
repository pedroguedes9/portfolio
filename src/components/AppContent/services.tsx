import type { Language } from "../../App"
import { services } from "../../data/services"

type ServicesProps = {
    currentLanguage: Language
}

export const Services = ({currentLanguage}:ServicesProps) => {
    return (
        <div className="grid grid-cols-2 gap-4 p-5 content-center">
            {services.map(service => {
                const Icon = service.icon
                return (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 hover:border-violet-300/25 hover:-translate-y-0.5 transition-all">
                        <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-violet-500/10 border border-violet-300/20 text-violet-200">
                            <Icon/>
                        </div>
                        <h2 className="text-sm font-semibold text-white/90">{service.title[currentLanguage]}</h2>
                        <p className="text-sm leading-relaxed text-white/60">{service.description[currentLanguage]}</p>
                    </div>
                )
            })}
        </div>
    )
}