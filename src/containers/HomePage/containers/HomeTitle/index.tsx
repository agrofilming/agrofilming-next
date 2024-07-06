'use client';
import styles from './index.module.scss';
import { PlayIcon } from '@/assets/icons/playIcon';
import { useState } from 'react';
import { Modal } from '@/components/ModalNew';

export const HomeTitle = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.container}>
      <p>ВІДЕОПРОДАКШН ПОВНОГО ЦИКЛУ. ПРАЦЮЄМО В УКРАЇНІ ТА ЗА ЇЇ МЕЖАМИ</p>
      <h1>
        СТВОРЮЄМО <br /> ВІДЕО <br /> <span>ДЛЯ АГРОБІЗНЕСУ</span>
      </h1>
      <div className={styles['video-button']} onClick={() => setModalOpen(true)}>
        <PlayIcon />
      </div>
      <video
        className={styles['video-bg']}
        autoPlay
        muted
        playsInline
        loop
        src={`https://agrofilm.s3.eu-north-1.amazonaws.com/main/SHOWREEL_for_site_17sec.webm`}
      />
      <Modal open={modalOpen} onCancel={() => setModalOpen(false)}>
        <video
          src={'https://agrofilm.s3.eu-north-1.amazonaws.com/main/SHOWREEL_AgroFilmProduction_v4.webm'}
          autoPlay={modalOpen}
          controlsList={'nodownload'}
        ></video>
      </Modal>
    </section>
  );
};
