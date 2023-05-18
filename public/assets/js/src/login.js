function fazerLogin(){
    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value

    fetch('/adm').then(response => response.json())
    .then(data => {
        let verificaEntrada = false;

        //Percorrendo todo o json
        for(x = 0; x < data.length; x++){

            //Verificando se senha e usuario batem
            if(data[x].usuario === usuario && data[x].senha === senha){
                verificaEntrada = true;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Entrando no Sistema',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(function() {
                    window.location.href = "busca.html";
                }, 1500);
                break;
            }
        }

        //Mensagem de erro
        if(verificaEntrada === false){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario ou Senha incorreto',
            })
        } 
    })
}