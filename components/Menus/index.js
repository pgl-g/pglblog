import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { Menu } from 'antd';

import MenusStyles from '../../assets/css/components/menu.module.css';


// 下拉菜单
const Menus = (props) => {

  const navs = props.navs;

  const router = props.router;

  const [currentNav, setCurrentNav] = useState(navs[0] ? navs[0].type : '');

  // 每次进入的时候都会重新render组件，所以可以在生命周期中实现
  useEffect(() => {
    for (const nav of navs) {
      if (router.asPath === nav.link) {
        setCurrentNav(nav.type);
        break;
      }
    }
  }, [])

  return (
    <Menu className={MenusStyles.menuContainer} mode="horizontal" defaultSelectedKeys={[currentNav]} selectedKeys={[currentNav]}>
      {
        navs.map(item => (
          <Menu.Item className={MenusStyles.menuItem} key={item.type}>
            <Link href={item.link}>
              <a>
                {item.name}
              </a>
            </Link>
          </Menu.Item>
        ))
      }
    </Menu>
  )
}

export default withRouter(Menus);