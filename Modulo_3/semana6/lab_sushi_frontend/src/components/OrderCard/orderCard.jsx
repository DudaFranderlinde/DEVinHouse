import React from "react"
import { DivGeralCardStyled, DivItensPedidoStyled, DivPedidoStyled, DivPedidoStyled2, EstadoPedidoStyled, H1PedidoStyled, H2PedidosStyled, PPedidoStyled } from "./orderCard.styled"

export const OrderCard = ({ IdPedido, dataPedido, horaPedido, estadoPedido, itensPedido, enderecoPedido, pagamentoPedido, subtotalPedido, totalPedido }) => {
    return(
        <>
            <DivGeralCardStyled>
                <DivPedidoStyled>
                    <DivPedidoStyled2>
                        <H1PedidoStyled>Pedido #{IdPedido}</H1PedidoStyled>
                        <PPedidoStyled>Em {dataPedido} às {horaPedido}</PPedidoStyled>
                    </DivPedidoStyled2>
                    <EstadoPedidoStyled>{estadoPedido}</EstadoPedidoStyled>
                </DivPedidoStyled>
                <H2PedidosStyled>Forma de entrega</H2PedidosStyled>
                <PPedidoStyled style={{ paddingLeft: '1vw' }}>Endereço de entrega</PPedidoStyled>
                <PPedidoStyled style={{ paddingLeft: '1vw' }}>{enderecoPedido}</PPedidoStyled>
                <H2PedidosStyled>Forma de pagamento</H2PedidosStyled>
                <PPedidoStyled style={{ paddingLeft: '1vw' }}>{pagamentoPedido}</PPedidoStyled>
                <H2PedidosStyled>Pedido</H2PedidosStyled>
                <DivItensPedidoStyled>
                    {itensPedido}
                </DivItensPedidoStyled>
                <DivPedidoStyled style={{ paddingTop: '0.9vw' }}>
                    <PPedidoStyled>Subtotal</PPedidoStyled>
                    <PPedidoStyled>R$ {subtotalPedido}</PPedidoStyled>
                </DivPedidoStyled>
                <DivPedidoStyled>
                    <PPedidoStyled style={{ fontWeight: 'bold', fontSize: '1.5vw' }}>Total</PPedidoStyled>
                    <PPedidoStyled style={{ fontWeight: 'bold', fontSize: '1.5vw' }}>R$ {totalPedido}</PPedidoStyled>
                </DivPedidoStyled>
            </DivGeralCardStyled>
        </>
    )
}