import { useEffect, useState } from 'react'
import './App.css'
import { DesktopWorkspace } from './components/Desktop/DesktopWorkspace'
import { MobileWorkspace } from './components/Mobile/MobileWorkspace'
import { useMediaQuery } from './hooks/useMediaQuery'

export type Language = "pt"|"en"

function App() {
  const [language, setLanguage] = useState<Language>("pt")

  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'pt' ? "Desenvolvedor Full-Stack | React, TypeScript, Python" : "Full-Stack Developer | React, TypeScript, Python"
  }, [language])

  return (
    <div className='min-h-screen w-screen '>
      {
        isDesktop 
        ? <DesktopWorkspace currentLanguage={language} onLanguageChange={setLanguage}/>
        : <MobileWorkspace currentLanguage={language} onLanguageChange={setLanguage}/>
      }
    </div>
  )
}

export default App
