import { easeInOut, motion } from "motion/react"

type HeadlineReveal = {
    text: string
    delay: number
    duration: number
}

export const HeadlineReveal = ({text, delay, duration}: HeadlineReveal) => {
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
            className="font-normal text-xl text-indigo-300 text-shadow-lg inline-block whitespace-nowrap"
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