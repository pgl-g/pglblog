import React from 'react';
import { Row, Col } from 'antd';
import Head from 'next/head';
import Header from '../../components/Header';
import ResumeList from '../../components/resume';
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
          <Col className={ResumeStyle.resume_content} xs={24} sm={24} md={24} lg={12} xl={12}>
            <ResumeList />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Resume;
