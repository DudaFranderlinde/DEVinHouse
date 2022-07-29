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

    adicionarProduto(produto) {
        if((produto instanceof Produto == true)){
            this.listaProdutos.push(produto)
            return console.log(this.listaProdutos)
        }
        return alert("Produto Inválido")
    }
    
    adicionarProduto(alecrim)
}