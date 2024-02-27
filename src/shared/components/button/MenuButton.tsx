import React, { FC, useEffect, useState } from 'react';
import { disabledButtonStyles } from 'shared/constants/styles';
import { IMenuButtonProps } from './types';
import './MenuButton.scss';

const MenuButton: FC<IMenuButtonProps> = ({
  title,
  showCheckbox,
  isChecked,
  onClick,
  styles,
  disabled = false,
}: IMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${isChecked ? 'button active-button' : 'button'}`}
      type="button"
      style={disabled ? { ...styles, ...disabledButtonStyles } : styles}
      disabled={disabled}
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
