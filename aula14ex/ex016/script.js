function contagem(){
    var ini = document.getElementById('num1')
    var fim = document.getElementById('num2')
    var pass = document.getElementById('cont')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 ||pass.value.length == 0 ){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
    }else{
       res.innerHTML = 'Contando: <br> '
       var i = Number(ini.value)
       var f = Number(fim.value)
       var pas = Number(pass.value)
       if (pas<=0){
        window.alert('Passo inválido! Considerando PASSO 1')
        pas = 1
       } 
       if (i < f){
            // Contagem crescente
            for(var c = i; c <= f; c += pas ){
                res.innerHTML +=  `${c} \u{1F449} `
            }
       }else{
            // Contagem regressiva
            for(var c = i; c >= f; c -= pas){
                res.innerHTML += `${c} \u{1F449}`
            }
       }
       res.innerHTML  += `\u{1F3C1}`
    }
}