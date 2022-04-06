import React from "react";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import './SiderLeft.scss';
import * as Icon from '@ant-design/icons';
import { menuList, MenuConfig } from 'Src/typings/menuList'
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import { setHeadTitle } from 'Src/redux/actions';
import {  useDispatch } from 'react-redux';
const { SubMenu } = Menu;
type LeftNavProps = typeof RouteComponentProps

function GetMenuNodes(menuList: MenuConfig[]): JSX.Element[] | null {
  const dispatch = useDispatch();
  const path = useLocation();
  return menuList.reduce((pre: JSX.Element[], item: MenuConfig): JSX.Element[] => {
      if (!item.children) {
        if (item.key === path.pathname || path.pathname.indexOf(item.key) === 0) {
          dispatch(setHeadTitle)
        }
        pre.push(
          <Menu.Item key={item.key} icon={React.createElement(Icon[item.icon])}>
            <Link to={item.key} onClick={() => dispatch(setHeadTitle)}>
              {item.title}
            </Link>
          </Menu.Item>
        );
      } else {
        pre.push(
          <SubMenu key={item.key} title={item.title} icon={React.createElement(Icon[item.icon])}>
            { GetMenuNodes(item.children) }
          </SubMenu>
        );
      }
    return pre;
  }, []);
}

function SiderLeft() {
  const path = useLocation()
  return (
    <div className="left-nav">
      <Link to="/" className="left-nav-header">
	  		<h1>泡泡茶壶</h1>
	  	</Link>
      <Menu theme="dark" mode="inline" selectedKeys={[path.pathname]} defaultSelectedKeys={['1']}>
        { GetMenuNodes(menuList) }
      </Menu>
    </div>
  )
}
export default SiderLeft
