class Pedido{
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;

    constructor(numPedido, nomeCliente){
        this.numeroPedido = numPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = nomeCliente;
    }    
} 

import {Produto} from "./Produto.js";

function adicionarProduto({produto}) {
    const validaDado = produto instanceof Produto;
    if(validaDado){
        this.listaProdutos.push(produto);
        return console.log(this.listaProdutos);
    }
    return alert("Produto Inválido");
}
