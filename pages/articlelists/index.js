
import React from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';
import Header from '@/components/Header';
import Collection from '@/components/Collection';
import AvatarInfo from '@/components/AvatarInfo';

import { USERINFO } from '@/assets/js/contants';

// import { getUserInfo } from '../../service/http';
import ArticleListsStyle from '@/assets/css/pages/articlelists.module.css';

const ArticleLists = (props) => {

  return (
    <div className={ArticleListsStyle.articlelists_container}>
      <Head>
        <title>编程shy-作品集</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Row justify="center" className="content">
          <Col xs={0} sm={0} md={8} lg={6} xl={4}>
            <AvatarInfo userInfo={props?.userInfo} />
          </Col>
          <Col className={ArticleListsStyle.content_right} xs={24} sm={24} md={12} lg={12} xl={12}>
            <Collection />
          </Col>
        </Row>
      </div>
    </div>
  )
}

ArticleLists.getInitialProps = async () => {
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

export default ArticleLists;
