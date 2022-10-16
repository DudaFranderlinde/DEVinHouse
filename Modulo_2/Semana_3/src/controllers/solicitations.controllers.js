import { v4 as uuidv4 } from "uuid"
let pedidos = []

export function listarPedidos(request, response) {
    response.status(200).json(pedidos);
}

export function criarPedido(request, response) {
    const novoPedido = {
        id: uuidv4(),
        client: request.body.client,
        cpf: request.body.cpf,
        address: request.body.address,
        phone: request.body.phone,
        payment: request.body.payment,
        description: request.body.description,
        demanded: request.body.demanded,
    }

    pedidos.push(novoPedido);
    response.json(novoPedido);
}

export function pesquisarPedido(request, response) {
    const pedidoPesquisado = pedidos.find(elemento => elemento.id  === request.params.id);

    if (!pedidoPesquisado) {
        return response.json({error: "Item não encontrado no sistema"})
    }

    response.json(pedidoPesquisado);
}