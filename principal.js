const select = document.getElementById("select-filtro");
const grade = document.querySelector(".produtos-grade");

select.addEventListener("change", function () {
    const cards = grade.querySelectorAll(".produto-card");

    if (this.value === "opcao1") {
    
        cards.forEach((card) => (card.style.display = "none"));
    } else if (this.value === "opcao2") {

    } else if (this.value === "opcao3") {

    } else {

        cards.forEach((card) => (card.style.display = ""));
    }
});