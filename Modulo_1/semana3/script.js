var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]

 listaNumeros.forEach((n,indice)=> {
    listaNumeros[indice] = n*2; // n = listaNumeros[indice]
 })

 console.log(listaNumeros)

// Exercício 2

var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
  ];
 var convidados = document.getElementById('lista-convidados');
 
  const listCompleta = listaConvidados.map((c,i)=>{
  var nome = listaConvidados[i].nome +" "+ listaConvidados[i].sobrenome;
  var item = document.createElement("li");
  item.textContent = nome;
  convidados.appendChild(item);
 
   
});

// Exercício 3

  var num1 = parseInt(prompt("Digite um valor para numero1:"));
  var num2 = parseInt(prompt("Digite um valor para o numero2:"));
  var operador = prompt("Digite a operação que deseja fazer(+,-,*,/):")

function calculaOperacao(num1, num2, operador){
  var result;

  if(operador == "+"){
    result = num1+num2;
  }else if(operador == "-"){
    result = num1-num2;
  }else if(operador == "*"){
    result = num1*num2;
  }else if(operador == "/"){
    result = num1/num2;

  }

  console.log(result)
}

calculaOperacao(num1, num2, operador)
