# Pedro Guedes — Portfólio Full-Stack

Portfólio pessoal desenvolvido com foco em apresentar minha trajetória, habilidades, projetos e serviços como desenvolvedor Full-Stack.  
O projeto foi construído com uma proposta visual inspirada em sistemas operacionais modernos, simulando uma experiência semelhante a um desktop no computador e a uma tela de aplicativos no mobile.

🔗 **Acesse o projeto:** [pedroguedes.dev.br](https://pedroguedes.dev.br)

---

## Sobre o projeto

Este portfólio foi criado para ir além de uma página estática tradicional.  
A ideia principal é oferecer uma experiência interativa, onde cada seção funciona como um aplicativo ou janela dentro de uma interface inspirada em ambientes como macOS e iOS.

No desktop, o usuário navega por uma área de trabalho com Dock, janelas interativas, animações e seções organizadas como aplicações.  
No mobile, a experiência foi adaptada para uma interface semelhante à tela inicial de um smartphone, com ícones de aplicativos e telas em fullscreen.

---

## Funcionalidades

- Interface desktop inspirada em macOS;
- Interface mobile inspirada em iPhone;
- Dock interativa com ícones de navegação;
- Janelas com abertura, fechamento, minimização, maximização e movimentação;
- Layout responsivo com experiências diferentes para desktop e mobile;
- Seções de Sobre mim, Habilidades, Projetos, Serviços e Contato;
- Galeria de imagens para projetos;
- Alternância entre português e inglês;
- Link direto para GitHub;
- Download de currículo;
- Deploy com domínio personalizado.

---

## Tecnologias utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Motion / Framer Motion**
- **Lucide React**
- **React Icons**
- **Vercel**

---

## Estrutura principal

```txt
src/
├── components/
│   ├── AppContent/
│   ├── Desktop/
│   ├── Mobile/
│   ├── Wallpaper.tsx
│   └── HeadlineReveal.tsx
├── data/
│   ├── apps.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── services.ts
│   ├── contact.ts
│   └── translations.ts
├── hooks/
├── App.tsx
└── main.tsx
```

Principais aprendizados

Durante o desenvolvimento deste projeto, aprofundei conhecimentos em:

organização de componentes reutilizáveis;
gerenciamento de estado em interfaces interativas;
responsividade avançada;
animações com Motion;
arquitetura visual para desktop e mobile;
manipulação de layouts condicionais;
deploy com Vercel;
configuração de domínio personalizado;
otimização de imagens e experiência do usuário.
Como executar localmente

Clone o repositório:

```
git clone https://github.com/pedroguedes9/portfolio
``` 
Acesse a pasta do projeto:
```
cd NOME-DO-REPOSITORIO
```
Instale as dependências:
```
npm install
```
Execute o projeto:
```
npm run dev
```
Acesse no navegador:
```
http://localhost:5173
```
Build para produção
```
npm run build
```
Para visualizar o build localmente:
```
npm run preview
```
Deploy

O projeto foi publicado na Vercel com domínio personalizado:

🔗 pedroguedes.dev.br

Contato

Pedro Chaves Guedes
Desenvolvedor Full-Stack Júnior

Portfólio: pedroguedes.dev.br
GitHub: github.com/pedroguedes9
LinkedIn: linkedin.com/in/pedroguedes9
Email: pedro.guedes.mcz@gmail.com
Status do projeto

Projeto em desenvolvimento contínuo.
Novas melhorias, animações, otimizações e seções podem ser adicionadas futuramente.

Licença

Este projeto foi desenvolvido para fins pessoais e profissionais como portfólio.
