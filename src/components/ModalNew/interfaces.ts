import { ReactNode } from 'react';

export interface IModalProps {
  children: ReactNode;
  open: boolean;
  onCancel: () => void;
  width?: string;
  padding?: string;
  showClose?: boolean;
  destroyOnClose?: boolean;
}
