import React from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';

import Header from '@/components/Header';
import DetaileList from '@/components/detaileList';

import IndexDetaileStyle from '@/assets/css/pages/indexDetaile.module.css';

function IndexDetaile() {
  return (
    <div className={IndexDetaileStyle.detaile_container}>
      <Head>
        <title>编程shy-个人博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Row justify="center" className={IndexDetaileStyle.detaile_warpper}>
          <Col className="warpper_right" xs={24} sm={24} md={14} lg={14} xl={14}>
            <DetaileList />
          </Col>
        </Row>
      </div>
    </div>
  )
}


export default IndexDetaile;

