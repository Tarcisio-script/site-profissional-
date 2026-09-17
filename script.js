const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const botao = document.getElementById("confirmar");

botao.addEventListener("click", confirmação);

function confirmação() {

    const nome2 = nome.value.trim();
    const email2 = email.value.trim();
    const senha2 = Number(senha.value);
}