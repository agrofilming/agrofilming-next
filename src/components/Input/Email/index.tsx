import cn from 'classnames';
import { FC } from 'react';

import styles from './index.module.scss';
import { IEmailInputProps } from './interfaces';

export const EmailInput: FC<IEmailInputProps> = ({ register, errorMessage, variant = 'primary' }) => {
  const isPrimary = variant === 'primary';

  return (
    <div className={cn(styles.container, { [styles.error]: errorMessage })}>
      <input
        type="email"
        autoComplete="off"
        placeholder={'Email'}
        {...register('email', {
          required: { value: true, message: `Обов'язкове поле` },
          pattern: {
            value: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i,
            message: 'Невірний формат',
          },
        })}
      />
    </div>
  );
};
