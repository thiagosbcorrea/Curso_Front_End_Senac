//Variáveis

let a = 5;
let b = 2;

//Operadores matemáticos
let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b;

//Operadores de comparação
let igual = a === b;
let diferente = a !== b;
let maior = a > b;
let menor = a < b;
let maiorOuIgual = a >= b;
let menorOuIgual = a <= b;

//Exercicios

chovendo = true;
dia = 24;
mes = 6;
ano = 2026;

//1- se não estiver chovendo
// 2- se o dia for 26
// 3- se o dia for igual ou menor a 24
// 4- se o mês for igual ou menor a 6
// 5- se o ano for igual a 2025
// 6- se o ano for maior ou igual a 2024


let nao_chove = chovendo !== true;
let dia_26 = dia === 26;
let dia_24 = dia <= 24;
let mes_6 = mes <= 6;
let ano_2025 = ano === 2025;
let ano_2024 = ano >= 2024;


console.log(nao_chove, "aproveite o dia!");

if (dia == 26) {
    console.log("Hoje é 26 de junho de 2026!");
}

if (dia >= 24) {
    console.log(" Dia 24 ou depois");
}

if  (mes <= 6 ) {
    console.log("Estamos no primeiro semestre do ano!");
}

if (ano == 2025) {
    console.log("Estamos no ano de 2025!");
}

if (ano >= 2024) {
    console.log("Estamos no ano de 2024 ou depois!");
}

