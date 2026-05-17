import { useState } from "react"
import type { Project } from "../../../data/projects"
import type { Language } from "../../../App"
import { ArrowLeft, ArrowRight } from "lucide-react"


type GalleryModalProps = {
    project: Project
    onClose: () => void
    currentLanguage: Language
}

export const GalleryModal = ({project, onClose, currentLanguage}:GalleryModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [zoomOrigin, setZoomOrigin] = useState("center center")

    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
        if (isZoomed) {
            setIsZoomed(false)
            setZoomOrigin("center center")
            return
        }
        
        const rect = event.currentTarget.getBoundingClientRect()

        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100

        setZoomOrigin(`${x}% ${y}%`)
        setIsZoomed(true)
    }

    const resetZoom = () => {
        setIsZoomed(false)
        setZoomOrigin("center center")
    }

    return (
        <div className="flex items-center justify-center p-4 absolute inset-0 z-50">
            <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
            <div className=" flex flex-col h-full max-h-full overflow-hidden relative z-10 w-full max-w-6xl rounded-3xl border border-white/10  bg-slate-950/97  shadow-2xl">
                <div className="h-12 flex items-center justify-center px-5 py-4 bg-slate-950/95 z-20 border-b border-white/10 shrink-0" >
                    <h2 className="text-sm font-semibold text-white/90">{project.title[currentLanguage]}</h2>
                    <button className="absolute right-5 cursor-pointer" onClick={onClose} aria-label={currentLanguage === "pt" ? "Fechar galeria" : "Close gallery"} title={currentLanguage === "pt" ? "Fechar galeria" : "Close gallery"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/>
                        </svg>
                    </button>
                </div>
                <div className=" relative flex items-center justify-center flex-1 min-h-0 overflow-hidden bg-black/30">
                    <img 
                    src={project.images[currentImageIndex]} 
                    alt={project.id} 
                    onClick={handleImageClick}
                    style={{transformOrigin: zoomOrigin}}
                    className={
                        `h-full w-full rounded-xl object-contain transition-transform duration-300 
                        ${isZoomed ? "scale-200 cursor-zoom-out" : "scale-100 cursor-zoom-in" }
                        `}
                    />
                    
                    <button
                    onClick={() => {
                        if (currentImageIndex < 1) {
                            return resetZoom(), setCurrentImageIndex(project.images.length - 1)
                        }
                        return resetZoom(), setCurrentImageIndex(prev => prev - 1)
                    }}
                    title={currentLanguage === "pt" ? "Anterior" : "Previous"}
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center bg-black/40 border border-white/10 text-white/80 backdrop-blur-md cursor-pointer hover:border-violet-300/30 hover:bg-black/60 transition"
                    >
                        <ArrowLeft size={20}/>
                    </button>
                    
                    <button 
                    onClick={() => {
                        if (currentImageIndex === project.images.length - 1) {
                            return  resetZoom(), setCurrentImageIndex(0)
                        }
                        return resetZoom(), setCurrentImageIndex(prev => prev + 1)
                        }}
                        title={currentLanguage === "pt" ? "Próximo" : "Next"}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center bg-black/40 border border-white/10 text-white/80 backdrop-blur-md cursor-pointer hover:border-violet-300/70 hover:bg-black/60 transition"
                        >
                            <ArrowRight size={20} />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 px-5 py-2 border-t border-white/10 shrink-0">
                    <p className="text-xs text-white/50">{currentImageIndex + 1 } {currentLanguage === "pt" ? "de" : "of"} {project.images.length}</p>
                    <div className="flex gap-2 overflow-x-auto">
                        {
                            project.images.map((thumb, index) => (
                                <button 
                                key={index}
                                onClick={() => {
                                    resetZoom()
                                    setCurrentImageIndex(index)
                                }}
                                className={
                                    `cursor-pointer h-12 w-16 rounded-lg object-contain border opacity-60 hover:opacity-100
                                    ${currentImageIndex === index && "border-violet-300/50 opacity-100 ring-2 ring-violet-400/20"} 
                                    `}
                                >
                                    <img 
                                    src={thumb} 
                                    alt={`${index + 1}`} 
                                    className="h-full w-full object-contain"
                                    />
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}