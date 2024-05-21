import styles from './index.module.scss';
import Image from 'next/image';
import dwwr from '@/assets/images/dont-work-with.webp';
import creativeTeam from '@/assets/images/creative-team.webp';
import Link from 'next/link';

export const CreativeTeamBlock = () => (
  <section className={styles.container} id={'about-us'}>
    <div className={styles['top-block']}>
      <Image src={dwwr} alt={'not-work-with-ru'} />
      <Link href={'/brief'}>
        ХОЧУ <br /> ВІДЕО
      </Link>
      <h2>
        *З НАМИ ЗАВЖДИ <br />
        КАЙФОВО ПРАЦЮВАТИ
      </h2>
    </div>
    <div className={styles['bottom-block']}>
      <Image src={creativeTeam} alt={'creative-team'} />
      <video autoPlay src={'https://www.agrofilming.com/wp-content/uploads/2023/06/why-us-NEW-2.mp4'} />
    </div>
  </section>
);
