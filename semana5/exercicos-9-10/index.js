function sleep ( valor ) {
    return new Promise ( (res, rej) => { 
       setTimeout(()=>{
        res(console.log(`${valor}`))
        rej("ERROR")
       }, 3000 )
    })
  }

  sleep(4)