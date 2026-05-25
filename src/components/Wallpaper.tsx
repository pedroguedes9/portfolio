import type { Language } from "../App";
import { translations } from "../data/translations";
import type { LayoutMode } from "./AppContent/LayoutMode";
import { HeadlineReveal } from "./HeadlineReveal";


type DesktopWallpaperProps = {
    name: string;
    currentLanguage: Language
    layoutMode: LayoutMode
}

const Wallpaper = ({name, currentLanguage, layoutMode}: DesktopWallpaperProps) => {
    return(
        <div className={`flex flex-col justify-center items-center gap-3 bg-[url(/images/desktop-background-otimizado.webp)] bg-cover bg-center flex-1 w-full`}>
            <h1 className={`
                font-bold text-shadow-lg
                ${layoutMode === "mobile" ? "text-4xl" : "text-7xl"}
                `}>{name}</h1>
            <HeadlineReveal delay={0.5} duration={1.5} text={translations[currentLanguage].wallpaper.headline} currentLanguage={currentLanguage} layoutMode={layoutMode}/>
        </div>
    )
}

export default Wallpaper
