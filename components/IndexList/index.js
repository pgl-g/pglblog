import React, { memo, useMemo } from 'react';

import { withRouter } from 'next/router';

import { INDEXLIST } from '../../assets/js/contants';
import Style from './index.module.scss';


const IndexList = memo((props) => {

  const router = props.router;



  // 解析数据源
  const dataSource = useMemo(() => {
    return INDEXLIST
  }, [])

  // 跳转详情页
  const handletoDetaile = (id) => {
    router.push(`/indexDetaile/${id}`)
  }

  return (
    <div className={Style.container}>
      {
        dataSource.map(item => (
          <div className={Style.listItem} key={item.id} onClick={() => handletoDetaile(item.id)}>
            <div className={Style.item_title}>
              <div className={`${Style.tit_t} ${Style.border_r}`}>{item.username}</div>
              <div className={`${Style.tit} ${Style.border_r}`}>{item.starTime}</div>
              <div className={`${Style.tit}`}>{item.activeType}</div>
            </div>

            <div className={Style.flex_content}>
              <div className={Style.flex_1}>
                <div className={Style.title}>{item.title}</div>
                <div className={Style.contents}>
                  {item.content}
                </div>
                <div className={Style.show_num}>
                  <i className="iconfont">&#xe73d;</i>
                  {item.show}  
                </div>
              </div>
              <img src={item.logo} alt="" />
            </div>
            <hr />
          </div>
        ))
      }
    </div>
  )
})

export default withRouter(IndexList);
