let num = document.getElementById('nm')
let anl = document.getElementById('anali')
let res = document.getElementById('res')
let valores = []

function adicionar(){
    if(isNumero(num.value) && !isAnl(num.value)) {

    }else{
        window.alert('Valor inválido ou ja está na lista!')
    }
}
