const funcionarios = []

function adicionarFuncionario(){
    // obter valores do formulario
    let nome = document.getElementById('inputFuncionario').value;
    let cargo = document.getElementById('inputCargo').value;
    let dataNascimento = document.getElementById('inputNascimento').value;

    //criar um objeto representando o funcionario
    let funcionario = {
        nome: nome,
        cargo: cargo,
        dataNascimento: dataNascimento
    };

    //adcionar funcionario a array funcionarios
    funcionarios.push(funcionario);

    // Limpa os campos do formulário
    document.getElementById("inputFuncionario").value = "";
    document.getElementById("inputCargo").value = "Selecione um Cargo";
    document.getElementById("inputNascimento").value = "";

    // Imprime a lista de funcionários
    for (var i = 0; i < funcionarios.length; i++) {
        console.log("Nome: " + funcionarios[i].nome + ", Cargo: " + funcionarios[i].cargo + ", Data de Nascimento: " + funcionarios[i].dataNascimento);
      }
}

const maxDiasTrabalhados = 7

