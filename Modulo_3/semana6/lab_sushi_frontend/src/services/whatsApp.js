import React, { useState, useEffect } from 'react';
import api from './api';
import Menu from "../components/Menu";
import { DivGeralStyled } from '../pages/Orders/OrdersPage.styles';
import { Order } from '../pages/Order';

const OrderWhatsApp = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('orders')
      .then((response) => {
        setOrders(response.data);
      })
      .catch(() => alert('Não foi possível carregar os seus pedidos!'));
  }, []);

  const sendOrderMessage = (order) => {
    const message = `Olá, gostaria de fazer um novo pedido com os seguintes detalhes:\n\nID do pedido: ${order.id}\nData do pedido: ${order.date}\nEndereço de entrega: ${order.address}\nEstado do pedido: ${order.state}\nHorário do pedido: ${order.hour}\nMétodo de pagamento: ${order.payment}\n\nPor favor, confirme a disponibilidade e o valor. Obrigado!`;

    const phone = `+55${order.phoneNumber}`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(url, '_blank');
  };

  return (
    <>
      <Menu />
      <DivGeralStyled>
        {orders.map((order, index) => (
          <Order
            key={index}
            IdPedido={order.id}
            dataPedido={order.date}
            enderecoPedido={order.address}
            estadoPedido={order.state}
            horaPedido={order.hour}
            pagamentoPedido={order.payment}
          >
            <button onClick={() => sendOrderMessage(order)}>
              Enviar para o WhatsApp
            </button>
          </Order>
        ))}
      </DivGeralStyled>
    </>
  );
};

export default OrderWhatsApp;