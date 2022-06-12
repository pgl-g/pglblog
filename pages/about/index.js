
import React from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';
import Header from '@/components/Header';
import AvatarInfo from '@/components/AvatarInfo';
import AboutMyself from '@/components/aboutmyself';

// import { getUserInfo } from '../../service/http';

import { USERINFO } from '@/assets/js/contants';


import Style from './index.module.scss';

const About = (props) => {

  return (
    <div className={Style.about_container}>
      <Head>
        <title>编程shy-关于我</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Row justify="center" className="content">
          <Col className={Style.about_content_right} xs={24} sm={24} md={12} lg={12} xl={12}>
            <AboutMyself />
          </Col>
          <Col xs={0} sm={0} md={8} lg={6} xl={4}>
            <AvatarInfo userInfo={props?.userInfo} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

About.getInitialProps = async () => {

  // 请求用户信息
  // const promiseUserInfo = new Promise(async (resovel) => {
  //   const res = await getUserInfo();
  //   if (res.code === '200') {
  //     resovel(res.data);
  //   }
  // })


  const data = {
    userInfo: USERINFO
  }

  return data;

}

export default About;
