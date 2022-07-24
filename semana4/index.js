let contaCliente = [
    {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    },
    {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    },
    {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
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

    contaCliente.forEach((contaCLi)=> {
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
    const contasSemContaAtual = contaCliente.filter((c) => c.id !== id_cliente.id);
    const contaAtualizada = { ...id_cliente, saldo };
    const contasAtualizadas = [...contasSemContaAtual, contaAtualizada];
    contaCliente = contasAtualizadas;
console.log(contaCliente)

}


function sacar(contaCliente, valor){
    let p = document.getElementById('p');
    if(!validarNumber(valor)){
        p.textContent = "Valor inválido. Tente novamente!";
        console.log(" valor invalido");
        return;
    }
    if(!validarSaldo(valor, contaCliente.saldo)){
        p.textContent = `Saldo insuficiente. Saldo atual : ${contaCliente.saldo}`;
        console.log("saldo invalido")
        return; 
    }

    const novoSaldo = contaCliente.saldo - valor ;
    atualizaSaldo(contaCliente, novoSaldo)
    p.textContent = `Saque realizado com sucesso! Seu saldo disponível agora é de ${novoSaldo}`;
    console.log(typeof valor)
}

sacar(contaCliente[1], 5)