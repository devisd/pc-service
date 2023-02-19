import React from 'react';
import Image from 'next/image';

import styles from '@/styles/components/Hero.module.scss';

const Hero = () => {
  return (
    <>
      <Image
        src={'/assets/hero.png'}
        width={1240}
        height={668}
        alt="hero background"
        priority
        className={styles['hero__image']}
      />
      <h1 className={styles['hero__title']}>
        Добро пожаловать в &laquo;Супер Cервис&raquo;!
      </h1>
    </>
  );
};

export default Hero;
