import React, { useEffect, useState } from 'react';
import { IMenuButtonProps } from './types';
import './MenuButton.scss';

const MenuButton: React.FC<IMenuButtonProps> = ({
  title,
  showCheckbox,
  isChecked,
  onClick,
  styles,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${isChecked ? 'button active-button' : 'button'}`}
      type="button"
      style={styles}
    >
      <div>{title}</div>
      {showCheckbox && (
        <div className="fieldset">
          <input type="checkbox" checked={isChecked} readOnly />
        </div>
      )}
    </button>
  );
};

export default MenuButton;
