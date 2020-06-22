

### Projeto de Carrindo de Compras

![gifSite](https://user-images.githubusercontent.com/47642347/83709055-bae9bf00-a5eb-11ea-9b6e-8e950b69e5c5.gif)


### Tecnologias

* React
* Sass
* Bootstrap 4.5.0
* axios

### Instalar as dependencias e iniciando projeto
```
npm install

npm start
```

### Subindo api local (json contendo os itens)

projeto/db.json

[json-server](https://github.com/typicode/json-server)
```
#install
npm install -g json-server

#executar na pasta que está o arquivo bd.json
json-server --watch db.json

### Assistindo arquivos Sass
```
sass --watch node_modules/bootstrap/scss:src/styles/css
```
### Histórias do usuário
- [x] O usuário deve  ver um card na página Produtos para cada Produto específico, mostrando a imagem do produto, o nome, uma breve descrição, o preço, e um botão "selecionar".
- [x] o usuário deve ver uma página/card (após ter clicado em "selecionar") mostrando novamente o nome, descrição, preço e ter a opção de informar a quantidade do produto escolhido e um botão "comprar".
- [x] o usuário deve ver um botão "carrinho de compras" mostrando todos os produtos selecionados, nome, quantidade e preço, por fim o total a ser pago.
- [ ] O usuário deve ver um valor a ser pago de acordo com o cálculo da soma das quantidades multiplicadas pelo preço unitário de cada produto solicitado.
- [x] O usuário deve poder excluir determinado produto do carrinho de compras.
### Organização do Projeto

**1.**  Construção da interface com Bootstrap e Sass usando o framework React utilizando a porta 3006

**2.**  Subir o arquivo json por meio da biblioteca json-server  utilizando a porta 3000

**3.** Usei a biblioteca "axios" para consumir a api, em seguida foi utilizado do método GET e exibir os produtos

**4.** Implementação do método post para inserir os itens no carrinho de compras

**5.** Implementação do método delete para excluir os itens do carrinho de compras
