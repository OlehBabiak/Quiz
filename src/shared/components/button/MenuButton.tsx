import React from 'react';
import { IMenuButtonProps } from './types';
import './MenuButton.scss';

const MenuButton: React.FC<IMenuButtonProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="button" type="button">
      {title}
    </button>
  );
};

export default MenuButton;
