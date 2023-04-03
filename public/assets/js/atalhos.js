const planoSepaco = document.getElementById('sepaco')
const planoBandeirantes = document.getElementById('bandeirantes')
const planoOutro = document.getElementById('outro')
const planoNaoPossui = document.getElementById('naoPossui')

document.addEventListener('keydown', function (event) {
    selecionaPlano(event);
})

function selecionaPlano(event) {
    
    // 49 === tecla 1
    if (event.shiftKey && event.keyCode === 49) { 
        planoSepaco.checked = true;
    }

    // 50 === tecla 2
    if (event.shiftKey && event.keyCode === 50) { 
        planoBandeirantes.checked = true;
    }

    // 51 === tecla 3
    if (event.shiftKey && event.keyCode === 51) { 
        planoOutro.checked = true;
    }

    // 52 === tecla 4
    if (event.shiftKey && event.keyCode === 52) { 
        planoNaoPossui.checked = true;
    }
}