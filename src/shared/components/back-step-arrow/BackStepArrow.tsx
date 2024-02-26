import React from 'react';
import './BackButtonArrow.scss';

const BackStepArrow: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button className="back-button" type="button" onClick={goBack}>
      <span>&lt;</span>
    </button>
  );
};

export default BackStepArrow;
