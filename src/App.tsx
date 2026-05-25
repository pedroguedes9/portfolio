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
    const isPt = language === "pt"
    const title = isPt
      ? "Desenvolvedor Full-Stack | React, TypeScript, Python"
      : "Full-Stack Developer | React, TypeScript, Python"
    const description = isPt
      ? "Portfólio interativo de Pedro Guedes, desenvolvedor Full-Stack com projetos em React, TypeScript, Python e Flask."
      : "Interactive portfolio of Pedro Guedes, a full-stack developer with projects in React, TypeScript, Python, and Flask."
    const ogTitle = isPt
      ? "Pedro Guedes | Desenvolvedor Full-Stack"
      : "Pedro Guedes | Full-Stack Developer"
    const ogDescription = isPt
      ? "Portfólio interativo com projetos, habilidades, serviços e contato profissional."
      : "Interactive portfolio with projects, skills, services, and professional contact."

    document.title = title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute("content", description)

    const metaOgTitle = document.querySelector('meta[property="og:title"]')
    if (metaOgTitle) metaOgTitle.setAttribute("content", ogTitle)

    const metaOgDescription = document.querySelector('meta[property="og:description"]')
    if (metaOgDescription) metaOgDescription.setAttribute("content", ogDescription)
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
