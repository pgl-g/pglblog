
import React from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';
import Header from '../../components/Header';
import AvatarInfo from '../../components/AvatarInfo';
import AboutMyself from '../../components/aboutmyself';

import AboutStyle from '../../assets/css/pages/about.module.css';

function About() {

  return (
    <div className={AboutStyle.about_container}>
      <Head>
        <title>编程shy-关于我</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Row justify="center" className="content">
          <Col xs={0} sm={0} md={8} lg={6} xl={4}>
            <AvatarInfo />
          </Col>
          <Col className={AboutStyle.about_content_right} xs={24} sm={24} md={12} lg={12} xl={12}>
            <AboutMyself />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default About;
