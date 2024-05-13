import { Control, UseFormWatch } from 'react-hook-form';

export interface IOption {
  label: string;
  value: string;
}

export type TFieldName = 'budget';

export interface ISelectProps {
  name: string;
  options: IOption[];
  control: Control<any, any>;
  watch: UseFormWatch<any>;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  allowClear?: boolean;
  onSearch?: (val: string) => void;
  filter?: boolean;
  optionalTitle?: boolean;
  emptyContent?: JSX.Element;
  loading?: boolean;
}
