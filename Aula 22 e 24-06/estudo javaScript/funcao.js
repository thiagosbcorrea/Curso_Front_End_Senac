function ola(nome="Mundo") {
    console.log("Olá, " + nome + "!");
}

ola("Mundo")

function multiplicacao_(a,b){
    c = a * b;
    console.log(c);
    return c;
}

multiplicacao_(2,3);


// function soma(a,b){
//     return  a + b;
// }

// console.log(soma(2,3));
// let resultado = soma(2,3);

if(resultado > 5){
    console.log("Resultado maior que 5");
}
else{
    console.log("Resultado menor que 5");
}
function subtracao(a,b){
    console.log("Subtração feita: " + (a - b));
    return a - b;
}

function divisao(a,b){
    if(b == 0){
        console.log("Erro: Divisão por zero não é permitida.");
        return null;
    }
    return a / b;
}

let soma = (a,b) => {console.log("Soma feita: " + (a + b));};
soma(2,5);