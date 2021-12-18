let listaDePecas = ["Volante", "Pastilha de Freio", "Motor", "Caixa de Cambio"]
let nomePeca = 1000
let peso = 100

console.log(listaDePecas)
if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
}else{
    console.log("A lista está cheia")
}


if (peso < 100) {
    console.log ("A peça deve pesar no mínimo 100kg")
}else{
    console.log ("A peça contem o peso ideal")
}


if (nomePeca.length < 3) {
    console.log("O nome da peça deve conter mais de três caracteres")
}else{
    console.log("Nome adequado")
}
