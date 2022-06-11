import React, { memo } from 'react';

import Style from './index.module.scss';

const AboutMyself = memo(() => {
  return (
    <div className={Style.aboutme_container}>
      <h2>大家好！我是爱编程的shy</h2>
      <p className={Style.aboutcontent}>
        作为一名技术工作者，我有一年的前后端开发经验，三年纯前端开发经验。我在工作中使用过包括Javascript、php、Java在内的编程语言，擅长的前端技术栈主要包括：Vue3、Vue、React、Typescript、Tailwind CSS 等。我目前有兴趣并准备纳入个人前端武器库的技术有：nuxt3(即将发布)、quasar、alpine.js等。
      </p>
    </div>
  )

});


export default AboutMyself;
