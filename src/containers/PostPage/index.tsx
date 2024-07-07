import { FC, useMemo } from 'react';
import styles from './index.module.scss';
import { blogData } from '@/containers/BlogPage/const';
import { PostItem } from '@/containers/BlogPage/components';
import { Button } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

interface IPostPageProps {
  id: string;
}

export const PostPage: FC<IPostPageProps> = ({ id }) => {
  const data = useMemo(() => blogData.find(post => post.id === id), [id]);
  const anotherPosts = useMemo(() => blogData.filter(post => post.id !== id), [id]);
  return (
    <div className={styles.container}>
      {data && (
        <div className={styles['title-img']}>
          <Image src={data.titleImg} alt={'title-image'} />
        </div>
      )}

      <h1>{data?.title}</h1>

      <div className={styles['main-desc']}>{data?.mainDesc}</div>

      {data?.content.map(({ text, img }, index) => (
        <div key={index} className={styles.content}>
          <div>{text}</div>
          <Image src={img} alt={`post-content-img-${index}`} />
        </div>
      ))}
      <div className={styles.content}>
        <div className={styles.brief}>{data?.brief}</div>
      </div>

      <div className={styles.attention}>
        <p>
          Ми команда AgroFilmProduction <br /> завжди робимо правильні та влучні відоси для <br /> Агробізнесу, відео
          які підвищують ваші продажі.
        </p>
      </div>

      <ul>
        <li>
          Ми проаналізуємо ринок, розберемо по зернах ваших конкурентів та зробимо відос краще ніж у всіх у вашій ніші;
        </li>
        <li>Ми соковито зобразимо ваш бренд, покажемо ваші переваги та унікальність на ринку;</li>
        <li>Після перегляду наших відосів, ваш бренд закарбується в головах потенційних споживачів;</li>
        <li>
          З нами приємно працювати тому, що ми з вами з однієї грядки, добре розуміємо біль та потреби сучасного
          фермерського господарства.
        </li>
      </ul>
      <Link href={'/brief'} target={'_blank'}>
        <Button>Замовити відео</Button>
      </Link>

      <div className={styles.line}></div>

      <h3>Інші статті</h3>

      <div className={styles.posts}>
        {anotherPosts.map(({ title, desc, img, id: postId }) => (
          <PostItem key={postId} title={title} id={postId} description={desc} image={img} />
        ))}
      </div>
    </div>
  );
};
