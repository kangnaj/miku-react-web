import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { setHeadTitle } from '../../redux/actions';
const { Header: AntHeader } = Layout;

type LeftNavProps = typeof RouteComponentProps & typeof dispatchProps

class Header extends Component {
  constructor(props: LeftNavProps) {
    super(props)

  }
  render() {
    return (<AntHeader className="site-layout-background" style={{ padding: 0 }} />)
  }
}
const dispatchProps = { setHeadTitle };

export default Header;
