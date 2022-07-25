const input = document.getElementsByTagName('input')[0];
 console.log(typeof num) 


function validarNumber(valor){
    if(isNaN(valor) || valor <=0){
    return false;
}

return true;
}
 

function verificaPar(){
    const valor = parseInt(input.value); 
    if(validarNumber(valor) && valor%2==0){
        console.log("entrou")
         return p.textContent = `${valor} é par`;;
    }
    if(validarNumber(valor) && valor%2!==0){
        return p.textContent = `${valor} é ímpar`
    }

    return p.textContent= "Valor inválido"
}

function nPare(event){
    event.preventDefault();
    let valor = (event.target.num.value);
    verificaPar(valor);
}


let button = document.getElementById('but');

if(button){
    button.addEventListener('click', function(){
    verificaPar(num)
    console.log("clicou")
})
}
