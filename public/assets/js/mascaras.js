/*********************** MASCARA CPF ***********************/
function formatarCPF(cpf) {
    let cpfTamanho = cpf.value.length
    let codigoTecla = event.keyCode;

    // Verifica se a tecla pressionada é um número (0-9)
    if (codigoTecla >= 48 && codigoTecla <= 57) {
        if (cpfTamanho === 3 || cpfTamanho === 7) {
            cpf.value += '.'
        } else if (cpfTamanho === 11) {
            cpf.value += '-'
        }
    } else {
        event.preventDefault(); // Impede o comportamento padrao
    }
}

const cpf = document.querySelector('#cpf')
cpf.addEventListener('keypress', () => {
    formatarCPF(cpf);
});

// const cpfSweet = document.querySelector('input.swal2-input')
// cpfSweet.addEventListener('keypress', () => {
//     // formatarCPF(cpfSweet);
//     console.log(cpfSweet.value);
// });

/******************** MASCARA TELEFONE *********************/
const telefone = document.querySelector('#telefone');

telefone.addEventListener('keypress', () => {

    let telTamanho = telefone.value.length
    let codigoTecla = event.keyCode;

    // Verifica se a tecla pressionada é um número (0-9)
    if (codigoTecla >= 48 && codigoTecla <= 57){
        if (telTamanho === 0) {
            telefone.value += '('
        } else if (telTamanho === 3) {
            telefone.value += ') '
        } else if (telTamanho === 10) {
            telefone.value += '-'
        }
    }else{
        event.preventDefault(); // Impede o comportamento padrao
    }
})
