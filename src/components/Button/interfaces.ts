import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'green';
  children: ReactNode;
  height?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: 'uppercase' | 'unset';
  gap?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: (value: any) => void;
}
