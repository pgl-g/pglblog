import React, { useEffect, useState, memo, useMemo } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import MenusStyles from '../../assets/css/components/menu.module.css';


// 下拉菜单
const Menus = memo((props) => {
  const router = props.router;

  const navsPath = useMemo(() => {
    return props && props.navs;
  }, [router.asPath])


  return (
    <ul className={MenusStyles.header_menu}>
      {
        navsPath.map(item => (
          <li key={item.type} className={`${router.asPath === item.link ? MenusStyles.active : MenusStyles.default} ${MenusStyles.menuItem}`}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))
      }
    </ul>
    )
})

export default withRouter(Menus);