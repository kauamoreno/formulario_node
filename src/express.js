// Importar o modulo express
const express = require('express');

// Criando uma instancia
const app = express();

// Definindo a porta do servidor
const port = 8080;

// Função para ser executada em cada requisição feita ao servidor
app.use(express.static('./public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

// Exibindo a mensagem no console
console.log(`A porta esta conectada no localhost:${port}`);

// Iniciando o servidor na porta definida
app.listen(port)