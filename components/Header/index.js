import React, { memo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Menu from '../Menus';
import { NAVS } from '@/assets/js/contants';
import logoPng from '@/assets/img/logo.png';
import Styles from './index.module.scss';


const Header = memo(() => {
  const router = useRouter();
  const handleToHome = () => {
    router.replace('/')
  }

  return (
    <div className={Styles.header}>
      <header className={Styles.header_container}>
          <div className={Styles.header_left}>
            <Image
              className={Styles.header_logo}
              src={logoPng}
              alt="pgl"
              width={60}
              onClick={handleToHome}
              height={40}
            />

            <Menu navs={NAVS} />
          </div>
      </header>
    </div>
  )
})

export default Header;
