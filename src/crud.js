
// POST
function enviarDados() {
    const nome = document.getElementById('nome').value
    const nascimento = document.getElementById('nascimento').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const nomePlano = plano()
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
        })
    }).then(response => response.json())
}


// PUT
function mudarDados() {
    const nome = document.getElementById('nome').value
    const nascimento = document.getElementById('nascimento').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const nomePlano = plano()
    const info = document.getElementById('info').value

    fetch(`http://localhost:3000/cadastro?cpf=${cpf}`).then(response => response.json())
        .then(data => {
            let id = data[0].id

            fetch(`http://localhost:3000/cadastro/${id}`, {
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
                })
            }).then(response => response.json())

        })


}


// GET
if (window.location.pathname === '/public/gpd.html') {
    window.onload = function () {
        Swal.fire({
            title: 'CPF do paciente',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: false,
            confirmButtonText: 'Pesquisar',
            showLoaderOnConfirm: true,
            preConfirm: (cpf) => {

                return fetch(`http://localhost:3000/cadastro?cpf=${cpf}`, {
                    method: "GET"
                }).then(response => response.json())
                    .then(data => {
                        document.getElementById('nome').value = data[0].nome
                        document.getElementById('nascimento').value = data[0].nascimento
                        document.getElementById('cpf').value = data[0].cpf
                        document.getElementById('cpf').disabled = true //desabilitando alterações no cpf
                        document.getElementById('email').value = data[0].email
                        document.getElementById('telefone').value = data[0].telefone
                        document.getElementById('endereco').value = data[0].endereco
                        document.getElementById(`${data[0].nomePlano}`).checked = true;
                        document.getElementById('info').value = data[0].info
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `CPF invalido! Insira outro`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                document.querySelector('.container').style.display = 'block'
            }
        })
    }
}

//DELETE
function deletarDados() {
    Swal.fire({
        title: 'Deseja deletar este cadastro?',
        text: "Não será mais possível recuperá-lo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmo a deletação!'
    }).then((result) => {
        if (result.isConfirmed) {
            const cpf = document.getElementById('cpf').value
            console.log(cpf);

            Swal.fire(
                'Confirmado!',
                'O cadastro foi deletado',
                'success'
            )
            setTimeout(function () {
                fetch(`http://localhost:3000/cadastro?cpf=${cpf}`).then(response => response.json())
                    .then(data => {
                        let id = data[0].id

                        fetch(`http://localhost:3000/cadastro/${id}`, {
                            method: "DELETE"
                        }).then(response => response.json())

                    })
            }, 1500);

        }
    })
}


function plano() {
    const opcoes = document.querySelectorAll('input[name="plano"]');
    let opcaoSelecionada;

    for (let i = 0; i < opcoes.length; i++) {

        if (opcoes[i].checked) {
            opcaoSelecionada = opcoes[i].id
            // console.log(opcaoSelecionada);
            return opcaoSelecionada;
        }
    }
}