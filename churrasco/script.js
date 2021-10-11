// Carne - 400 gr por pessoa + 6 de 6 horas - 650
// Cerveja - 1200 ml po Pessoa + 6 horas - 2000 ml 
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

//Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);
    
    resultado.innerHTML =`<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qdtTotalBebidas /2000)} Garrafas de Refrigerantes</p>`

}

function carnePP(duracao) {

    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duracao) {

        if (duracao >= 6) {
            return 2000;
        } else {
            return 1200;
        }
}
function bebidaPP(duracao) {

    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

