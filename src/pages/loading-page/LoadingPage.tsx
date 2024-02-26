import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';

const LoadingPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageChange = (value: string) => {
    navigate(RouteNames.EMAIL);
  };

  return (
    <>
      <PageQuestionComponent action={t('page5.text')} />
    </>
  );
};

export default LoadingPage;
