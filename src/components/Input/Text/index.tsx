import cn from 'classnames';
import { FC, useMemo } from 'react';
import styles from './index.module.scss';
import { ITextInputProps, TFieldName } from './interfaces';

export const TextInput: FC<ITextInputProps> = ({
  name,
  register,
  errorMessage,
  maxLength,
  required = true,
  disabled = false,
  setOnFocus = null,
  showLabelBlock = false,
}) => {
  const fieldName = useMemo(() => name.split('.').at(-1) as TFieldName, [name]); // handle fieldName for translate, because "name" can be dynamic

  return (
    <div className={cn(styles.container, { [styles.error]: errorMessage })}>
      {showLabelBlock && (
        <div className={styles['label-container']}>
          <p className={styles.label}>{fieldName}</p>

          {errorMessage && <span>{errorMessage}</span>}
        </div>
      )}

      <input
        type="text"
        autoComplete="off"
        placeholder={fieldName}
        disabled={disabled}
        {...register(name, {
          required: {
            value: required,
            message: `Обов'язкове поле`,
          },
          ...(maxLength && {
            maxLength: {
              value: maxLength,
              message: `Максимальна кількість символів${maxLength}`,
            },
          }),
        })}
        onFocus={() => (setOnFocus ? setOnFocus(name) : undefined)}
      />
    </div>
  );
};
