marcas_carros = ["Chevrolet", "Fiat", "Ford", "Honda", "Toyota"];

console.log(marcas_carros[1]);
console.log(marcas_carros[2]);
console.log(marcas_carros[3]);
console.log(marcas_carros[4]);

let num = 0;

console. log ("antes" + num++);
console. log ("depois" + num);
console. log (marcas_carros.length);//conta quantos itens tem no array


const minhaLista = document.querySelector(".lista ul");

for ( const marca of marcas_carros) {
    const itemLista = document.createElement("li");
    itemLista.textContent = marca;
    minhaLista.appendChild(itemLista);
}

minhaLista.appendChild(ul);