import { easeInOut, motion } from "motion/react"
import type { Language } from "../App"
import type { LayoutMode } from "./AppContent/LayoutMode"

type HeadlineReveal = {
    text: string
    currentLanguage: Language
    delay: number
    duration: number
    layoutMode: LayoutMode
}

export const HeadlineReveal = ({text, currentLanguage, delay, duration, layoutMode}: HeadlineReveal) => {
    return (
        <div  className="relative flex justify-center items-center">
            <motion.p
            initial={ {clipPath: "inset(0 100% 0 0)"} }
            animate={ {clipPath: "inset(0 0% 0 0 )"} }
            transition={ {
                duration,
                delay,
                ease: easeInOut
            } }
            className={`
                font-normal text-indigo-300 text-center text-balance text-shadow-lg inline-block 
                ${layoutMode === "mobile" ? "text-sm" : "text-xl whitespace-nowrap"}
                `}
            lang={currentLanguage}
            >
                {text}
            </motion.p>
            <motion.span 
            initial={ {
                left: "0%",
                opacity: 1
            } }
            animate={ {
                left: "100%",
                opacity: 0
            } }
            transition={ {
                left: {
                    duration,
                    delay,
                    ease: easeInOut
                },
                opacity: {
                    delay: delay + duration,
                    duration: 0.1
                }
            } }
            className="absolute"
            >
                |
            </motion.span>
        </div>
    )
}
