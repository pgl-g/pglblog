import React, { memo } from 'react';
import { Tooltip } from 'antd';

import Style from './index.module.scss';


const AvatarInfo = memo((props) => {

  const { userInfo } = props;
  return (
    <div className={Style.avatarinfo}>
      
      <div className={Style.avatar_userInfo}>
        <img src={userInfo?.avator} alt="" />
        <span className={Style.userName}>{userInfo?.username}</span>

        <div className={Style.avatar_description}>{userInfo?.feeling}</div>
      </div>

      <div className={Style.avatarStatus}>
        <div className={Style.avatarAccount}>
          <Tooltip placement="top" title="https://github.com/pgl-g">
            <i className={`iconfont ${Style.avatarFlex}`}>&#xe63a;</i>
          </Tooltip>
          <Tooltip placement="top" title="diudiudiuxxx">
            <i className={`iconfont ${Style.avatarFlex}`}>&#xe600;</i>
          </Tooltip>
          <Tooltip placement="top" title="1801688332">
            <i className={`iconfont ${Style.avatarFlex}`}>&#xe882;</i>
          </Tooltip>
        </div>
      </div>

    </div>  
  )
})

export default AvatarInfo;
