const selectFiltro = document.getElementById("select-filtro");
const grade = document.querySelector(".produtos-grade");

selectFiltro.addEventListener("change", function () {
    const grupos = grade.querySelectorAll(":scope > div");

    const marcas = {
        opcao1: "nestle",
        opcao2: "cacau-show",
        opcao3: "lacta",
        opcao4: "brasil-cacau",
    };

    const marcaEscolhida = marcas[this.value];

    grupos.forEach((grupo) => {
        if (!marcaEscolhida || grupo.classList.contains(marcaEscolhida)) {
            grupo.style.display = "";
        } else {
            grupo.style.display = "none";
        }
    });
});