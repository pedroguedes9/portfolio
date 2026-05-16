import type React from "react"
import { easeInOut, motion, useDragControls, useMotionValue } from "motion/react"
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
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
    sourcePosition: {x:number, y:number} | null
    onPositionChange: (position: {x:number, y:number}) => void
    getMinimizeTarget: () => {x: number, y:number} | null   
    minimizeRequestId: number
    currentLanguage: Language
    isMaximized: boolean
    onMaximizeChange: (value:boolean) => void
}

const AppWindow = ({title, onClose, children, containerRef, onMinimize, initialPosition,sourcePosition, onPositionChange, getMinimizeTarget, minimizeRequestId, currentLanguage, isMaximized, onMaximizeChange}:IndexProps) => {
    const dragControls = useDragControls()
    const x = useMotionValue(initialPosition?.x ?? 0)
    const y = useMotionValue(initialPosition?.y ?? 0)
    const windowRef = useRef<HTMLDivElement | null>(null)
    const restorePositionRef = useRef({ x: initialPosition?.x, y: initialPosition?.y })
    const [isMinimizing, setIsMinimizing] = useState(false)
    const [isShrinking, setIsShrinking] = useState(false)
    const [isOpeningFromDock, setIsOpeningFromDock] = useState(!!sourcePosition)
    const lastMinimizeRequestId = useRef(minimizeRequestId)


    useLayoutEffect(() => {
        if (!sourcePosition || !windowRef.current) return

        const element = windowRef.current
        const rect = element.getBoundingClientRect()

        const naturalCenter = {
            x: rect.left + rect.width / 2 - x.get(), // desconta deslocamentos previos
            y: rect.top + rect.height / 2 - y.get()
        }
        
        const startDeltaX = sourcePosition.x - naturalCenter.x
        const startDeltaY = sourcePosition.y - naturalCenter.y

        x.set(startDeltaX)
        y.set(startDeltaY)

        requestAnimationFrame(() => {
            animateValue(x, restorePositionRef.current.x, {duration:0.5, ease:easeInOut})
            animateValue(y, restorePositionRef.current.y, {duration:0.5, ease:easeInOut})

            setTimeout(() => setIsOpeningFromDock(false), 20)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    const isTiny = isShrinking || isOpeningFromDock

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
            ref={windowRef}
            initial={ {
                scale:sourcePosition? 0.15 : 0.92,
                opacity: 0,
                width: isMaximized ? "calc(100vw - 32px)" : "700px",
                height: isMaximized ? "calc(100vh - 96px)" : "500px"
            } }
            animate={ {
                scale: isTiny ? 0.10 : 1,
                opacity: isTiny ? 0 : 1,
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
            className={`flex flex-col overflow-hidden rounded-2xl bg-slate-950/50 bg-linear-to-b from-white/10 via-black/20 to-black/40 backdrop-blur-xl border-2 border-white/15 shadow-2xl z-40 pointer-events-auto select-none`}>
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
                <div className={`flex flex-col flex-1 overflow-y-auto justify-center items-center`}>
                    {children}
                </div>
            </motion.div>
        </div>
        
    )
}
export default AppWindow