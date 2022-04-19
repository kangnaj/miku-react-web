import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Button, message, Tag, Radio, RadioChangeEvent } from 'antd';
import { DemoCallbackType } from './DemoPropsType'

function Child(props: DemoCallbackType) {
  const [list, setList] = useState<number[]>([])
  useEffect(() => {
    setList(props.onClick())
    message.info('子组件渲染')
  }, [props.onClick]);

  return (
    <div>
      {list.flatMap((item, index) => {
        return (
          <div key={index}>
            <Tag>列表：{item}</Tag>;
          </div>
        );
      })}
    </div>
  );
}
function CallbackDemoAdd() {
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [isUseCallback, setIsUse] = useState<boolean>(false);
  const show = () => {
    return [count, count + 1, count + 2];
  };
  const showUse = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]);

  const onChange = (e: RadioChangeEvent) => { setIsUse(e.target.value) }

  return (
    <div>
      <div className="porp-title">
        点击两个按钮，都会触发子组件的重新渲染，但是child组件只依赖于count，也就是只有count变化的时候才去重新渲染。
      </div>
      <div>
        <Radio.Group onChange={onChange} value={isUseCallback}>
          <Radio value={false}>不使用</Radio>
          <Radio value={true}>使用useCallback</Radio>
        </Radio.Group>
      </div>
      <Button type="primary" onClick={() => { setCount(count + 1) }} >
       点击count+1 {count}
      </Button>
      <Button type="primary" onClick={() => { setValue(value + 1) }} >
        点击value+1 {value}
      </Button>
      <Child onClick={isUseCallback ? showUse : show}></Child>
    </div>
  );
}

export default CallbackDemoAdd;
