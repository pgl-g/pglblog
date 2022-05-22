import React, { memo, useMemo } from 'react';
import { INDEXLIST } from '../../assets/js/contants';
import IndexListStyle from '../../assets/css/components/indexList.module.css';


const IndexList = memo(() => {
  
  const dataSource = useMemo(() => {
    return INDEXLIST
  }, [])

  return (
    <div className={IndexListStyle.container}>
      {
        dataSource.map(item => (
          <div className={IndexListStyle.listItem} key={item.id}>
            <div className={IndexListStyle.item_title}>
              <div className={`${IndexListStyle.tit_t} ${IndexListStyle.border_r}`}>{item.username}</div>
              <div className={`${IndexListStyle.tit} ${IndexListStyle.border_r}`}>{item.starTime}</div>
              <div className={`${IndexListStyle.tit}`}>{item.activeType}</div>
            </div>

            <div className={IndexListStyle.flex_content}>
              <div className={IndexListStyle.flex_1}>
                <div className={IndexListStyle.title}>{item.title}</div>
                <div className={IndexListStyle.contents}>
                  {item.content}
                </div>
                <div className={IndexListStyle.show_num}>
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

export default IndexList;
