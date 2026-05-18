import { Building2, Layout, MonitorSmartphone, UtensilsCrossed, Wrench, type LucideIcon } from "lucide-react"

export type Service = {
    id: string
    title: {
        pt: string
        en: string
    }
    description: {
        pt: string
        en: string
    }
    icon: LucideIcon
}

export const services:Service[] = [
    {
        id: "landing-page",
        title: {
            pt: "Landing Page",
            en: "Landing Page"
        },
        description: {
            pt: "Páginas estratégicas para apresentar produtos, serviços ou campanhas",
            en: "Strategic pages to present products, services, or campaigns."
        },
        icon: Layout
    },
    {
        id: "institutional-website",
        title: {
            pt: "Site Institucional",
            en: "Institutional Website"
        },
        description: {
            pt: "Sites profissionais para empresas e marcas fortalecerem sua presença online.",
            en: "Professional websites for companies and brands to strengthen their online presence."
        },
        icon: Building2
    },
    {
        id: "digital-menu",
        title: {
            pt: "Cardápio Digital",
            en: "Digital Menu"
        },
        description: {
            pt: "Cardápios modernos e responsivos para restaurantes, lanchonetes e delivery.",
            en: "Modern and responsive menus for restaurants, snack bars, and delivery businesses."
        },
        icon: UtensilsCrossed
    },
    {
        id: "website-maintenance",
        title: {
            pt: "Manutenção de Sites",
            en: "Website Maintenance"
        },
        description: {
            pt: "Atualizações, correções, melhorias visuais e otimização de performance.",
            en: "Updates, fixes, visual improvements, and performance optimization."
        },
        icon: Wrench
    },
    {
        id: "web-system",
        title: {
            pt: "Sistema Web Simples",
            en: "Simple Web System"
        },
        description: {
            pt: "Sistemas personalizados para gerenciamento, automação e organização de processos.",
            en: "Custom systems for management, automation, and process organization."
        },
        icon: MonitorSmartphone
    }
]