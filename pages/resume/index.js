import React, { useRef } from 'react';
import { Row, Col, Button } from 'antd';
import Head from 'next/head';
import Header from '../../components/Header';
import ResumeList from '../../components/resume';
import ResumeStyle from '../../assets/css/pages/resume.module.css';

import { exportPDF } from '../../assets/js/until';

const Resume = () => {


  const resumeRef = useRef(null);

  const handleDownLoad = () => {
    exportPDF('个人简历-顾孝标', resumeRef.current.id)
  }

  return (
    <div  className={ResumeStyle.resumeContainer}>
      <Head>
        <title>编程shy-个人简历</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Row justify="center" className={ResumeStyle.resume_wrap}>
          <Col className={ResumeStyle.resume_content} xs={24} sm={24} md={12} lg={12} xl={12}>
            <ResumeList ref={resumeRef} />
          </Col>

          <Col className={ResumeStyle.resume_right} xs={0} sm={0} md={8} lg={6} xl={4}>
            <Button onClick={handleDownLoad} type="primary" className={ResumeStyle.resume_download_pdf}>导出PDF</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Resume;
