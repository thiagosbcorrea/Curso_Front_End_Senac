// const teste = document.getElementById("teste");
const teste = document.querySelector("#teste");
teste.style.color = "red";
teste.style.backgroundColor = "black";
teste.innerHTML = "<h2>Turma 13613.1 - Front-end</h2>";

const novaImagem = document.querySelector(".novaImagem");
const imagem = document.createElement("img");
imagem.src = "https://www.w3schools.com/images/w3schools_green.jpg";
imagem.alt = "Logo W3Schools";
novaImagem.appendChild(imagem);