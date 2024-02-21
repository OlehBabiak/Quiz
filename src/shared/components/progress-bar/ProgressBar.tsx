import React from 'react';
import { IProgressBarProps } from './types';
import './ProgressBar.scss';

const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
