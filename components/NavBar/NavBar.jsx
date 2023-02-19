import React from 'react';
import Link from 'next/link';
import { Nav } from '@/utils/constants';

import styles from '@/styles/components/NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles['nav']}>
      <ul className={styles['nav__list']}>
        {Nav.map(({ id, title }) => {
          return (
            <li key={id} className={styles['nav__item']}>
              <Link href={'#'} className={styles['nav__link']}>
                {title}
              </Link>
            </li>
          );
        })}
        <li className={styles['nav__item']}>
          <button type="button" className={styles['nav__button']}>
            Есть вопрос?
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
