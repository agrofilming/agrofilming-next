import styles from './index.module.scss';
import Image from 'next/image';
import dwwr from '@/assets/images/dont-work-with.webp';
import creativeTeam from '@/assets/images/creative-team.webp';

export const CreativeTeamBlock = () => (
  <section className={styles.container}>
    <div className={styles['top-block']}>
      <Image src={dwwr} alt={'not-work-with-ru'} />
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