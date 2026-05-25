import type { Language } from "../../App"
import { apps } from "../../data/apps"
import { MobileAppIcon } from "./MobileAppIcon"

type AppGridProps = {
    currentLanguage: Language
    onOpen: (id: string) => void
}

export const AppGrid = ({currentLanguage, onOpen}:AppGridProps) => {
    return (
        <div className="grid grid-cols-4 gap-y-8 gap-x-4 absolute inset-x-0 top-20 px-6">
            {apps.map((app) => (
                <MobileAppIcon currentLanguage={currentLanguage} icon={app.icon} id={app.id} label={app.label[currentLanguage]} onOpen={onOpen} key={app.id}/>
            ))}
        </div>
    )
}