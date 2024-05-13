import cn from 'classnames';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import styles from './index.module.scss';
import { IPhoneInputProps } from './interfaces';
import { InputMask } from '@react-input/mask';

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
        render={({ field }) => (
          <InputMask
            mask="+380 (99) 99-99-999"
            placeholder="+380 XX XXX XXXX"
            type="tel"
            value={field.value}
            onChange={event => field.onChange(event.target.value.replace(/\s/g, ''))}
          />
        )}
      />
    </div>
  );
};
