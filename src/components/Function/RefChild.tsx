import React, { useState, useEffect, useRef } from "react";
import { Button, message } from 'antd';
interface IProps {
    value: string
}
class Child extends React.Component<IProps,any>{
  handleLog = () => {
    message.info("点击了子组件");
  };
  render() {
    return <Button type="text" onClick={this.handleLog}>点击按钮:{this.props.value} </Button >;
  }
}
export default Child;
