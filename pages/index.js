import React from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';
import Header from '@/components/Header';
import IndexList from '@/components/IndexList';
import AvatarInfo from '@/components/AvatarInfo';

import { USERINFO } from '@/assets/js/contants';
// import { getUserInfo } from '../service/http';

const Home = (props) => {

  return (
    <div className='container'>
      <Head>
        <title>编程shy-个人博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Row justify="center" className="content">
          <Col className="content-left" xs={0} sm={0} md={8} lg={6} xl={4}>
            <AvatarInfo userInfo={props?.userInfo} />
          </Col>
          <Col className="content-right" xs={24} sm={24} md={12} lg={12} xl={12}>
            <IndexList />
          </Col>
        </Row>
      </div>
    </div>
  )
}


// 通过预渲染获取数据
Home.getInitialProps = async () => {

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


export default Home;