import React from "react";
import { Redirect, Route, Switch, RouteComponentProps } from "react-router-dom";
import { Layout, Breadcrumb } from 'antd';
import Home from "../home";
import Todo from "../todo";
import SiderLeft from 'Components/layout/SiderLeft'
import Header from 'Components/layout/Header'
import {  useDispatch, useSelector } from 'react-redux';
import { addTag } from 'Src/redux/actions';
import { RootState } from 'typesafe-actions';
const { Content, Footer, Sider } = Layout;
function Admin(props: typeof RouteComponentProps) {
  const [collapsed, setCollapse ] = React.useState(false);
  const dispatch = useDispatch();
  const tagList = useSelector((state: RootState) => state.tagList);
  // console.log(dispatch(addTag({name: '首页'})), 'dispatch78798789');
  // console.log(tagList, 'state4654564');
  const onCollapse = (state: boolean) => {
    setCollapse(state)
  }
  return (
    <Layout style={{ minHeight: '100% ' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <SiderLeft></SiderLeft>
        </Sider>
        <Layout className="site-layout">
          <Header/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
              <Redirect exact={true} from="/" to="/home"></Redirect>
              <Route path="/home" component={Home}></Route>
              <Route path="/todo" component={Todo}></Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  )
}
export default Admin;
