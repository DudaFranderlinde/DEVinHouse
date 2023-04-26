// let pedido1 = document.getElementById('h1pedido1');
// let data1 = document.getElementById('h1data1');
// let cliente = document.getElementById('cliente');
// let total = document.getElementById('total');
// let pagamento = document.getElementById('pagamento');
// 

let produtos = document.getElementById('lista');




function validaPagamento(booleano){
    let mensagem = " "
    if(booleano === true){
       return mensagem = `Pagamento Confirmado`
    }
    return  mensagem = `Aguardando pagamento `;
}


function FormataDinheiro(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  
  function elementProduto(produto) {
    const listItemEl = document.createElement("li");
    listItemEl.innerText = `${produto.nome} - ${
      produto.quantidade
    } - ${FormataDinheiro(produto.preco)}`;
  
    return listItemEl;
  }
  
  function geraLista(produto) {

    const pProdutos = document.createElement("p");
    pProdutos.textContent = "Lista de Produtos:"
    const list = document.createElement("ul");

    produto.forEach((produto) => {
      list.appendChild(elementProduto(produto));
    });
  
    return [pProdutos, list];
  }
  
  export function insertInfoCard(pedido) {
    const div = document.createElement("div");
    div.innerHTML =  
    `
    <div id="nav-div"> 
    <h1> N° do Pedido: ${pedido.numeroPedido} </h1>
    <h1>Data: ${pedido.dataPedido}</h1>
    </div>
    <div> 
    <p>Cliente: ${pedido.nomeCliente}</p>
    <p>Valor Total: ${FormataDinheiro(pedido.calcularTotal())}</p>
    <p>Pagamento: ${validaPagamento(pedido.estaPago)}</p>
    </div>
     `
    div.id = "main"
    
  
    const [p, lista] = geraLista(pedido.listaProdutos);
  

    div.appendChild(p);
    div.appendChild(lista);
    return div;
  }