var convidado1 = {
    nome: "Ana",
    sobrenome: "Negri",
    setor: "Camarote",
    idade: 11,
  };

var convidado2 = {
    nome: "Duda",
    sobrenome: "Duarte",
    setor: "Camarote",
    idade: 18,
  };

var convidado3 = {
    nome: "Clara",
    sobrenome: "Alves",
    setor: "Pista",
    idade: 16,
};

var convidado4 = {
    nome: "Talita",
    sobrenome: "Alves",
    setor: "Pista",
    idade: 29,
};

var convidado5 = {
    nome: "Caio",
    sobrenome: "Souza",
    setor: "Arquibancada",
    idade: 26,
};

var convidado6 = {
    nome: "Aline",
    sobrenome: "Cardoso",
    setor: "Arquibancada",
    idade: 21,
};


// exercício 5
var listaDeConvidados = [convidado1, convidado2, convidado3, convidado4, convidado5, convidado6];

// exercício 6

function liberarBebidas(array) {
    
    var resultado = array.map((convidado)=> {
        convidado.openBar = false;

        if(convidado.idade >= 18){
            convidado.openBar = true;
        }

        return convidado;
    });

    return resultado;
    
}

var convidadoComBebidasProcessadas = liberarBebidas(listaDeConvidados)

console.log(convidadoComBebidasProcessadas)

// exercício 7

function separarCamarote(array){
    var filtraCamarote = array.filter((convidado)=> convidado.setor === "Camarote");
    return filtraCamarote;

}

var listaCamarote = separarCamarote(listaDeConvidados);
console.log(listaCamarote)

function separarPista(array){
    var filtraPista = array.filter((convidado)=> convidado.setor === "Pista");
    return filtraPista;

}

var listaPista = separarPista(listaDeConvidados);
console.log(listaPista)


function separarArquibancada(array){
    var filtraArquibancada = array.filter((convidado)=> convidado.setor === "Arquibancada");
    return filtraArquibancada;

}

var listaArquibancada = separarArquibancada(listaDeConvidados);
console.log(listaArquibancada)

// exercício 8

var arquibancada = document.getElementById("listaArquibancada");
var pista = document.getElementById("listaPista");
var camarote = document.getElementById("listaCamarote");

var montaNome = (objeto) => {
    return `${objeto.nome} ${objeto.sobrenome}`;
  };


  listaArquibancada.forEach((convidado) => {
    if(convidado.openBar === true){
        arquibancada.innerHTML += `<li>${montaNome(convidado)}🍷</li>`;
    }else{
        arquibancada.innerHTML += `<li>${montaNome(convidado)}</li>`
    }
});

listaCamarote.forEach((convidado) => {
    if(convidado.openBar === true){
        camarote.innerHTML += `<li>${montaNome(convidado)}🍷</li>`;
    }else{
        camarote.innerHTML += `<li>${montaNome(convidado)}</li>`;

    }
});

listaPista.forEach((convidado) => {
    if(convidado.openBar === true){
        pista.innerHTML += `<li>${montaNome(convidado)}🍷</li>`;
    }else{
        pista.innerHTML += `<li>${montaNome(convidado)}</li>`;

    }
});
