let array = document.getElementById("array");

let pc = ["CPU", "GPU", "MemóriaRam", "Placamãe", "SSD", "Watercooler", "Fans"]

function chamada(){
let number = prompt("Digite um número de 0 a 6")
if(number >= 0 && number <=6) {
    array.innerHTML = pc[number];
} else if(number < 0 || number > 6){
    array.innerHTML = "Digite um número de 1 a 6"
} if (number == "" || number == undefined) {
    array.innerHTML = "Digite um número de 1 a 6"
}

}

