let num = document.getElementById('nm')
let anl = document.getElementById('anali')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else {
        return false
    }
}

function isAnl(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !isAnl(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        anl.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou ja está na lista!')
    }
    num.value = ''
    num.focus()
}

function finish(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let con = valores.length
        let top = valores[0]
        let min = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > top)
                top = valores[pos]
            
            if (valores[pos] < min)
                min = valores[pos]
        }
        media = soma / con
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${con} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${top}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${min}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.`
        res.innerHTML += `<p>A média dos valores informados é ${media}`
    }
}
