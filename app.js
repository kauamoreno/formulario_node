// Importar o modulo express
const express = require('express');

// Criando uma instancia
const app = express();

// Definindo a porta do servidor
const port = 8080;

app.use('/scr', express.static('scr'));

// Carregando todos os recursos da pasta public
app.use(express.static(__dirname + '/public'));

// Direcionando à index.html
// app.get('/', function(req, res){
//     res.sendFile(__dirname + "/public/index.html")
// })

// Exibindo a mensagem no console
console.log(`A porta esta conectada no localhost:${port}`);

// Iniciando o servidor na porta definida
app.listen(port)