import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import styles from './index.module.scss';
import { IButtonProps } from './interfaces';

export const Button: FC<IButtonProps> = ({
  type = 'button',
  variant = 'contained',
  children,
  width = '160px',
  height = '40px',
  fontSize = '16px',
  fontWeight = '300',
  textTransform = 'unset',
  gap = '10px',
  disabled = false,
  active = false,
  onClick,
}) => (
  <button
    className={cn(styles.btn, styles[variant], { [styles.disabled]: disabled, [styles.active]: active })}
    style={
      {
        '--btn-width': width,
        '--btn-height': height,
        '--btn-gap': gap,
        '--btn-fontSize': fontSize,
        '--btn-fontWeight': fontWeight,
        '--btn-textTransform': textTransform,
      } as CSSProperties
    }
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);
