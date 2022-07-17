var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]

 listaNumeros.forEach((n,indice)=> {
    listaNumeros[indice] = n*2; // n = listaNumeros[indice]
 })

 console.log(listaNumeros)
