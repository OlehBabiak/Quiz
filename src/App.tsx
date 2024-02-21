import { useTranslation } from 'react-i18next';
import './shared/i18n';
import i18next from 'i18next';
import React, { FC } from 'react';
import './App.scss';
import { AppRouter } from 'shared/components/app-router/AppRouter';

const App: FC = () => {
  return (
    <div className="content">
      <AppRouter />
    </div>
  );
};

export default App;
