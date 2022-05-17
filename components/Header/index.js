import React, { memo } from 'react';
import { Row, Col } from 'antd';

import Menu from '../Menus';

import { NAVS } from '../../assets/js/contants';

import styles from '../../assets/css/components/header.module.css';

const Header = memo(() => {
  return (
    <div className={styles.header}>
      <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={8} lg={6} xl={4}>
            <div className={styles.header_left}>
              <div>
                <span className={styles.header_logo}>彭格列</span>
                <span className={styles.header_text}>编程shy</span>
              </div>
            </div>
          </Col>

          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <div className={styles.header_right}>
              <Menu navs={NAVS} />
            </div>
          </Col>
      </Row>
    </div>
  )
})

export default Header;
