This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tecnologias e Padrões Utilizados

Este projeto utiliza uma variedade de tecnologias e padrões de desenvolvimento para garantir uma aplicação robusta, escalável e de fácil manutenção. Abaixo estão as principais tecnologias e padrões adotados:

### Tecnologias

- **Next.js**: Um framework React para produção que oferece renderização híbrida estática e dinâmica, suporte a TypeScript, roteamento baseado em arquivos, e muito mais.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código, ajudando a evitar erros e melhorar a manutenção do código.
- **Tailwind CSS**: Framework CSS utilitário que permite a criação rápida de interfaces de usuário estilizadas com classes utilitárias.
- **React Query**: Biblioteca para gerenciamento de estado de dados assíncronos, como chamadas de API, com funcionalidades de caching, sincronização, e muito mais.
- **Cookies.js**: Biblioteca para manipulação de cookies no navegador.
- **Vercel**: Plataforma de hospedagem e deploy contínuo, otimizada para aplicações Next.js.

### Padrões de Desenvolvimento

- **Componentização**: O projeto é estruturado em componentes reutilizáveis, facilitando a manutenção e a escalabilidade da aplicação.
- **Hooks**: Utilização de hooks do React para gerenciamento de estado e efeitos colaterais, promovendo um código mais limpo e funcional.
- **Arquitetura de Pastas**: Organização clara das pastas e arquivos, separando componentes, páginas, hooks, interfaces, e constantes.
- **Responsividade**: Utilização de Tailwind CSS para garantir que a aplicação seja responsiva e funcione bem em diferentes dispositivos e tamanhos de tela.
- **Gerenciamento de Estado**: Uso do React Query para gerenciamento eficiente do estado de dados assíncronos, melhorando a experiência do usuário com caching e sincronização automática.
- **Autenticação**: Manipulação de tokens de autenticação utilizando cookies para gerenciar sessões de usuário de forma segura.
- **Boas Práticas de Código**: Adoção de boas práticas de código, como tipagem com TypeScript, uso de ESLint e Prettier para linting e formatação, garantindo um código consistente e livre de erros.

### Estrutura do Projeto

- **/components**: Contém os componentes reutilizáveis da aplicação.
- **/pages**: Contém as páginas da aplicação, seguindo a estrutura de roteamento do Next.js.
- **/hooks**: Contém hooks personalizados para lógica reutilizável.
- **/interfaces**: Contém definições de tipos e interfaces TypeScript.
- **/constants**: Contém constantes utilizadas na aplicação, como URLs de API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
