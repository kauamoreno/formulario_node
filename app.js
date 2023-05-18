//Importar a biblioteca json-server
const jsonServer = require('json-server');

// Criar um instancia do servidor JsonServer 
//Essa instancia é usada para criar e configurar o servidor
const server = jsonServer.create();

//Criar um roteador com o arquivo db.json 
//O roteador define as rotas do servidor. Ele utiliza um arquivo JSON para gerar a rota.
// Criar um roteador com o arquivo adm.json
const router = jsonServer.router('public/assets/db/adm.json');

//Funções que são executadas em cada requisição feita com o servidor
//Importa os padrões JsonServer
const middlewares = jsonServer.defaults();

//Funções que são executadas em cada requisição feita com o servidor
server.use(middlewares);

// Definindo a porta do servidor
const port = 3000;

//Usa o roteador criado
server.use(router);

// Importar o modulo express
const express = require('express');

// Criando uma instancia
const app = express();

// Carregando todos os recursos da pasta public
app.use(express.static(__dirname + '/public'));

// Iniciando o servidor na porta definida
//Inicia o servidor na porta definida e exibe uma mensagem no console
server.listen(port, () => {
    console.log(`SERVER está rodando em http://localhost:${port}`);
})