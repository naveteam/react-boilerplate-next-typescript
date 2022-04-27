
# Boilerplate NextJs + TypeScript - NaveTeam

Boilerplate baseado no [Create Next App](https://nextjs.org/docs/api-reference/create-next-app) com o template do TypeScript!

## Code Standard
Além de todos os pontos citadas no [nave guide](https://nave.gitlab.io/guides/nave/code-guide/), como padrão de imports e boas práticas de javascript, existem algumas boas práticas que devem ser usadas, principalmente na criação de componentes e páginas.

1. Evite usar `styleds` desnecessários. Temos componentes de Row, Column e Text para evitar o uso desnecessários de styleds nas páginas. Além disso, estes componentes possuem o [styled-system](https://styled-system.com/getting-started), que permite passar margins, paddings e afins por props;
2. Ao criar um novo componente, sempre cogite a utilização do `styled-system`;
3. **NUNCA** repita o mesmo código duas vezes. Não copie e cole. Crie helpers e components. Reutilize código;
4. Se precisar criar um componente com várias variações, dê uma olha no componente de `Text` e utilize a propriedade `variant` do `styled-system`;
5. Siga o padrão de pastas e padrão de código. Participe da construção do boilerplate, dê feedbacks e contribua com melhorias.

## Estrutura de pastas
    ├── /public
    ├── /pages
    ├── /src
    |   ├── /components
    |   |    ├── /<component_name_folder>
    |   |    |    ├── <component_name_file>.js
    |   |    |    ├── index.js
    |   ├── /helpers
    |   |    ├── <helper_file>.js
    |   |    ├── index.js
    |   ├── /hooks
    |   |    ├── <helper_file>.js
    |   |    ├── index.js
    |   ├── /providers
    |   ├── /services
    |   ├── /routes
    |   |    ├── /<route_name_folder>
    |   |    |    ├── <route_name_file>.js
    |   |    |    ├── index.js
    |   ├── /theme
    |   ├── /context (optional)
    |   ├── /redux (optional)

## Rodando o projeto
1. `git clone https://github.com/naveteam/react-boilerplate-typescript <NOME_DO_PROJETO>`
2. `yarn`
3. `yarn dev`

## Commit
`yarn commit`
