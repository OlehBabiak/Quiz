import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import MenuButton from 'shared/components/button/MenuButton';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { IPageOptions } from 'shared/i18n/copies/types';
import { v4 as uuidv4 } from 'uuid';

const TopicsPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageChange = (value: string) => {
    navigate(RouteNames.LOADING);
  };

  return (
    <>
      <PageQuestionComponent
        question={t('page5.title')}
        action={t('page5.text')}
      />
      {JSON.parse(t('page5.options')).map(({ value }: IPageOptions) => (
        <MenuButton
          key={value + uuidv4()}
          title={value}
          onClick={() => handleLanguageChange(value)}
        />
      ))}
    </>
  );
};

export default TopicsPage;
