import type { Language } from "../../App";
import { translations } from "../../data/translations";
import { HeadlineReveal } from "../HeadlineReveal";


type DesktopWallpaperProps = {
    name: string;
    currentLanguage: Language
}

const DesktopWallpaper = ({name, currentLanguage}: DesktopWallpaperProps) => {
    return(
        <div className=" flex flex-col justify-center items-center gap-3 bg-[url(/images/desktop-background-otimizado.webp)] bg-cover bg-center flex-1 w-full  " >
            <h1 className="font-bold text-7xl text-shadow-lg">{name}</h1>
            <HeadlineReveal delay={0.5} duration={1.5} text={translations[currentLanguage].wallpaper.headline}/>
        </div>
    )
}

export default DesktopWallpaper