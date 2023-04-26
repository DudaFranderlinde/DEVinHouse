import {Produto} from "./Produto.js";

export class Pedido{
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

    adicionarProduto(produto) {
        const validaDado = produto instanceof Produto;
        if(validaDado){
            this.listaProdutos.push(produto);
            return console.log(this.listaProdutos);
        }
        return console.log("Produto Inválido : "+ produto);
    }

    calcularTotal(){
        let valorTotal=0;
        this.listaProdutos.forEach(produto => {
            valorTotal = valorTotal + (produto.preco * produto.quantidade);
            
        });
        return valorTotal ;
    } 
} 