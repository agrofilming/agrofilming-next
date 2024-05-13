import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

export type TFieldName = 'clientName';

export interface ITextInputProps {
  name: string;
  register: UseFormRegister<any>;
  setValue?: UseFormSetValue<any>;
  errorMessage?: string;
  maxLength?: number;
  pattern?: 'onlyNumber' | 'onlyPositiveNumber' | 'onlyPositiveNumberWithoutZero' | 'tariff';
  required?: boolean;
  disabled?: boolean;
  optionalTitle?: boolean;
  setOnFocus?: (name: string) => void;
  minAmount?: string;
  maxAmount?: string;
  showLabelBlock?: boolean;
}
