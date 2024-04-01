'use client';
import { Rubik_Microbe } from 'next/font/google';

import testImg from '@/assets/images/projects/Unifer.webp';
import styles from './index.module.scss';
import { Project } from '@/containers/HomePage/containers/OurProjects/component/Project';
import { ArrowIcon } from '@/assets/icons/arrowIcon';
import cn from 'classnames';
import { useState } from 'react';

const rubik = Rubik_Microbe({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const testArray = [
  {
    img: testImg,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/Овочар.mp4',
    title: 'Test',
    description: 'Description',
  },
  {
    img: testImg,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/Овочар.mp4',
    title: 'Test',
    description: 'Description',
  },
  {
    img: testImg,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/Овочар.mp4',
    title: 'Test',
    description: 'Description',
  },
  {
    img: testImg,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/Овочар.mp4',
    title: 'Test',
    description: 'Description',
  },
  {
    img: testImg,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/Овочар.mp4',
    title: 'Test',
    description: 'Description',
  },
  {
    img: testImg,
    video: 'https://www.agrofilming.com/wp-content/uploads/2023/09/Овочар.mp4',
    title: 'Test',
    description: 'Description',
  },
];

const youTubeLinks = [
  'https://www.youtube.com/embed/hKV9qjvudOY?si=NzXOHLMynX8KjBtj',
  'https://www.youtube.com/embed/hKV9qjvudOY?si=NzXOHLMynX8KjBtj',
  'https://www.youtube.com/embed/hKV9qjvudOY?si=NzXOHLMynX8KjBtj',
  'https://www.youtube.com/embed/hKV9qjvudOY?si=NzXOHLMynX8KjBtj',
  'https://www.youtube.com/embed/hKV9qjvudOY?si=NzXOHLMynX8KjBtj',
  'https://www.youtube.com/embed/hKV9qjvudOY?si=NzXOHLMynX8KjBtj',
];
export const OurProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={styles.container}>
      <h2 className={rubik.className}>НАШІ РОБОТИ</h2>
      <div className={styles.projects}>
        {testArray.map((el, index) => (
          <Project key={index} video={el.video} img={el.img} title={el.title} description={el.description} />
        ))}
      </div>
      <div className={cn(styles['more-button'], { [styles.open]: isOpen })} onClick={() => setIsOpen(true)}>
        <ArrowIcon />
        <p>Більше робіт</p>
      </div>
      <div className={cn(styles['video-reviews'], { [styles.open]: isOpen })}>
        <h3 className={rubik.className}>
          <span>СЕРІЯ</span> <br />
          відео оглядів <br /> <span className={styles.small}>сільгосптехніки</span>
        </h3>
        <div className={styles['video-list']}>
          {youTubeLinks.map((el, index) => (
            <iframe
              key={index}
              width="350"
              height="200"
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
