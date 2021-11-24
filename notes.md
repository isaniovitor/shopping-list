https://jagged-house-f90.notion.site/Configura-o-inicial-5b93030778384d238129c8552aceb196

01. expo init: minimal workflow
02. add type: yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
03. create tsconfig.json
04. modificar babel.config

## Configurando Eslint e Prettier

01. Instalar o eslint: yarn add eslint -D
02. Inicializar configuração do eslint: yarn eslint --init
03. seguir tutorial

<!-- module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'src',
        },
      ],
    ],
  };
}; -->

## Para styled funcionar
01. yarn add @types/styled-components -D
02. yarn add @types/styled-components-react-native -D

## Navegation
https://reactnavigation.org/docs/getting-started
https://reactnavigation.org/docs/hello-react-navigation


<!-- /* background: ${({ theme }) => theme.Colors.BLUE}; */ -->
width: ${({ width }) => width || width} + '%';
width={width}

https://reactnative.dev/docs/picker#example
