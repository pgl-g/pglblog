import React, { memo } from 'react';
import { Tooltip } from 'antd';

import StyleAvatar from '../../assets/css/components/avatarInfo.module.css';


const AvatarInfo = memo((props) => {

  const { userInfo } = props;

  return (
    <div className={StyleAvatar.avatarinfo}>
      
      <div className={StyleAvatar.avatar_userInfo}>
        <img src={userInfo?.avator} alt="" />
        <span className={StyleAvatar.userName}>{userInfo?.username}</span>

        <div className={StyleAvatar.avatar_description}>{userInfo?.feeling}</div>
      </div>

      <div className={StyleAvatar.avatarStatus}>
        <div className={StyleAvatar.avatarAccount}>
          <Tooltip placement="top" title="https://github.com/pgl-g">
            <i className={`iconfont ${StyleAvatar.avatarFlex}`}>&#xe63a;</i>
          </Tooltip>
          <Tooltip placement="top" title="diudiudiuxxx">
            <i className={`iconfont ${StyleAvatar.avatarFlex}`}>&#xe600;</i>
          </Tooltip>
          <Tooltip placement="top" title="1801688332">
            <i className={`iconfont ${StyleAvatar.avatarFlex}`}>&#xe882;</i>
          </Tooltip>
        </div>
      </div>

    </div>  
  )
})

export default AvatarInfo;
