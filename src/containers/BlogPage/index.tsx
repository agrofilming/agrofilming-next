import blogTitleImg from '@/assets/images/blog-top.webp';
import Image from 'next/image';

import styles from './index.module.scss';
import { blogData } from './const';
import { PostItem } from './components';

export const BlogPage = () => {
  return (
    <div className={styles.container}>
      <Image src={blogTitleImg} alt={'blog title'} />
      <h1>Статті</h1>
      <div className={styles.posts}>
        {blogData.map(({ id, title, desc, img }) => (
          <PostItem key={id} title={title} id={id} description={desc} image={img} />
        ))}
      </div>
    </div>
  );
};
