import React, { memo } from 'react';
import { Button } from 'antd';
import CollectionStyle from '../../assets/css/components/collection.module.css';


const Collection = memo(() => {
  return (
    <div className={CollectionStyle.collection_warpper}>
      <div className={CollectionStyle.collection_item}>
        <div className={CollectionStyle.collection_right}>
          <a href="#" className={CollectionStyle.collection_right_title}>
            仿网易云音乐播放器
          </a>
          <a href="#" className={CollectionStyle.collection_right_content}>
            基于Vue3、Typescript和vite开发的仿网易云音乐客户端web版本。UI参照了网易云音乐mac客户端，后端接口由开源项目提供，高度还原了网易云音乐。项目仍在持续维护中...
          </a>
          <div className={CollectionStyle.collection_projectStatus}>
            <span>项目状态：</span>
            <span className={CollectionStyle.collection_type}>开源项目</span>
          </div>

          <div className={CollectionStyle.collection_btn_box}>
            <Button type="primary" className={CollectionStyle.collection_btn1}>在线预览</Button>
            <Button type="default" className={CollectionStyle.collection_btn2}>GETHUB</Button>
          </div>

          <div className={CollectionStyle.collection_text}>
            项目前端通过netlify自动部署，国内访问相对慢.
          </div>
        </div>

        <div className={CollectionStyle.collection_left}>
          <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbebaabf8c90438f9656cd7bbd5633b0~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?" alt="" />
        </div>
      </div>

      <div className={CollectionStyle.collection_item}>
        <div className={CollectionStyle.collection_right}>
          <a href="#" className={CollectionStyle.collection_right_title}>
            仿网易云音乐播放器
          </a>
          <a href="#" className={CollectionStyle.collection_right_content}>
            基于Vue3、Typescript和vite开发的仿网易云音乐客户端web版本。UI参照了网易云音乐mac客户端，后端接口由开源项目提供，高度还原了网易云音乐。项目仍在持续维护中...
          </a>
          <div className={CollectionStyle.collection_projectStatus}>
            <span>项目状态：</span>
            <span className={CollectionStyle.collection_type}>开源项目</span>
          </div>

          <div className={CollectionStyle.collection_btn_box}>
            <Button type="primary" className={CollectionStyle.collection_btn1}>在线预览</Button>
            <Button type="default" className={CollectionStyle.collection_btn2}>GETHUB</Button>
          </div>

          <div className={CollectionStyle.collection_text}>
            项目前端通过netlify自动部署，国内访问相对慢.
          </div>
        </div>

        <div className={CollectionStyle.collection_left}>
          <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbebaabf8c90438f9656cd7bbd5633b0~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?" alt="" />
        </div>
      </div>

      <div className={CollectionStyle.collection_item}>
        <div className={CollectionStyle.collection_right}>
          <a href="#" className={CollectionStyle.collection_right_title}>
            仿网易云音乐播放器
          </a>
          <a href="#" className={CollectionStyle.collection_right_content}>
            基于Vue3、Typescript和vite开发的仿网易云音乐客户端web版本。UI参照了网易云音乐mac客户端，后端接口由开源项目提供，高度还原了网易云音乐。项目仍在持续维护中...
          </a>
          <div className={CollectionStyle.collection_projectStatus}>
            <span>项目状态：</span>
            <span className={CollectionStyle.collection_type}>开源项目</span>
          </div>

          <div className={CollectionStyle.collection_btn_box}>
            <Button type="primary" className={CollectionStyle.collection_btn1}>在线预览</Button>
            <Button type="default" className={CollectionStyle.collection_btn2}>GETHUB</Button>
          </div>

          <div className={CollectionStyle.collection_text}>
            项目前端通过netlify自动部署，国内访问相对慢.
          </div>
        </div>

        <div className={CollectionStyle.collection_left}>
          <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbebaabf8c90438f9656cd7bbd5633b0~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?" alt="" />
        </div>
      </div>
    </div>
  )
}) 

export default Collection;
