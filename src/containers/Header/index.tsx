import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/images/logo.png';

import styles from './index.module.scss';

export const Header = () => (
  <header className={styles.container}>
    <Link href="/brief">Заповнити бриф </Link>
    <Link href="/">
      <Image src={logo} alt="logo" />
    </Link>
    <div className={styles.nav}>
      <Link href="/#portfolio">Портфоліо</Link>
      <Link href="/blog">Блог</Link>
      <Link href="/#contacts">Контакти</Link>
    </div>
  </header>
);
