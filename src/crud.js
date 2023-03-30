const { response } = require("express")

// POST
function enviarDados(){
    const nome = document.getElementById('nome').value
    const nascimento = document.getElementById('nascimento').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const nomePlano = document.getElementById('nomePlano').value
    const info = document.getElementById('info').value

    fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: {
            'content-type': 'application/json'    
        },
        body: JSON.stringify({
            nome: nome,
            nascimento: nascimento,
            cpf: cpf,
            email: email,
            telefone: telefone,
            endereco: endereco,
            nomePlano: nomePlano,
            info: info
        }).then(response => response.json())
    })
}

// PUT
function enviarDados(){
    const nome = document.getElementById('nome').value
    const nascimento = document.getElementById('nascimento').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const nomePlano = document.getElementById('nomePlano').value
    const info = document.getElementById('info').value

    fetch("http://localhost:3000/cadastro", {
        method: "PUT",
        headers: {
            'content-type': 'application/json'    
        },
        body: JSON.stringify({
            nome: nome,
            nascimento: nascimento,
            cpf: cpf,
            email: email,
            telefone: telefone,
            endereco: endereco,
            nomePlano: nomePlano,
            info: info
        }).then(response => response.json())
        .then(data => {
            
        })
    })
}