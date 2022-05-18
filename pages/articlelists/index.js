
import React from 'react';
import { Col, Row } from 'antd';
import Head from 'next/head';
import Header from '../../components/Header';
import Collection from '../../components/Collection';
import AvatarInfo from '../../components/AvatarInfo';

import ArticleListsStyle from '../../assets/css/pages/articlelists.module.css';

function ArticleLists() {

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
            <AvatarInfo />
          </Col>
          <Col className={ArticleListsStyle.content_right} xs={24} sm={24} md={12} lg={12} xl={12}>
            <Collection />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ArticleLists;
