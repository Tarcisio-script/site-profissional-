const select = document.getElementById("select-filtro");
const grade = document.querySelector(".produtos-grade");

select.addEventListener("change", function () {
    const cards = grade.querySelectorAll(".produto-card");

    if (this.value === "opcao1") {
        // esconde todos os cards da grade
        cards.forEach((card) => (card.style.display = "none"));
    } else if (this.value === "opcao2") {
        // espaço reservado pra próxima lógica
    } else if (this.value === "opcao3") {
        // espaço reservado pra próxima lógica
    } else {
        // valor "Filtro" (padrão) -> mostra tudo de novo
        cards.forEach((card) => (card.style.display = ""));
    }
});
