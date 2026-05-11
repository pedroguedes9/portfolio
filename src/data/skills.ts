export type Category = {
    id: string
    title: [
        {pt: string},
        {en: string}
    ]
    items: string[] | [
        {pt: string[]}, 
        {en: string[]}
    ]
}

export const skills: Category[] = [
    {id: "front-End", title: [
        {pt: "Front-End"},
        {en: "Front-End"}
    ], items: [
        "React", "TypeScript", "JavaScript", "Tailwind", "Bootstrap", "HTML", "CSS"
    ]},

    {id: "back-End", title: [
        {pt: "Back-End"},
        {en: "Back-End"}
    ], items: [
        "Python", "Flask", "SQLAlchemy", "APIs"
    ]},

    {id: "database", title: [
        {pt: "Banco de Dados"},
        {en: "Database"}
    ], items: [
        "SQLite"
    ]},

    {id: "tools", title: [
        {pt: "Ferramentas"},
        {en: "Tools"}
    ], items: [
        "Git", "GitHub", "npm", "Vite"
    ]},
    
    {id: "concepts", title: [
        {pt: "Conceitos"},
        {en: "Concepts"}
    ], items: [
        {pt: ["Responsividade", "Integração de APIs", "Componentização", "Arquitetura MVC"]},
        {en: ["Responsive Design", "API Integration", "Componentization", "MVC Architecture"]}
    ]},

    {id: "focus"}
]