import { useTranslation } from 'react-i18next';
import './shared/i18n/i18n';
import i18next from 'i18next';
import React, { FC } from 'react';
import { AppRouter } from 'shared/components/app-router/AppRouter';

const App: FC = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
