import { UseFormRegister } from 'react-hook-form';

export interface IEmailInputProps {
  register: UseFormRegister<any>;
  errorMessage: string | undefined;
  variant?: 'primary' | 'secondary';
}
