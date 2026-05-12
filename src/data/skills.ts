export type Category = {
    id: string
    title: {
        pt: string,
        en: string
    }
    items: {
        pt: string[], 
        en: string[]
    }
}

export const skills: Category[] = [
    {id: "front-end", title: {
        pt: "Front-End",
        en: "Front-End"
    }, items: {
        pt: ["React", "TypeScript", "JavaScript", "Tailwind", "Bootstrap", "HTML", "CSS"],
        en: ["React", "TypeScript", "JavaScript", "Tailwind", "Bootstrap", "HTML", "CSS"]
    } },

    {id: "back-end", title: {
        pt: "Back-End",
        en: "Back-End"
    }, items: {
        pt: ["Python", "Flask", "SQLAlchemy", "APIs"],
        en: ["Python", "Flask", "SQLAlchemy", "APIs"]
    } },

    {id: "database", title: {
        pt: "Banco de Dados",
        en: "Database"
    }, items: {
        pt: ["SQLite"],
        en: ["SQLite"]
    } },

    {id: "tools", title: {
        pt: "Ferramentas",
        en: "Tools"
    }, items: {
        pt: ["Git", "GitHub", "npm", "Vite"],
        en: ["Git", "GitHub", "npm", "Vite"]
    } },
    
    {id: "concepts", title: {
        pt: "Conceitos",
        en: "Concepts"
    }, items: {
        pt: ["Responsividade", "Integração de APIs", "Componentização", "Arquitetura MVC"],
        en: ["Responsive Design", "API Integration", "Componentization", "MVC Architecture"]
    } },

    {id: "deepening", title: {
        pt: "Aprofundando conhecimentos",
        en: "Deepening expertise"
    }, items: {
        pt: ["React & TypeScript", "Next.js", "UI/UX moderna", "Produtos digitais"],
        en: ["React & TypeScript", "Next.js", "Modern UI/UX", "Digital Products"]
    } }
]