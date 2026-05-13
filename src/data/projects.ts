export type Project = {
    id: string
    title: {pt: string, en: string}
    category: string
    featured: boolean
    description: {pt: string, en: string}
    thumbnail: string
    images: string[]
    tags: string[]
    githubUrl: string
    demoUrl: string
    videoDemoUrl?: string 
}

export const projects: Project[] = [
    {
        id: "CS50FinalProject",
        title: {pt: "Doce Império", en: "Doce Império"},
        category:  "full-stack",
        featured: true,
        description: {
            pt: "Um site completo para uma confeitaria, incluindo vitrine de produtos, carrinho, sistema de pedidos e painel administrativo, focando em organização, autenticação, gerenciamento de estoque e experiência do usuário.",
            en: "A complete website for a bakery, including a product showcase, shopping cart, ordering system, and administrative panel, focusing on organization, authentication, inventory management, and user experience."
        },
        thumbnail: "/images/projects/CS50-final-project/doce-imperio-3-thumb.webp",
        images: [
            "/images/projects/CS50-final-project/doce-imperio-1.webp", 
            "/images/projects/CS50-final-project/doce-imperio-2.webp",
            "/images/projects/CS50-final-project/doce-imperio-3-mobile.webp",
            "/images/projects/CS50-final-project/doce-imperio-4.webp",
            "/images/projects/CS50-final-project/doce-imperio-5.webp",
            "/images/projects/CS50-final-project/doce-imperio-6.webp",
            "/images/projects/CS50-final-project/doce-imperio-7.webp",
            "/images/projects/CS50-final-project/doce-imperio-8-mobile.webp",
            "/images/projects/CS50-final-project/doce-imperio-8.webp"
        ],
        tags: ["HTML", "CSS", "Tailwind", "Python", "Flask", "SQLAlchemy"],
        githubUrl: "https://github.com/pedroguedes9/finalproject-CS50",
        demoUrl: "https://pedroguedes.pythonanywhere.com/",
        videoDemoUrl: "https://www.youtube.com/watch?v=P7Lh9NpUJjA"
    },
    {
        id: "Portfolio",
        title: {pt: "Portfólio", en: "Portfolio"},
        category: "front-end",
        featured: true,
        description: {
            pt: "Um portfólio interativo desenvolvido com React e TypeScript, projetado com uma interface que simula um ambiente de sistema operacional desktop. O projeto apresenta minhas habilidades, ferramentas e projetos de forma lúdica, criativa e totalmente imersiva.",
            en: "An interactive portfolio built with React and TypeScript, designed with an interface that simulates a desktop operating system environment. The project showcases my skills, tools, and projects in a playful, creative, and fully immersive way."
        },
        thumbnail: "",
        images: [
            "/images/portfolio/portfolio-1-thumb",
            "/images/portfolio/portfolio-2",
            "/images/portfolio/portfolio-3"
        ],
        tags: ["React", "TypeScript", "Tailwind"],
        githubUrl: "https://github.com/pedroguedes9/portfolio",
        demoUrl: "..."
    }
]