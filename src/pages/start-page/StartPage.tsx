import i18next from 'i18next';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteNames } from 'routes';
import MenuButton from 'shared/components/button/MenuButton';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { v4 as uuidv4 } from 'uuid';
import { AVAILABLE_LANGUAGES } from 'shared/constants/i18n/constants';
import { useNavigate } from 'react-router-dom';

const StartPage: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLanguageChange = (language: string) => {
    console.log('language', language);
    i18next.changeLanguage(language);
    navigate(RouteNames.IDENTIFY);
  };

  return (
    <>
      <PageQuestionComponent
        question={t('page1.title')}
        action={t('page1.text')}
      />
      {AVAILABLE_LANGUAGES.map(({ lang, iso }) => (
        <MenuButton
          key={lang + uuidv4()}
          title={lang}
          onClick={() => handleLanguageChange(iso)}
        />
      ))}
    </>
  );
};

export default StartPage;
