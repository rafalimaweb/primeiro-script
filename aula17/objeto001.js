let amigo = {nome:'Rafael', 
sexo:'M', 
peso: 75, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)