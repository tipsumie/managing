import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Register, Login, Home } from '../pages';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
  // const storedUser = localStorage.getItem("user");
  // const storedToken = localStorage.getItem("token");
  // const isAuthenticated = storedUser && storedToken;

  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
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
