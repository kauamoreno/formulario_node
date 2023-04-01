/*********************** MASCARA CPF ***********************/
const cpf = document.querySelector('#cpf')

cpf.addEventListener('keypress', () => {
    
    let cpfTamanho = cpf.value.length

    if(cpfTamanho === 3||cpfTamanho === 7){
        cpf.value += '.'
    }else if(cpfTamanho === 11){
        cpf.value += '-'
    }
})


/******************** MASCARA TELEFONE *********************/
const telefone = document.querySelector('#telefone');

telefone.addEventListener('keypress', () => {

    let telTamanho = telefone.value.length

    if(telTamanho === 0){
        telefone.value += '('
    } else if(telTamanho === 3){
        telefone.value += ') '
    } else if(telTamanho === 10){
        telefone.value += '-'
    }
})