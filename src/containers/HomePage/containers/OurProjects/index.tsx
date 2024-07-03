'use client';
import styles from './index.module.scss';
import { Project } from '@/containers/HomePage/containers/OurProjects/component/Project';
import { ArrowIcon } from '@/assets/icons/arrowIcon';
import cn from 'classnames';
import { useMemo, useState } from 'react';
import { projects, vaskoProjects, youTubeLinks } from '@/containers/HomePage/containers/OurProjects/const';
import Image from 'next/image';

import vasko from '@/assets/images/vasko.png';

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
        <div className={styles.projects}>
          <div className={styles.vasko}>
            <Image src={vasko} alt={'vasko'} />
          </div>

          {vaskoProjects.map((el, index) => (
            <Project key={index} video={el.video} img={el.img} title={el.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
