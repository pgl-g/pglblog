import React from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';

import Header from '@/components/Header';
import DetaileList from '@/components/detaileList';
import AvatarInfo from '@/components/AvatarInfo';
import { USERINFO } from '@/assets/js/contants';
import Style from './index.module.scss';

function IndexDetaile(props) {
  return (
    <div className={Style.detaile_container}>
      <Head>
        <title>编程shy-个人博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Row justify="center">
          <Col className={Style.detaile_warpper} xs={24} sm={24} md={12} lg={12} xl={12}>
            <DetaileList />
          </Col>

          <Col xs={0} sm={0} md={8} lg={6} xl={4}>
            <AvatarInfo userInfo={props?.userInfo} />
          </Col>
        </Row>
      </div>
    </div>
  )
}



IndexDetaile.getInitialProps = async () => {
  // 请求用户信息
  // const promiseUserInfo = new Promise(async (resovel) => {
  //   const res = await getUserInfo();
  //   if (res.code === '200') {
  //     resovel(res.data);
  //   }
  // })

  const data = {
    userInfo: USERINFO || {}
  }

  return data;
}


export default IndexDetaile;

