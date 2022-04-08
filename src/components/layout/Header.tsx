import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { setHeadTitle, addTag, delTag } from '../../redux/actions';
import { RootState } from 'typesafe-actions';
import { connect } from 'react-redux';
const { Header: AntHeader } = Layout;
import stort from 'Src/redux/store'
type LeftNavProps = typeof RouteComponentProps & typeof dispatchProps

class Header extends Component<LeftNavProps, {}> {
  constructor(props: LeftNavProps) {
    super(props)
    console.log(stort, 'stort')
  }
  componentDidMount() {
    this.props.addTag({name: '首页'})
    console.log(this.props.tagList, 'tagList')
  }
  render() {
    return (<AntHeader className="site-layout-background" style={{ padding: 0 }} />)
  }
}
const dispatchProps = { setHeadTitle, addTag, delTag };
const mapStateToProps = (state: RootState) => ({tagList:state.tagList})

export default connect(mapStateToProps, dispatchProps)(withRouter(Header));
