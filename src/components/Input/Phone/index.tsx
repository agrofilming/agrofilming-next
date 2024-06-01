'use client';

import cn from 'classnames';
import { FC } from 'react';

import styles from './index.module.scss';
import { IPhoneInputProps } from './interfaces';
import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';

export const PhoneInput: FC<IPhoneInputProps> = ({ control, errorMessage }) => {
  return (
    <div className={cn(styles.container, { [styles.error]: errorMessage })}>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: { value: true, message: `Обов'язкове поле` },
          validate: { validPhone: value => /^\+\d{11,12}$/gm.test(value) || 'Невірний формат' },
        }}
        render={({ field: { ref, onChange, ...rest } }) => (
          <InputMask
            mask=""
            placeholder="+380 XX XXX XXXX"
            inputRef={ref}
            onChange={event => onChange(event.target.value.replace(/\s/g, ''))}
            {...rest}
          />
        )}
      />
    </div>
  );
};
