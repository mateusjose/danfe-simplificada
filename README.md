# danfe-simplificada
Visualizador de DANFE Simplificada (Documento Auxiliar Da Nota Fiscal Eletrônica) em html.

## Preparação

### Pré-requisitos

NodeJS 8.x

### Instalação

NPM
```
npm i danfe-simplificada
```
---------------------------------------------------------------------
Yarn
```
yarn add danfe-simplificada
```

### Exemplos

Utilizando template padrão
```
const Danfe = require('danfe-simplificada')
var danfe = Danfe.fromXML('conteudo XML', 'url logo')
console.log(danfe.toHtml())
```
----------------------------------------------------------------------
Utilizando template customizado
```
const Danfe = require('danfe-simplificada')
var danfe = Danfe.fromXML('conteudo XML', 'url logo')
console.log(danfe.toHtml('caminho-template.hbs'))
```


## Especificações

### Funções

* Criar representação do DANFE em html baseado somente em um arquivo XML existente.
* Criar a representação somente no formato retrato.

### Arquitetura

* Usa [template engine handlebars](https://github.com/wycats/handlebars.js) para gerar o html.

## Testes

```
npm run test
```

### Codificação

[standardjs](https://standardjs.com/rules.html)


## Licença

[MIT](https://github.com/mateusjose/danfe-simplificada/blob/master/LICENSE)

## Colaboradores
[Mateus Tozoni](https://github.com/mateustozoni)
[Lucas Lacroix](https://github.com/lucaslacroix)
