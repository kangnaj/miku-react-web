import React, { useState, useEffect } from "react";
import { Alert, Button, Modal, Space } from 'antd';
import { TextLoop } from 'react-text-loop-next';
import {PlusOutlined} from '@ant-design/icons';
import { task, footerType } from './taskType'
const Footer:React.FC<footerType> = (props: footerType) => {
  return (<>
    <Button key="back" onClick={()=>props.onCancel()}>Return</Button>
    <Button key="submit" type="primary" onClick={()=>props.onOk()}> Submit </Button>
  </>)
}
// function Footer (props: footerType) {
//   return (<>
//     <Button key="back" onClick={()=>props.onCancel}>Return</Button>
//     <Button key="submit" type="primary" onClick={()=>props.onOk}> Submit </Button>
//   </>)
// }

function Todo() {
  const taskList: task[] = [
    {num: 'first', content: '学习redux'}
  ]
  const [visible, setVisible] = useState(false);
  const getDetail = () => {
    setVisible(true)
  }
  const getTask = (taskList: task[]): JSX.Element[] => {
    return taskList.map(x => <div key={x.num}>{x.content}</div>)
  }
  useEffect(() => {})
  return (
    <div>
      <Alert
        type="success"
        showIcon
        message={
          <TextLoop mask>
            {getTask(taskList)}
          </TextLoop>
        }
        action={
          <Space>
            <Button size="small" type="primary" shape="round" title="新增" icon={<PlusOutlined />}></Button>
            <Button size="small" type="primary" onClick={ getDetail }>详情</Button>
          </Space>
      }
      />
      <Modal title="详情" centered visible={visible}  width={1000} footer={<Footer onCancel={()=>setVisible(false)} onOk={()=>setVisible(false)} />}>
        <p>some contents...</p>
      </Modal>
    </div>
  );
}

export default Todo;
