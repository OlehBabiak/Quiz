import React from 'react';

import { Routes, Route } from 'react-router-dom';

import StartPage from 'pages/start-page';
import { privateRoutes } from '../../../routes';
import Header from '../header/header';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        {privateRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
        <Route path="/" element={<StartPage />} />
      </Routes>
    </>
  );
};
