import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Landing from 'pages/Landing';
const FalconRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default FalconRoutes;
