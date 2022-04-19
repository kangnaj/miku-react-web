import React, { useState, useEffect, useCallback } from "react";
import { Result, Button, Modal, Space,Form, Input, Checkbox, Card } from 'antd';
import { DemoPropsType } from './DemoPropsType'
function DemoProps(props: DemoPropsType) {
  return (
    <div className="prps-box">
      <Result
        status="success"
        title="我是DemoProps组件"
        subTitle={`我将 接受 props: {farirytail: ${props['farirytail']}, onepiece: ${props['onepiece']} `}
      />
    </div>
  )
}

export default DemoProps;
