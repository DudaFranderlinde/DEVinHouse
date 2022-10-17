export interface Pedido {
    id: string,
    client: string,
    cpf:string,
    address: string,
    phone: string,
    payment: string,
    description: string,
    demanded: string,
    order: string,  

}

export interface BodyParamsCriarPedido {
    client: string,
    cpf:string,
    address: string,
    phone: string,
    payment: string,
    description: string,
    demanded: string,
    order: string,  
}

export interface ParamsId{
    id:string,
}