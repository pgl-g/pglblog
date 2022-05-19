import React from 'react';
import { Row, Col } from 'antd';
import Head from 'next/head';
import Header from '../../components/Header';
import AvatarInfo from '../../components/AvatarInfo';

import ResumeStyle from '../../assets/css/pages/resume.module.css';

function Resume() {
  return (
    <div className={ResumeStyle.resumeContainer}>
      <Head>
        <title>编程shy-个人简历</title>
      </Head>
      <div>
        <Header />
        <Row justify="center" className="content">
          <Col xs={0} sm={0} md={8} lg={6} xl={4}>
            <AvatarInfo />
          </Col>
          <Col className={ResumeStyle.resume_content} xs={24} sm={24} md={12} lg={12} xl={12}>
            简历模版
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Resume;
