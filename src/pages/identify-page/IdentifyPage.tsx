import React, { FC } from 'react';
import MenuButton from 'shared/components/button/MenuButton';
import { v4 as uuidv4 } from 'uuid';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { IPageOptions } from 'shared/i18n/copies/types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';

const IdentifyPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleOptionSelector = () => {
    navigate(RouteNames.AGE);
  };

  return (
    <>
      <PageQuestionComponent
        question={t('page2.title')}
        action={t('page2.text')}
      />
      {JSON.parse(t('page2.options')).map(({ value }: IPageOptions) => (
        <MenuButton
          key={value + uuidv4()}
          title={value}
          onClick={() => handleOptionSelector()}
        />
      ))}
    </>
  );
};

export default IdentifyPage;
