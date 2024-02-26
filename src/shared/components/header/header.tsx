import React from 'react';
import { useTypedSelector } from 'shared/hooks/hooks';
import { selectProgress } from 'store/slices/common-slice';
import ProgressBar from '../progress-bar/ProgressBar';
import PageCount from '../page-count/PageCount';

const Header: React.FC = () => {
  const progress = useTypedSelector(selectProgress);

  return (
    <>
      <PageCount progress={progress} />
      <ProgressBar progress={progress} />
    </>
  );
};

export default Header;
