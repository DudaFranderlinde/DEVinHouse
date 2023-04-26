import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart';
import Details from '../pages/Details';

import Home from '../pages/Home';
import Order from '../pages/Order';
import { Form } from '../components/Form';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/" element={<Home />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order" element={<Order />} />
    </Routes>
  );
}

export default AppRoutes;