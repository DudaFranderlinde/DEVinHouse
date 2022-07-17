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
