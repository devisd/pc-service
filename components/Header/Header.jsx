import Link from 'next/link';
import NavBar from '../NavBar';
import Image from 'next/image';

import styles from '@/styles/components/Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles['header']}>
        <Link href={'/'}>
          <Image src="../assets/logo.svg" width={40} height={40} alt="logo" />
        </Link>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
