import React, { useState, useEffect, useCallback } from "react";
import { Alert, Button, Modal, Space,Form, Input, Checkbox, Card } from 'antd';
import { TextLoop } from 'react-text-loop-next';
import {PlusOutlined} from '@ant-design/icons';
import { task, footerType, taskType, taskprops } from './taskType'
import './todo.scss'
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

const AddTask: React.FC<taskType> = (props: taskType): JSX.Element => {
  const [form] = Form.useForm();
  const [taskForm, setTaskForm] = useState<task> ({num: '', content: ''})
  useEffect(() => {
    if(props.visible) {
      setTaskForm(() => {
        taskForm.num = ""
        taskForm.content = ""
        return {...taskForm}
      })
    }
  }, [props.visible])
  const onOk = async () => {
    try {
      const values = await form.validateFields();
      setTaskForm(() => {
        taskForm.num = values.num
        taskForm.content = values.content
        return {...taskForm}
      })
      props.onOk(taskForm)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  return (<Modal title="详情" centered visible={props.visible} onCancel={()=>props.onCancel()} width={500} footer={<Footer onCancel={()=>props.onCancel()} onOk={()=>onOk()} />}>
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="任务编号"
        name="num"
        rules={[{ required: true, message: '请输入任务编号！' }]}
      >
        <Input value={taskForm.num}/>
      </Form.Item>

      <Form.Item
        label="内容"
        name="content"
        rules={[{ required: true, message: '输入任务内容！' }]}
      >
        <Input value={taskForm.content}/>
      </Form.Item>
    </Form>
  </Modal>)
}

function Message(taskList: task[],TextNode: JSX.Element,): JSX.Element {
  const content = taskList.map(x => <div key={x.num}>{x.content}</div>)
  TextNode.props.children = content
  return <TextLoop mask>
  { taskList.map(x => <div key={x.num}>{x.content}</div>) }
</TextLoop>
}

function Todo() {
  const [taskList, setTaskList] = useState<task[]>([
    {num: 'first', content: '学习redux'}
  ])
  const initialMsg = (<TextLoop mask>
    { taskList.map(x => <div key={x.num}>{x.content}</div>) }
  </TextLoop>)
  const [message, setMessage] = useState<JSX.Element>(initialMsg)
  const [visible, setVisible] = useState<boolean>(false);
  const [addTaskVisible, setAddTaskVisible] = useState<boolean>(false);
  const getDetail = () => {
    setVisible(true)
  }
  const addTask = () => {
    setAddTaskVisible(true)
  }
  const handlerAddTask = (item: task) => {
    setTaskList(()=> {
      taskList.push(item)
      return [...taskList]
    })
    setMessage(() => {
      const content = taskList.map(x => <div key={x.num}>{x.content}</div>)
      message.props.children = content
      return (<TextLoop mask>
        { taskList.map(x => <div key={x.num}>{x.content}</div>) }
      </TextLoop>)
    })
    setAddTaskVisible(false)
  }
  useEffect(() => {})
  return (
    <div>
      <Alert
        type="success"
        showIcon
        description={<TextLoop children={taskList.map(x => <div key={x.num}>{x.content}</div>)} /> }
        action={
          <Space>
            <Button size="small" type="primary" shape="round" title="新增" icon={<PlusOutlined />} onClick={ addTask } ></Button>
            <Button size="small" type="primary" onClick={ getDetail }>详情</Button>
          </Space>
      }
      />
      <div className="todo-card-box">
        { taskList.map(x => <Card title={x.num} key={x.num}>{x.content}</Card>) }
      </div>
      <Modal title="详情" centered visible={visible} onCancel={()=>setVisible(false)}  width={1000} footer={<Footer onCancel={()=>setVisible(false)} onOk={()=>setVisible(false)} />}>
        { initialMsg }
      </Modal>
      <AddTask visible={ addTaskVisible } onCancel={() => setAddTaskVisible(false) } onOk={ (item: task) => handlerAddTask(item) }/>
    </div>
  );
}

export default Todo;
