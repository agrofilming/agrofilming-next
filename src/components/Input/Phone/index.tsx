'use client';

import cn from 'classnames';
import { FC } from 'react';

import styles from './index.module.scss';
import { IPhoneInputProps } from './interfaces';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

export const Phone: FC<IPhoneInputProps> = ({ control, errorMessage }) => {
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
          <PhoneInput
            {...rest}
            inputProps={{
              ref,
              required: true,
              autoFocus: true,
            }}
            country="ua"
            countryCodeEditable={false}
            containerClass={styles['phone-input']}
            onlyCountries={['ua']}
            onChange={value => {
              // Ensure the value always starts with '+'
              const valueWithPlus = value.startsWith('+') ? value : `+${value}`;
              onChange(valueWithPlus); // Update the value with '+' prefix
            }}
          />
        )}
      />
    </div>
  );
};
