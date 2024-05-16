import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/images/logo.png';

import styles from './index.module.scss';
import { Button } from '@/components';

export const Header = () => (
  <header className={styles.container}>
    <Link href="/">
      <Image src={logo} alt="logo" />
    </Link>

    <div className={styles.nav}>
      <Link href="/#portfolio">Портфоліо</Link>
      <Link href="/#contacts">Контакти</Link>
      <Button variant={'green'}>
        <Link href="/brief">Заповнити бриф </Link>
      </Button>
    </div>
  </header>
);
