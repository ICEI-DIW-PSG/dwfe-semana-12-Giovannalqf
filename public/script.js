let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

const btnCadastrar = document.getElementById("btnCadastrar");
const listaFuncionarios = document.getElementById("listaFuncionarios");
const totalFuncionarios = document.getElementById("totalFuncionarios");

function salvarLocalStorage() {
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}

function atualizarQuantidade() {
    totalFuncionarios.textContent = funcionarios.length;
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("departamento").value = "";
    document.getElementById("senha").value = "";
}

function listarFuncionarios() {

    listaFuncionarios.innerHTML = "";

    funcionarios.forEach(function(funcionario) {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${funcionario.nome}</h3>
            <p><strong>E-mail:</strong> ${funcionario.email}</p>
            <p><strong>Cargo:</strong> ${funcionario.cargo}</p>
            <p><strong>Departamento:</strong> ${funcionario.departamento}</p>
        `;

        listaFuncionarios.appendChild(card);
    });

    atualizarQuantidade();
}

function cadastrarFuncionario() {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cargo = document.getElementById("cargo").value.trim();
    const departamento = document.getElementById("departamento").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (
        nome === "" ||
        email === "" ||
        cargo === "" ||
        departamento === "" ||
        senha === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    const novoFuncionario = {
        id: Date.now(),
        nome: nome,
        email: email,
        cargo: cargo,
        departamento: departamento,
        senha: senha
    };

    funcionarios.push(novoFuncionario);

    salvarLocalStorage();
    listarFuncionarios();
    limparCampos();

    alert("Funcionário cadastrado com sucesso!");
}

btnCadastrar.addEventListener("click", cadastrarFuncionario);

listarFuncionarios();


  
