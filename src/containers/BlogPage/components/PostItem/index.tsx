import { FC } from 'react';
import { IPostItemProps } from './interface';
import Image from 'next/image';
import styles from './index.module.scss';
import { Button } from '@/components';
import Link from 'next/link';

export const PostItem: FC<IPostItemProps> = ({ image, description, title, id }) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt={`post-title-img-${id}`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/blog/post${id}`}>
        <Button>Читати</Button>
      </Link>
    </div>
  );
};
