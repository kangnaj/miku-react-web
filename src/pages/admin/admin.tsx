import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from "../home";
import SiderLeft from 'Components/layout/SiderLeft'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function Admin() {
  const [collapsed, setCollapse ] = React.useState(false);
  const onCollapse = (state: boolean) => {
    setCollapse(state)
  }
  return (
    <Layout style={{ minHeight: '100% ' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <SiderLeft></SiderLeft>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
              <Redirect exact={true} from="/" to="/home"></Redirect>
              <Route path="/home" component={Home}></Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  )
}
export default Admin;
