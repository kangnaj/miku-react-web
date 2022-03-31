import React from "react";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import './SiderLeft.scss';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
type LeftNavProps = typeof RouteComponentProps

function SiderLeft() {
  return (
    <div className="left-nav">
      <Link to="/" className="left-nav-header">
	  		<h1>泡泡茶壶</h1>
	  	</Link>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default SiderLeft
