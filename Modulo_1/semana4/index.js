let contaCliente = [
    {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    senha: 1234
    },
    {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    senha: 2234
    },
    {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
    senha: 3334
    },
];
const selectConta = document.getElementById('conta');
const body = document.body;

function addSelect(){
    selectConta.innerHTML = '';

    const option = document.createElement('option');
    option.value = '0';
    option.textContent = '(Selecione)';
    selectConta.appendChild(option)

    contaCliente.forEach((contaCLi, i)=> {
        const option = document.createElement('option');
        option.value = contaCLi.id;
        option.textContent = contaCLi.nome;
        selectConta.appendChild(option)

    })
};

body.onload = addSelect();

function validarNumber(valor){
    if(isNaN(valor) || valor <=0){
        return false;
    }

    return true;
}

function validarSaldo(valor, saldo){
    if(valor > saldo){
        return false;
    }

    return true;
}


function atualizaSaldo(id_cliente, saldo){
    let contasSemContaAtual = contaCliente.filter((c) => c.id !== id_cliente.id);
    let contaAtualizada = { ...id_cliente, saldo };
    let contasAtualizadas = [...contasSemContaAtual, contaAtualizada];
    contaCliente = contasAtualizadas;
    console.log(contaCliente);
}


const obtemContaCliente =(idConta)=> {
    return contaCliente.find((conta)=> conta.id === idConta);
}

let p = document.getElementById('p');

function sacar(idConta, valor){
    if(!validarNumber(valor)){
        p.textContent = "Valor inválido. Tente novamente!";
        console.log(" valor invalido");
        return;
    }
    if(!validarSaldo(valor, idConta.sa)){
        p.textContent = `Saldo insuficiente. Saldo atual : ${idConta.saldo}`;
        console.log("saldo invalido")
        return; 
    }

    const novoSaldo = idConta.saldo - valor ;
    atualizaSaldo(idConta, novoSaldo)
    p.textContent = `Saque realizado com sucesso! Seu saldo disponível agora é de ${novoSaldo}`;
   
}



function depositar(valor, idConta){
    if(!validarNumber(valor)){
        p.textContent = "Valor inválido. Tente novamente!";
        console.log(" valor invalido");
        return;
    }

    const novoSaldo = idConta.saldo + valor;
    atualizaSaldo(idConta, novoSaldo);
    p.textContent = `Depósito realizado com sucesso! Seu saldo disponível agora é de ${novoSaldo}`;

}

const OPERACAO_CONTA = {
    SACAR: 1,
    DEPOSITAR: 2,
  };




function efetuaOperacao(event){
    event.preventDefault();
    
    let  idConta = parseInt(event.target.conta.value);
    const valor = parseFloat(event.target.valor.value);
    const operacao = parseInt(event.target.operacao.value);
    const senha = (event.target.senha.value)



    if(!validarNumber(idConta) || !validarNumber(valor) || !validarNumber(operacao)){
        p.textContent = "Campos inválidos!";
        return;
    }

    if(!senha){
        p.textContent = "Informe a senha correta!"
        return;
    }
    
    let cliente = obtemContaCliente(idConta);
    
    console.log(cliente)
    switch(operacao){
        case OPERACAO_CONTA.SACAR:
            sacar(cliente, valor)
            console.log("entrou1");
            break;
        case OPERACAO_CONTA.DEPOSITAR:
            depositar(valor, cliente);
            console.log("entrou2");

            break;
        case error:
            p.textContent = "Operação selecionada inválida!";
            break;
    }
}
 let formulario = document.getElementById('form');
form.onsubmit = efetuaOperacao