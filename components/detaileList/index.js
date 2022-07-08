import React from 'react';
import Image from 'next/image';
import detailPng from '@/assets/img/detail_1.png';
import Style from './index.module.scss';

const DetaileList = () => {

  return (

    <div className={Style.container}>
      <div className={Style.container_wrapper}>
        <div className={Style.wrapper_mainHead}>
          <div className={Style.mainHead_title}>编程shy</div>
          <div className={Style.mainHead_time}>2022年7月8日</div>
          <Image 
            className={Style.mainHead_logo}
            src={detailPng}
            alt="pgl"
          />
        </div>

        <div className={Style.wrapper_mainSection}>
          <div className={Style.mainSection_title}>手写面试题五：闭包和词法环境</div>
        </div>
      </div>
    </div>
  )
}


export default DetaileList;
