import styles from './index.module.scss';
import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface IPartnerItem {
  img: StaticImageData;
}

export const PartnerItem: FC<IPartnerItem> = ({ img }) => (
  <div className={styles.container}>
    <Image src={img} alt={'partners-item'} />
  </div>
);
