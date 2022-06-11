import React, { useRef } from 'react';
import { Row, Col, Button } from 'antd';
import Head from 'next/head';
import Header from '@/components/Header';
import ResumeList from '@/components/resume';

import { exportPDF } from '@/assets/js/until';

import Style from './index.module.scss';

const Resume = () => {


  const resumeRef = useRef(null);

  const handleDownLoad = () => {
    exportPDF('个人简历-顾孝标', resumeRef.current.id)
  }

  return (
    <div  className={Style.resumeContainer}>
      <Head>
        <title>编程shy-个人简历</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Row justify="center" className={Style.resume_wrap}>
          <Col className={Style.resume_content} xs={24} sm={24} md={12} lg={12} xl={12}>
            <ResumeList ref={resumeRef} />
          </Col>

          <Col className={Style.resume_right} xs={0} sm={0} md={8} lg={6} xl={4}>
            <Button onClick={handleDownLoad} type="primary" className={Style.resume_download_pdf}>导出PDF</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Resume;
