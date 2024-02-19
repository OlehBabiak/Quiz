import i18next, { t } from 'i18next';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import {
  AVAILABLE_LANGUAGES,
  ISO_CODES,
} from '../../shared/constants/i18n/constants';

const StartPage: FC = () => {
  const navigate = useNavigate();

  const handleLanguageChange = (language: string) => {
    i18next.changeLanguage(language);
    navigate(RouteNames.IDENTIFY);
  };

  return (
    <>
      <div>{t('Select Language')}</div>
      <div>{i18next.language}</div>
      {AVAILABLE_LANGUAGES.map((lang) => (
        <button
          type="button"
          key={lang.lang}
          onClick={() => handleLanguageChange(lang.lang)}
        >
          {lang.lang}
        </button>
      ))}
    </>
  );
};

export default StartPage;
