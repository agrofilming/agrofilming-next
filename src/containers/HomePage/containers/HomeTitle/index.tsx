'use client';
import styles from './index.module.scss';
import { PlayIcon } from '@/assets/icons/playIcon';
import { useState } from 'react';
import { ModalComponent } from '@/components/Modal';

export const HomeTitle = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className={styles.container}>
      <p>ВІДЕОПРОДАКШН ПОВНОГО ЦИКЛУ. ПРАЦЮЄМО В УКРАЇНІ</p>
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
        src="https://www.agrofilming.com/wp-content/uploads/2024/02/he8uqg.mp4#t=-4"
      />
      <ModalComponent isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <video
          src={'https://www.agrofilming.com/wp-content/uploads/2023/09/SHOWREEL_AgroFilmProduction_v4.mp4'}
          autoPlay={modalOpen}
          controlsList={'nodownload'}
        ></video>
      </ModalComponent>
    </section>
  );
};
