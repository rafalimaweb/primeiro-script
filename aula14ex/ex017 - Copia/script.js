function gerar(){
    var n1 = document.getElementById('num')
    var tabe = document.getElementById('tabu')
    if(n1.value.length == 0){
        window.alert('Por favor, digite um número!')

    }else{
        var n = Number(n1.value)
        var c = 1 
        tabe.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabe.appendChild(item)
            c++
        }
    }
}