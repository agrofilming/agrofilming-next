import { CSSProperties, FC, ReactNode } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

interface ILeadSeeker {
  colorMain: string;
  colorWithOpacity: string;
  containerBottom: string;
  children: ReactNode;
  className: string;
}

export const LeadSeeker: FC<ILeadSeeker> = ({ colorMain, colorWithOpacity, containerBottom, children, className }) => {
  return (
    <div
      className={cn(styles.container, className)}
      style={
        {
          '--container-bottom': containerBottom,
          '--container-color-main': colorMain,
          '--container-color-opacity': colorWithOpacity,
        } as CSSProperties
      }
    >
      <div className={styles.block}>{children}</div>
    </div>
  );
};
