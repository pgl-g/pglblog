import React, { memo, useMemo } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Style from './index.module.scss';


// 下拉菜单
const Menus = memo((props) => {
  const router = props.router;

  const navsPath = useMemo(() => {
    return props && props.navs;
  }, [router.asPath])


  return (
    <ul className={Style.header_menu}>
      {
        navsPath.map(item => (
          <li key={item.type} className={`${router.asPath === item.link ? Style.active : Style.default} ${Style.menuItem}`}>
            <Link href={item.link}>
              <a>
                {item.name}
              </a>
            </Link>
          </li>
        ))
      }
    </ul>
    )
})

export default withRouter(Menus);