'use client';

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
import scania from '@/assets/images/partners/scania.webp';
import { PartnerItem } from '@/containers/HomePage/containers/OurPartners/components/PartnerItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useMedia } from '@/hooks/useMedia';
import { useMemo } from 'react';

const partnersList = [
  agroOnline,
  asu,
  bizon,
  droneua,
  inforce,
  lg,
  quantum,
  spectr,
  unifer,
  agroOnline,
  asu,
  bizon,
  droneua,
  inforce,
  lg,
  quantum,
  spectr,
  unifer,
  scania,
];
export const OurPartners = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(max-width: 1023px)');
  const isDesktop = useMedia('(max-width: 1279px)');
  const isLaptop = useMedia('(max-width: 1439px)');

  const slidesPerView = useMemo(() => {
    switch (true) {
      case isMobile:
        return 2;
      case isTablet:
        return 4;
      case isDesktop:
        return 5;
      case isLaptop:
        return 6;
      default:
        return 7;
    }
  }, [isMobile, isTablet, isDesktop, isLaptop]);
  return (
    <section className={styles.container}>
      <div className={styles['top-block']}>
        <div className={styles.title}>
          <h2>НАШІ БУСІНКИ</h2>
        </div>
        <Image src={lina} alt={'lina'} />
      </div>
      <div className={styles.partners}>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={styles.swiper}
        >
          {partnersList.map((el, index) => (
            <SwiperSlide key={index}>
              <PartnerItem img={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
