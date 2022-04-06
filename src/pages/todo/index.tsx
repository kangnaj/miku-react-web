import React, { useState } from "react";
import { Alert, Button, Modal} from 'antd';
import { TextLoop } from 'react-text-loop-next';
function Todo() {
  const [visible, setVisible] = useState(false);
  const getDetail = () => {
    setVisible(true)
  }
  return (
    <div>
      <Alert
        type="success"
        showIcon
        message={
          <TextLoop mask>
            <div>Notice message one</div>
            <div>Notice message two</div>
          </TextLoop>
        }
        action={
          <Button size="small" type="primary" onClick={getDetail}>
            详情
          </Button>
        }
      />
      <Modal
        title="详情"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
}

export default Todo;
