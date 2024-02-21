import React from 'react';
import { IPageQuestionComponentProps } from './types';
import './PageQuestionComponent.scss';

const PageQuestionComponent: React.FC<IPageQuestionComponentProps> = ({
  styles,
  question,
  action,
}) => {
  return (
    <div className="questionStyle" style={styles}>
      <p>{question}</p>
      <p>{action}</p>
    </div>
  );
};

export default PageQuestionComponent;
