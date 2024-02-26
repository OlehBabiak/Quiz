import i18next from 'i18next';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteNames } from 'routes';
import MenuButton from 'shared/components/button/MenuButton';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { v4 as uuidv4 } from 'uuid';
import {
  AVAILABLE_LANGUAGES,
  LANGUAGES_NAMES,
} from 'shared/constants/i18n/constants';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch } from 'shared/hooks/hooks';
import { setProgress, setFirstOrder } from 'store/slices/common-slice';

const StartPage: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();

  const handleLanguageChange = (iso: string, lang: LANGUAGES_NAMES) => {
    i18next.changeLanguage(iso);
    navigate(RouteNames.IDENTIFY);
    dispatch(
      setFirstOrder({
        title: `${t('page1.title')}`,
        type: 'single-select',
        answer: lang,
      })
    );
  };

  useEffect(() => {
    dispatch(setProgress(1));
  });

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
          onClick={() => handleLanguageChange(iso, lang)}
        />
      ))}
    </>
  );
};

export default StartPage;
