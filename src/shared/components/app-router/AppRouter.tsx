import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import StartPage from 'pages/start-page';
import { useTypedSelector } from 'shared/hooks/hooks';
import { selectProgress } from 'store/slices/common-slice';
import { privateRoutes } from '../../../routes';
import Header from '../header/header';

export const AppRouter = () => {
  const progress = useTypedSelector(selectProgress);

  return (
    <>
      {progress >= 1 && progress <= 5 && <Header />}
      <Routes>
        {privateRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
        <Route path="/" element={<StartPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
