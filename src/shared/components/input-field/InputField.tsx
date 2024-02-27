import React, { FC } from 'react';
import { IInputType } from './types';
import './InputField.scss';

const InputField: FC<IInputType> = ({
  inputType,
  placeholder,
  onInputChange,
  inputValue,
  isInputValid,
}: IInputType) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onInputChange) {
      onInputChange(value);
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        className={isInputValid ? 'input' : 'input invalid'}
        type={inputType}
        placeholder={placeholder}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

export default InputField;
