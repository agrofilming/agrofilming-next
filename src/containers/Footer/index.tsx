import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/images/footer-logo-leaf.png';
import logoSolo from '@/assets/images/footer-logo-solo.png';
import vasko from '@/assets/images/vasko.png';

import styles from './index.module.scss';
import { Contacts } from '@/components/Contacts';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.container} id={'contacts'}>
      <div className={styles.copyright}>
        <Image src={logo} alt="footer-logo" className={styles.logo} />
        <Image src={logoSolo} alt="footer-logo" className={styles.logoSolo} />
        <span>Copyright © {year} AgroFilmProduction</span>
      </div>
      <div className={styles.nav}>
        <div className={styles['nav-top-section']}>
          <div className={styles['main-nav']}>
            <Link href="/#about-us">Про нас</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/#portfolio">Портфоліо</Link>
            <Link href="/">Відео для Ютуб</Link>
          </div>
        </div>
        <div className={styles['nav-bottom-section']}>
          <Contacts />
        </div>
      </div>
      <div className={styles['right-block']}>
        <div className={styles.posts}>
          <Link href="/blog/post/1">ЩО ТАКЕ ВІДЕО ПРОДАКШН</Link>
          <Link href="/blog/post/2">НАВІЩО ПОТРІБЕН ВІДЕОМАРКЕТИНГ</Link>
        </div>
        <div className={styles.partners}>
          <p>Генеральний партнер:</p>
          <div className={styles['partners-items']}>
            <div className={styles.vasko}>
              <Link href="https://www.vasko.media/" target="_blank">
                <Image src={vasko} alt="garmari" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
