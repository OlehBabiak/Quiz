import React, { FC } from 'react';
import { IProgressBarProps } from './types';
import './ProgressBar.scss';

const ProgressBar: FC<IProgressBarProps> = ({
  progress,
}: IProgressBarProps) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress * 20}%` }}></div>
    </div>
  );
};

export default ProgressBar;
