function sleep ( valor ) {
    return new Promise ( (res, rej) => { 
       setTimeout(()=>{
        res(console.log(`${valor}`))
        rej("ERROR")
       }, 3000 )
    })
  }

  sleep(4)

  
  function verificaHora(){
    const hora = new Date();

    if (typeof hora === 'object' && hora !== null && 'getHours' in hora) {
        const result = hora.getHours();
        return result
    }
  }

  function verificaMin(){
    const min = new Date();

    if (typeof min === 'object' && min !== null && 'getMinutes' in min) {
        const res = min.getMinutes();
        return res
    }
}
function verificaSeg(){
    const seg = new Date();

    if (typeof seg === 'object' && seg !== null && 'getSeconds' in seg) {
        const resultado = seg.getSeconds();
        return resultado
    }
}

function horarioAtual(){
    const hora = verificaHora();  
    const min = verificaMin(); 
    const seg = verificaSeg(); 
    return console.log(`${hora}:${min}:${seg}`);
}

setInterval(horarioAtual, 2000)