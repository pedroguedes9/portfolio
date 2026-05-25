export type Project = {
    id: string
    title: {pt: string, en: string}
    category: string
    featured: boolean
    description: {pt: string, en: string}
    thumbnail: string
    images: {
        image: string
        pt: string
        en: string
    }[]
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
            {
                image: "/images/projects/CS50-final-project/doce-imperio-1.webp",
                pt: "Página de login",
                en: "Login page"
            },
            {
                image: "/images/projects/CS50-final-project/doce-imperio-2.webp",
                pt: "Página de registro",
                en: "Registration page"
            },
            {
                image: "/images/projects/CS50-final-project/doce-imperio-3-mobile.webp",
                pt: "Barra de navegação (Celular) ",
                en: "Navbar (Mobile)"
            },
            {
                image: "/images/projects/CS50-final-project/doce-imperio-4.webp",
                pt: "Página de produtos",
                en: "Product page"
            },
            {
                image: "/images/projects/CS50-final-project/doce-imperio-5.webp",
                pt: "Página de carrinho",
                en: "Cart page"
            },
            {
                image: "/images/projects/CS50-final-project/doce-imperio-6.webp",
                pt: "Página de histórico de pedidos",
                en: "Order history page"
            },
            {
                image: "/images/projects/CS50-final-project/doce-imperio-7.webp",
                pt: "Página de perfil",
                en: "Profile page"
            },
            {
                image: "/images/projects/CS50-final-project/doce-imperio-8-mobile.webp",
                pt: "Dashboard (Celular)",
                en: "Dashboard (Mobile)"
            },
            {
                image: "/images/projects/CS50-final-project/doce-imperio-8.webp",
                pt: "Dashboard",
                en: "Dashboard"
            }
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
        featured: false,
        description: {
            pt: "Um portfólio interativo desenvolvido com React e TypeScript, projetado com uma interface que simula um ambiente de sistema operacional desktop. O projeto apresenta minhas habilidades e projetos de forma lúdica, criativa e imersiva.",
            en: "An interactive portfolio built with React and TypeScript, designed with an interface that simulates a desktop operating system environment. The project showcases my skills, tools, and projects in a playful, creative, and fully immersive way."
        },
        thumbnail: "/images/projects/portfolio/portfolio-1-thumb.webp",
        images: [
            {
                image: "/images/projects/portfolio/portfolio-1.webp",
                pt: "Área de Trabalho",
                en: "Workspace"
            },
            {
                image: "/images/projects/portfolio/portfolio-2.webp",
                pt: "Sobre mim",
                en: "About Me"
            },
            {
                image: "/images/projects/portfolio/portfolio-3.webp",
                pt: "Habilidades",
                en: "Skills"
            },
            {
                image: "/images/projects/portfolio/portfolio-4.webp",
                pt: "Projetos",
                en: "Projects",
            },
            {
                image: "/images/projects/portfolio/portfolio-4-mobile.webp",
                pt: "Projetos (Mobile)",
                en: "Projects (Mobile)"
            },
            {
                image: "/images/projects/portfolio/portfolio-5.webp",
                pt: "Contato",
                en: "Contact",
            },
            {
                image: "/images/projects/portfolio/portfolio-6.webp",
                pt: "Serviços",
                en: "Services"
            }

        ],
        tags: ["React", "TypeScript", "Tailwind"],
        githubUrl: "https://github.com/pedroguedes9/portfolio",
        demoUrl: "https://pedroguedes.dev.br"
    }
]
