const input = document.getElementsByTagName('input')[0];
 console.log(typeof num) 


function validarNumber(valor){
    if(isNaN(valor) || valor <0){
    return false
}

return true;
}
 

function verificaIdade(){
    const idade = parseInt(input.value); 
    if(validarNumber(idade)  ){
        if(idade <= 15){
            return p.textContent = "Jovem"
        }
        if(16 <= idade && idade <= 64){
            return p.textContent = "Adultos"
        }
        if(65 <= idade && idade <= 120){
            return p.textContent = "Idosos"
        }
    }
    

    return p.textContent= "Idade inválida"
}


let button = document.getElementById('but');

if(button){
    button.addEventListener('click', function(){
    verificaIdade()
    console.log("clicou")
})
}
