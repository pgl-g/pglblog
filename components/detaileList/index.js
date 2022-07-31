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


        <div className={Style.w_a_c}>
          <p>
            手写面试题系列是我为了准备当下和以后的面试而编写的文章系列，当然对于前端小伙伴也有帮助。我建议读完之后，自己动手敲代码或者手写一遍才能更好地掌握。
          </p>
          <p>
            相信很多从事前端工作一两年的读者，或多或少都了解或者听说过原型和原型链。作者我在大学期间没有专门学过JavaScript，是从jquery开始写的前端代码，所以在很长一段时间内对于JavaScript的很多概念并不了解，其中就包括原型和原型链。我对于原型与原型链的理解也不是一蹴而就的，经过反复地学习和码代码验证才算是弄懂了它们。
          </p>
          <p>
            在介绍原型和原型链的概念之前，我首先要告诉读者原型和原型链是用来做什么的。理解了JavaScript的原型和原型链，就能很好地理解JavaScript中的面向对象和继承的概念。所以，学会了原型和原型链，就学会了JavaScript的面向对象和继承。
          </p>

          <h4>一、什么是原型？</h4>
          <p>
            在介绍原型和原型链的概念之前，我首先要告诉读者原型和原型链是用来做什么的。理解了JavaScript的原型和原型链，就能很好地理解JavaScript中的面向对象和继承的概念。所以，学会了原型和原型链，就学会了JavaScript的面向对象和继承。
          </p>
          <p>
            在介绍原型和原型链的概念之前，我首先要告诉读者原型和原型链是用来做什么的。理解了JavaScript的原型和原型链，就能很好地理解JavaScript中的面向对象和继承的概念。所以，学会了原型和原型链，就学会了JavaScript的面向对象和继承。
          </p>
          <p>
            在介绍原型和原型链的概念之前，我首先要告诉读者原型和原型链是用来做什么的。理解了JavaScript的原型和原型链，就能很好地理解JavaScript中的面向对象和继承的概念。所以，学会了原型和原型链，就学会了JavaScript的面向对象和继承。
          </p>
          <p>
            在介绍原型和原型链的概念之前，我首先要告诉读者原型和原型链是用来做什么的。理解了JavaScript的原型和原型链，就能很好地理解JavaScript中的面向对象和继承的概念。所以，学会了原型和原型链，就学会了JavaScript的面向对象和继承。
          </p>
          
        </div>
      </div>
    </div>
  )
}


export default DetaileList;
