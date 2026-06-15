document.addEventListener("DOMContentLoaded", () => {

    console.log("Site Cafeteria carregado!");

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {

        link.addEventListener("click", () => {

            document
                .querySelector(".navbar-collapse")
                ?.classList.remove("show");

        });

    });

});