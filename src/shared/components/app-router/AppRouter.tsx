import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import StartPage from 'pages/start-page';
import { privateRoutes } from '../../../routes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {privateRoutes.map(({ path, component, exact }) => (
          <Route key={path} path={path} element={component} />
        ))}
        <Route path="/" element={<StartPage />} />
      </Routes>
    </>
  );
};
