import { DoneIcon } from '@/assets/icons';
import cn from 'classnames';
import { FC, useCallback } from 'react';
import { Controller } from 'react-hook-form';

import styles from './index.module.scss';
import { ICheckboxForFormProps } from './interfaces';
import Image from 'next/image';

export const CheckboxForForm: FC<ICheckboxForFormProps> = ({ name, control, img, disabled = false }) => {
  const handleChange = useCallback(
    (onChange: (val: boolean) => void, value: boolean) => () => {
      if (disabled) return;
      onChange(!value);
    },
    [disabled],
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div
          className={cn(
            styles['checkbox-container'],
            { [styles.disabled]: disabled },
            { [styles.checked]: value },
            { [styles.standart]: !img },
          )}
          onClick={handleChange(onChange, value)}
        >
          {img && (
            <Image src={img} alt={'brief-img'} className={cn(styles['checkbox-img'], { [styles.checked]: value })} />
          )}
          <div className={cn(styles['checkbox-icon'], { [styles.checked]: value }, { [styles.disabled]: img })}>
            {value && <DoneIcon />}
          </div>
          <span className={styles.label}>{name}</span>
        </div>
      )}
    />
  );
};
