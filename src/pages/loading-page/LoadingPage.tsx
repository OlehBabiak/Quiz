import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { useTypedDispatch } from 'shared/hooks/hooks';
import { setProgress } from 'store/slices/common-slice';

const LoadingPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setProgress(0));
    setTimeout(() => {
      navigate(RouteNames.EMAIL);
    }, 5000);
  });

  return (
    <>
      <div>LOADING...</div>
      <PageQuestionComponent action={t('loadingPage.text')} />
    </>
  );
};

export default LoadingPage;
