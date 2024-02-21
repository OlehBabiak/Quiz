import React from 'react';
import { IProgressBarProps } from '../progress-bar/types';
import { TOTAL_PAGES } from './constants';
import './PageCount.scss';

const PageCount: React.FC<IProgressBarProps> = ({ progress }) => {
  return (
    <div className="count">
      <p>
        <span className="firs-value">{progress / 10}</span>/
        <span>{TOTAL_PAGES}</span>
      </p>
    </div>
  );
};

export default PageCount;
