import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/images/footer-logo-leaf.png';
import logoSolo from '@/assets/images/footer-logo-solo.png';

import styles from './index.module.scss';
import { Contacts } from '@/components/Contacts';
import { Button } from '@/components';

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
          </div>
          <div className={styles['main-nav']}>
            <Link href="/#portfolio">Портфоліо</Link>
            <Link href="/#youtube">Відео для YouTube</Link>
          </div>
        </div>
        <div className={styles['nav-bottom-section']}>
          <Contacts />
        </div>
      </div>
      <div className={styles['right-block']}>
        <h3>Завдяки брифу ми швидко підготуємо кошторис.</h3>
        <Button variant={'green'}>
          <Link href="/brief">Заповнити бриф </Link>
        </Button>
        <p>
          Ключові запитання, які допоможуть при розрахунку вартості відео. <br />
          Заповнення займе близько 2 хвилин.
        </p>
      </div>
    </footer>
  );
};
