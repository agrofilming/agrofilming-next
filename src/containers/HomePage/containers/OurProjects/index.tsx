'use client';
import unifer from '@/assets/images/projects/Unifer.webp';
import advertising from '@/assets/images/projects/advertising.webp';
import discovery from '@/assets/images/projects/discovery.webp';
import ovochar from '@/assets/images/projects/ovochar.webp';
import promoDrone from '@/assets/images/projects/PromoDroneUA.webp';
import xagPromo from '@/assets/images/projects/XAGpromo.webp';
import lg from '@/assets/images/projects/LG.webp';
import lgGerb from '@/assets/images/projects/LG_gerb.webp';
import romashka from '@/assets/images/projects/romashka.webp';
import promoAo from '@/assets/images/projects/Promo_ao.webp';
import abc from '@/assets/images/projects/abc.webp';
import afina from '@/assets/images/projects/afina.webp';
import vodafone from '@/assets/images/projects/vodafone.webp';
import pheonix from '@/assets/images/projects/pheonix.webp';
import dyno from '@/assets/images/projects/dyno.webp';
import sherp from '@/assets/images/projects/sherp.webp';
import strauss from '@/assets/images/projects/strauss.webp';
import ecoflow from '@/assets/images/projects/ecoflow.webp';
import autowelt from '@/assets/images/projects/autowelt.webp';
import garmari from '@/assets/images/projects/garmari.webp';
import styles from './index.module.scss';
import { Project } from '@/containers/HomePage/containers/OurProjects/component/Project';
import { ArrowIcon } from '@/assets/icons/arrowIcon';
import cn from 'classnames';
import { useMemo, useState } from 'react';

const projects = [
  {
    img: discovery,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/AgroFilmProduction-DroneUa_XAG_Discovery-.mp4.mp4',
    title: 'Фільм у форматі Discovery',
    description: 'Description',
  },
  {
    img: ovochar,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/Овочар.mp4',
    title: 'Відео для соціальних мереж',
    description: 'Description',
  },
  {
    img: unifer,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/AgroFilmProduction-Unifer-Wuxal.mp4',
    title: 'Відео відгук клієнта',
    description: 'Description',
  },
  {
    img: advertising,
    video:
      'https://www.agrofilming.com/wp-content/uploads/2023/09/AgroFilmProduction-Реклама-сівалки-Massey-Ferguson-для-BIZON-TECH.mp4',
    title: 'Реклама',
    description: 'Description',
  },
  {
    img: promoDrone,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/AgroFilmProduction-Drone-Ua.mp4',
    title: 'Промо відеоролик',
    description: 'Description',
  },
  {
    img: xagPromo,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/AgroFilmProduction-XAG.mp4',
    title: 'Промо відеоролик',
    description: 'Description',
  },
  {
    img: lg,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/ЛГ31388_правки.mp4',
    title: 'Відео огляд гербіцидів',
    description: 'Description',
  },
  {
    img: lgGerb,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/LG-1.mp4',
    title: 'Відео огляд гербіцидів',
    description: 'Description',
  },
  {
    img: romashka,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/AgroFilmProduction-Ромашка.mp4',
    title: 'Анонс YouTube випуску',
    description: 'Description',
  },
  {
    img: promoAo,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/AgroFilmProduction-АО.mp4',
    title: 'Анонс YouTube каналу',
    description: 'Description',
  },
  {
    img: abc,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/AgroFilmProduction-АБЦ-анонс-випуску.mp4',
    title: 'Анонс YouTube випуску',
    description: 'Description',
  },
  {
    img: afina,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/AgroFilmProduction-Afina-Pallada.mp4',
    title: 'Анонс YouTube випуску',
  },
  {
    img: vodafone,
    video: 'https://www.vasko.media/wp-content/uploads/2023/12/Vodafone_business_MASTER_VaskoMH.webm',
    title: 'Анонс YouTube випуску',
  },
  {
    img: pheonix,
    video: 'https://www.vasko.media/wp-content/uploads/2024/03/Scania_Vasko_04.02.24_16_9_En_MASTER_3.webm',
    title: 'Анонс YouTube випуску',
  },
  {
    img: dyno,
    video: 'https://www.vasko.media/wp-content/uploads/2023/12/RWCOM_VaskoMH.webm',
    title: 'Анонс YouTube випуску',
  },
  {
    img: sherp,
    video: 'https://www.vasko.media/wp-content/uploads/2023/12/SHERP_VaskoMH.mp4',
    title: 'Анонс YouTube випуску',
  },
  {
    img: strauss,
    video: 'https://www.vasko.media/wp-content/uploads/2023/12/Strauss_office_with_subtitles_MASTER_VaskoMH.webm4',
    title: 'Анонс YouTube випуску',
  },
  {
    img: ecoflow,
    video: 'https://www.vasko.media/wp-content/uploads/2023/12/EcoFlow_shortMovie_VaskoMH.webm',
    title: 'Анонс YouTube випуску',
  },
  {
    img: autowelt,
    video: 'https://www.vasko.media/wp-content/uploads/2023/12/Promo_awhelp24_Deutschland_MASTER_VaskoMH.webm',
    title: 'Анонс YouTube випуску',
  },
  {
    img: garmari,
    video: 'https://www.vasko.media/wp-content/uploads/2023/12/garmari_MASTER_VaskoMH.webm',
    title: 'Анонс YouTube випуску',
    description: 'Description',
  },
];

const youTubeLinks = [
  'https://www.youtube.com/embed/hKV9qjvudOY?si=1Yq_8xWwVYDiKzJy',
  'https://www.youtube.com/embed/bphxTCFkSUc?si=HSDsAcCTTRIxa_kz',
  'https://www.youtube.com/embed/b5y_ICGFGa0?si=zib82lcqDwYh0fr_',
  'https://www.youtube.com/embed/b5y_ICGFGa0?si=zib82lcqDwYh0fr_',
  'https://www.youtube.com/embed/qtH3nHqMfwE?si=U9ttX2xgciAbYIlg',
];
export const OurProjects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderProjects = useMemo(
    () =>
      projects
        .map((el, index) => <Project key={index} video={el.video} img={el.img} title={el.title} />)
        .splice(0, isOpen ? projects.length : 8),
    [isOpen],
  );

  return (
    <section className={styles.container} id={'portfolio'}>
      <div className={styles.projects}>{renderProjects}</div>
      <div className={cn(styles['more-button'], { [styles.open]: isOpen })} onClick={() => setIsOpen(true)}>
        <ArrowIcon />
        <p>Більше робіт</p>
      </div>
      <div className={cn(styles['video-reviews'], { [styles.open]: isOpen })}>
        <div className={styles['video-list']}>
          <h3>
            <span>СЕРІЯ</span> <br />
            відеооглядів <br /> <span className={styles.small}>сільгосптехніки</span>
          </h3>
          {youTubeLinks.map((el, index) => (
            <iframe
              key={index}
              height="300p"
              src={el}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </section>
  );
};
