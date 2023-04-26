function calculaAno(){
   var ano = prompt('Digite um ano:');
   var anoAtual = new Date().getFullYear();
   var resultado = anoAtual - parseInt(ano);

   alert('O resultado é: '+ resultado);
}


var elemento = document.getElementById('zero');

function diminui(){
    var num = elemento.textContent;
    elemento.innerText = parseInt(num) -1;
}

function adiciona(){
    var num = elemento.textContent;
    elemento.innerText = parseInt(num) + 1;
}

function alteraTitulo(){
    var h1 = document.getElementById('h1')
    var altera = document.getElementById('alteraTitulo').value;
    h1.innerText = (altera)
}