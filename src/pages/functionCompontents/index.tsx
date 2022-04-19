import React, { useState, useEffect, useCallback } from "react";
import { Alert, Button, Modal, Space,Form, Input, Checkbox, Card } from 'antd';
import DemoProps from '../../components/Function/DemoProps'
import DemoCallback from '../../components/Function/DemoCallback'
import { DemoPropsType } from '../../components/Function/DemoPropsType'
import './index.scss'
function FCompontens() {
  const mPorp: DemoPropsType = {
    'farirytail': '妖精的尾巴',
    'onepiece': '海贼王'
  }
  return (
    <div>
      <Alert
        type="info"
        showIcon
        description="定义组件最简单的方式，该函数接收唯一带有数据的“props”对象并返回一个React元素，这类组件被称为“函数组件”"
      ></Alert>
      <div className="porp-title">我将 props: {`{farirytail: ${mPorp['farirytail']}, onepiece: ${mPorp['onepiece']}}`} 传给DemoProps组件</div>
      <DemoProps {...mPorp}/>
      <Alert
        className="mt10"
        message="useCallback/useMemo"
        description="useCallback主要用于函数的缓存，依赖项不变返回的函数的引用地址不变，uesMemo是针对值的缓存。都是为了避免组件的重复渲染"
      ></Alert>
      <DemoCallback />
    </div>
  )
}

export default FCompontens;
