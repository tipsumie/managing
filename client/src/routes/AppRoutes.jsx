import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Register, Login, Home } from '../pages';

import ProtectedAdminRoute from './ProtectedAdminRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {

  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedAdminRoute>
            <Home />
          </ProtectedAdminRoute>
        }
      />

      <Route
        path='/register'
        element={
          <PublicRoute>
            {' '}
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path='/login'
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
