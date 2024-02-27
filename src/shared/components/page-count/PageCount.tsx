import React, { FC } from 'react';
import { IProgressBarProps } from '../progress-bar/types';
import { TOTAL_PAGES } from './constants';
import './PageCount.scss';
import BackStepArrow from '../back-step-arrow/BackStepArrow';

const PageCount: FC<IProgressBarProps> = ({ progress }: IProgressBarProps) => {
  return (
    <div className="count">
      {progress > 1 && <BackStepArrow />}
      <p>
        <span className="firs-value">{progress}</span>/
        <span>{TOTAL_PAGES}</span>
      </p>
    </div>
  );
};

export default PageCount;
