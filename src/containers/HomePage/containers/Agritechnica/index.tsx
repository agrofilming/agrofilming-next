'use client';

import styles from './index.module.scss';
import Image from 'next/image';
import blueBanner from '@/assets/images/banner_agritechnica_2019.webp';
import yellowBanner from '@/assets/images/agritechnica-yellow.webp';
import { PlayIcon } from '@/assets/icons/playIcon';
import { useState } from 'react';
import { Modal } from '@/components/ModalNew';

export const Agritechnica = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.banners}>
        <Image src={blueBanner} alt={'blue-banner'} className={styles['blue-banner']} />
        <Image src={yellowBanner} alt={'yellow-banner'} className={styles['yellow-banner']} />
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
      <Modal open={modalOpen} onCancel={() => setModalOpen(false)}>
        <video
          src={'https://www.agrofilming.com/wp-content/uploads/2023/10/AGRI-TECHNICA.mp4'}
          autoPlay={modalOpen}
          controlsList={'nodownload'}
        ></video>
      </Modal>
    </section>
  );
};
