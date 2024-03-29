import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { RouteNames } from 'routes';
import MenuButton from 'shared/components/button/MenuButton';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { IPageOptions } from 'shared/i18n/copies/types';
import { useTypedDispatch } from 'shared/hooks/hooks';
import { setProgress, setThirdOrder } from 'store/slices/common-slice';

const AgePage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const handleOptionSelector = (value: string) => {
    navigate(RouteNames.ABOUT_BOOKS);
    dispatch(
      setThirdOrder({
        title: `${t('page3.title')}`,
        type: 'single-select',
        answer: value,
      })
    );
  };

  useEffect(() => {
    dispatch(setProgress(3));
  });

  return (
    <>
      <PageQuestionComponent question={t('page3.title')} />
      {JSON.parse(t('page3.options')).map(({ value }: IPageOptions) => (
        <MenuButton
          key={value + uuidv4()}
          title={value}
          onClick={() => handleOptionSelector(value)}
        />
      ))}
    </>
  );
};

export default AgePage;
