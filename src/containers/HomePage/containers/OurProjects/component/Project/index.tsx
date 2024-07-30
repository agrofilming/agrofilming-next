import styles from './index.module.scss';
import { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Modal } from '@/components/ModalNew';
import { useMedia } from '@/hooks/useMedia';

interface IProject {
  video: string;
  img: StaticImageData;
  title: string;
}

export const Project: FC<IProject> = ({ video, img, title }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <div className={styles.container} onClick={() => setModalOpen(true)}>
      <Image src={img} alt={'image'} loading={'lazy'} />

      <div className={styles.hover}>
        <h4>{title}</h4>
      </div>

      <Modal open={modalOpen} onCancel={() => setModalOpen(false)} showClose={!isMobile}>
        <video
          src={video}
          autoPlay={modalOpen}
          controlsList={'nodownload'}
          preload={'none'}
          controls={true}
          playsInline
        ></video>
      </Modal>
    </div>
  );
};
