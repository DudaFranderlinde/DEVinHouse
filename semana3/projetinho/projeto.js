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
