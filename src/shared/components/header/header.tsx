import React from 'react';
import ProgressBar from '../progress-bar/ProgressBar';
import PageCount from '../page-count/PageCount';

const Header: React.FC = () => {
  const [progress, setProgress] = React.useState(30);

  return (
    <>
      <PageCount progress={progress} />
      <ProgressBar progress={progress} />
    </>
  );
};

export default Header;
