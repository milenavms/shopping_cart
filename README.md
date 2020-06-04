This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#Projeto de Carrindo de Compras

![gifSite](https://user-images.githubusercontent.com/47642347/83709055-bae9bf00-a5eb-11ea-9b6e-8e950b69e5c5.gif)


## Tecnologias usadas

React
Sass
Bootstrap 4.5.0
axios

## Instalar as dependencias e iniciando projeto

npm install

npm start

## Instalar as dependencias do Bootstrap

npm install jquery bootstrap
npm install  popper.js@^1.16.0

## Dependencia para carregar api

npm install axios    

## Subindo api local (json contendo os itens)

projeto/db.json

[json-server](https://github.com/typicode/json-server)

## Assistindo arquivos Sass

sass --watch node_modules/bootstrap/scss:src/styles/css


# Organização do Projeto

primeiro:  Construção da interface com Bootstrap e Sass usando o framework React utilizando a porta 3006

segundo:  Subir o arquivo json por meio da biblioteca json-server  utilizando a porta 3000

terceiro: Consumir a api por meio do método GET para exibir os produtos

Quarto: Implementação do método post para inserir os itens no carrinho de compras

Quinto: Implementação do método delete para excluir os itens do carrinho de compras
