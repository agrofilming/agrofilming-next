import styles from './index.module.scss';
import Link from 'next/link';

import desktop from '@/assets/images/desktop-youtube.webp';
import Image from 'next/image';

export const YouTubeBlock = () => (
  <section className={styles.container}>
    <h2>
      Працювали над усіма випусками YouTube каналу <br />
      <span>&quot;Агробізнес Без Цензури&quot;</span>
    </h2>
    <Link href={'https://www.youtube.com/@user-lg7jl4je3e/videos'} target={'_blank'}>
      <button>Перейти на канал</button>
    </Link>
    <Image src={desktop} alt={'desktop'} />
  </section>
);
