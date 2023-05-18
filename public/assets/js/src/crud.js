
// POST
function enviarDados() {

    //Pegando os dados
    const nome = document.getElementById('nome').value
    const nascimento = document.getElementById('nascimento').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const nomePlano = plano()
    const info = document.getElementById('info').value

    // Conectando com o banco de dados e usando o metodo POST
    fetch("/cadastro", {
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

    window.location.reload();
}


// PUT
function mudarDados() {    
    //Pegando os dados
    const nome = document.getElementById('nome').value
    const nascimento = document.getElementById('nascimento').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const nomePlano = plano()
    const info = document.getElementById('info').value

    //Conectando com o  banco de dados através do cpf
    fetch(`/cadastro?cpf=${cpf}`).then(response => response.json())
        .then(data => {

            //Buscando o id do usario
            let id = data[0].id

            //Usando o id para o metodo PUT
            fetch(`/cadastro/${id}`, {
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

            Swal.fire('Dados atualizados');
        })
}


// GET
if (window.location.pathname === '/gpd.html') {
    window.onload = function () {
        Swal.fire({
            title: 'CPF do paciente',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off',
                maxlength: 14,
                onkeypress: 'formatarCPF(this)'
            },
            showCancelButton: false,
            confirmButtonText: 'Pesquisar',
            showLoaderOnConfirm: true,
            preConfirm: (cpf) => {

                //Conectando com o  banco de dados através do cpf e aplicando o metodo GET
                return fetch(`/cadastro?cpf=${cpf}`, {
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
                    .catch(error => { // Tratando erro
                        
                        Swal.showValidationMessage(
                            `CPF invalido! Insira outro`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {

            //Quando confirmado, mostrar o formulario
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

            //Pega o cpf do formulario
            const cpf = document.getElementById('cpf').value
            console.log(cpf);

            Swal.fire(
                'Confirmado!',
                'O cadastro foi deletado',
                'success'
            )
            setTimeout(function () { //Colocando um timer de 1500ms para apagar o usuario

                //Conectando com o banco de dados atraves do cpf 
                fetch(`/cadastro?cpf=${cpf}`).then(response => response.json())
                    .then(data => {
                        //Pegando o id do usuario no banco de dados
                        let id = data[0].id

                        //Usando o id para deletar o usuario do banco de dados
                        fetch(`/cadastro/${id}`, {
                            method: "DELETE"
                        }).then(response => response.json())
                        
                        window.location.reload();
                        
                    })
            }, 1500);
        }
    })
}

//Retorna o plano de saude selecionado pelo usuario
function plano() {
    const opcoes = document.querySelectorAll('input[name="plano"]');
    let opcaoSelecionada;

    for (let i = 0; i < opcoes.length; i++) {

        if (opcoes[i].checked) {
            opcaoSelecionada = opcoes[i].id
            return opcaoSelecionada;
        }
    }
}