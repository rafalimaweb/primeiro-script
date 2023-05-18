function gerar(){
    var tabu = document.getElementById('tab')
    var seltabu = document.getElementById('seltab')
    if(tabu.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else {
        let n = Number(tabu.value)
        let c = 1
        seltabu.innerHTML = ''
        while (c <= 10 ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            seltabu.appendChild(item)
            c++
        }
    }

}