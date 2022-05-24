import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';
import Header from '../components/Header';
import IndexList from '../components/IndexList';
import AvatarInfo from '../components/AvatarInfo';

import { getUserInfo } from '../service/http';

export default function Home() {

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserInfo();
      if (res.code === '200') {
        setUserInfo(res.data);
      }
    }
    fetchData();  
  }, [])

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
            <AvatarInfo userInfo={userInfo} />
          </Col>
          <Col className="content-right" xs={24} sm={24} md={12} lg={12} xl={12}>
            <IndexList />
          </Col>
        </Row>
      </div>
    </div>
  )
}
