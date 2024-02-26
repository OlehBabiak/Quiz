import React from 'react';

export interface IMenuButtonProps {
  title: string;
  showCheckbox?: boolean;
  isChecked?: boolean | undefined;
  styles?: React.CSSProperties;
  onClick?: () => void;
}
