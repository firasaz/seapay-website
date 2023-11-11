import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Landing from 'pages/Landing';
import SeaGateway from 'pages/SeaGateway';
import PaymentOptions from 'pages/PaymentOptions';
import Contact from 'pages/Contact';
import POSGateway from 'pages/POSGateway';
import Prices from 'pages/Prices';
const FalconRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/sea-gateway' element={<SeaGateway />} />
      <Route path='/pos-gateway' element={<POSGateway />} />
      <Route path='/payment-options' element={<PaymentOptions />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/prices' element={<Prices />} />
      <Route path='/prices-arabsea' element={<Contact />} />
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default FalconRoutes;
