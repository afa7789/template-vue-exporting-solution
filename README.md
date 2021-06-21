# Template para criar ferramentas c/ importação de apenas um script.

Este repositório é apenas um template para quando for criar ferramentas single-file.js p/ importar em projetos externos com vue.

P/ modular de acordo com o que desejar procure e renomeie a variavel `$PROJECT_NAME` nesse repositorio ao clonar.

Configurar o module p/ exportar um unico arquivo

``` js
module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
      extract: false,
    },
  chainWebpack: config =>{
    config.output.filename('NAME_YOU_WANT.js')
  }
}
```

Colocar no Head do seu html as seguintes linhas

```html
<link href="/NAME_YOU_WANT.js" rel="preload" as="script">
<script src="/NAME_YOU_WANT.js"></script>
```

O compilado gera uma pasta com imagens tbm, caso vc queira adicionar em um projeto seu , é valido vc copiar a pasta dist, ou renomear ela com imagens, js e sem o html, e usar com o path correto nos outros lugares.

## Docker
p/ usar o dockerfile

docker build -t my-apache2 .
docker run -dit --name my-running-app -p 8080:80 my-apache2
 
## Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn serve
```
### Compiles and minifies for production
```
yarn build --name `$PROJECT_NAME`
```
### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
