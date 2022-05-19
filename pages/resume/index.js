import React from 'react';
import { Row, Col, Button, Message } from 'antd';
import Head from 'next/head';
import Header from '../../components/Header';
import ResumeList from '../../components/resume';
import ResumeStyle from '../../assets/css/pages/resume.module.css';

function Resume() {

  const handleDownLoad = () => {
    Message.success('下载成功');
  }

  return (
    <div className={ResumeStyle.resumeContainer}>
      <Head>
        <title>编程shy-个人简历</title>
      </Head>
      <div>
        <Header />
        <Row justify="center" className={ResumeStyle.resume_wrap}>
          <Col className={ResumeStyle.resume_content} xs={24} sm={24} md={12} lg={12} xl={12}>
            <ResumeList />
          </Col>

          <Col className={ResumeStyle.resume_right} xs={0} sm={0} md={8} lg={6} xl={4}>
            <Button onClick={handleDownLoad} type="primary" className={ResumeStyle.resume_download_pdf}>下载PDF</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Resume;
