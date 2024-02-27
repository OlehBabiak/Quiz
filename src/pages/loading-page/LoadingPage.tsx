import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import Loader from 'shared/components/loader/Loader';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { useTypedDispatch } from 'shared/hooks/hooks';
import { setProgress } from 'store/slices/common-slice';
import './LoadingPage.scss';

const LoadingPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    dispatch(setProgress(0));
    const interval = setInterval(() => {
      setLoadingPercent((prevPercent) => {
        const updatedPercent = prevPercent + 1;
        if (updatedPercent >= 100) {
          clearInterval(interval);
          navigate(RouteNames.EMAIL);
          return 100;
        }
        return updatedPercent;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="content-wrapper">
      <Loader width={252} percent={loadingPercent} />
      <PageQuestionComponent action={t('loadingPage.text')} />
    </div>
  );
};

export default LoadingPage;
