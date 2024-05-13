'use client';

import styles from './index.module.scss';
import Image from 'next/image';
import blueBanner from '@/assets/images/banner_agritechnica_2019.webp';
import yellowBanner from '@/assets/images/agritechnica-yellow.webp';
import { PlayIcon } from '@/assets/icons/playIcon';
import { ModalComponent } from '@/components/Modal';
import { useState } from 'react';

export const Agritechnica = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.banners}>
        <Image src={blueBanner} alt={'blue-banner'} />
        <Image src={yellowBanner} alt={'yellow-banner'} />
      </div>
      <div className={styles['video-button']} onClick={() => setModalOpen(true)}>
        <PlayIcon />
        <p>
          Тицьни на мене тут <br /> маленький відосік
        </p>
      </div>
      <div className={styles['video-bg']}>
        <video
          autoPlay
          muted
          playsInline
          loop
          src="https://www.agrofilming.com/wp-content/uploads/2024/02/AgriTechnika_BG-1.webm"
        />
      </div>
      <ModalComponent isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <video
          src={'https://www.agrofilming.com/wp-content/uploads/2023/10/AGRI-TECHNICA.mp4'}
          autoPlay={modalOpen}
          controlsList={'nodownload'}
        ></video>
      </ModalComponent>
    </section>
  );
};
