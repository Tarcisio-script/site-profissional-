const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const nota = document.getElementById("nota");
const btnCadastrar = document.getElementById("bnt");
const tabelaAlunos = document.querySelector("#tabelaAlunos tbody");
const quantidadeTexto = document.getElementById("quantidade");

let totalCadastros = 0;

btnCadastrar.addEventListener("click", cadastrarAluno);

[nome, idade, nota].forEach(input => {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            cadastrarAluno();
        }
    });
});

function cadastrarAluno() {
    const nomeAluno = nome.value.trim();
    const idadeAluno = idade.value.trim();
    const notaAluno = Number(nota.value);

    if (notaAluno < 0 || notaAluno > 10 || nomeAluno === "" || idadeAluno === "") {
        alert("erro");
        return;
    }

    let situacao;
    let classe;

    if (notaAluno >= 7) {
        situacao = "Aprovado";
        classe = "aprovado";
    } else if (notaAluno >= 5) {
        situacao = "Recuperação";
        classe = "Recuperação";
    } else {
        situacao = "Reprovado";
        classe = "Reprovado";
    }

    const linha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    colunaNome.textContent = nomeAluno;
    colunaNome.style.textAlign = "center";

    const colunaIdade = document.createElement("td");
    colunaIdade.textContent = idadeAluno;
    colunaIdade.style.textAlign = "center";

    const colunaNota = document.createElement("td");
    colunaNota.textContent = notaAluno;
    colunaNota.style.textAlign = "center";

    const colunaSituacao = document.createElement("td");
    colunaSituacao.textContent = situacao;
    colunaSituacao.classList.add(classe);
    colunaSituacao.style.textAlign = "center";

    const colunaAcao = document.createElement("td");
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("excluir");
    botaoExcluir.style.textAlign = "center";

    botaoExcluir.addEventListener("click", function() {
        linha.remove();
        totalCadastros--;
        quantidadeTexto.textContent = `quantidade de cadastros = ${totalCadastros}`;
    });

    colunaAcao.appendChild(botaoExcluir);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaIdade);
    linha.appendChild(colunaNota);
    linha.appendChild(colunaSituacao);
    linha.appendChild(colunaAcao);

    tabelaAlunos.appendChild(linha);

    totalCadastros++;
    quantidadeTexto.textContent = `quantidade de cadastros = ${totalCadastros}`;


    nome.value = "";
    idade.value = "";
    nota.value = "";
    nome.focus();
}