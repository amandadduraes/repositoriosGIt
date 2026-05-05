# GitHub Popular Repositories

Aplicacao client-side desenvolvida para o desafio front-end da Desbravador Software. O projeto consome a API publica do GitHub para buscar um usuario, exibir seus dados principais e listar os repositorios mais populares com ordenacao dinamica e tela de detalhes.

## Links

- Repositorio: https://github.com/amandadduraes/repositoriosGIt
- Demo: https://repositorios-g-2hua59ogv-amandadduraes-projects.vercel.app/

## Demo do que foi implementado

- Busca de usuario do GitHub
- Exibicao de avatar, bio, seguidores, seguindo, email, empresa e links do perfil
- Listagem de repositorios ordenada por estrelas em ordem decrescente por padrao
- Alteracao da ordenacao por estrelas e nome
- Pagina de detalhes do repositorio com link externo para o GitHub
- Rotas client-side com React Router
- Layout responsivo com Bootstrap e estilos customizados

## Tecnologias utilizadas

- React
- Vite
- React Router DOM
- Axios
- Bootstrap 5
- CSS customizado

## Como executar o projeto

### Pre-requisitos

- Node.js 18 ou superior
- npm 9 ou superior

### Instalacao

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Depois, abra a URL exibida no terminal, normalmente:

```bash
http://localhost:5173
```

### Gerar build de producao

```bash
npm run build
```

### Rodar testes automatizados

```bash
npm run test
```

Para acompanhar em modo watch:

```bash
npm run test:watch
```

### Visualizar a build localmente

```bash
npm run preview
```

Se preferir um servidor estatico simples para a pasta `dist`, tambem existe este comando:

```bash
npm run serve:dist
```

## Estrutura do projeto

```text
src/
  components/    Componentes reutilizaveis da interface
  pages/         Paginas ligadas as rotas
  services/      Integracao com a API do GitHub
  utils/         Funcoes auxiliares
```

## Rotas da aplicacao

- `/` pagina inicial com busca de usuario
- `/users/:username` pagina com dados do usuario e lista de repositorios
- `/users/:username/repos/:repoName` pagina de detalhes do repositorio

## Integracao com a API do GitHub

Endpoints utilizados:

- `GET https://api.github.com/users/{username}`
- `GET https://api.github.com/users/{username}/repos`
- `GET https://api.github.com/repos/{username}/{repoName}`

Observacoes:

- A busca de repositorios usa paginacao para recuperar mais de 100 repositorios quando necessario.
- Em caso de limite da API do GitHub, a interface exibe uma mensagem amigavel ao usuario.

## Publicacao

O projeto ja inclui configuracoes basicas para deploy SPA:

- `vercel.json` para Vercel
- `public/_redirects` para Netlify

Se quiser publicar, uma opcao simples e usar Vercel:

1. Suba o projeto para um repositorio seu no GitHub.
2. Importe esse repositorio na Vercel.
3. Execute o deploy com as configuracoes padrao de projeto Vite.

## Melhorias futuras

- Persistir a ultima busca no navegador
- Exibir linguagem favorita ou metricas agregadas do usuario
- Criar pagina 404 com ilustrações ou estados mais ricos

## Autor

Desenvolvido por Amanda para o desafio tecnico da Desbravador Software.
