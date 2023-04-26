import { render, screen } from '@testing-library/react';
import { Order } from '.';

describe('Order', () => {
  it('renders the order cards correctly', async () => {
    const mockOrders = [
      {
        id: 1,
        date: '2022-03-01',
        address: '123 Main St',
        state: 'Shipped',
        hour: '14:00',
        payment: 'Credit Card'
      },
      {
        id: 2,
        date: '2022-03-02',
        address: '456 Oak St',
        state: 'Delivered',
        hour: '12:30',
        payment: 'PayPal'
      }
    ];

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockOrders)
      })
    );

    render(<Order/>);

    const orderCards = await screen.findAllByTestId('order-card');

    expect(orderCards).toHaveLength(mockOrders.length);

    orderCards.forEach((orderCard, index) => {
      expect(orderCard).toHaveTextContent(`#${mockOrders[index].id}`);
      expect(orderCard).toHaveTextContent(mockOrders[index].date);
      expect(orderCard).toHaveTextContent(mockOrders[index].address);
      expect(orderCard).toHaveTextContent(mockOrders[index].state);
      expect(orderCard).toHaveTextContent(mockOrders[index].hour);
      expect(orderCard).toHaveTextContent(mockOrders[index].payment);
    });

    global.fetch.mockRestore();
  });
});
