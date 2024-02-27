export interface IInputType {
  inputType: string;
  placeholder: string;
  inputValue?: string;
  isInputValid?: boolean;
  onInputChange?: (value: string) => void;
}
