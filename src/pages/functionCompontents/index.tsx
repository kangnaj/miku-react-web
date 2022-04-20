import React, { useState, useEffect, useCallback } from "react";
import { Alert, Button } from 'antd';
import DemoProps from '../../components/Function/DemoProps'
import DemoCallback from '../../components/Function/DemoCallback'
import { DemoPropsType } from '../../components/Function/DemoPropsType'
import ContextDemo from '../../components/Function/DemoContext'
import DemoReducer from '../../components/Function/DemoReducer'
import DemoRouter from '../../components/Function/DemoRouter'
import './index.scss'
function FCompontens() {
  const mPorp: DemoPropsType = {
    'farirytail': '妖精的尾巴',
    'onepiece': '海贼王'
  }
  const [count, setCount] = useState(0);
  useEffect(() => {
    const titleCache = document.title;
    document.title = `You clicked ${count} times`;

    return () => {
      document.title = titleCache;
    };
  }, [count]);
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
      <Alert
        message="useContext"
        className="mt10"
        description="useContext 共享状态, 创建一个包含一些状态的父级，子级都可以共享这个状态"
      ></Alert>
      <ContextDemo/>
      <Alert
        className="mt10"
        message="useEffect"
        description="useEffect,副作用,最常见的就是向服务器请求数据。
      以前，放在componentDidMount里面的代码，现在可以放在useEffect(() => { return func },[dep])。
      第二个参数如果不传，每次组件渲染都会执行,第一个函数内return一个函数，相当于componentWillUnmount"
      ></Alert>
      <p className="porp-title">You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        点击测试useEffect
      </Button>
      <Alert
        className="mt10"
        message="useReducer"
        description="useReducer 状态管理, const [state, dispatch] = useReducer(reducer, initialState);"
      ></Alert>
      <DemoReducer />
      <Alert
        className="mt10"
        message="useHistory"
        description="路由的一些操作"
      ></Alert>
      <DemoRouter/>
      <Alert
        className="mt10"
        message="useRef"
        description="用习惯了vue的ref，react中的ref稍有不同"
      ></Alert>
    </div>
  )
}

export default FCompontens;
