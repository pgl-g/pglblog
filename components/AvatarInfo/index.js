import React, { memo } from 'react';
import { GithubFilled, WechatFilled, QqOutlined } from '@ant-design/icons';
import StyleAvatar from '../../assets/css/components/avatarInfo.module.css';


const AvatarInfo = memo(() => {
  return (
    <div className={StyleAvatar.avatarinfo}>
      
      <div className={StyleAvatar.avatar_userInfo}>
        <img src="https://images.wosaimg.com/e0/de8374888df2087861989b02571e0fd8f4258c.jpeg" alt="" />
        <span className={StyleAvatar.userName}>对对对你说的都对</span>

        <div className={StyleAvatar.avatar_description}>这是我的个人博客，记录了一些研发过程中遇到的坑。</div>
      </div>

      <div className={StyleAvatar.avatarStatus}>
        <div className={StyleAvatar.avatarAccount}>
            <GithubFilled className={StyleAvatar.avatarFlex} />
            <WechatFilled className={StyleAvatar.avatarFlex} />
            <QqOutlined className={StyleAvatar.avatarFlex} />
        </div>
      </div>

    </div>  
  )
})

export default AvatarInfo;
