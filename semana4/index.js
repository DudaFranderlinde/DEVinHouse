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
