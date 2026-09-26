const contador = document.getElementById("carrinho-contador");
let totalCarrinho = 0;
const selectFiltro = document.getElementById("select-filtro");
const grade = document.querySelector(".produtos-grade");

document.querySelectorAll(".produto-card").forEach((card) => {
    const btn = card.querySelector(".btn-carrinho");
    const textoEstoque = card.querySelector("h3[id^='estoque-']");
    let estoque = parseInt(card.dataset.estoque, 10) || 0;

    if (estoque <= 0) {
        btn.disabled = true;
        btn.textContent = "Esgotado";
    }

    btn.addEventListener("click", () => {
        if (estoque <= 0) return;

        estoque--;
        totalCarrinho++;
        contador.textContent = totalCarrinho;

        if (textoEstoque) {
            textoEstoque.textContent = estoque > 0 ? `Estoque: ${estoque}` : "Esgotado";
        }

        if (estoque <= 0) {
            btn.disabled = true;
            btn.textContent = "Esgotado";
        }
    });
});

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