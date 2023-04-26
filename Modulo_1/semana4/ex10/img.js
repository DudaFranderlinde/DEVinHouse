const input = document.getElementsByTagName('input')[0];
const imagem = document.getElementById('img');
const atualizarEstacao = ({ url }) => {
    imagem.src = url;
  };

  const verificarEstacao = (event) => {
    const data = new Date(`${event.target.value} 00:00`);
    if (!(data instanceof Date) || isNaN(data)) {
      alert('Data inválida');

      return;
    }

    const dia = data.getDate();
    const mes = data.getMonth() + 1;

    if ((dia >= 22 && mes === 3) || mes === 4 || mes === 5 || (dia <= 21 && mes === 6)) {
        atualizarEstacao({ url: './img\outono.png' });
        return console.log("Outono");
      }
    if ((dia >= 22 && mes === 6) || mes === 7 || mes === 8 || (dia <= 21 && mes === 9)) {
        atualizarEstacao({ url: './img/inverno.png' });
        return console.log("Inverno");
    }
    if ((dia >= 22 && mes === 9) || mes === 10 || mes === 11 || (dia <= 21 && mes === 12)) {
      atualizaEstacao({ url: './img/primaveira.png' });
      return console.log("Primavera");
    }
    if ((22 >= dia  && mes === 12) || mes === 1 || mes === 2 || (dia <= 21 && mes === 3)) {
      atualizaEstacao({ url: './img/verao.jpeg' });
      return console.log("Verão");
    }
 }

 input.onchange = verificarEstacao;
