import React, { useEffect, useState } from "react"
import Menu from "../../components/Menu";
import api from "../../services/api";
import { OrderCard } from "../../components/OrderCard/orderCard";
import './index.css'

export const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        api.get('orders')
        .then((response) => {
            setOrders(response.data);
        })
        .catch(() => alert('Não foi possivel carregar os seus pedidos!'))
    }, []);

    return (
        <>
            <Menu />
            <div className="divOrder">
                {orders.map((order, index) => (
                    <OrderCard
                        key={index}
                        IdPedido={order.id}
                        dataPedido={order.date}
                        enderecoPedido={order.address}
                        estadoPedido={order.state}
                        horaPedido={order.hour}
                        pagamentoPedido={order.payment}
                    />
                ))}
            </div>
        </>
    )
}