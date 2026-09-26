const nome = document.getElementById("nome");
const preco = document.getElementById("idade");
const quantidade = document.getElementById("nota");
const marcaSelect = document.getElementById("marcas");
const btnCadastrar = document.getElementById("bnt");
const tabelaProdutos = document.querySelector("#tabelaAlunos tbody");
const quantidadeTexto = document.getElementById("quantidade");
const totalProdutosTexto = document.getElementById("totalProdutos");
const totalPrecoTexto = document.getElementById("totalPreco");

let totalCadastros = 0;

btnCadastrar.addEventListener("click", cadastrarProduto);

function atualizarContador() {
quantidadeTexto.textContent = `quantidade de produtos cadastrados: ${totalCadastros}`;
}

function recalcularTotais() {
let somaQuantidade = 0;
let somaPreco = 0;
tabelaProdutos.querySelectorAll("tr").forEach((linha) => {
    const tds = linha.querySelectorAll("td");
    if (tds.length < 4) return;

    somaPreco += parseFloat(tds[1].textContent.replace(",", ".")) || 0;
    somaQuantidade += parseInt(tds[2].textContent, 10) || 0;
});

totalProdutosTexto.textContent = `total de produtos em estoque: ${somaQuantidade}`;
totalPrecoTexto.textContent = `total em preço: R$ ${somaPreco.toFixed(2).replace(".", ",")}`;
}

function cadastrarProduto() {
const nomeProduto = nome.value.trim();
const precoProduto = preco.value.trim();
const quantidadeProduto = quantidade.value.trim();
const marcaProduto = marcaSelect.value;

if (!nomeProduto || !precoProduto || !quantidadeProduto || marcaProduto === "marca") {
    alert("Preencha nome, preço, quantidade e marca do produto.");
    return;
}

if (isNaN(Number(quantidadeProduto)) || Number(quantidadeProduto) < 0) {
    alert("Quantidade inválida.");
    return;
}

adicionarLinha(nomeProduto, precoProduto, quantidadeProduto, marcaProduto);
}

function criarCelula(valor) {
const celula = document.createElement("td");
celula.textContent = valor;
celula.style.textAlign = "center";
return celula;
}

function criarCelulaAcao(linha) {
const celula = criarCelula("");
const botaoEditar = document.createElement("button");
botaoEditar.type = "button";
botaoEditar.textContent = "Editar";
botaoEditar.classList.add("editar");
botaoEditar.addEventListener("click", () => alternarEdicao(linha, botaoEditar));
celula.appendChild(botaoEditar);
return celula;
}

function adicionarLinha(nomeProduto, precoProduto, quantidadeProduto, marcaProduto) {
const linha = document.createElement("tr");

    [nomeProduto, precoProduto, quantidadeProduto, marcaProduto].forEach((valor) => {
    linha.appendChild(criarCelula(valor));
});
linha.appendChild(criarCelulaAcao(linha));

tabelaProdutos.appendChild(linha);
totalCadastros++;
atualizarContador();
recalcularTotais();

nome.value = "";
preco.value = "";
quantidade.value = "";
marcaSelect.value = "marca";
nome.focus();
}

function alternarEdicao(linha, botaoEditar) {
const tds = linha.querySelectorAll("td");
const [celNome, celPreco, celQtd] = tds;
const entrandoEmEdicao = botaoEditar.textContent === "Editar";
if (entrandoEmEdicao) {
    [celNome, celPreco, celQtd].forEach((c) => (c.contentEditable = "true"));
    botaoEditar.textContent = "Salvar";
    celNome.focus();
    return;
}

const precoTexto = celPreco.textContent.trim();
const qtdTexto = celQtd.textContent.trim();

if (qtdTexto === "" || isNaN(Number(qtdTexto)) || Number(qtdTexto) < 0) {
    alert("Quantidade inválida.");
    celQtd.focus();
    return;
}

if (precoTexto === "" || isNaN(Number(precoTexto.replace(",", ".")))) {
    alert("Informe um preço válido.");
    celPreco.focus();
    return;
}

[celNome, celPreco, celQtd].forEach((c) => (c.contentEditable = "false"));
botaoEditar.textContent = "Editar";

recalcularTotais();
}

tabelaProdutos.querySelectorAll("tr").forEach((linha) => {
const celulas = linha.querySelectorAll("td");
if (celulas.length < 5) return;

const botaoEditar = document.createElement("button");
botaoEditar.type = "button";
botaoEditar.textContent = "Editar";
botaoEditar.classList.add("editar");
botaoEditar.addEventListener("click", () => alternarEdicao(linha, botaoEditar));
celulas[4].appendChild(botaoEditar);

totalCadastros++;
});

atualizarContador();
recalcularTotais();