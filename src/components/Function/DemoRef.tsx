import React, { useState, useEffect, useRef } from "react";
import { Button } from 'antd';
import RefChild from './RefChild'
interface IPropsText {
  value: string;
}
type IProps = Partial<IPropsText>;

function UseRef(props: IProps) {
  const ref1 = useRef<HTMLInputElement>();
  const ref2 = useRef<HTMLElement>();
  const [value, setValue] = useState<string>("default");

  useEffect(() => {
    console.log(ref2, 'ref');
  }, [ref2]);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const onNotice = () => {
    // @ts-ignore
    ref2.current.handleLog();
  };

  return (
    <div>
      <div className="porp-title">useRef使用</div>
      {/* @ts-ignore */}
      <input type="text" ref={ref1} value={value} onChange={onChange} />
      <div className="porp-title">子组件</div>
      {/* @ts-ignore */}
      <RefChild ref={ref2} value="子组件"></RefChild>
      <Button type="primary" onClick={onNotice}>
        点击操作子组件方法
      </Button>
    </div>
  );
}

export default UseRef;
