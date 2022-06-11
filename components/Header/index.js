import React, { memo } from 'react';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import Menu from '../Menus';
import { NAVS } from '@/assets/js/contants';
import Styles from './index.module.scss';


const Header = memo(() => {
  const router = useRouter();
  const handleToHome = () => {
    router.replace('/')
  }

  return (
    <div className={Styles.header}>
      <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={8} lg={6} xl={4}>
            <div className={Styles.header_left} onClick={handleToHome}>
              <div>
                <span className={Styles.header_logo}>彭格列</span>
                <span className={Styles.header_text}>编程shy</span>
              </div>
            </div>
          </Col>

          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <div className={Styles.header_right}>
              <Menu navs={NAVS} />
            </div>
          </Col>
      </Row>
    </div>
  )
})

export default Header;
