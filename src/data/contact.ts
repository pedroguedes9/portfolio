import type { IconType } from "react-icons"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

export type Contact = {
    id: string
    label: string
    description: {
        pt: string
        en: string
    }
    href: string
    icon: IconType
}

export const contact:Contact[] = [
    {
        id: "email",
        label: "Email",
        description: {
            pt: "Envie uma mensagem diretamente",
            en: "Send a message directly"
        },
        href: "pedro.guedes.mcz@gmail.com",
        icon: FaEnvelope
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        description: {
            pt: "Conecte-se comigo profissionalmente",
            en: "Connect with me professionally."
        },
        href: "https://linkedin.com/in/pedroguedes9",
        icon: FaLinkedin
    },
    {
        id: "github",
        label: "GitHub",
        description: {
            pt: "Conheça o meu perfil do GitHub",
            en: "Check out my GitHub profile."
        },
        href: "https://github.com/pedroguedes9",
        icon: FaGithub
    }
]