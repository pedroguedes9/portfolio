import type React from "react"
import { easeInOut, motion, useDragControls, useMotionValue } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"
import {animate as animateValue} from "motion/react"
import { translations } from "../../data/translations"
import type { Language } from "../../App"

type IndexProps = {
    title: string
    onClose: () => void
    children?: React.ReactNode
    containerRef: React.RefObject<HTMLDivElement | null>
    onMinimize: (position: {x: number, y:number}) => void
    initialPosition: {x:number, y:number}
    onPositionChange: (position: {x:number, y:number}) => void
    getMinimizeTarget: () => {x: number, y:number} | null   
    minimizeRequestId: number
    currentLanguage: Language
    isMaximized: boolean
    onMaximizeChange: (value:boolean) => void
}

const AppWindow = ({title, onClose, children, containerRef, onMinimize, initialPosition, onPositionChange, getMinimizeTarget, minimizeRequestId, currentLanguage, isMaximized, onMaximizeChange}:IndexProps) => {
    const dragControls = useDragControls()
    const x = useMotionValue(initialPosition?.x ?? 0)
    const y = useMotionValue(initialPosition?.y ?? 0)
    const windowRef = useRef<HTMLDivElement | null>(null)
    const restorePositionRef = useRef({ x: 0, y: 0 })
    const [isMinimizing, setIsMinimizing] = useState(false)
    const [isShrinking, setIsShrinking] = useState(false)
    const lastMinimizeRequestId = useRef(minimizeRequestId)

    const  handleMinimizeClick = useCallback(async () => {
        if (isMinimizing) return 
        const target = getMinimizeTarget()
        const element = windowRef.current

        if (!target || !element) return 

        const rect = element.getBoundingClientRect()

        restorePositionRef.current = {
            x: Math.round(x.get()),
            y: Math.round(y.get())
        }

        const windowCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        }

        const delta = {
            x: target.x - windowCenter.x,
            y: target.y - windowCenter.y
        }

        setIsMinimizing(true)

        const xAnimation = animateValue(x, x.get() + delta.x, {
            duration: 0.5,
            ease: easeInOut
        })

        const yAnimation = animateValue(y, y.get() + delta.y, {
            duration: 0.5,
            ease: easeInOut
        })

        setTimeout(() => {
            setIsShrinking(true)
        }, 60)

        await Promise.all([
            xAnimation.finished,
            yAnimation.finished
        ])

        onMinimize(restorePositionRef.current)
    }, [isMinimizing, getMinimizeTarget, onMinimize, x,y])

    useEffect(() => {
        if (minimizeRequestId === 0) return
        if (minimizeRequestId === lastMinimizeRequestId.current) return
        lastMinimizeRequestId.current = minimizeRequestId
        handleMinimizeClick()
    }, [minimizeRequestId, handleMinimizeClick]) 

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
            ref={windowRef}
            initial={ { scale:0.92, opacity:0 } }
            animate={ {
                scale: isShrinking ? 0.10 : 1,
                opacity: isShrinking ? 0 : 1,
                width: isMaximized ? "calc(100vw - 32px)" : "700px",
                height: isMaximized ? "calc(100vh - 96px)" : "500px"
            } }
            exit={ 
                isMinimizing
                ? {scale: 0.15, opacity:0} 
                : {scale: 0.92, opacity:0} 
            }
            transition={ {
                type: "spring",
                stiffness: 220,
                damping: 20,
                opacity: {
                    type: "tween",
                    duration: 0.4,
                    ease:easeInOut
                },
                scale: {
                    type: "tween",
                    duration: 0.4,
                    ease:easeInOut
                },
                width: {
                    type: "tween",
                    duration: 0.4,
                    ease: easeInOut
                },
                height: {
                    type: "tween",
                    duration: 0.4,
                    ease: easeInOut
                }
            } }
            drag={!isMaximized}
            dragControls={dragControls}
            dragMomentum={false}
            dragListener={false}
            dragConstraints={containerRef}
            dragElastic={0.3}
            onDragEnd={ () => {
                onPositionChange({
                    x: Math.round(x.get()), 
                    y: Math.round(y.get())
                    })
                } }
            style={{ x, y}}
            className={` rounded-2xl bg-slate-950/50 bg-linear-to-b from-white/10 via-black/20 to-black/40 backdrop-blur-2xl border-2 border-white/15 shadow-2xl z-40 pointer-events-auto select-none`}>
                <div className={`relative flex flex-row  p-3 pointer-events-auto ${isMaximized ? "cursor-auto active:cursor-auto" : "cursor-grab active:cursor-grabbing"}`}
                onPointerDown={
                        (event) => {
                            if (isMaximized) return
                            dragControls.start(event)
                        }
                    }>
                    <div className="flex flex-row gap-2 items-center cursor-auto" onPointerDown={(event) => {event.stopPropagation()}}>
                        <button title={translations[currentLanguage].appWindow.buttons.close} onClick={() => {onClose()} } className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] hover:brightness-90 cursor-pointer" lang={currentLanguage}></button>
                        <button title={translations[currentLanguage].appWindow.buttons.minimize} onClick={ handleMinimizeClick} disabled={isMinimizing}
                        className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d8a124] hover:brightness-90 cursor-pointer" lang={currentLanguage}></button>
                        <button title={translations[currentLanguage].appWindow.buttons.maximize} onClick={() => {
                            if (!isMaximized) {
                                x.set(0)
                                y.set(0)
                            }
                            onMaximizeChange(!isMaximized)
                        } }
                        className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] hover:brightness-90 cursor-pointer" lang={currentLanguage}></button>
                    </div>
                    <h2 className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white/70 pointer-events-none" lang={currentLanguage}>
                        {title}
                    </h2>
                </div>
                <div className={`flex flex-row  h-full justify-center items-center`}>
                    {children}
                </div>
            </motion.div>
        </div>
        
    )
}
export default AppWindow