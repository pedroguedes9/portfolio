import { useState } from "react"
import type { Project } from "../../../data/projects"
import type { Language } from "../../../App"
import { ArrowLeft, ArrowRight } from "lucide-react"
import {AnimatePresence,motion} from "motion/react"
import type { LayoutMode } from "../LayoutMode"


type GalleryModalProps = {
    project: Project
    onClose: () => void
    currentLanguage: Language
    layoutMode: LayoutMode
}

export const GalleryModal = ({project, onClose, currentLanguage, layoutMode}:GalleryModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [zoomOrigin, setZoomOrigin] = useState("center center")
    const isMobile = layoutMode === "mobile"

    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
        if (isZoomed) {
            setIsZoomed(false)
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

    const goToPrevious = () => {
        resetZoom()
        setCurrentImageIndex(prev => 
            prev === 0 ? project.images.length - 1 : prev - 1
        )
    }

    const goToNext = () => {
        resetZoom()
        setCurrentImageIndex(prev => 
            prev === project.images.length - 1 ? 0 : prev + 1
        )
    }

    return (
        <div  className={`
            flex z-50
            ${
                isMobile
                    ? "fixed inset-0 p-0 bg-slate-950 pt-6"
                    : "absolute inset-0 items-center justify-center p-4"
            }
        `}>
            {
                !isMobile && (
                    <motion.div 
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    exit={ { opacity: 0 } }
                    transition={ {duration: 0.18} }
                    className="absolute inset-0 bg-black/60 rounded-2xl">
                    </motion.div>
                )
            }
            <motion.div 
            initial={ { opacity: 0, scale: 0.96, y: 12 } }
            animate={ { opacity: 1, scale: 1, y: 0 } }
            exit={ { opacity: 0, scale: 0.96, y: 12 } }
            transition={ {
                type: "spring",
                stiffness: 260,
                damping: 24
            } }
            onAnimationComplete={() => {
                if (!isZoomed) {
                    setZoomOrigin("center center")
                }
            }}
            className={`
                relative z-10 flex flex-col overflow-hidden bg-slate-950
                ${
                    isMobile
                        ? "h-full w-full rounded-none border-none"
                        : "h-full max-h-full w-full max-w-6xl border border-white/10 shadow-2xl"
                }
            `}>
                <div className={`
                    relative flex shrink-0 items-center border-b border-white/10 bg-slate-950/95
                    ${
                        isMobile
                            ? "h-16 px-4 pt-2"
                            : "h-12 px-5 justify-center"
                    }
                `} >
                    <h2 className={`
                        font-semibold text-white/95 tracking-tight
                        ${
                            isMobile 
                                ? "mx-auto max-w-[70%] truncate text-base text-center"
                                : "absolute left-5 text-lg"
                        }
                    `}
                    lang={currentLanguage}>
                        {project.title[currentLanguage]}
                    </h2>
                    
                    {!isMobile && (
                        <p className="text-sm text-slate-400 font-light max-w-2xl" lang={currentLanguage}>
                            {project.images[currentImageIndex][currentLanguage]}
                        </p>
                    )}
                    <motion.button 
                    whileHover={{scale: 1.1, rotate: 4}}
                    whileTap={{scale: 0.9}}
                    className="absolute right-5 cursor-pointer" 
                    onClick={onClose} 
                    aria-label={currentLanguage === "pt" ? "Fechar galeria" : "Close gallery"} 
                    title={currentLanguage === "pt" ? "Fechar galeria" : "Close gallery"}
                    lang={currentLanguage}>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/>
                        </svg>
                    </motion.button>
                </div>
                <div className={`
                    relative flex items-center justify-center flex-1 min-h-0 overflow-hidden bg-black/30
                    ${isMobile ? "px-0" : ""}
                `}>
                    <AnimatePresence mode="wait">
                        <motion.img
                        key={project.images[currentImageIndex].image}
                        src={project.images[currentImageIndex].image}
                        alt={project.images[currentImageIndex][currentLanguage]}
                        lang={currentLanguage}
                        onClick={handleImageClick}
                        style={{transformOrigin: zoomOrigin}}
                        initial={{opacity: 0, scale: 0.98}}
                        animate={{
                            opacity: 1,
                            scale: isZoomed ? 1.8 : 1
                        }}
                        exit={{opacity: 0, scale: 0.98}}
                        transition={ {
                            opacity: {duration: 0.18},
                            scale: {duration: 0.28}
                        } } 
                        className={
                            `h-full w-full rounded-xl object-contain
                            ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in" }
                        `}
                        loading="lazy"
                        decoding="async"
                        />
                    </AnimatePresence>
                    
                    <motion.button
                    whileHover={{scale: 1.08}}
                    whileTap={{scale: 0.94}}
                    onClick={() => {
                        goToPrevious()
                    }}
                    title={currentLanguage === "pt" ? "Anterior" : "Previous"}
                    aria-label={currentLanguage === "pt" ? "Imagem anterior" : "Previous image"}
                    lang={currentLanguage}
                    className={`
                        absolute left-2 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-black/40 border 
                        border-white/10 text-white/80 backdrop-blur-md cursor-pointer hover:border-violet-300/30 hover:bg-black/60 transition-colors duration-300
                        ${
                            isMobile ? "h-9 w-9" : "h-10 w-10"
                        }
                    `}
                    >
                        <ArrowLeft size={20}/>
                    </motion.button>
                    
                    <motion.button 
                    whileHover={{scale: 1.08}}
                    whileTap={{scale: 0.94}}
                    onClick={() => {
                        goToNext()
                    }}
                        title={currentLanguage === "pt" ? "Próximo" : "Next"}
                        aria-label={currentLanguage === "pt" ? "Próxima imagem" : "Next image"}
                        lang={currentLanguage}
                        className={`
                        absolute right-2 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-black/40 border 
                        border-white/10 text-white/80 backdrop-blur-md cursor-pointer hover:border-violet-300/30 hover:bg-black/60 transition-colors duration-300
                        ${
                            isMobile ? "h-9 w-9" : "h-10 w-10"
                        }
                    `}
                        >
                            <ArrowRight size={20} />
                    </motion.button>
                </div>
                <div className={`
                    shrink-0 border-t border-white/10
                    ${
                        isMobile
                            ? "px-3 py-3 gap-2"
                            : "px-5 py-2 gap-2"
                    }
                `}>
                    <p className="text-xs text-white/50 text-center" lang={currentLanguage}>{currentImageIndex + 1 } {currentLanguage === "pt" ? "de" : "of"} {project.images.length}</p>
                    {isMobile && (
                        <p className="line-clamp-2 text-center text-xs leading-relaxed text-white/55" lang={currentLanguage}>
                            {project.images[currentImageIndex][currentLanguage]}
                        </p>
                    )}
                    <div className={`
                        flex gap-2
                        ${
                            isMobile
                                ? "w-full overflow-x-auto px-1 pb-1 pt-1"
                                : ""
                        }
                    `}>
                        {
                            project.images.map((thumb, index) => (
                                <motion.button 
                                whileHover={{y:-2}}
                                whileTap={{scale:0.92}}
                                key={index}
                                onClick={() => {
                                    resetZoom()
                                    setCurrentImageIndex(index)
                                }}
                                aria-label={thumb[currentLanguage]}
                                lang={currentLanguage}
                                className={
                                    `cursor-pointer h-12 w-16 rounded-lg object-contain border opacity-60 hover:opacity-100
                                    ${currentImageIndex === index && "border-violet-300/50 opacity-100 ring-2 ring-violet-400/20"}
                                    transition-colors duration-300 
                                    ${
                                        isMobile 
                                            ? "h-14 w-20 shrink-0"
                                            : "h-12 w-16"
                                    }
                                    `}
                                >
                                    <img 
                                    src={thumb.image} 
                                    alt={thumb[currentLanguage]} 
                                    lang={currentLanguage}
                                    className="h-full w-full object-contain"
                                    loading="lazy"
                                    />
                                </motion.button>
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
