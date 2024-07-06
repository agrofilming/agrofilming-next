'use client';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/images/logo.png';

import styles from './index.module.scss';
import { Button } from '@/components';
import { BurgerIcon } from '@/assets/icons';
import { useState } from 'react';
import { Modal } from '@/components/ModalNew';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (isOpen: boolean) => () => setOpen(isOpen);

  return (
    <header className={styles.container}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>

      <div className={styles.nav}>
        <Link href="/#portfolio">Портфоліо</Link>
        <Link href="/#contacts">Контакти</Link>
        <Link href="/brief">
          <Button variant={'green'}>ХОЧУ ВІДЕО</Button>
        </Link>
      </div>
      {!open && <BurgerIcon className={styles['mob-icon']} onClick={handleOpen(true)} />}
      <Modal open={open} onCancel={handleOpen(false)} width={'100vh'} padding={'0'} showClose>
        <div className={styles['nav-mobile']}>
          <Link href="/blog" onClick={handleOpen(false)}>
            Блог
          </Link>
          <Link href="/#portfolio" onClick={handleOpen(false)}>
            Портфоліо
          </Link>
          <Link href="/#contacts" onClick={handleOpen(false)}>
            Контакти
          </Link>
          <Link href={'https://www.youtube.com/@user-lg7jl4je3e/videos'} target={'_blank'} onClick={handleOpen(false)}>
            YouTube канал
          </Link>
          <Button variant={'green'} onClick={handleOpen(false)}>
            <Link href="/brief">Заповнити бриф </Link>
          </Button>
        </div>
      </Modal>
    </header>
  );
};
