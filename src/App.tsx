import './shared/i18n';
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
