import { useEffect, useState } from 'react'
import './App.css'
import { DesktopWorkspace } from './components/Desktop/DesktopWorkspace'

export type Language = "pt"|"en"

function App() {
  const [language, setLanguage] = useState<Language>("pt")
  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'pt' ? "Desenvolvedor Front-End | React, TypeScript, Tailwind" : "Front-End Developer | React, TypeScript, Tailwind"
  }, [language])
  return (
    <div className='min-h-screen w-screen '>
      <DesktopWorkspace currentLanguage={language} onLanguageChange={setLanguage}/>
    </div>
  )
}

export default App
