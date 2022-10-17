import { v4 as uuidv4 } from "uuid"
import { getSolicitationsFile } from "../utils/getSolicitationsFile.js";
import fs from 'fs'

//let pedidos = []

export function listarPedidos(request, response) {
    const pedidos = getSolicitationsFile()
    response.status(200).json(pedidos);
}

export function criarPedido(request, response) {
    const pedidos = getSolicitationsFile()

    const novoPedido = {
        id: uuidv4(),
        client: request.body.client,
        cpf: request.body.cpf,
        address: request.body.address,
        phone: request.body.phone,
        payment: request.body.payment,
        description: request.body.description,
        demanded: request.body.demanded,
        order: "EM PRODUÇÃO",  
    }

    fs.writeFileSync('solicitations.json', JSON.stringify([...pedidos, novoPedido]))
    response.json(novoPedido);
}

export function pesquisarPedido(request, response) {
    const pedidos = getSolicitationsFile()
    const pedidoPesquisado = pedidos.find(elemento => elemento.id  === request.params.id);

    if (!pedidoPesquisado) {
        return response.json({error: "Item não encontrado no sistema"})
    }

    response.json(pedidoPesquisado);
}

export function atualizarStatus(request, response){
    const id = request.params.id
    const solicitations = getSolicitationsFile()

    const pedidoAtualizado = solicitations.map(elemento=>{
        if (elemento.id === request.params.id) {
            if(elemento.order === "EM PRODUÇÃO")  {
                lemento.order = "HÁ CAMINHO"
            }else if ( elemento.order === "HÁ CAMINHO"){
                elemento.order = "FINALIZADO"
            }
            
        }
        return elemento
    })

    fs.writeFileSync('solicitations.json', JSON.stringify(pedidoAtualizado))
    return response.json(pedidoAtualizado)
}