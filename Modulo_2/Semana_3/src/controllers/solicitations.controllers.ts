import { v4 as uuidv4 } from "uuid"
import { getSolicitationsFile } from "../utils/getSolicitationsFile.js";
import fs from 'fs'
import {Request, Response} from 'express'
import { BodyParamsCriarPedido, Pedido, ParamsId } from "../types/solicitations.types";


export function listarPedidos(request: Request, response: Response) {
    const pedidos: Pedido[] = getSolicitationsFile()
    response.status(200).json(pedidos);
}

export function criarPedido(request: Request<{}, {}, BodyParamsCriarPedido>, response: Response) {
    const pedidos: Pedido[] = getSolicitationsFile()

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

export function pesquisarPedido(request: Request<ParamsId>, response: Response) {
    const pedidos: Pedido[] = getSolicitationsFile()
    const pedidoPesquisado = pedidos.find(elemento => elemento.id  === request.params.id);

    if (!pedidoPesquisado) {
        return response.json({error: "Item não encontrado no sistema"})
    }

    response.json(pedidoPesquisado);
}

export function atualizarStatus(request: Request<ParamsId>, response: Response){
    const id = request.params.id
    const pedidos: Pedido[] = getSolicitationsFile()

    const pedidoAtualizado = pedidos.map(elemento=>{
        if (elemento.id === request.params.id) {
            if(elemento.order === "EM PRODUÇÃO")  {
                elemento.order = "HÁ CAMINHO"
            }else if ( elemento.order === "HÁ CAMINHO"){
                elemento.order = "FINALIZADO"
            }
            
        }
        return elemento
    })

    fs.writeFileSync('solicitations.json', JSON.stringify(pedidoAtualizado))
    return response.json(pedidoAtualizado)
}