import styles from './index.module.scss';
import Image from 'next/image';
import lina from '@/assets/images/lina.webp';

import agroOnline from '@/assets/images/partners/agro-online.webp';
import asu from '@/assets/images/partners/asu.webp';
import bizon from '@/assets/images/partners/bizon.webp';
import droneua from '@/assets/images/partners/droneua.webp';
import inforce from '@/assets/images/partners/inforce.webp';
import lg from '@/assets/images/partners/lg.webp';
import quantum from '@/assets/images/partners/quantum.webp';
import spectr from '@/assets/images/partners/spectr-agro.webp';
import unifer from '@/assets/images/partners/unifer.webp';
import { PartnerItem } from '@/containers/HomePage/containers/OurPartners/components/PartnerItem';

const partnersList = [agroOnline, asu, bizon, droneua, inforce, lg, quantum, spectr, unifer];
export const OurPartners = () => (
  <section className={styles.container}>
    <div className={styles['top-block']}>
      <div className={styles.title}>
        <h2>НАШИ КЛІЄНТИ</h2>
      </div>
      <Image src={lina} alt={'lina'} />
    </div>
    <div className={styles.partners}>
      {partnersList.map((el, index) => (
        <PartnerItem key={index} img={el} />
      ))}
    </div>
  </section>
);
